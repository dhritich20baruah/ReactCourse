import React, { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Create = () => {
    const [title, setTitle] = useState('')
    const [snippet, setSnippet] = useState('')
    const [blogBody, setBlogBody] = useState('')
    

    const handleSubmit = () => {
        const url = "http://localhost:4000/newBlog/"
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                snippet: snippet,
                blogBody: blogBody
            })
        })
            .then(() => {
                alert('Posted')
            })
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-4">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="snippet" className="form-label">Snippet</label>
                        <input type="text" className="form-control" id="snippet" name='snippet' placeholder="Snippet" onChange={(event) => setSnippet(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="blogbody" className="form-label">Blog</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p></p>"
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                                setBlogBody(data)
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />
                    </div>
                    <button className='btn btn-outline-danger' type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Create