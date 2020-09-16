import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  theme = 'dark';

  ngOnInit(): void {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', update);

    function update() {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? (this.theme = 'dark')
        : (this.theme = 'light');
    }
  }

  onVerify(token: string) {
    // The verification process was successful.
    // You can verify the token on your server now.

    console.log(`onVerify ${token}`);
  }

  onExpired(response: any) {
    // The verification expired.

    console.log(`onExpired ${response}`);
  }

  onError(error: any) {
    // An error occured during the verification process.

    console.log(`onError ${error}`);
  }

  featchInfo() {}
  
}
