import { Injectable } from '@angular/core';
//1. Import HTTP libs for API calls
import { HttpClient, HttpHeaders } from '@angular/common/http';

//2. Import Observable
import { Observable } from 'rxjs';

//3. Import the Article object
import { Article } from './article';

//3. Set outbound HTTP headers to JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticlesService {

  //4. Set up the URL
  private url: string = 'http://loc.mean.example.com/api/articles';

  //5. Call the HttpClient in the Constructor
  constructor(private http: HttpClient) { }

  //6. Set up a simple observable.
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);

  }

  getArticle(id: string): Observable<Article>{
  return this.http.get<Article>(`${this.url}/${id}`);
}

  createArticle (article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article, httpOptions);
}

  editArticle (article: Article): Observable<Article> {
  return this.http.put<Article>(this.url, article, httpOptions);
  }

  deleteArticle (id: string): Observable<Article> {
    return this.http.delete<Article>(`${this.url}/${id}`);
}
}

