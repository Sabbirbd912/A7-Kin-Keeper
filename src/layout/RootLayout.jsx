import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../comonents/shared/Navbar';
import Footer from '../comonents/shared/Footer';

const RootLayout = () => {
    return (
        <div>
           <Navbar />
            <Outlet />
           <Footer />
        </div>
    );
};

export default RootLayout;