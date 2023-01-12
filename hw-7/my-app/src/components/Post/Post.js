import React from 'react';

function Post({postInfo}) {
    return (
        <>
            <h2>{postInfo.title}</h2>
            <button>more info</button>
            <p>-------------------------------</p>

        </>
    );
}

export default Post;