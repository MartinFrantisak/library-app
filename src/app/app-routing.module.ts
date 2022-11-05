import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/main-page/catalog/catalog.component';
import { UsersComponent } from './components/main-page/users/users.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
