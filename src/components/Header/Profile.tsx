import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps){
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Portillo</Text>
          <Text color="gray.300" fontSize="small">
            felipe.portillo.delgado@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Felipe Portillo" src="https://github.com/felipeportillodelgado.png" />
    </Flex>
  );
}