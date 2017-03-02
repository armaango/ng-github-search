import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import {GithubComponent} from './components/github.component';
@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent ,GithubComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
