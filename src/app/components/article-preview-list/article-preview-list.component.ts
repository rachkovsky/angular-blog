import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-preview-list',
  templateUrl: './article-preview-list.component.html',
  styleUrls: ['./article-preview-list.component.scss']
})
export class ArticlePreviewListComponent implements OnInit {

  articlePreviewlist: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.articlePreviewlist = this.route.snapshot.data.articles;
    console.log('articlePreviewlist: ', this.articlePreviewlist);
  }

  onArticleDelete(id) {
    console.log('onArticleDelete: ', id);
    this.articlePreviewlist = this.articlePreviewlist.filter(item => {
      return item.id !== id;
    });
  }

}
