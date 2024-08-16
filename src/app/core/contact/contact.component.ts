import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { IEmail } from '../models/contact-models/iemail';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxSpinnerModule, SpinnerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email?: IEmail;
  emailForm!: FormGroup;
  templateId = "template_mydlxf9";
  serviceId = 'service_zqc864m';
  publicKey = "TwP7pXPw--30-gLoR";

  successConfig: MatSnackBarConfig = {
    duration: 5000,
    verticalPosition: 'bottom', // Ensures it’s at the bottom of the screen
    horizontalPosition: 'center', // Centers the snackbar horizontally
    panelClass: ['success-snackbar'] // Apply your custom styles
  };

  failConfig: MatSnackBarConfig = {
    duration: 5000,
    verticalPosition: 'bottom', // Ensures it’s at the bottom of the screen
    horizontalPosition: 'center', // Centers the snackbar horizontally
    panelClass: ['error-snackbar'] // Apply your custom styles
  };
  constructor(private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar
  ) {
    this.emailForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      message: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]]
    })
  }
  sendEmail() {
    if (this.emailForm.valid) {
      this.spinner.show();
      emailjs.send(this.serviceId, this.templateId, {
        to_name: 'Flax United',
        subject: this.getControl('subject')?.value,
        from_name: this.getControl('fullName')?.value,
        message: this.getControl('message')?.value,
        email: this.getControl('email')?.value
      }, this.publicKey)
      .then(response => {
        this.spinner.hide();
        this.snackBar.open('Email sent successfully!', 'Close', this.successConfig);
      })
      .catch(error => {
        this.spinner.hide();
        this.snackBar.open('Failed to send email. Please try again.', 'Close', this.failConfig);
      });
    }
    
  }

  getControl(control: string) {
    return this.emailForm.get(control);
  }
}
