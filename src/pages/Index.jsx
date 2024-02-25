import React from "react";
import { Box, Button, VStack, HStack, Text, useToast } from "@chakra-ui/react";
import { FaRunning } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleStartGame = () => {
    toast({
      title: "Game Start",
      description: "This is where the game logic would initialize.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch" p={5}>
      <HStack justifyContent="center">
        <Text fontSize="2xl" fontWeight="bold">
          Subway Surfers Clone
        </Text>
      </HStack>
      <Box height="400px" bg="gray.300" borderRadius="md" position="relative" overflow="hidden">
        {/* This Box would serve as the game area. In a real game, you would render the game's graphics here. */}
        <Text position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)">
          Game Area
        </Text>
      </Box>
      <HStack justifyContent="center">
        <Button leftIcon={<FaRunning />} colorScheme="teal" onClick={handleStartGame}>
          Start Game
        </Button>
      </HStack>
    </VStack>
  );
};

export default Index;
