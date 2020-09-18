const initialState = {
    index: 0
}


const indexReducer = (state = initialState.index, action) => {
    switch (action.type) {

        case "SET_INDEX":
            state = action.index;
            return state;

        default:
            return state;

    }
}

export default indexReducer;