import React from 'react';
import { Box, Heading, Text, VStack, Divider, Flex, Spacer } from '@chakra-ui/react';

 const RightSideBar = () => {
  return (
    <Box p={8}>
      <Flex>
        <Box flex="1">
          <Heading as="h1" mb={4}>ChatGPT</Heading>
        </Box>
        <Spacer />
        <Box flex="3">
          <VStack spacing={4} align="stretch">
            <Box bg="black" p={4} color="white" borderRadius="md">
              <Heading as="h2" size="md">Examples:</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer convallis sapien id luctus consequat.
              </Text>
            </Box>

            <Divider />

            <Box bg="black" p={4} color="white" borderRadius="md">
              <Heading as="h2" size="md">Capabilities:</Heading>
              <Text>
                - Generates human-like text based on prompts
                - Supports various natural language tasks
                - Provides contextual responses
              </Text>
            </Box>

            <Divider />

            <Box bg="black" p={4} color="white" borderRadius="md">
              <Heading as="h2" size="md">Limitations:</Heading>
              <Text>
                - May generate incorrect or biased responses
                - Lacks real-time understanding of changing context
                - Can be sensitive to input phrasing or wording
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default RightSideBar;
