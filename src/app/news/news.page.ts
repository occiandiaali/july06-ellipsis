import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})
export class NewsPage implements OnInit {

  articles;
  constructor(private newsService: NewsService, private platform: Platform) {}

  ngOnInit() {
    this.newsService.getNews().subscribe((data) => {
      console.log(data);
      // tslint:disable-next-line:no-string-literal
      this.articles = data['articles'];
    });
  }

  openUrl() {
    this.platform.ready().then(() => {
      const browser = new InAppBrowser();
    });
  }

} // class
