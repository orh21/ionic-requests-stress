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
    for (let i = 0; i < 40; i++) {
      requests.push(this.http.get('http://localhost:3000?a=' + i));
    }

    forkJoin(requests).subscribe((res) => {
      console.log('done', res);
    });
  }
}
