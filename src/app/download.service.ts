import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  // videoUrl: string;
  private fileTransfer: FileTransferObject;

  constructor(private transfer: FileTransfer, private file: File) { }

  download(input) {
    const url = input;
    this.fileTransfer = this.transfer.create();
    this.fileTransfer.download(url, this.file.dataDirectory).then((entry) => {
      console.log(`Downloaded: ${entry.toUrl()}`);
    }, (error) => {
      console.log(error);
    });
  }
} // class
