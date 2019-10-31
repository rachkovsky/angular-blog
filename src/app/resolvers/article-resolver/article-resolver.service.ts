import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ArticleService } from '../../services/article/article.service';
import { take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ArticleResolverService implements Resolve<any> {

  constructor(
    private articleService: ArticleService,
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.articleService.getArticleById(route.paramMap.get('id')).pipe(
      take(1)
    );
  }
}
