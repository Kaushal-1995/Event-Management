import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  
  todaysDate = new Date()

  constructor(private router : Router) { }  

  ngOnInit() {
        
  }

  logOut() {
    this.router.navigate(['/login']);
  }

  
}
