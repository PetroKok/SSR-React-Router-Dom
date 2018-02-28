import {getIssues} from "../../api/githubApi"

export const loadIssues = (user) => {
    return {
        type: "PROMISE",
        actions: ["ISSUES_LOADING", "ISSUES_LOADED","ISSUES_FAILURE"],
        promise: getIssues(user)
    }
};
