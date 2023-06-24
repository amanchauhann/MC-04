import { Avatar, Box, Divider, Flex, Tag, Text } from "@chakra-ui/react";
import { useData } from "../Context/Context";
import { ChatIcon } from "@chakra-ui/icons";
import Post from "../Components/Post";
import { forumData } from "../Data/Data";
import { useState } from "react";

const Home = () => {
    const { user_data: { posts } } = useData()
    const [sort_by, set_sort_by] = useState("")
    console.log("f", posts)
    const sort_handler = (e) => {
        set_sort_by(e.target.value)
    }
    const sorted = sort_by === "upvote" ? posts.sort(function (a, b) { return b.upvotes - a.upvotes }) : sort_by === "latest" ? posts.sort((a, b) => new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1) : posts
    return (
        <>
            <Flex>
                <Flex direction={"column"} bg={"grey"}>
                    <Text p={4} outline={"1px solid black"} bg={"darkgray"}>Home</Text>
                    <Text p={4} outline={"1px solid black"}>Explore</Text>
                    <Text p={4} outline={"1px solid black"}>Bookmarks</Text>
                    <Text p={4} outline={"1px solid black"}>Profile</Text>
                </Flex>
                <Box maxW={"50rem"}>
                    {sorted.map(each => <Post {...each} />)}
                </Box>
                <Box>
                    <select name="cars" id="cars" placeholder="sort by" onClick={sort_handler}>
                        <option selected disabled>Sort by</option>
                        <option value="latest">Latest Post</option>
                        <option value="upvote">Upvoted Post</option>
                    </select>
                </Box>

            </Flex>

        </>
    )
}

export default Home;