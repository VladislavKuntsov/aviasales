export const sortingTickets = (payload) => ({type: 'BUTTON/SORTING_TICKETS', buttonSorting: payload});

export const setNumberOfTicketsDisplayed = (payload) => ({type: 'BUTTON/SET_NUMBER_OF_TICKETS_DISPLAYED', numberOfTicketsDisplayed: payload});

export const filteringTickets = (payload) => ({type: 'CHECKBOX/FILTERS_TICKETS', checkboxFilters: payload});

export const setSearchId = (payload) => ({type:'SERVICES/SET_SEARCH_ID' , searchId: payload});

export const setTickets = (payload) => ({type: 'SERVICES/SET_TICKETS', tickets: payload});

export const setIsLoading = (payload) => ({type: 'IS_LOADING', isLoading: payload});

