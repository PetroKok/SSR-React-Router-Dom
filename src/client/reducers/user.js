export default function (state = [], action) {
    switch (action.type) {
        case "LOADING_USER":
            return "LOADING";
        case "LOADED_USER":
            return action.data;
        case "FAILURE_USER":
            return "ERROR";
        default:
            return state;
    }
}