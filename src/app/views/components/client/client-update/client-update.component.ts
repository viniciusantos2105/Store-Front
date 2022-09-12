import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

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

  constructor(private service: ClientService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.getClient()
  }

  getClient(): void{
    this.service.getClient(`${this.auth.getToken()}`).subscribe(resposta =>{
      this.client = resposta
    })
  }

  getClientPost(): void{
    this.service.getClientPost(`${this.auth.getUsername()}`).subscribe(resposta =>{
      this.client = resposta
    })
  }

  backNavigate():void{
    this.router.navigate(['client/logado'])
  }

  emailNavigate():void{
    this.router.navigate(['client/update/email'])
  }

  addressNavigate():void{
    this.router.navigate(['client/update/address'])
  }
}
