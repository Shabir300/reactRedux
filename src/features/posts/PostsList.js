import React from 'react';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom'

const PostsList = () => {

    const posts = useSelector(state => state.posts);

    const renderPosts = posts.map(post => (
        <div key={post.id} className='border  rounded mx-10 my-10 px-4 py-4'>
            <div>
                <div>
                    <h2 className='text-xl font-bold capitalize'>{post.title}</h2>
                </div>
                <div>
                    <p className=''>{post.content}</p>
                </div>
                <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
                
            </div>
        </div>
    ))

  return (
    <div>
        <h1 className='text-4xl mx-10 my-10'>POSTS</h1>
        <div>
            {renderPosts}
        </div>
    </div>
  )
}

export default PostsList