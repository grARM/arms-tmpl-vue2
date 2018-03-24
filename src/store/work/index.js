const types = {
  WORK_DELETE: 'WORK_DELETE'
}

const state = {
  worklist: [
    {'title': 'sdasda0', 'count': '13', 'date': '2017-09-12', 'share': 'url', 'id': '2'},
    {'title': 'sdasda1', 'count': '13', 'date': '2017-09-12', 'share': 'url', 'id': '12'},
    {'title': 'sdasda2', 'count': '23', 'date': '2017-09-12', 'share': 'url', 'id': '123'},
    {'title': 'sdasda3', 'count': '45', 'date': '2017-09-12', 'share': 'url', 'id': '45'},
    {'title': 'sdasda4', 'count': '66', 'date': '2017-09-12', 'share': 'url', 'id': '54'},
    {'title': 'sdasda5', 'count': '54', 'date': '2017-09-12', 'share': 'url', 'id': '43'},
    {'title': 'sdasda6', 'count': '90', 'date': '2017-09-12', 'share': 'url', 'id': '534'}
  ]
}

const getters = {
  worklistX: state => {
    return state.worklist
  }
}

const mutations = {
  [types.WORK_DELETE] (state) {
    state.worklist = [
      {'title': 'sdasda0', 'count': '13', 'date': '2017-09-12', 'share': 'url', 'id': '2'},
      {'title': 'sdasda1', 'count': '13', 'date': '2017-09-12', 'share': 'url', 'id': '12'}
    ]
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
