import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormserviceService } from './formservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
