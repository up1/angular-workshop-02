import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SpaceTargetPipe } from './pipes/space-target.pipe';
import { ProductPipe } from './pipes/product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    SpaceTargetPipe,
    ProductPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
