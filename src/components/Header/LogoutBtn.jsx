import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";


const LogoutBtn = ()=>{
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div></div>
    )
}

export default LogoutBtn;