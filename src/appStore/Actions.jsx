/* 
StoreActions are pure functions, 
All other Actions must be put here
This can be divided into multiple actions and combined here.
*/

import StoreActions from './StoreActions'
import Store from './configureStore'

const Actions = {
    addList: () => {
        var store = Store.getState() // You can set get store state Here.
        console.log(store, "store....")
        setTimeout(() => { // Fake API Calls
            StoreActions.addList()
        }, 2000)
    }
}

export default Actions