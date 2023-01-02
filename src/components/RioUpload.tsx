import {
  Box,
  CardMedia,
  CircularProgress,
  LinearProgress,
} from '@mui/material';
import ReactPlayer from 'react-player';
import React, { Component, useState } from 'react';
import CircularStatic from './ganeral/CircularProgress';
// import LinearWithValueLabel from '../components/RioLoading';

type RioUploadType = {
  title?: string;
  isVideo: boolean;
  setValue: (newImageUrl: string) => void;
  data?: any;
};

const RioUpload: React.FC<RioUploadType> = ({
  title,
  isVideo,
  setValue,
  data,
}) => {
  const [returnUrl, setReturnUrl] = useState('');
  // Nếu file không có tên, lấy bừa 1 tên
  const [fileTitle, setFileTitle] = useState(
    (Math.random() + 1).toString(36).substring(7),
  );
  const [isLoading, setIsLoading] = useState(false);

  const processFile = async (e) => {
    console.log(e.target.files[0]);
    var file = e.target.files[0];

    // Set your cloud name and unsigned upload preset here:
    var YOUR_CLOUD_NAME = 'beau-agency';
    var YOUR_UNSIGNED_UPLOAD_PRESET = 'dwz3uw8u';

    var POST_URL =
      'https://api.cloudinary.com/v1_1/' + YOUR_CLOUD_NAME + '/auto/upload';

    var XUniqueUploadId = String(new Date());

    // function processFile(event) {
    setIsLoading(true);

    var size = file.size;
    var sliceSize = 20000000;
    var start = 0;

    setTimeout(loop, 3);

    function loop() {
      var end = start + sliceSize;

      if (end > size) {
        end = size;
      }
      var s = slice(file, start, end);
      send(s, start, end - 1, size);
      if (end < size) {
        start += sliceSize;
        setTimeout(loop, 3);
      }
    }
    // }

    // processFile1();

    // Set file title de upload
    setFileTitle(e.target.files[0].name);

    function send(piece, start, end, size) {
      console.log('start ', start);
      console.log('end', end);

      var formdata = new FormData();
      console.log(XUniqueUploadId);

      formdata.append('file', piece);
      formdata.append('cloud_name', YOUR_CLOUD_NAME);
      formdata.append('upload_preset', YOUR_UNSIGNED_UPLOAD_PRESET);
      formdata.append('public_id', fileTitle);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', POST_URL, false);
      xhr.setRequestHeader('X-Unique-Upload-Id', XUniqueUploadId);
      xhr.setRequestHeader(
        'Content-Range',
        'bytes ' + start + '-' + end + '/' + size,
      );

      xhr.onload = function () {
        // do something to response
        console.log(JSON.parse(this.responseText).secure_url);
        setReturnUrl(JSON.parse(this.responseText).secure_url);
        setIsLoading(false);

        // TODO:
        // returnUrl được trả ra ở đây
        // Nó chính là url của image hoặc của video sau khi mình upload nó lên cloud
        // Do đó, có thể dùng store, dùng context, dùng callback prop...
        // => để mang cái returnURl này ra component cha là xong.
        // Sau đó post api như bt vì bản chất nó chỉ là cái string như cũ

        setValue(JSON.parse(this.responseText).secure_url);
      };

      xhr.send(formdata);
    }

    function slice(file, start, end) {
      var slice = file.mozSlice
        ? file.mozSlice
        : file.webkitSlice
        ? file.webkitSlice
        : file.slice
        ? file.slice
        : noop;

      return slice.bind(file)(start, end);
    }

    function noop() {}
  };

  return (
    <div>
      {title && <h3>{title}</h3>}

      {
        isVideo ? (
          <div className="fileUpload">
            <input
              className="upload"
              type="file"
              onChange={processFile}
              accept="video/*"
            />
            <span>Upload</span>
          </div>
        ) : (
          <div
            className="fileUpload"
            style={{
              // display: 'inline-block',
              position: 'relative',
              marginBottom: '16px',
              zIndex: 2,
            }}
          >
            <input
              className="upload"
              type="file"
              onChange={processFile}
              accept="image/*"
              style={{
                position: 'relative',
                zIndex: 2,
                opacity: 0,
                height: 63,
                maxWidth: 85,
                cursor: 'pointer',
              }}
            />
            <Box
              style={{
                position: 'absolute',
                zIndex: 1,
                left: 0,
                top: 25,
                height: 40,
                lineHeight: '40px',
                color: '#FFFFFF',
                background: 'red',
                minWidth: 85,
                borderRadius: 8,
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              Upload
            </Box>
          </div>
        )
        // ? <input type="file" onChange={processFile} accept="video/*"/>
        // : <input type="file" onChange={processFile} accept="image/*"/>
      }

      {
        // Co the fake loading linear o day
        // https://mui.com/material-ui/react-progress/
        isLoading && <CircularStatic />
      }

      {isVideo ? (
        returnUrl ? (
          <ReactPlayer url={returnUrl} controls />
        ) : (
          ''
        )
      ) : (
        <Box
          component="img"
          sx={{
            maxWidth: { xs: 350, md: 250 },
          }}
          src={returnUrl}
        />
      )}
    </div>
  );
};

export default RioUpload;
