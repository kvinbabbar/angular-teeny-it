import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ShortUrlService } from '../short-url.service';
import { ShortUrl } from '../short-url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faHeart = faHeart;
  invalidUrl = false;
  generatedUrl = false;
  random: string = "";
  originalUrl: string = "";
  
  public href: string = '';

  constructor(private ShortUrl: ShortUrlService ) { }
    
  ngOnInit() {
    let currentUrl = window.location.href;
    if(!currentUrl.endsWith("/")) {
      currentUrl = currentUrl+"/";
    }
    this.href = currentUrl;
  }

  getRandom(): string {
    const random = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return random;
  }

  shortIt(longUrl: string): void {
    this.generatedUrl = false;
    this.originalUrl = longUrl;
    this.invalidUrl = false;
    const random = this.getRandom();
    this.random = random;
    this.href += random;
    longUrl = longUrl.trim();
    const protocolOk = longUrl.startsWith("http://") || 
    longUrl.startsWith("https://") || 
                  longUrl.startsWith("ftp://");
    if (!longUrl || !protocolOk) {
      this.invalidUrl = true;
      return;
    }

    this.ShortUrl.shortUrl({ random, longUrl } as ShortUrl)
      .subscribe();
    this.generatedUrl = true;
  }

}
