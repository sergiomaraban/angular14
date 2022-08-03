import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { ClientsModule } from './clients/clients.module';
import { ClientService } from './clients/services/clients.service';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    ListModule,
    ClientsModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
