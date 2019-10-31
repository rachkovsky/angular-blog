import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(public db: AngularFirestore) { }

  getArticles(): Observable<any[]> {
    return this.db.collection('articles').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getArticleById(id): Observable<any> {
    console.log(this.db.collection('articles').ref);
    return this.db.doc(`articles/${id}`).valueChanges();
  }

  addArticle(article) {
    return this.db.collection('articles').add({
      title: article.title,
      content: article.content
    });
  }

  deleteArticle(id: any) {
    return this.db.doc(`articles/${id}`).delete();
  }
}
