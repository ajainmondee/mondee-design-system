import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SystemDesignLibraryModule { }
