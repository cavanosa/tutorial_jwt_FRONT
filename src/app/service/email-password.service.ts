import { ChangePasswordDTO } from './../models/change-password-dto';
import { Observable } from 'rxjs';
import { EmailValuesDTO } from './../models/email-values-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailPasswordService {

  changePasswordURL = environment.changePasswordURL;

  constructor(private httpClient: HttpClient) { }

  public sendEmail(dto: EmailValuesDTO): Observable<any> {
    return this.httpClient.post<any>(this.changePasswordURL + 'send-email', dto);
  }

  public changePassword(dto: ChangePasswordDTO): Observable<any> {
    return this.httpClient.post<any>(this.changePasswordURL + 'change-password', dto);
  }
}
