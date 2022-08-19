import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  login: Login = {
    username: '',
    password: ''
  }

  constructor(private router: Router,
    private service: ClientService) { }

  ngOnInit(): void {
  }

  registerNavigate(): void{
    this.router.navigate(['register'])
  }

  logar(): void {
    this.service.login(this.login).subscribe((resposta) => {
      this.router.navigate([''])
      this.service.message('Login realizado com sucesso!!!')
    }, err => {
      if (err.error.error.match('Unauthorized')) {
        this.service.message('Login ou senha inválido')
      }
    })
  }
}
