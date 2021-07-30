export const sortingTickets = (payload) => ({type: 'BUTTON/SORTING_TICKETS', buttonSorting: payload});

export const filteringTickets = (payload) => ({type: 'CHECKBOX/FILTERS_TICKETS', checkboxFilters: payload});

export const setSearchId = (payload) => ({type:'SERVICES/SET_SEARCH_ID' , searchId: payload});

export const setTickets = (payload) => ({type: 'SERVICES/SET_TICKETS', tickets: payload});

export const setVisibleTickets = (payload) => ({type: 'SET_VISIBLE_TICKETS', visibleTickets: payload});

export const setIsLoading = (payload) => ({type: 'isLoading', isLoading: payload});

