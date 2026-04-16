import React, { createContext, useState } from 'react';


export const CalledFriendContext=createContext();

const CalledFriendProvider = ({ children }) => {

    const[call, setCall]=useState([]);

    const data={
        call,
        setCall,
    }

    return (
        <CalledFriendContext.Provider value={data}>
            {children}
        </CalledFriendContext.Provider>
    );
};

export default CalledFriendProvider;