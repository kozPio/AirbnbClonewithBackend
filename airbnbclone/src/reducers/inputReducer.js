const initialState = {
    input: ''
}


const inputReducer = (state = initialState.input, action) => {
    switch (action.type) {

        case "SET_INPUT":
            state = action.input;
            return state;

        default:
            return state;

    }
}

export default inputReducer;