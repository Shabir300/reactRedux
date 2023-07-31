import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';

const AddPost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();


    const onFormSubmit = (e) => {
        e.preventDefault()
    }

    const onAddPostClick = () => {
        dispatch(addPost({
            id: nanoid(),
            title,
            content
        }))

        setTitle('')
        setContent('')
    }
    
  return (
    <div>
        <form className='mx-5 my-10 border px-10 py-10 w-fit' onSubmit={e => onFormSubmit(e)}>
            <h1 className='my-3 text-3xl'>Add your post</h1>
            <div className='flex flex-col'>
                <label id='title'>Title</label>
                <input className='border mx-5 my-3 max-w-[24rem]' name='title' value={title} onChange={e => setTitle(e.target.value)} />

                <label>Content</label>
                <input className='border mx-5 my-3 max-w-[24rem]' name='content' value={content} onChange={e => setContent(e.target.value)} />
            </div>

            <button className='bg-black text-white px-5 py-2' onClick={onAddPostClick} type="submit">Add Post</button>
        </form>
    </div>
  )
}

export default AddPost