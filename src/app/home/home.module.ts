import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ModalDeleteComponent } from "../shared/modal-delete/modal-delete.component"
import { ModalEditComponent } from "../shared/modal-edit/modal-edit.component"
import { ModalCreateComponent } from '../shared/modal-create/modal-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [
    HomePage,
    ModalDeleteComponent,
    ModalEditComponent,
    ModalCreateComponent
  ]
})
export class HomePageModule {}
