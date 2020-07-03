import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  articles;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    });
  }

} // class
