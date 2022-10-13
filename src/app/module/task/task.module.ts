import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ]
})
export class TaskModule { }
