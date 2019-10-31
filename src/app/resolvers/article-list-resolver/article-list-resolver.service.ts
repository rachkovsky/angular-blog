import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ArticleService } from '../../services/article/article.service';
import { take } from 'rxjs/operators';


@Injectable()
export class ArticleListResolverService implements Resolve<any> {

  constructor(private articleService: ArticleService) { }

  resolve() {
    return this.articleService.getArticles().pipe(
      take(1)
    );
  }
}
