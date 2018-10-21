const rowData = [
  {
    name: 'Mo Willems Characters',
    parents: []
  },
  {
    name: 'Avian',
    parents: ['Mo Willems Characters']
  },
  {
    name: 'Mammalian',
    parents: ['Mo Willems Characters']
  },
  {
    name: 'Pigeon',
    occupation: 'Bus Driver',
    hobby: 'Bathing',
    ambition: 'F.I.R.E',
    friends: -1,
    introverted: false,
    parents: ['Mo Willems Characters', 'Avian']
  },
  {
    name: 'Gerald',
    occupation: 'Therapist',
    hobby: 'Ice Cream',
    ambition: 'Enter Jet Set',
    friends: 9,
    introverted: true,
    parents: ['Mo Willems Characters', 'Mammalian']
  },
  {
    name: 'Piggie',
    occupation: 'Surgeon',
    hobby: 'Friendship',
    ambition: 'Lunch',
    friends: 3,
    introverted: false,
    parents: ['Mo Willems Characters', 'Mammalian']
  }
]

const colDefs = [
  { header: 'Name', field: 'name' },
  { header: 'Occupation', field: 'occupation' },
  { header: 'Hobby', field: 'hobby' },
  { header: 'Ambition', field: 'ambition' },
  {
    header: 'Friends',
    field: 'friends',
    aggFunc: values => values.reduce((sum, value) => sum + value, 0)
  },
  { header: 'Introverted', field: 'introverted' }
]

const tableOptions = { groupBy: 'name' }

export default { rowData, colDefs, tableOptions }
