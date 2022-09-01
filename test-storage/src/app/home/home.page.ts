import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { combineLatest, concat, forkJoin } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private readonly http: HttpClient,
    private readonly storage: Storage
  ) {}

  getUsers() {
    const requests = [];
    const TOTAL_REQUESTS = 40;
    const MAX_REQUESTS = 4;
    for (let i = 0; i < TOTAL_REQUESTS / MAX_REQUESTS; i++) {
      const chunk = [];
      for (let j = 0; j < MAX_REQUESTS; j++) {
        chunk.push(this.http.get('http://localhost:3000?a=' + (i + 1) * j));
      }
      requests.push(forkJoin(chunk));
    }
    concat(...requests).subscribe((res) => {
      console.log('done', res);
    });
  }
}
