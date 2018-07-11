// import config from "config";
// import { authHeader } from '../_helpers';
import * as firebase from "firebase"
// export function login(username, password) {
//     const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password })
//     };

//     return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // login successful if there's a jwt token in the response
//             if (user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem("user", JSON.stringify(user));
//             }

//             return user;
//         });
// }

export function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
}

export function register(email, pass) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(resp => resp)
        .catch(error => error);
}
