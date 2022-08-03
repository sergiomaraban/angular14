import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MainPageComponent } from './main-page/main-page.component';
import { RepositoryClientsComponent } from './repository-clients/repository-clients.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    MainPageComponent,    
    RepositoryClientsComponent, 
    AddComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class ClientsModule { }
