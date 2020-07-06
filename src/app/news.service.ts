import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = 'https://www.reddit.com/r/worldnews/top/?t=hour';
  apiKey = '';

  constructor(private httpClient: HttpClient) {
    this.getNews();
  }

  getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${this.apiKey}`);
  }
} // class
