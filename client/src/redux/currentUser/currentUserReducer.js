import{FETCH_USER_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE} from "./currentUserTypes.js"

const initialState={
    loading:false,
    user:[],
    error:"",
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST: return{
            ...state,
            loading:true,
        }

        case FETCH_USERS_SUCCESS: return{
            loading:false,
            user:action.payload,
            error:""
        }
        case FETCH_USERS_FAILURE: return{
            loading:false,
            user:[],
            error:action.payload,
        }
        default: return state
    }
}


export default reducer