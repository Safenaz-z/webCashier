import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { TotalbillCashComponent } from './components/totalbill-cash/totalbill-cash.component';
import { TestTabsComponent } from './test-tabs/test-tabs.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'sales', component: HomeComponent, children: [
    ]
  },
  { path: 'payment-methods', component: PaymentMethodsComponent, children: [
  ]
},
{ path: 'totalbill', component: TotalbillCashComponent, children: [
]
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
