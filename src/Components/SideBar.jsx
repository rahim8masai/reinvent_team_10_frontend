import axios from "axios"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import {
    ChakraProvider,
    Box,
    VStack,
    Text,
    Button,
    Divider,
    CSSReset,
    extendTheme,
    Select
} from "@chakra-ui/react";
import { FaPlus, FaComment } from "react-icons/fa";



const Sidebar = () => {
    const [chat, setChat] = useState([]);

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_BASE_API);
                const jsonData = await response.json();
                setData(jsonData.results);
                console.log(jsonData.results)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <Box bg="#1A1A1A" w="300px" h="100vh" color="white" p="4">
            <VStack spacing="4" align="start">
                <Button bgColor="gray.800" color="white" size="sm" w="100%" leftIcon={<FaPlus />}>
                    New Chat
                </Button>
                <Text fontWeight="bold">Chat history</Text>
                <Box>
                    {data && data.map((el) => <Link key={el._id} to={`/chat/${el.uuid}`}>
                        <li>{el.uuid}</li>
                    </Link>)}
                </Box>

            </VStack>
        </Box>
    );
};
export default Sidebar;
