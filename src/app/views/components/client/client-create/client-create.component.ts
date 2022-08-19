import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    id: '',
    username: 'vinicius005',
    name: 'vinicius',
    cpf: '510.942.750-00',
    email: 'email@2gmail.com',
    password: '12345',
    address:{
      cep: '01034-00',
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
      number: '20'
    }
  }

  constructor(private router: Router,
    private service: ClientService) { }

  ngOnInit(): void {
  }

  cancel(): void{
    this.router.navigate(['register'])
  }

  create(): void{
    this.service.create(this.client).subscribe((resposta)=>{
      this.router.navigate(['register'])
      this.service.message('Cliente criado com sucesso!!!')
    }, err => {
      console.log(err)
      if(err.error.error.match('já existente')){
        this.service.message(err.error.error)
      }
      if(err.error.error.match('já existe')){
        this.service.message(err.error.error)
      }
      if(err.error.error.match('Endereço não')){
        this.service.message(err.error.error)
      }
    })
  }
}
