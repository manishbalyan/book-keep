/**
 * Created by consultadd on 20/6/17.
 */
export default (state=null,action)=>{
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state
}