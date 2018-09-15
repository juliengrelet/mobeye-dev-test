export const ADD_STORE = "ADD_STORE";

export function selectStore(store){
    return{
        type: ADD_STORE,
        payload: store
    }
}