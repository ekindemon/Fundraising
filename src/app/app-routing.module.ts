import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from 'src/app/main/index/index.component'
import { AboutComponent } from 'src/app/main/about/about.component'
import { InfoComponent } from 'src/app/main/info/info.component';
import { ContactComponent } from 'src/app/main/contact/contact.component';
import { AuthorComponent } from "src/app/main/author/author.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: AboutComponent},
  { path: 'author', component: AuthorComponent},
  { path: 'about', component: AboutComponent},
  { path: 'info', component: InfoComponent},
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
