import type { Messages } from './en'

const fr: Messages = {
  // Navigation
  Today: "Aujourd'hui",
  Month: 'Mois',
  Week: 'Semaine',
  Day: 'Jour',

  // Sidebar
  Calendars: 'Calendriers',
  'Create new calendar': 'Créer un nouveau calendrier',
  'Loading calendars...': 'Chargement des calendriers...',
  'No calendars found': 'Aucun calendrier trouvé',
  'Delete calendar': 'Supprimer le calendrier',
  'Share calendar': 'Partager le calendrier',
  'Pending Invitations': 'Invitations en attente',
  'From:': 'De :',
  Accept: 'Accepter',
  Decline: 'Refuser',

  // Event Dialog
  'Edit Event': "Modifier l'événement",
  'New Event': 'Nouvel événement',
  Title: 'Titre',
  Calendar: 'Calendrier',
  'All day event': 'Toute la journée',
  'Start Date': 'Date de début',
  'Start Time': 'Heure de début',
  'End Date': 'Date de fin',
  'End Time': 'Heure de fin',
  Location: 'Lieu',
  Description: 'Description',
  'Event title': "Titre de l'événement",
  'Add location': 'Ajouter un lieu',
  'Add description': 'Ajouter une description',
  Delete: 'Supprimer',
  Cancel: 'Annuler',
  'Saving...': 'Enregistrement...',
  Save: 'Enregistrer',

  // Conflict Resolution
  'This event was modified by another client. Choose how to resolve:':
    'Cet événement a été modifié par un autre client. Choisissez comment résoudre le conflit :',
  'Keep my changes': 'Conserver mes modifications',
  'Use server version': 'Utiliser la version du serveur',

  // Calendar Dialog
  'New Calendar': 'Nouveau calendrier',
  'Calendar Name': 'Nom du calendrier',
  'Description (optional)': 'Description (facultatif)',
  Color: 'Couleur',
  'Calendar description': 'Description du calendrier',
  'My Calendar': 'Mon calendrier',
  'Creating...': 'Création...',
  Create: 'Créer',

  // Recurrence
  'Edit Recurring Event': "Modifier l'événement récurrent",
  'This is a recurring event. What would you like to edit?':
    "Il s'agit d'un événement récurrent. Que voulez-vous modifier ?",
  'This event only': 'Cet événement uniquement',
  'All events in series': 'Tous les événements de la série',
  'this occurrence': 'cette occurrence',
  'entire series': 'toute la série',
  Repeat: 'Répéter',
  Every: 'Tous les',
  'day(s)': 'jour(s)',
  'week(s)': 'semaine(s)',
  'month(s)': 'mois',
  'year(s)': 'an(s)',
  Mon: 'lun.',
  Tue: 'mar.',
  Wed: 'mer.',
  Thu: 'jeu.',
  Fri: 'ven.',
  Sat: 'sam.',
  Sun: 'dim.',
  Ends: 'Fin',
  Never: 'Jamais',
  After: 'Après',
  occurrences: 'occurrences',
  On: 'Le',
  'Delete this event': 'Supprimer cet événement',
  'Export .ics': 'Exporter en .ics',
  'Download this occurrence as .ics': 'Télécharger cette occurrence en .ics',
  'Download as .ics': 'Télécharger en .ics',

  // ICS Import
  'Import Calendar': 'Importer un calendrier',
  'Import calendar': 'Importer un calendrier',
  'ICS File': 'Fichier ICS',
  'Import mode': "Mode d'importation",
  'Merge into existing calendar': 'Fusionner avec un calendrier existant',
  'Target calendar': 'Calendrier de destination',
  'Select calendar': 'Sélectionner un calendrier',
  'Enter calendar name': 'Saisissez le nom du calendrier',
  Import: 'Importer',
  Close: 'Fermer',
  'Reading file...': 'Lecture du fichier...',
  'Parsing events...': 'Analyse des événements...',
  'Analyzing for duplicates...': 'Recherche des doublons...',
  'Importing events...': 'Importation des événements...',
  Created: 'Créés',
  Updated: 'Mis à jour',
  Skipped: 'Ignorés',
  Failed: 'Échecs',
  'Imported %{count} events into "%{name}"': '%{count} événements importés dans « %{name} »',
  'Parse warnings': 'Avertissements de lecture',
  'Show details': 'Afficher les détails',
  'Hide details': 'Masquer les détails',

  // Sharing
  'Share calendar: %{name}': 'Partager le calendrier : %{name}',
  'Share with users': 'Partager avec des utilisateurs',
  'User ID or Email': "Identifiant ou e-mail de l'utilisateur",
  Read: 'Lecture',
  'Read & Write': 'Lecture et écriture',
  Invite: 'Inviter',
  'Read only': 'Lecture seule',
  'Public links': "Liens publics et d'invitation",
  'Invite & Public links': "Liens publics et d'invitation",
  'Create link': 'Créer un lien',
  'Create invite link': "Créer un lien d'invitation",
  'Read only link': 'Lien en lecture seule',
  'Read & Write link': 'Lien en lecture et écriture',
  'Web Invite Link': "Lien d'invitation web",
  'CalDAV Link': 'Lien CalDAV',
  'Copy Web Invite': "Copier l'invitation web",
  'Copy CalDAV URL': "Copier l'URL CalDAV",
  'Copied!': 'Copié !',
  Copy: 'Copier',
  'No public links created yet': "Aucun lien public créé pour l'instant",
  'Revoke link': 'Révoquer le lien',
  'Shared via link': 'Partagé par lien',
  'Join Shared Calendar': 'Rejoindre le calendrier partagé',
  'You have been invited to join the calendar "%{name}".':
    'Vous avez été invité à rejoindre le calendrier « %{name} ».',
  'Permission: %{perm}': 'Autorisation : %{perm}',
  'Join Calendar': 'Rejoindre le calendrier',
  'You are already subscribed to this calendar.': 'Vous êtes déjà abonné à ce calendrier.',
  'Joined calendar successfully': 'Calendrier rejoint',
  'Leave calendar': 'Quitter le calendrier',

  // Confirm Dialog
  Confirm: 'Confirmer',

  // Delete Calendar Confirmation
  'Delete Calendar': 'Supprimer le calendrier',
  "Are you sure you want to delete '%{name}'? All events in this calendar will be permanently deleted.":
    'Voulez-vous vraiment supprimer « %{name} » ? Tous les événements de ce calendrier seront définitivement supprimés.',

  // Shared calendars
  Refresh: 'Actualiser',
  'Toggle sidebar': 'Afficher ou masquer la barre latérale',
  'Shared by:': 'Partagé par :',
  'Shared Calendar': 'Calendrier partagé',
  Accepted: 'Acceptée',
  Invited: 'Invité',
  Left: 'Parti',
  'Remove share': 'Retirer le partage',
  Leave: 'Quitter',
  'Leave Calendar': 'Quitter le calendrier',
  "Are you sure you want to leave '%{name}'? You will no longer have access to this calendar.":
    "Voulez-vous vraiment quitter « %{name} » ? Vous n'aurez plus accès à ce calendrier."
}

export default fr
