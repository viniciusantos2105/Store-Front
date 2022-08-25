import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-operator-login',
  templateUrl: './operator-login.component.html',
  styleUrls: ['./operator-login.component.css']
})
export class OperatorLoginComponent implements OnInit {
  
  loginOperatorData = {}

  login: Login = {
    username: '',
    password: ''
  }

  constructor(private router: Router,
    private service: OperatorService,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerNavigate(): void {
    this.router.navigate(['register'])
  }

  logar() {
      this.service.token(this.login).subscribe(resposta=>{
        localStorage.setItem('token', resposta.token)
        this.router.navigate(['operator-logado'])
      this.service.message('Login realizado com sucesso!!!')
    }, err => {
      if (err.error.error.match('Unauthorized')) {
        this.service.message('Login ou senha inválido')
      }
    })
  }
}
