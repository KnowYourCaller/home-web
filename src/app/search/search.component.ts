import { Component, OnInit } from '@angular/core';
import { CallerSearchService } from '../caller-search.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  constructor(
    private search: CallerSearchService,
    private _snackBar: MatSnackBar,
    fb: FormBuilder
  ) {

    this.signUpForm = fb.group({
      captcha: ['', Validators.required]
    })

  }

  signUpForm: FormGroup;
  isFatching = false;
  data;

  theme = 'dark';
  token = {
    token: '',
    isVerifyed: !environment.production,
  };

  ngOnInit(): void {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this.update);

    this.update()    
  }

  update() {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? (this.theme = 'dark')
      : (this.theme = 'light');
  }

  onVerify(token: string) {
    this.token.token = token;
    this.token.isVerifyed = true;
  }

  onExpired(response: any) {
    this.token.token = '';
    this.token.isVerifyed = false;
  }

  onError(error: any) {
    this.token.token = '';
    this.token.isVerifyed = false;
  }

  featchInfo() {
    if (this.isFatching) {
      this.showToUser('Please wait.. already in progess');
      return;
    }

    var number = (<HTMLInputElement>document.getElementById('user-input'))
      .value;

    if (number.length < 10) {
      this.showToUser('Please enter a valid 10 digit number');
      return;
    }

    if (!this.token.isVerifyed) {
      this.showToUser('Please verify you are not a robot');
      return;
    }

    this.isFatching = true;
    this.data = undefined;

    this.signUpForm.reset();

    this.search.fatchCallerInfo(number, this.token.token).subscribe(
      (data: any) => {
        console.log(data);
        console.log(`on data : ${data}`);
        this.data = data;

        this.isFatching = false;
      },
      (error) => {
        console.log(`on Error : ${error}`);

        this.isFatching = false;
      },
      () => {
        console.log(`on completed`);

        this.isFatching = false;
      }      
    );

    function c(){
      
    }

  }

  showToUser(msg: string, durationInSec = 3) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['custom-class'];
    config.duration = durationInSec * 1000;

    this._snackBar.open(msg, 'Okay', config);
  }
}
