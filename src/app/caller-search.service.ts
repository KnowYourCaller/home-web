import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CallerSearchService {
  constructor(private http: HttpClient) {}

  fatchCallerInfo(callerNumber: string, hcaptchaResponse: string) {
    var body = {
      phoneNumber: '',
      captchaResponse: '',
    };

    body.phoneNumber = callerNumber;
    body.captchaResponse = hcaptchaResponse;

    return this.http.post(
      'https://api.knowyourcaller.app/webQuaryHandlerV1',
      body,
      { responseType: 'json' }
    );
  }
}
