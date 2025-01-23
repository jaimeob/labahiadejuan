"use client";
import { Container, Stack, Box, AlertTitle } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Alert } from "@/components/ui/alert";

export const Menu = () => {
  const [isVisible, setisVisible] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setisVisible(true);
    console.log(isVisible);
  };
  return (
    <Stack>
      <Container
        justifyContent={"center"}
        textAlign={"center"}
        alignItems={"center"}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Button onClick={handleClick}>Tocame perro</Button>
        </Box>
      </Container>
      {isVisible && (
        <Alert
          position="absolute"
          top="0"
          left="0"
          right="0"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          variant="subtle"
          status="info"
          title="Tyler"
        >
          <AlertTitle>TU NIVEL DE HOMOSEXUALIDAD ES MUY ALTA</AlertTitle>
        </Alert>
      )}
    </Stack>
  );
};
