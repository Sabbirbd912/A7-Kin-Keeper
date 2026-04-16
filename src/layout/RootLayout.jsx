import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../comonents/shared/Navbar';
import Footer from '../comonents/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
           <Navbar />
            <Outlet />
           <Footer />

           <ToastContainer />
        </div>
    );
};

export default RootLayout;