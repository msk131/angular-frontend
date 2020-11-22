import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import UserService from '../_services/user.service';

@Component({
   templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            age: ['', Validators.required],
            dob: ['', Validators.required],
         });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    showMsg: boolean = false;
    onSubmit() {
      //  this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.userService.addUsersData(this.registerForm.value)

        this.showMsg =true;
    }
  clearForm(form: FormGroup) {
    form.reset();
  }
}
