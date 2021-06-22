// Uma forma de setar true/false sem percisar de if ou ternário...

const state = {
  stateKey: null
}

const userData = {
  userDataKey: 'whatever'
}

state.stateKey = (userData['userDataKey'] === 'whatever') // state.stateKey === true

state.stateKey = (userData['userDataKey'] === 'something') // state.stateKey === false
