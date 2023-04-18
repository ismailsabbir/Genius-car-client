import React, { useContext } from 'react';
import { Authcontext } from '../Context/Usercontex';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const{users,loading}=useContext(Authcontext);
    if(loading){
        return <div>loading----------</div>
    }
    if(users&&users.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivetRoutes;