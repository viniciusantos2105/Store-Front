import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Operator } from 'src/app/models/operator';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.css']
})
export class OperatorCreateComponent implements OnInit {

  operator: Operator = {
    id: '',
    username: '',
    password: '',
    responsibility: ''
  }

  username = new FormControl('', [Validators.minLength(5)])
  password = new FormControl('', [Validators.minLength(5)])
  responsibility = new FormControl('', [Validators.minLength(4)])

  constructor(private router: Router,
    private service: OperatorService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['register'])
  }

  create(): void {
    this.service.create(this.operator).subscribe((resposta) => {
      this.router.navigate(['register'])
      this.service.message('Operador criado com sucesso!!!')
    }, err => {
      if (err.error.error.match('já existente')) {
        this.service.message(err.error.error)
      }
    })
  }

  errorValidUsername(){
    if(this.username.invalid){
      return 'O username deve ter mais de 5 caracteres!';
    }
    return false;
  }

  errorValidPassword(){
    if(this.password.invalid){
      return 'A senha deve ter mais de 5 caracteres!';
    }
    return false;
  }

  errorValidResponsibility(){
    if(this.responsibility.invalid){
      return 'Escolha um cargo!';
    }
    return false;
  }
}
