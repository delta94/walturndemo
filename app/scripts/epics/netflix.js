/**
 * @module Epics/NetFlix
 * @desc NetFlix epics
 */

import { Observable } from "rxjs/Observable";

import { ActionTypes } from "constants/index";

export function addToPlayList(action$) {
    return action$
        .ofType(ActionTypes.ADD_TO_PLAYLIST_REQUEST)
        .switchMap(() =>
            Observable.ajax
                .getJSON(
                    "https://api.github.com/search/repositories?q=+language:javascript+created:%3E2016-10-01&sort=stars&order=desc"
                )
                .map(data => ({
                    type: ActionTypes.FETCH_POPULAR_REPOS_SUCCESS,
                    payload: { data: data.items }
                }))
                .takeUntil(action$.ofType(ActionTypes.CANCEL_FETCH))
                .defaultIfEmpty({
                    type: ActionTypes.FETCH_POPULAR_REPOS_CANCEL
                })
                .catch(error => [
                    {
                        type: ActionTypes.FETCH_POPULAR_REPOS_FAILURE,
                        payload: {
                            message: error.message,
                            status: error.status
                        },
                        error: true
                    }
                ])
        );
}
