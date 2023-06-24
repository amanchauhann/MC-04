import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import { useData } from "../Context/Context"

const SideBar = () => {
    const { user_data } = useData()
    return (
        <>
            <Flex direction={"column"} bg={"grey"} justify={"space-between"} minH={"95vh"}>
                <Flex direction={"column"} >
                    <Text p={4} outline={"1px solid black"} bg={"darkgray"}>Home</Text>
                    <Text p={4} outline={"1px solid black"}>Explore</Text>
                    <Text p={4} outline={"1px solid black"}>Bookmarks</Text>
                    <Text p={4} outline={"1px solid black"}>Profile</Text>
                </Flex>
                <Flex p={1}>
                    <Avatar src={user_data.picUrl} size={"md"} />
                    <Box>
                        <Text fontSize={"sm"}>{user_data.name}</Text>
                        <Text fontSize={"sm"}>@{user_data.username}</Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default SideBar