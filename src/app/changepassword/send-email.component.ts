import { EmailValuesDTO } from './../models/email-values-dto';
import { ToastrService } from 'ngx-toastr';
import { EmailPasswordService } from './../service/email-password.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  mailTo: string;
  dto: EmailValuesDTO;

  constructor(
    private emailPasswordService: EmailPasswordService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  onSendEmail(): void {
    this.dto = new EmailValuesDTO(this.mailTo);
    this.emailPasswordService.sendEmail(this.dto).subscribe(
      data => {
          this.toastrService.success(data.mensaje, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
      },
      err => {
        this.toastrService.error(err.error.mensaje, 'FAIL', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    );
  }

}
