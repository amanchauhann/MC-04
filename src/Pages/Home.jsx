import { Avatar, Box, Divider, Flex, Tag, Text } from "@chakra-ui/react";
import { useData } from "../Context/Context";
import { ChatIcon } from "@chakra-ui/icons";
import Post from "../Components/Post";
import { forumData } from "../Data/Data";

const Home = () => {
    const { user_data: { posts } } = useData()
    console.log("f", posts)
    return (
        <>
            aman
            {posts.map(each => <Post {...each} />)}
        </>
    )
}

export default Home;