import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  private _formBuilder = inject(FormBuilder);

  janeiroFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  fevereiroFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  marcoFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  abrilFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  maioFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  junhoFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  julhoFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  agostoFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  setembroFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  outubroFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  novembroFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  dezembroFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
