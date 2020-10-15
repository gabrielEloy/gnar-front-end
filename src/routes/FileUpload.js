import React, { Fragment, useState } from 'react';
import Message from '../components/Message';
import Progress from '../components/Progress';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const FileUpload = () => {
  const history = useHistory();

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    const fileName = e.target.files[0].name;
    
    if(fileName.split('.')[1] !== 'csv') {
      alert('only CSV files are accepted');
      return;
    }

    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if(!file){
      setMessage('Try uploading a file');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', filename);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/uploads`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });
      console.log(res.data)
      const { uploadId } = res.data;
      setMessage('File Uploaded');
      setTimeout(() => {history.push(`/uploads/${uploadId}`)}, 1000)
    } catch (err) {
      setMessage('There was a problem with the server');
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </Fragment>
  );
};

export default FileUpload;
