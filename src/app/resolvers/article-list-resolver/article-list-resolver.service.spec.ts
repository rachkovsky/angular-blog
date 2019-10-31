import { TestBed, inject } from '@angular/core/testing';

import { ArticleListResolverService } from './article-list-resolver.service';

describe('ArticleListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleListResolverService]
    });
  });

  it('should be created', inject([ArticleListResolverService], (service: ArticleListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
