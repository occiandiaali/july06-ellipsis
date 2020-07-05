import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  articles;
  constructor(private newsService: NewsService, private platform: Platform) {}

  ngOnInit() {
    this.newsService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }

  openUrl() {
    this.platform.ready().then(() => {
      let browser = new InAppBrowser()
    });
  }

} // class
