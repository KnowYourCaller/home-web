import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PrivacyComponent } from './privacy/privacy.component'
import { SearchComponent } from './search/search.component'
import { TosComponent } from './tos/tos.component'

const routes: Routes = [

  { path: 'search', component: SearchComponent },

  { path: 'tos', component: TosComponent },
  { path: 'terms', component: TosComponent },
  { path: 'privacy', component: PrivacyComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
