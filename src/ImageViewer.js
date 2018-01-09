// Image upload and download for display example component

import React, { Component } from 'react';
import { Storage } from 'aws-amplify';
import { S3Image } from 'aws-amplify-react';

class ImageViewer extends Component {

  handleUpload(event) {
    const file = event.target.files[0];
    const path = file.name;

    Storage.put(path, file)
           .then ( () => this.setState({ path }) )
           .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Image Viewer</h1>
        <p>Pick a file</p>
        <input type="file" onChange={this.handleUpload.bind(this)} />
        { this.state && <S3Image path={this.state.path} /> }
      </div>
    );
  }
}

export default ImageViewer;
