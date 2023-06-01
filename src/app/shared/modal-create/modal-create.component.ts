import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';

import { HomeService } from '../../home/service/home.service';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
})
export class ModalCreateComponent implements OnInit {
  @Input() data: any;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    dia: new FormControl('', Validators.required),
    begin: new FormControl('', Validators.required),
    ends: new FormControl('', Validators.required),
  });

  constructor(
    private modalController: ModalController,
    private homeService: HomeService
  ) {}

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }

  async onSubmit() {
    
    if (!this.form.valid) return;

    const {name, dia, begin, ends} = this.form.controls
    let body = {
      clase: name.value,
      dia: dia.value,
      begin: begin.value,
      ends: ends.value,
    };
    console.log("submit", body)
    this.homeService.addData(body).subscribe();
    await this.closeModal()
  }
}
