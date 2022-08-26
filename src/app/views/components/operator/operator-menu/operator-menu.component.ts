import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private service: OperatorService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.operators = resposta;
    })
  }
}
