import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 6000);
  }
}
