const rowData = [
  {
    id: 1,
    name: 'Pigeon',
    occupation: 'Bus Driver',
    hobby: 'Bathing',
    ambition: 'F.I.R.E',
    friends: -1,
    introverted: false
  },
  {
    id: 2,
    name: 'Gerald',
    occupation: 'Therapist',
    hobby: 'Ice Cream',
    ambition: 'Enter Jet Set',
    friends: 9,
    introverted: true
  },
  {
    id: 3,
    name: 'Piggie',
    occupation: 'Surgeon',
    hobby: 'Friendship',
    ambition: 'Lunch',
    friends: 3,
    introverted: false
  }
]

const colDefs = [
  { header: 'Id', field: 'id' },
  { header: 'Name', field: 'name' },
  { header: 'Occupation', field: 'occupation' },
  { header: 'Hobby', field: 'hobby' },
  { header: 'Ambition', field: 'ambition' },
  { header: 'Friends', field: 'friends' },
  { header: 'Introverted', field: 'introverted' }
]

const tableOptions = {}

export default { rowData, colDefs, tableOptions }
