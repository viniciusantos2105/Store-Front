import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-operator-login',
  templateUrl: './operator-login.component.html',
  styleUrls: ['./operator-login.component.css']
})
export class OperatorLoginComponent implements OnInit {

  login: Login = {
    username: '',
    password: ''
  }

  constructor(private router: Router,
    private service: OperatorService) { }

  ngOnInit(): void {
  }

  registerNavigate(): void{
    this.router.navigate(['register'])
  }

  logar(): void{
    this.service.login(this.login).subscribe((resposta) => {
      this.router.navigate([''])
      this.service.message('Login realizado com sucesso!!!')
    })
  }
}
