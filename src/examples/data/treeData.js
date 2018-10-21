const rowData = [
  {
    name: 'Mo Willems Characters',
    path: ['Mo Willems Characters']
  },
  {
    name: 'Avian',
    path: ['Mo Willems Characters', 'Avian']
  },
  {
    name: 'Avian',
    path: ['Mo Willems Characters', 'Mamallian']
  },
  {
    name: 'Pigeon',
    occupation: 'Bus Driver',
    hobby: 'Bathing',
    ambition: 'F.I.R.E',
    friends: -1,
    introverted: false,
    path: ['Mo Willems Characters', 'Avian', 'Pigeon']
  },
  {
    name: 'Gerald',
    occupation: 'Therapist',
    hobby: 'Ice Cream',
    ambition: 'Enter Jet Set',
    friends: 9,
    introverted: true,
    path: ['Mo Willems Characters', 'Mammalian', 'Gerald']
  },
  {
    name: 'Piggie',
    occupation: 'Surgeon',
    hobby: 'Friendship',
    ambition: 'Lunch',
    friends: 3,
    introverted: false,
    path: ['Mo Willems Characters', 'Mammalian', 'Gerald']
  }
]

const colDefs = [
  { header: 'Id', field: 'id' },
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

export default { rowData, colDefs }
