import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-update-address',
  templateUrl: './client-update-address.component.html',
  styleUrls: ['./client-update-address.component.css']
})
export class ClientUpdateAddressComponent implements OnInit {

  newAddressClient: Client = {
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

  constructor(private router: Router,
    private service: ClientService) { }

  ngOnInit(): void {
  }

  
  backNavigate():void{
    this.router.navigate(['client/update'])
  }

  update(){
    this.service.updateAddress(this.newAddressClient).subscribe(resposta =>{
      this.service.message('Endereço atualizado com sucesso!!')
      this.router.navigate(['client/update'])
    })
  }
}
