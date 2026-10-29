import type { Messages } from './en'

const fi: Messages = {
  // Navigation
  Today: 'Tänään',
  Month: 'Kuukausi',
  Week: 'Viikko',
  Day: 'Päivä',

  // Sidebar
  Calendars: 'Kalenterit',
  'Create new calendar': 'Luo uusi kalenteri',
  'Loading calendars...': 'Ladataan kalentereita...',
  'No calendars found': 'Kalentereita ei löytynyt',
  'Delete calendar': 'Poista kalenteri',
  'Share calendar': 'Jaa kalenteri',
  'Pending Invitations': 'Odottavat kutsut',
  'From:': 'Lähettäjä:',
  Accept: 'Hyväksy',
  Decline: 'Hylkää',

  // Event Dialog
  'Edit Event': 'Muokkaa tapahtumaa',
  'New Event': 'Uusi tapahtuma',
  Title: 'Otsikko',
  Calendar: 'Kalenteri',
  'All day event': 'Koko päivän',
  'Start Date': 'Alkamispäivä',
  'Start Time': 'Alkamisaika',
  'End Date': 'Päättymispäivä',
  'End Time': 'Päättymisaika',
  Location: 'Sijainti',
  Description: 'Kuvaus',
  'Event title': 'Tapahtuman otsikko',
  'Add location': 'Lisää sijainti',
  'Add description': 'Lisää kuvaus',
  Delete: 'Poista',
  Cancel: 'Peruuta',
  'Saving...': 'Tallennetaan...',
  Save: 'Tallenna',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Toinen sovellus on muokannut tätä tapahtumaa. Valitse, miten ristiriita ratkaistaan:',
  'Keep my changes': 'Säilytä omat muutokseni',
  'Use server version': 'Käytä palvelimen versiota',

  // Calendar Dialog
  'New Calendar': 'Uusi kalenteri',
  'Calendar Name': 'Kalenterin nimi',
  'Description (optional)': 'Kuvaus (valinnainen)',
  Color: 'Väri',
  'Calendar description': 'Kalenterin kuvaus',
  'My Calendar': 'Oma kalenteri',
  'Creating...': 'Luodaan...',
  Create: 'Luo',

  // Recurrence
  'Edit Recurring Event': 'Muokkaa toistuvaa tapahtumaa',
  'This is a recurring event. What would you like to edit?':
    'Tämä on toistuva tapahtuma. Mitä haluat muokata?',
  'This event only': 'Vain tätä tapahtumaa',
  'All events in series': 'Kaikkia sarjan tapahtumia',
  'this occurrence': 'tämä esiintymä',
  'entire series': 'koko sarja',
  Repeat: 'Toista',
  Every: 'Joka',
  'day(s)': 'päivä',
  'week(s)': 'viikko',
  'month(s)': 'kuukausi',
  'year(s)': 'vuosi',
  Mon: 'ma',
  Tue: 'ti',
  Wed: 'ke',
  Thu: 'to',
  Fri: 'pe',
  Sat: 'la',
  Sun: 'su',
  Ends: 'Päättyy',
  Never: 'Ei koskaan',
  After: 'Kun toistoja on',
  occurrences: 'kertaa',
  On: 'Päivänä',
  'Delete this event': 'Poista tämä tapahtuma',
  'Export .ics': 'Vie .ics-tiedostona',
  'Download this occurrence as .ics': 'Lataa tämä esiintymä .ics-tiedostona',
  'Download as .ics': 'Lataa .ics-tiedostona',

  // ICS Import
  'Import Calendar': 'Tuo kalenteri',
  'Import calendar': 'Tuo kalenteri',
  'ICS File': 'ICS-tiedosto',
  'Import mode': 'Tuontitapa',
  'Merge into existing calendar': 'Yhdistä olemassa olevaan kalenteriin',
  'Target calendar': 'Kohdekalenteri',
  'Select calendar': 'Valitse kalenteri',
  'Enter calendar name': 'Anna kalenterin nimi',
  Import: 'Tuo',
  Close: 'Sulje',
  'Reading file...': 'Luetaan tiedostoa...',
  'Parsing events...': 'Käsitellään tapahtumia...',
  'Analyzing for duplicates...': 'Etsitään kaksoiskappaleita...',
  'Importing events...': 'Tuodaan tapahtumia...',
  Created: 'Luotu',
  Updated: 'Päivitetty',
  Skipped: 'Ohitettu',
  Failed: 'Epäonnistui',
  'Imported %{count} events into "%{name}"': '%{count} tapahtumaa tuotiin kalenteriin "%{name}"',
  'Parse warnings': 'Lukuvaroitukset',
  'Show details': 'Näytä tiedot',
  'Hide details': 'Piilota tiedot',

  // Sharing
  'Share calendar: %{name}': 'Jaa kalenteri: %{name}',
  'Share with users': 'Jaa käyttäjille',
  'User ID or Email': 'Käyttäjätunnus tai sähköposti',
  Read: 'Luku',
  'Read & Write': 'Luku ja kirjoitus',
  Invite: 'Kutsu',
  'Read only': 'Vain luku',
  'Public links': 'Julkiset linkit ja kutsulinkit',
  'Invite & Public links': 'Julkiset linkit ja kutsulinkit',
  'Create link': 'Luo linkki',
  'Create invite link': 'Luo kutsulinkki',
  'Read only link': 'Vain luku -linkki',
  'Read & Write link': 'Luku- ja kirjoituslinkki',
  'Web Invite Link': 'Verkkokutsulinkki',
  'CalDAV Link': 'CalDAV-linkki',
  'Copy Web Invite': 'Kopioi verkkokutsu',
  'Copy CalDAV URL': 'Kopioi CalDAV-osoite',
  'Copied!': 'Kopioitu!',
  Copy: 'Kopioi',
  'No public links created yet': 'Julkisia linkkejä ei ole vielä luotu',
  'Revoke link': 'Peruuta linkki',
  'Shared via link': 'Jaettu linkillä',
  'Join Shared Calendar': 'Liity jaettuun kalenteriin',
  'You have been invited to join the calendar "%{name}".':
    'Sinut on kutsuttu liittymään kalenteriin "%{name}".',
  'Permission: %{perm}': 'Oikeus: %{perm}',
  'Join Calendar': 'Liity kalenteriin',
  'You are already subscribed to this calendar.': 'Olet jo tilannut tämän kalenterin.',
  'Joined calendar successfully': 'Liityit kalenteriin',
  'Leave calendar': 'Poistu kalenterista',

  // Confirm Dialog
  Confirm: 'Vahvista',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Poista kalenteri',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    "Haluatko varmasti poistaa kalenterin '%{name}'? Kaikki sen tapahtumat poistetaan pysyvästi.",

  // Shared calendars
  Refresh: 'Päivitä',
  'Toggle sidebar': 'Näytä tai piilota sivupalkki',
  'Shared by:': 'Jakaja:',
  'Shared Calendar': 'Jaettu kalenteri',
  Accepted: 'Hyväksytty',
  Invited: 'Kutsuttu',
  Left: 'Poistunut',
  'Remove share': 'Poista jako',
  Leave: 'Poistu',
  'Leave Calendar': 'Poistu kalenterista',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Haluatko varmasti poistua kalenterista '%{name}'? Sinulla ei ole enää pääsyä siihen."
}

export default fi
