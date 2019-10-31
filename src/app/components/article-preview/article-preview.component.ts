import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() preview: any;
  @Output() delete = new EventEmitter();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  deleteArticle(id) {
    this.articleService.deleteArticle(id)
      .then((res) => {
        console.log(res);
        this.delete.emit(id);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }


  editArticle() {
    //TBD....
  }

}
