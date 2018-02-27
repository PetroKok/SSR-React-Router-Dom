export default function (state = [], action) {
    switch (action.type) {
        case "LOAD_ISSUES" :
            return action.payload;
        default:
            return state
    }
}