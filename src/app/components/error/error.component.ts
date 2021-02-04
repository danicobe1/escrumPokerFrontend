import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  idGame: number;
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  goMenu() {
    this.router.navigate(['/']);
  }
}
