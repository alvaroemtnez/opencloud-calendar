import { describe, it, expect } from 'vitest'
import { parseCalendars } from '../../src/caldav/xml-parser'

function collection(href: string, components?: string[]): string {
  const componentSet = components
    ? `<C:supported-calendar-component-set>${components
        .map((name) => `<C:comp name="${name}"/>`)
        .join('')}</C:supported-calendar-component-set>`
    : ''
  return `<response>
    <href>${href}</href>
    <propstat>
      <prop>
        <displayname>${href}</displayname>
        <resourcetype><collection/><C:calendar/></resourcetype>
        ${componentSet}
      </prop>
      <status>HTTP/1.1 200 OK</status>
    </propstat>
  </response>`
}

function multistatus(...responses: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<multistatus xmlns="DAV:" xmlns:C="urn:ietf:params:xml:ns:caldav">
  ${responses.join('\n')}
</multistatus>`
}

describe('parseCalendars', () => {
  it('keeps only collections that support events', () => {
    const xml = multistatus(
      collection('/events/', ['VEVENT']),
      collection('/mixed/', ['VEVENT', 'VTODO']),
      collection('/tasks/', ['VTODO']),
      collection('/journal/', ['VJOURNAL']),
      collection('/unspecified/')
    )

    expect(parseCalendars(xml).map((c) => c.href)).toEqual(['/events/', '/mixed/', '/unspecified/'])
  })

  it('ignores the component set when the server does not report it', () => {
    const xml = multistatus(`<response>
      <href>/cal/</href>
      <propstat>
        <prop><resourcetype><collection/><C:calendar/></resourcetype></prop>
        <status>HTTP/1.1 200 OK</status>
      </propstat>
      <propstat>
        <prop><C:supported-calendar-component-set/></prop>
        <status>HTTP/1.1 404 Not Found</status>
      </propstat>
    </response>`)

    expect(parseCalendars(xml).map((c) => c.href)).toEqual(['/cal/'])
  })
})
