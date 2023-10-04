import { useAppSelector } from "./store";
import { Navigate, Outlet } from 'react-router';



export const ProtectedRoutes = () => {
    const {user} = useAppSelector(state=>state.user)
    return user ? <Outlet/> : <Navigate to="/login" replace />;
  };