const rowData = [
  {
    id: 1,
    name: 'Pigeon',
    occupation: 'Bus Driver',
    hobby: 'Bathing',
    ambition: 'F.I.R.E',
    friends: -1,
    introverted: false,
    favorite_movie: 'Taxi Driver',
    favorite_animal: 'Jabiru stork',
    bitcoin_address: '12ghs1Phq8Vu3tY4XjWAHjZuxX5SoDUGYN',
    favorite_buzzword: 'Down-sized',
    startup_idea: 'Jayo',
    hidden_secret: '670b963e7242b1427eff90b4fc8ce953791adef3'
  },
  {
    id: 2,
    name: 'Gerald',
    occupation: 'Therapist',
    hobby: 'Ice Cream',
    ambition: 'Enter Jet Set',
    friends: 9,
    introverted: true,
    favorite_movie: 'Meet The Parents',
    favorite_animal: 'Capuchin, white-fronted',
    bitcoin_address: '1D2WSDDLo9u6YFkwHsv4ZZ8r6vNvnyCAxg',
    favorite_buzzword: 'protocol',
    startup_idea: 'Feednation',
    hidden_secret: '670b963e7242b1427eff90b4fc8ce953791adef3'
  },
  {
    id: 3,
    name: 'Piggie',
    occupation: 'Surgeon',
    hobby: 'Friendship',
    ambition: 'Lunch',
    friends: 3,
    introverted: false,
    favorite_movie: 'Flipper',
    favorite_animal: 'Southern sea lion',
    bitcoin_address: '1BXNiaTQgg25FMzcMcLEXgeed4Eyd1aozP',
    favorite_buzzword: 'Robust',
    startup_idea: 'Jaxworks',
    hidden_secret: '670b963e7242b1427eff90b4fc8ce953791adef3'
  }
]

const colDefs = [
  { header: 'Id', field: 'id' },
  { header: 'Name', field: 'name' },
  { header: 'Occupation', field: 'occupation' },
  { header: 'Hobby', field: 'hobby' },
  { header: 'Ambition', field: 'ambition' },
  { header: 'Friends', field: 'friends' },
  { header: 'Introverted', field: 'introverted' },
  { header: 'Favorite Movie', field: 'favorite_movie' },
  { header: 'Favorite Animal', field: 'favorite_animal' },
  { header: 'Bitcoin Address', field: 'bitcoin_address' },
  { header: 'Favorite Buzzword', field: 'favorite_buzzword' },
  { header: 'Startup Idea', field: 'startup_idea' },
  { header: 'Hidden Secret', field: 'hidden_secret' }
]

const tableOptions = {}

export default { rowData, colDefs, tableOptions }
