import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  authenticated(){
    if(this.auth.isAuthenticated()){
      return false
    }
    return true
  }

  logout():void{
    localStorage.setItem('username', '')
    localStorage.setItem('token', '')
  }

}
