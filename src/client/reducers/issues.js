export default function (state = [], action) {
    switch (action.type) {
        case "ISSUES_LOADED" :
            return action.data;
        case "ISSUES_LOADING":
            return "LOADING";
        case "ISSUES_FAILURE":
            return action.error;
        case "SELECT_ISSUE":
            return "ERROR";
        case "RESET_ISSUES":
            return [];
        default:
            return state
    }
}