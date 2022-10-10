import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],    
})
export class HomeComponent implements OnInit {
  
  constructor(private router:Router,
    private api : ApiService,
   ){}

  ngOnInit(): void {
  }
logout(){
  localStorage.getItem('dataSource',);
  localStorage.removeItem("dataSource")
this.router.navigate(['login']);

}


  }

