import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DndComponent } from './dnd/dnd.component';
import { DndDirective } from 'src/app/dnd/dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    DndDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
