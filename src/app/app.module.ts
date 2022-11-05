import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CatalogComponent } from './components/main-page/catalog/catalog.component';
import { UsersComponent } from './components/main-page/users/users.component';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, SidebarComponent, CatalogComponent, UsersComponent, SidebarItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
