import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar/MenuBar";




const Layout = () => { 
    return <> 
    <MenuBar></MenuBar>
    <Outlet>


    </Outlet>
    </>
}


export default Layout;