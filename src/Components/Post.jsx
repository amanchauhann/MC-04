import { Avatar, Box, Divider, Flex, Tag, Text } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { useData } from "../Context/Context";
import { useState } from "react";
import { Link } from 'react-router-dom'

const Post = ({ upvotes, picUrl, username, post, postDescription, tags, postId, createdAt }) => {
    const [is_bookmarked, set_is_bookmarkeed] = useState(false)
    const { upvote_handle, downvote_handle } = useData(true)
    const [hours_ago, set_hours_ago] = useState(0)

    const toggle_bookmark = () => {
        set_is_bookmarkeed(prev => !prev)
    }

    const getTimeAgo = (date) => {
        const now = new Date();
        const created = new Date(date);
        // console.log("oooo", created)
        const timeDiff = now.getTime() - created.getTime();

        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        // set_hours_ago(hours)

        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} day${days === 1 ? '' : 's'} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours === 1 ? '' : 's'} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
        } else {
            return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
        }
    };
    const timeAgo = getTimeAgo(createdAt);
    // console.log("lklk", timeAgo)

    return (
        <>
            <Flex m={2} p={5} gap={4} border={"1px solid grey"}>
                <Flex direction={"column"} align={"center"}>
                    <div onClick={() => upvote_handle(postId)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                        </svg>
                    </div>
                    <Text fontSize={"lg"}>{upvotes}</Text>
                    <div onClick={() => downvote_handle(postId)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
                            <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z" />
                        </svg>
                    </div>
                </Flex>
                <Flex direction={"column"} gap={5}>
                    <Flex gap={"10px"}>
                        <Avatar src={picUrl} />
                        <Text>Posted by: <span>@{username}</span> <span>▪️{timeAgo}</span></Text>
                    </Flex>

                    <Text fontWeight={500} fontSize={"xl"}>{post}</Text>
                    <Box>
                        {tags.map(each => <Tag m={1} colorScheme="blue">{each}</Tag>)}

                        {/* <Tag m={1} colorScheme="blue">Business</Tag> */}
                    </Box>
                    <Text fontWeight={400} fontSize={"lg"}>{postDescription}</Text>
                    <Divider orientation='horizontal' />
                    <Flex justify={"space-between"}>
                        <Link to={`/expand/${postId}`}>
                            <ChatIcon />
                        </Link>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                            </svg>
                        </div>
                        {is_bookmarked ?
                            <div onClick={toggle_bookmark}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                                </svg>
                            </div>

                            :
                            <div onClick={toggle_bookmark}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                            </div>
                        }

                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Post