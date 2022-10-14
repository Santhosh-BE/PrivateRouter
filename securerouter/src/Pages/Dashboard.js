import React from 'react';
import { Navigate } from 'react-router-dom';

function Dashboard(){
    const pagemove=()=>{
        Navigate('/Home')
    }
    return(
        <div>
            <h1>
                Welcome to Dashboard Page
            </h1>
            <button onClick={pagemove}>Dashboard</button>
            
        </div>
    )
}

export default Dashboard;