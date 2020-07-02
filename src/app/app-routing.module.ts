import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BaseComponent } from './layouts/base/base.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      /******************************* route rules ********************************/
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        //component: HomeComponent, calling a component
        //this way we resolve the call of a module
        loadChildren: () =>
          import('./components/home/home.module').then(
            (module) => module.HomeModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./components/product/product.module').then(
            (module) => module.ProductModule
          ),
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./components/contact/contact.module').then(
            (module) => module.ContactModule
          ),
      },
    ],
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
