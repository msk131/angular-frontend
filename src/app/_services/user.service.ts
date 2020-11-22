import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import usersData from './data.json';
import {UserData} from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

     users: UserData[] = usersData;

    getAllUsersData(){

      return this.users;
    }

    addUsersData(user){

      usersData.push(user);
    }
}export default UserService
