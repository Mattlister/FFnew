import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    StarRatingComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
