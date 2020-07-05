import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
//import { DownloadService } from '../download.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {  

  videoUrl: string;

  constructor(private file: File, private transfer: FileTransfer, private platform: Platform) {} 

  downloadAndOpen() {
    let path = null;
    if (this.platform.is('ios')) {
      // do stuff
    } else {
      path = this.file.dataDirectory
    }

    const transfer: FileTransferObject = this.transfer.create();
    transfer.download(this.videoUrl, path + 'myfile.mp4').then(entry => {
      let url = entry.toURL();
      console.log(`Dowloaded: ${url}`);
    });
  }

  // downloadFile() {
  //   let path = null;
  //   if (this.platform.is('ios')) {
  //    //  path = this.downloadFile.documentsDirectory;
  //   } else {
  //     path = 
  //   }
  //   this.downloadService.download(this.videoUrl);

  // }
  

  // downloadHandler() {
  //   console.log(`Downloading: ${this.videoUrl}`);
  // }

  


} // class
