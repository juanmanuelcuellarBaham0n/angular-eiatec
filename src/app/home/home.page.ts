import { Component } from '@angular/core';

import { HomeService } from "./service/home.service";

import { ModalController } from "@ionic/angular"

import { ModalDeleteComponent } from '../shared/modal-delete/modal-delete.component';
import { ModalEditComponent } from '../shared/modal-edit/modal-edit.component';
import { ModalCreateComponent } from '../shared/modal-create/modal-create.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {

  page: number = 1
  numberPages: number = 0;

  columns: any[] = []

  data: any[] = []

  constructor(
    private homeService: HomeService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.listData(this.page)
    this.defineColumns()
  }

  defineColumns() {
    this.columns = [
      { prop: 'clase' },
      { prop: 'dia' },
      { prop: 'begin' },
      { prop: 'ends' },
    ]
  }

  nextPage() {
    if (this.page == this.numberPages) return
    this.page = this.page + 1
    this.listData(this.page)
  }

  previousPage() {
    if (this.page == 1) return
    this.page = this.page - 1
    this.listData(this.page)
  }

  listData(page: number) {
    this.homeService.getData(page).subscribe((response: any) => {
      if (response.data.length !== 0) {
        const arrayOfObjects = Object.entries(response.data).map(entry => entry[1]);
        response.data = arrayOfObjects
        this.data = response.data
        this.numberPages = response.last_page
      }
    })
  }

  async editRow(row: any) {
    await this.showModal(ModalEditComponent, row)
  }

  async deleteRow(row: any) {
    await this.showModal(ModalDeleteComponent, row)
  }

  async createRow() {
    await this.showModal(ModalCreateComponent)
  }

  async showModal(component: any, data?: any) {
    const modal = await this.modalController.create({
      component: component,
      componentProps: {
        'data': data
      }
    })
    await modal.present()
  }

}
