import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest } from "../requestMethods"
import { addSignupFailure, addSignupStart, addSignupSuccess } from "./signupRedux";
export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch(err){
        dispatch(loginFailure());    
    }
}

export const addSignup = async (user, dispatch) => {
    dispatch(addSignupStart());
    try {
      const res = await publicRequest.post(`/users/signup`, user);
      dispatch(addSignupSuccess(res.data));
    } catch (err) {
      dispatch(addSignupFailure());
    }
  };