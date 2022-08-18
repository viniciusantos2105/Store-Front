import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    name: "vinicius",
    cpf: "339.793.200-90",
    email: "email@gmail.com",
    password: "12345",
    cep: "01144-010",
    number: "10"
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
