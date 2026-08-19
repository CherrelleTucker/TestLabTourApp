/*
  Curated tours -- named sets of stops in a fixed walking order.
  Edit this file directly to add, remove, or reorder a tour.
  `stopIds` is each tour's own walking order, independent of the master
  order in data/stops.js -- js/render.js reorders the directory list to
  match whichever tour is active. A stopId with no matching entry in
  window.STOPS is silently skipped when the tour renders.
*/
window.TOURS = [
  {
    id: 'history',
    label: 'History Walk',
    description: 'Historic facilities that shaped space exploration',
    stopIds: ['stop10', 'stop4', 'stop9', 'stop6', 'stop7', 'stop5']
  },
  {
    id: 'active-stands',
    label: 'Active Test Stands',
    description: 'Currently operational test facilities',
    stopIds: ['stop2', 'stop11', 'stop13', 'stop8']
  },
  {
    id: 'quick-look',
    label: 'Quick Look',
    description: '4 highlights in ~45 minutes',
    stopIds: ['stop', 'stop4', 'stop9', 'stop12']
  }
];
