import { useAppSelector } from "./store";
import { Navigate } from 'react-router';

type ProtectedRouteProps = {
    children: JSX.Element
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const {user} = useAppSelector(state=>state.user)
    debugger;
    return user ? children : <Navigate to="/login" replace />;
  };