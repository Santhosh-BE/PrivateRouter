import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard(){
       const navigate = useNavigate();
    
    return(
        <div>
            <h1>
                Welcome to Dashboard Page
            </h1>
            <button onClick={()=>navigate("/Verification")}>Dashboard</button>
            
        </div>
    )
}

export default Dashboard;