import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotpagesfoundComponent } from './shared/404/notpagesfound.component';
import { ProfileComponent } from './prifile/profile/profile.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [{ path: 'inversion', loadChildren: () => import('./inversion/inversion.module').then(m => m.InversionModule) }
                        , { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
                        , { path : 'profile', component : ProfileComponent}
                        , { path : 'table', component : TablesComponent}
                        , { path : '**', component : NotpagesfoundComponent}
                        
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
