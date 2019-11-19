import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { CustomDirective } from './directives/custom.directive';
import { HomeComponent } from './components/home/home.component';
import { MyCustomIfDirective } from './directives/my-custom-if.directive';
import { CustomSortByPipe } from './pipes/custom-sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseTextPipe,
    CustomDirective,
    HomeComponent,
    MyCustomIfDirective,
    CustomSortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
