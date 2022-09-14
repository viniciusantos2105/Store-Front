import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operator } from 'src/app/models/operator';
import { AuthService } from 'src/app/services/auth.service';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-operator-logado',
  templateUrl: './operator-logado.component.html',
  styleUrls: ['./operator-logado.component.css']
})
export class OperatorLogadoComponent implements OnInit {

  operatorAuthenticated: Operator = {
    id: '',
    username: '',
    password: '',
    responsibility: ''
  }

  constructor(private service: OperatorService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.load();
    this.retorno();
  }

  retorno() {
    this.service.getOperator(`${this.auth.getToken()}`).subscribe(resposta =>{
      this.operatorAuthenticated = resposta
      localStorage.setItem('responsibility', resposta.responsibility)
    })
  }

  load() {
    //Session storage salva os dados como string
    (sessionStorage['refresh'] == 'false' || !sessionStorage['refresh']) && document.location.reload();;
    sessionStorage['refresh'] = true;
  }

  navigateProduct():void{
    this.service.getOperator(`${this.auth.getToken()}`).subscribe(resposta =>{
      this.operatorAuthenticated = resposta
      if(this.operatorAuthenticated.responsibility == "SALESMAN"){
        this.service.message('Você não tem permissão')
      }
      else{
        this.router.navigate(['product'])
      }
    })
  }

  navigateOperatorMenu():void{
    this.service.getOperator(`${this.auth.getToken()}`).subscribe(resposta =>{
      
      this.operatorAuthenticated = resposta
      if(this.operatorAuthenticated.responsibility == "ADMIN"){
        this.router.navigate(['operator'])
      }
      else{
        this.service.message('Você não tem permissão')
      }
    })
  }

  navigateAllSales():void{
    this.service.getOperator(`${this.auth.getToken()}`).subscribe(resposta =>{
      this.operatorAuthenticated = resposta
      if(this.operatorAuthenticated.responsibility == "STOCKHOLDER"){
        this.service.message('Você não tem permissão')
      }
      else{
        this.router.navigate(['request/allPurchases'])
      }
    })
  }
}
