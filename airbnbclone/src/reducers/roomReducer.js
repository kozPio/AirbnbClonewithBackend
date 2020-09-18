const initialState = {
    rooms: null
}



const roomReducer = (state = initialState.rooms, action) => {
    switch (action.type) {

        case "SET_ROOMS":
            state = action.rooms;
            return state

        default:
            return state

    }
}

export default roomReducer;