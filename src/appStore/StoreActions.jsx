import Store from './configureStore'
import example from './example'

// Combine all actions into one big object for export and easy use by import
const allActions = [example.actions]
const dispatcher = Store.dispatch
const Actions = {}

allActions.forEach(actions => {
    Object.keys(actions).forEach(action => {
        if(Actions[action]) throw "Same named action already exists - " + action
        Actions[action] = (payload) => dispatcher(actions[action](payload))
    })
})

export default Actions
