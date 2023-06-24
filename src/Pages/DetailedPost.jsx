import { useParams } from 'react-router-dom';
import { useData } from '../Context/Context';
const DetailedPost = () => {
    const { post_id } = useParams();
    const { user_data: { posts } } = useData()
    const filtered = posts.filter(each => each.postId === post_id)[0]
    console.log("aaa", filtered)
    return (
        <div>
            by:{filtered.name}
        </div>
    )
}
export default DetailedPost