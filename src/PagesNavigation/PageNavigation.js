import React from 'react'
import { useLocation } from 'react-router-dom';

const PageNavigation = () => {
    const location = useLocation();
    const plantData = location.state?.plant; // Added optional chaining to prevent errors if state is undefined
    return (
        <div>
           <h1>{plantData.commonName}</h1>
        </div>
    )
}

export default PageNavigation;