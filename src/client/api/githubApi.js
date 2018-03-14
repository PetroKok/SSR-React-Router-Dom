import fetch from "isomorphic-fetch";

export function getRespoAPI(user) {
    return fetch("https://api.github.com/users/"+user+"/repos")
        .then((res) => res.json())
}

export function getUserAPI(user) {
    return fetch("https://api.github.com/users/"+user)
        .then((res) => res.json())
}