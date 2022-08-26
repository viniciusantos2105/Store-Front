import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Operator } from 'src/app/models/operator';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-operator-menu',
  templateUrl: './operator-menu.component.html',
  styleUrls: ['./operator-menu.component.css']
})
export class OperatorMenuComponent implements OnInit {

  operators: Operator[] = [];

  displayedColumns: string[] = ['id', 'username', 'responsibility'];
  dataSource = new MatTableDataSource<Operator>(this.operators);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: OperatorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  backNavigate():void{
    this.router.navigate(['operator-logado'])
  }

  updateNavigate():void{
    this.router.navigate(['operator-updateResponsibility'])
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.operators = resposta;
    })
  }
}
