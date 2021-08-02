const initialState = {
    searchId: null,
    tickets: [[], false],
    numberOfTicketsDisplayed: 5,
    buttonSorting: 'cheap',
    checkboxFilters: [
        {name: 'transfersAll', active: true, id: 1},
        {name: 'transfersWithout', value: 0, active: true, id: 2},
        {name: 'transfersOne', value: 1, active: true, id: 3},
        {name: 'transfersTwo', value: 2, active: true, id: 4},
        {name: 'transfersThree', value: 3, active: true, id: 5}, 
    ],
    isLoading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUTTON/SORTING_TICKETS': /* Сортировка билетов */
            return { ...state, buttonSorting: action.buttonSorting};
        
        case 'CHECKBOX/FILTERS_TICKETS': /* Установка статуса чекбокса */
            return {...state, checkboxFilters: action.checkboxFilters}

        case 'SERVICES/SET_TICKETS':
            return {...state, tickets: [[...state.tickets[0], ...action.tickets[0]], action.tickets[1]]}

        case 'SERVICES/SET_SEARCH_ID':
            return {...state, searchId: action.searchId}
        case 'IS_LOADING':
            return {...state, isLoading: action.isLoading}
        case 'BUTTON/SET_NUMBER_OF_TICKETS_DISPLAYED':
            return {...state, numberOfTicketsDisplayed: action.numberOfTicketsDisplayed}
        default:
            return state;
    }
};

export default reducer;