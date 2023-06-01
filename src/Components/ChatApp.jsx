import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  Flex,
  Icon,
  Avatar,
  Select,
  Toast,
  useToast
} from "@chakra-ui/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
const ChatApp = () => {
  const params = useParams();
  const [message, setMessage] = useState([])
  const [person, setPerson] = useState('user')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const getMessages = () => {
    console.log(params.uuid)
    axios.get(process.env.REACT_APP_BASE_MESSAGE_API + `/?uuid=${params.uuid}`)
      .then((res) => setMessage(res.data.data.messages))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getMessages()
  }, [])

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };



  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setLoading(true)
      const payload = {
        "uuid": `${params.uuid}`,
        "user": `${person}`,
        "message": `${inputText}`
      }
      console.log(payload)
      axios.post(process.env.REACT_APP_BASE_MESSAGE_POST_API, payload)
      .then((res) => {
        toast({
          title: 'Message Posted.',
          description: "Message posted successfully.",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position:"top"
        })
        getMessages()
        setLoading(false)
      })
      .catch((err) =>{
        toast({
          title: 'Error while posting!',
          description: "Something went wrong.",
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "top"
        })
        getMessages()
        setLoading(false)
      })
      setInputText("");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <VStack spacing={4} p={4} h="100%" justifyContent="flex-end" width="80%">
      <Box p={4} bg="" borderRadius="md" width="65%" mb="100px">
        {message.map((message, index) => (
          <Flex gap="10px">
            <Avatar size="xs" name={message.role} title={message.role} />
            <Box
              mb="20px"
              key={index}
              p={2}
              bg={message.role == "user" ? "gray.800" : message.role == "system" ? "gray.700" : "gray.600"}
              borderRadius="md"
              width="100%"
            >
              <Text
              // fontWeight={message.isUserMessage ? "medium" : "normal"}
              >
                {message.content}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Flex w="65%"
        position="fixed"
        bottom="0"
        p="4"
        bg="gray.800"
        gap="20px"
      >
        <Select width="10%" bgColor="gray" color="black" onChange={(e) => setPerson(e.target.value)} >
          <option value="user">USER</option>
          <option value="assistant">ASSISTANT</option>
          <option value="system">SYSTEM</option>
        </Select>
        <Input
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter your question"
          borderRadius="md"
          flex="1"
          mr={2}
        />
        <Button colorScheme="blue" onClick={handleSendMessage} w="auto">
          {loading ? "Sending..." : <Icon as={FaRegPaperPlane} />}
        </Button>
      </Flex>
    </VStack>
  );
};
export default ChatApp;
