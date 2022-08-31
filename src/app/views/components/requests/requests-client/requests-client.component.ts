import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Request } from 'src/app/models/request';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-requests-client',
  templateUrl: './requests-client.component.html',
  styleUrls: ['./requests-client.component.css']
})
export class RequestsClientComponent implements OnInit {

  requests: Request[] = [];

  constructor(private service: RequestService) { }

  displayedColumns: string[] = ['id', 'quantidade', 'price', 'product', 'address'];
  dataSource = new MatTableDataSource<Request>(this.requests);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findPurchase();
  }

  findPurchase():void{
    this.service.clientRequests().subscribe(resposta =>{
      this.requests = resposta;
      console.log(resposta)
    })
  }
}
