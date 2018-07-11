/**
 * @module Epics/userLogin
 * @desc User
 */

import { Observable } from "rxjs/Observable";

import { ActionTypes } from "constants/index";
import { register } from "../utils/auth";
import { actionDispatch } from "../utils/return-obj";

export function userLogin(action$) {
    return action$
        .ofType(ActionTypes.USER_LOGIN_REQUEST)
        .debounceTime(2000)
        .mergeMap(() =>
            Observable.of(
                actionDispatch(
                    ActionTypes.USER_REGISTER_SUCCESS,
                    register(action$.email, action$.pass)
                )
            )
        )
        .catch(
            /* istanbul ignore next  */ error =>
                Observable.of({
                    type: ActionTypes.USER_LOGIN_FAILURE,
                    payload: { error },
                    error: true
                })
        );
}

export function userRegister(action$) {
    return action$
        .ofType(ActionTypes.USER_REGISTER_REQUEST)
        .debounceTime(2000)
        .mergeMap(() =>
            Observable.of(
                actionDispatch(
                    ActionTypes.USER_REGISTER_SUCCESS,
                    register(action$.email, action$.pass)
                )
            )
        )
        .catch(
            /* istanbul ignore next  */ error =>
                Observable.of({
                    type: ActionTypes.USER_REGISTER_FAILURE,
                    payload: { error },
                    error: true
                })
        );
}

export function userLogout(action$) {
    return action$
        .ofType(ActionTypes.USER_LOGOUT_REQUEST)
        .mergeMap(() =>
            Observable.merge(
                Observable.of({ type: ActionTypes.USER_LOGOUT_SUCCESS })
            )
        )
        .catch(
            /* istanbul ignore next  */ error =>
                Observable.of({
                    type: ActionTypes.USER_LOGOUT_FAILURE,
                    payload: { error },
                    error: true
                })
        );
}
