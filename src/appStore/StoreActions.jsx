import Store from './configureStore'
import counter from './counter'
import real from './real'
import todo from './todo'

const allActions = [counter.actions, real.actions, todo.actions]
const dispatcher = Store.dispatch
const StoreActions = {}

allActions.forEach(actions => {
    Object.keys(actions).forEach(action => {
        if(StoreActions[action]) throw "Same named action already exists - " + action
        StoreActions[action] = (payload) => dispatcher(StoreActions[action](payload))
    })
})

console.log(StoreActions, "StoreActions")
export default StoreActions
