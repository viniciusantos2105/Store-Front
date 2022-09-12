import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operator } from 'src/app/models/operator';
import { AuthService } from 'src/app/services/auth.service';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  operator: Operator = {
    id: '',
    username: '',
    password: '',
    responsibility: ''
  }

  constructor(public auth: AuthService,
    private router: Router,
    private operatorService: OperatorService) { }

  ngOnInit(): void {
  }

  authenticated(){
    if(this.auth.isAuthenticated()){
      return true;
    }
    return false;
    }

  logout():void{
    localStorage.setItem('username', '')
    localStorage.setItem('token', '')
    sessionStorage['refresh'] = false;
  }

  navigateRequest(): void{
    this.router.navigate(['request'])
  }

  navigateOperator(): void{
    this.router.navigate(['operator/logado'])
  }

  navigatePurchase(){
    this.router.navigate(['request/purchases'])
  }
}
