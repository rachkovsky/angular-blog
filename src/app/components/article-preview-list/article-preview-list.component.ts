import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-preview-list',
  templateUrl: './article-preview-list.component.html',
  styleUrls: ['./article-preview-list.component.scss']
})
export class ArticlePreviewListComponent implements OnInit {

  articlePreviewlist: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.articlePreviewlist = this.route.snapshot.data.articles;
    console.log('articlePreviewlist: ', this.articlePreviewlist);

    this.http.post('/api/test', {}).subscribe((data) => {
      console.log(data);
    });

  }

  onArticleDelete(id) {
    console.log('onArticleDelete: ', id);
    this.articlePreviewlist = this.articlePreviewlist.filter(item => {
      return item.id !== id;
    });
  }

}
