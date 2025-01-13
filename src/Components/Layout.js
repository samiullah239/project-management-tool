// src/Components/Layout.js
import React from 'react';
import MySidebar from '../Roles/MasterAdmin/Sidebar';
const Layout = ({ children }) => {
  return (
    <div className="">
      <MySidebar />
      <div className="">{children}</div> {/* This is where the content will render */}
    </div>
  );
};

export default Layout;
