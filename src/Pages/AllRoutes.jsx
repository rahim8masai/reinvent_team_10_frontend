import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import ChatApp from "../Components/ChatApp"
import Sidebar from "../Components/SideBar"

const AllRoutes = () => {
    return (<>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<ChatApp />} />
                <Route path="/sideBar" element={<Sidebar />} />
                <Route path="/chat/:uuid" element={<ChatApp />} />
            </Routes>
        </div>
    </>)
}

export default AllRoutes