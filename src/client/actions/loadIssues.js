import {getRespoAPI, getUserAPI} from "../../api/githubApi"

export const loadRepos = (user) => {
    return {
        type: "REPOS_PROMISE",
        actions: ["ISSUES_LOADING", "ISSUES_LOADED", "ISSUES_FAILURE"],
        promise: getRespoAPI(user)
    }
};

export const loadUser = (user) => {
    return {
        type: "USER_PROMISE",
        actions: ["LOADING_USER", "LOADED_USER", "FAILURE_USER"],
        promise: getUserAPI(user)
    }
};
