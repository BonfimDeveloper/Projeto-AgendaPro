import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-web',
  templateUrl: './header-web.component.html',
  styleUrls: ['./header-web.component.css'],
})
export class HeaderWebComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  navegarParaDashboard() {
    this.router.navigate(['/']);
  }
}
