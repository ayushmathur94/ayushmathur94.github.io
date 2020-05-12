import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  timeoutDuration = 5*60*1000; //Login pop up time set here
  showLoginOverlay = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    setTimeout(() => {
      this.showLoginOverlay = true;
    }, this.timeoutDuration);

  } 

  get f() { return this.loginForm.controls; }
  
  onSubmit() {
    this.submitted = true;
  }

  closeLoginOverlay(){
    this.showLoginOverlay = false;
  }

}
