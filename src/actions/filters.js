
// SET_USER_INPUT
  export const setTextInput = (text = '') => ({
    type: 'SET_USER_INPUT',
    text
  })
  // SORT_BY_AMOUNT
  export const sortbyAmount = () => ({
    type: 'SORT_BY_AMOUNT'
  })
  // SORT_BY_DATE
  export const sortbyDate = () => ({
    type: 'SORT_BY_DATE'
  })
  // SET_START_DATE
  export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  })
  // SET_END_DATE
  export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  })