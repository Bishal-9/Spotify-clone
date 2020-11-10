export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    //token: 'BQAawg0GMGVkemLgFgngNm8Ud9sD2zOsiY-mmafte0Rkvjjw5vLQtgcSI8lK0UDoIm3-dHR0mqKMsmZl1PiYqieRSxRtUgrZbnc4IYBm8eaQG6Ad2l5bqMU6bK9r_sX40dHJBdFqbCSGqc_Yc9Ng8TdLhciuXmflcpAsL0WW35Gb8NhK',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;