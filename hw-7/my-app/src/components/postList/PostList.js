import React from 'react';
import {useSelector} from "react-redux";
import {Card} from "react-bootstrap";

function PostList() {

    const {post} = useSelector(state => state.postsReducer)
    const emptyObject = !Object.keys(post).length

    return (
        <>
            {
                (!emptyObject) &&
                <Card border="danger" className="mb-5">
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            }
        </>
    );
}

export default PostList;