import {Injectable} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

declare var URL: string;

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() {

  }

  createUploader(url: string): FileUploader {
    URL = url;
    let uploader: FileUploader = new FileUploader({url: URL});
    uploader.onCompleteItem = (file: any, response: any, status: any) => {
      console.log('uploadedFile', file, status, response); // for checking purpose
      alert('File upload success!!');
      // uploader.uploadAll()
    };
    return uploader;
  }

}
