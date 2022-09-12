import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-update-email',
  templateUrl: './client-update-email.component.html',
  styleUrls: ['./client-update-email.component.css']
})
export class ClientUpdateEmailComponent implements OnInit {

  newEmail: Client = {
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
    this.service.updateEmail(this.newEmail).subscribe(resposta =>{
      this.service.message('Email atualizado com sucesso!!')
      this.router.navigate(['client/update'])
    }, err => {
      if (err.error.error.match('já existe')) {
        this.service.message(err.error.error)
      }
    })
  }
}
