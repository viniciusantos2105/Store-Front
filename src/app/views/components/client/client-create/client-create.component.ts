import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  username = new FormControl('', [Validators.minLength(5)])
  name = new FormControl('', [Validators.minLength(3)])
  cpf = new FormControl('', [Validators.minLength(11)])
  email = new FormControl('', [Validators.minLength(10)])
  password = new FormControl('', [Validators.minLength(5)])
  cep = new FormControl('', [Validators.minLength(5)])
  number = new FormControl('', [Validators.minLength(1)])

  constructor(private router: Router,
    private service: ClientService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['register'])
  }

  create(): void {
    this.service.create(this.client).subscribe((resposta) => {
      this.router.navigate(['client/login'])
      this.service.message('Cliente criado com sucesso!!!')
    }, err => {
      console.log(err)
      if (err.error.error.match('já existente')) {
        this.service.message(err.error.error)
      }
      if (err.error.error.match('já existe')) {
        this.service.message(err.error.error)
      }
      if (err.error.error.match('Endereço não')) {
        this.service.message(err.error.error)
      }
    })
  }

  errorValidUsername(){
    if(this.username.invalid){
      return 'O username deve ter mais de 4 caracteres!';
    }
    return false;
  }

  errorValidName(){
    if(this.name.invalid){
      return 'O nome deve ter mais de 2 caracteres!';
    }
    return false;
  }

  errorValidCpf(){
    if(this.cpf.invalid){
      return 'O cpf deve ter mais de 10 caracteres!';
    }
    return false;
  }

  errorValidEmail(){
    if(this.email.invalid){
      return 'O email deve ter mais de 5 caracteres!';
    }
    return false;
  }

  errorValidPassword(){
    if(this.password.invalid){
      return 'A senha deve ter mais de 5 caracteres!';
    }
    return false;
  }

  errorValidCep(){
    if(this.cep.invalid){
      return 'O cep deve ter mais de 5 caracteres!';
    }
    return false;
  }

  errorValidNumber(){
    if(this.number.invalid){
      return 'O numero deve ter mais de 0 caracteres!';
    }
    return false;
  }
}
