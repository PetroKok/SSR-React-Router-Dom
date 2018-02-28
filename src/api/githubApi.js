import fetch from "isomorphic-fetch";

export function getIssues(user) {
    return fetch('https://api.github.com/users/'+user+'/repos')
        .then((res) => res.json())
}

