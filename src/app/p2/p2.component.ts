import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatPaginator, MatTableDataSource } from '@angular/material';
import UserService from '../_services/user.service';
import {UserData} from '../_models';

@Component({
   templateUrl: './p2.component.html',
   styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {

   constructor( private userService: UserService) {}

   users: UserData[] =this.userService.getAllUsersData();
   displayedColumns: string[] = ['sno', 'name', 'age', 'dob'];
  dataSource = new MatTableDataSource(this.users);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.userService.getAllUsersData());
  }
}
