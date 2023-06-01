import React from "react";
import { Box, Flex } from "@chakra-ui/react"
import SideBar from "./SideBar"
import ChatApp from "./ChatApp";
import RightSideBar from "./RightSideBar";

const Home = () => {
    return (<>
        <Flex>
            <SideBar />
            <RightSideBar />
        </Flex>
    </>)
}
export default Home