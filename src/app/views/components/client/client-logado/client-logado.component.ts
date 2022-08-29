import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-logado',
  templateUrl: './client-logado.component.html',
  styleUrls: ['./client-logado.component.css']
})
export class ClientLogadoComponent implements OnInit {

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
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  getClient(): void{
    this.service.getClient(`${this.auth.getToken()}`).subscribe(resposta =>{
      this.client = resposta
    })
  }
}
