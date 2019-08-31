
import * as types from './mutation-type'
import { saveSearch } from '../utils/cache'
export const saveSearchHistory = function ({ commit }, query) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}
