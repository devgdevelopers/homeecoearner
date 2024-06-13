// components/QuillEditor.js
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // import styles

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const toolbarOptions = [
    [{ 'header': '1' }, { 'header': '2' }, { 'header': [3, 4, 5, 6] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    [{ 'color': [] }, { 'background': [] }],  // Add text color and background color options
    [{ 'align': [] }],
    ['link'],
    ['clean']  // remove formatting button
];

const QuillEditor = ({ value, onChange }) => {
    return (
        <ReactQuill
            value={value}
            onChange={onChange}
            theme="snow"
            modules={{ toolbar: toolbarOptions }} />
    );
};

export default QuillEditor;