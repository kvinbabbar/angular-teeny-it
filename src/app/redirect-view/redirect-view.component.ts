import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ShortUrlService } from '../short-url.service';
import { ShortUrl } from '../short-url';

@Component({
  selector: 'app-redirect-view',
  templateUrl: './redirect-view.component.html',
  styleUrls: ['./redirect-view.component.scss']
})
export class RedirectViewComponent implements OnInit {
  endpoint: string = "";
  url: any = "";
  urlData: ShortUrl;
  constructor(private router: Router, private shortUrl: ShortUrlService) { }

  ngOnInit() {
    this.endpoint = this.router.url;
    this.redirectUrl()
  }
  redirectUrl(): void {
    this.shortUrl.redirectUrl(this.endpoint)
      .subscribe(data => {
        console.log(1, data);
        console.log(2, data.longUrl);
        this.urlData = {...data};
        this.url = this.urlData.result.longUrl;
        if(this.urlData.result.longUrl) {
          setTimeout(() => {window.location.href = this.urlData.result.longUrl;}, 3000)
        }
      });
  }
}
