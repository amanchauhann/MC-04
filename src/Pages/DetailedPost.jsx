import { useParams } from 'react-router-dom';
import { useData } from '../Context/Context';
import Post from '../Components/Post';
import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/react';
const DetailedPost = () => {
    const { post_id } = useParams();
    const { user_data: { posts } } = useData()
    const filtered = posts.filter(each => each.postId === post_id)[0]
    console.log("aaa", filtered)
    return (
        <div>
            by:{filtered.name}
            <Post {...filtered} />
            <Box>


                {filtered.comments.map(each => {
                    return (
                        <>
                            {/* <Flex> */}
                            <Flex border={"1px solid grey"}>
                                <Avatar size={"md"} src={filtered.picUrl} />
                                <Flex direction={"column"}>
                                    <Flex>
                                        <Text>{each.name}</Text>
                                        <Text>@{each.username}</Text>
                                    </Flex>
                                    <Text>Replying to: @{filtered.name}</Text>
                                    <hr />
                                    <Text>{each.comment}</Text>
                                </Flex>


                            </Flex>
                            {/* </Flex> */}




                        </>

                    )
                })}

            </Box>
        </div>
    )
}
export default DetailedPost