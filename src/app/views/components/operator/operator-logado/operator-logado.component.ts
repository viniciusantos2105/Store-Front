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
  }

  retorno():void{
    this.service.getOperator(this.auth.username).subscribe((resposta)=>{
      this.operatorAuthenticated = resposta
    })
  }

  navigateProduct():void{
    this.router.navigate(['product-menu'])
  }
}
