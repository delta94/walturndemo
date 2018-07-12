/**
 * @module Reducers/NetFlix
 * @desc NetFlix Reducer
 */
import immutable from "immutability-helper";
import { createReducer } from "modules/helpers";
import { parseError } from "modules/client";

import { ActionTypes } from "constants/index";

export const netflixState = {
    popularRepos: {
        data: [],
        message: "",
        status: "idle"
    }
};

export default {
    netflix: createReducer(netflixState, {
        [ActionTypes.ADD_TO_PLAYLIST_REQUEST](state) {
            return immutable(state, {
                popularRepos: {
                    status: { $set: "running" }
                }
            });
        },
        [ActionTypes.FETCH_POPULAR_REPOS_SUCCESS](state, { payload }) {
            return immutable(state, {
                popularRepos: {
                    data: { $set: payload.data },
                    status: { $set: "loaded" }
                }
            });
        },
        [ActionTypes.FETCH_POPULAR_REPOS_FAILURE](state, { payload }) {
            return immutable(state, {
                popularRepos: {
                    message: { $set: parseError(payload.message) },
                    status: { $set: "error" }
                }
            });
        }
    })
};
