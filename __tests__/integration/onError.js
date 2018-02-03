import createTest from '../../__helpers__/createTest'

createTest('route onError called if other callbacks throw', {
  SECOND: {
    path: '/second',
    thunk: () => {
      throw new Error('thunk-failed')
    },
    onError: function() {}
  }
})

createTest('route onError dispatches redirect', {
  SECOND: {
    path: '/second',
    thunk: () => {
      throw new Error('thunk-failed')
    },
    onError: () => ({ type: 'REDIRECTED' })
  }
})

createTest('currentType_ERROR dispatched if no onError callback provided', {
  SECOND: {
    path: '/second',
    thunk: () => {
      throw new Error('thunk-failed')
    }
  }
})