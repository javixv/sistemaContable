import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { NotpagesfoundComponent } from './shared/404/notpagesfound.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent} from './shared/Topbar/topbar.component';
import { ProfileComponent } from './prifile/profile/profile.component';
import { TablesComponent } from './components/tables/tables.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotpagesfoundComponent,
    SidebarComponent,
    FooterComponent,
    TopbarComponent,
    ProfileComponent,    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    
  ],exports :[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
