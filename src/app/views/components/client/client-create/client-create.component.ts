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
    username: 'vinicius008',
    name: 'vinicius',
    cpf: '352.808.230-58',
    email: 'email2@gmail.com',
    password: '12345',
    address:{
      cep: '01034-030',
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
    })
  }
}
