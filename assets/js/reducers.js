const rooms = (state = [], action) => {
    switch (action.type) {
        case "SET_ROOMS":
            return action.rooms;

        case "SELECT_ROOM":
            // Loop through the rooms:
            return state.map(r => {
                // Determine the state of each room:
                console.log(action);
                return room(r, action);
            });
        case "ADD_ROOM":
        return [
            action.room,
            ...state,
        ];

        default:
            return state;
    }
};

const room = (state, action) => {
    switch (action.type) {
        case "SELECT_ROOM":
            console.log(state.id, action.roomId)
            let isActive = (state.id === action.roomId);

            return Object.assign({}, state, {
                isActive,
            });

        default:
            return state;
    }
};
export default rooms;
