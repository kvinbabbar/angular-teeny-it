import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShortUrl } from './short-url';



@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  private entry = "https://www.jsonstore.io/d616f956fca002797b5b81e728f374cfa90ddc0cc50fdc00c39ae946fca27afe";
  constructor( private http: HttpClient) {
  }


  shortUrl(url: ShortUrl): Observable<ShortUrl> {
    const longUrl = url;
    console.log("from service", longUrl);
    return this.http.post<ShortUrl>(this.entry +"/"+ url.random, longUrl, this.httpOptions)
  }

  redirectUrl(endpoint): Observable<ShortUrl> {
    // console.log(endpoint);
    if(endpoint != "") {
      return this.http.get<{result: ShortUrl, ok: boolean}>(this.entry+endpoint)
        .pipe(map(data => {
          return data.result
        }))
    }
  }
}
