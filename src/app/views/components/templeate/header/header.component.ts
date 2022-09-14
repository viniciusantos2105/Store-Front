import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Operator } from 'src/app/models/operator';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
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

  client: Client = {
    id: '',
    username: '',
    name: '',
    cpf: '',
    email: '',
    password: '',
    address: {
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
      number: ''
    }
  }

  constructor(public auth: AuthService,
    private router: Router,
    private operatorService: OperatorService,
    private clientService: ClientService) { }

  ngOnInit(): void {
  }

  authenticated(){
    if(this.auth.isAuthenticated()){
      return true;
    }
    return false;
  }

  authOperator() {
    if(this.auth.isOperator()){
      return true;
    }
    return false;
  }

  logout():void{
    localStorage.setItem('username', '')
    localStorage.setItem('token', '')
    localStorage.setItem('responsibility', '')
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

  navigateMenuOperator(): void{
    this.router.navigate(['operator'])
  }

  navigateMenuProduct(): void{
    this.router.navigate(['product'])
  }

  navigateMenuPedidos(): void{
    this.router.navigate(['request/allPurchases'])
  }
}
