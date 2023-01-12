import {useDispatch, useSelector} from "react-redux";
import {deleteData, getPosts, postPosts} from "../store/postsSlice";
import Post from "../components/post/Post";
import PostList from "../components/postList/PostList";
import {useState} from "react";
import {Button, Container} from "react-bootstrap";

function PostsPage() {
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.postsReducer)
    const {error} =useSelector(state => state.errorReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)
    const [form, setForm] = useState({})

    const getPostsFunc = () => {
        dispatch(getPosts())
    }

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    const deletePostsFunc = () => {
        dispatch(deleteData())
    }

    const createPostFunc = (e) => {
        e.preventDefault()
        dispatch(postPosts(form))
    }

    return (
        <Container>
            <form onSubmit={createPostFunc} style={{display: 'flex', flexDirection: 'column', width: '50%', margin: '0 auto'}}>
                <input type="text" onChange={changeForm} name="title"/>
                <textarea id="" cols="30" rows="3" onChange={changeForm} name="body"/>
                <Button type="submit" variant="primary">create post</Button>
            </form>

            <Button onClick={getPostsFunc} variant="success" className="m-5">get posts</Button>
            <Button onClick={deletePostsFunc} variant="danger" className="m-5">delete all</Button>

            <PostList/>

            {
                preloader
                    ?
                    <p>loading</p>
                    :
                    error
                        ?
                        <p>{error}</p>
                        :
                        posts.map(post => <Post key={post.id} postInfo={post}/>)
            }
        </Container>
    );
}

export default PostsPage;