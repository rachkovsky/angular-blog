import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule, AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticlePreviewListComponent } from './components/article-preview-list/article-preview-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

import { ArticleListResolverService } from './resolvers/article-list-resolver/article-list-resolver.service';
import { ArticleResolverService } from './resolvers/article-resolver/article-resolver.service';

import { NgIfAdminDirective } from './directives/ng-if-admin.directive';

import { DaysAgoPipe } from './pipes/daysAgo/days-ago.pipe';
import { ResumeComponent } from './components/resume/resume.component';
import { TimeToReadPipe } from './pipes/timeToRead/time-to-read.pipe';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const appRoutes: Routes = [
  {
    path: '', component: ArticlePreviewListComponent,
    resolve: {
      articles: ArticleListResolverService,
    }
  },
  {
    path: 'articles/:id', component: ArticleComponent,
    resolve: {
      article: ArticleResolverService,
    }
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'resume', component: ResumeComponent,
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlePreviewComponent,
    ArticlePreviewListComponent,
    FooterComponent,
    ArticleComponent,
    LoginComponent,
    AdminComponent,
    NgIfAdminDirective,
    DaysAgoPipe,
    ResumeComponent,
    TimeToReadPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    FormsModule,
  ],
  providers: [
    ArticleListResolverService,
    ArticleResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

