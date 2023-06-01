import { Component, OnInit, Input } from '@angular/core';

import { ModalController } from "@ionic/angular"
import { HomeService } from 'src/app/home/service/home.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
})
export class ModalDeleteComponent  implements OnInit {
  @Input() data: any;

  constructor(
    private modalController: ModalController,
    private homeService: HomeService
  ) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }

  async onDelete() {
    this.homeService.deleteData(this.data.id).subscribe();
    await this.closeModal()
  }

}
