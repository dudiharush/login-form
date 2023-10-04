import { useAppSelector } from "./store";
import { Navigate, Outlet } from 'react-router';



export const ProtectedRoutes = () => {
    const {user} = useAppSelector(state=>state.user)
    debugger;
    return user ? <Outlet/> : <Navigate to="/login" replace />;
  };