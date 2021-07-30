/* Чистая функция, которая отвечает за обновление состояния. Здесь реализовывается логика в соответствии
с которой будет происходить обновление полей в store */

const initialState = {
    searchId: null,
    tickets: [[], false],
    visibleTickets: 5,
    buttonSorting: 'cheap',
    checkboxFilters: [
        {value:'transfersAll', active: false, id: 1},
        {value:'transfersWithout', active: false, id: 2},
        {value: 'transfersOne', active: false, id: 3},
        {value: 'transfersTwo', active: false, id: 4},
        {value: 'transfersThree', active: false, id: 5}, 
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
            return {...state, tickets: action.tickets}

        case 'SERVICES/SET_SEARCH_ID':
            return {...state, searchId: action.searchId}
        case 'isLoading':
            return {...state, isLoading: action.isLoading}
        case 'SET_VISIBLE_TICKETS':
            return {...state, visibleTickets: action.visibleTickets}
        default:
            return state;
    }
};

export default reducer;