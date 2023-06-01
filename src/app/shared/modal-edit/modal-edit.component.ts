import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';
import { HomeService } from 'src/app/home/service/home.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
})
export class ModalEditComponent implements OnInit {
  @Input() data: any;

  obtainedData: any;

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

  ngOnInit() {
    const { clase, dia, begin, ends } = this.data
    this.form.controls['name'].setValue(clase);
    this.form.controls['dia'].setValue(dia);
    this.form.controls['begin'].setValue(begin);
    this.form.controls['ends'].setValue(ends);
  }

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
    
    this.homeService.editData(body, this.data.id).subscribe()
    await this.closeModal()
  }

}
