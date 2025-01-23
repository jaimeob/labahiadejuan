
import { Container, Stack,Box } from "@chakra-ui/react"

export const Menu = () => {
    return (
        <Stack>
            <Container justifyContent={"center"} textAlign={"center"} alignItems={"center"}>    
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">Menu</Box>
            </Container>
        </Stack>
    );
}