import {getIssues} from "../../api/githubApi"

export const loadIssues = () => {
    return {
        type: "PROMISE",
        actions: ["ISSUES_LOADING", "ISSUES_LOADED","ISSUES_FAILURE"],
        promise: getIssues()
    }
};
