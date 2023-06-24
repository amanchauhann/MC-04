import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { forumData } from "../Data/Data";

const DataContext = createContext()

// const data_reducer = (state, { type, payload }) => {
//     switch (type) {
//         case ("INITIAL"):
//             return {
//                 ...state,
//                 data: payload
//             }
//         case ("UPVOTE"):
//             return {
//                 ...state,
//                 data: state.data.posts.map(each_post => each_post.upvotes + 1)
//             }
//     }
// }

export const DataProvider = ({ children }) => {
    const [user_data, set_user_data] = useState(forumData)
    // const initial_data = {
    //     data: {}
    // }
    // const [all_data, dispatch_data] = useReducer(data_reducer, initial_data)

    // useEffect(() => {
    //     set_user_data(forumData)
    //     // dispatch_data({ type: "INITIAL", payload: forumData })
    // }, [])
    console.log("aaa", forumData.posts)

    const upvote_handle = (postId) => {
        console.log(postId)
        set_user_data(prev => ({ ...prev, posts: prev.posts.map(each => each.postId === postId ? { ...each, upvotes: each.upvotes + 1 } : each) }))
    }

    const downvote_handle = (postId) => {
        console.log(postId)
        set_user_data(prev => ({ ...prev, posts: prev.posts.map(each => each.postId === postId ? { ...each, upvotes: each.upvotes - 1 } : each) }))
    }
    return (
        <DataContext.Provider value={{ user_data, upvote_handle, downvote_handle }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)