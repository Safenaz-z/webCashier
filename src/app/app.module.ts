import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { OverlaySideMenuComponent } from './shared/overlay-side-menu/overlay-side-menu.component';
import { BillComponent } from './components/bill/bill.component';
import {NgbModal}
      from '@ng-bootstrap/ng-bootstrap';
      import {MatTabsModule} from '@angular/material/tabs';
      import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import { MenuComponent } from './components/menu/menu.component';
import { TestTabsComponent } from './test-tabs/test-tabs.component';
import { AddNewClientComponent } from './components/add-new-client/add-new-client.component';
import { AddShopsComponent } from './components/add-shops/add-shops.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { PaymentMethodChangeComponent } from './components/payment-method-change/payment-method-change.component';
import { BillHeaderComponent } from './components/bill-header/bill-header.component';
import { TotalbillCashComponent } from './components/totalbill-cash/totalbill-cash.component';
import { BillcalculateComponent } from './components/billcalculate/billcalculate.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverlaySideMenuComponent,
    BillComponent,
    ProductsComponent,
    MenuComponent,
    TestTabsComponent,
    AddNewClientComponent,
    AddShopsComponent,
    PaymentMethodsComponent,
    PaymentMethodChangeComponent,
    BillHeaderComponent,
    TotalbillCashComponent,
    BillcalculateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
     MatTabsModule,
    BrowserAnimationsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
