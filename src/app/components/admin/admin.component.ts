import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  profileForm: FormGroup;
  blogInfo: any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs.collection('blogInfo').snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
        )).subscribe((blogInfo) => {
          this.blogInfo = blogInfo[0];
          console.log('-------', this.blogInfo);
          this.createForm();
        });

  }

  createForm() {
    this.profileForm = new FormGroup({
      blogName: new FormControl(this.blogInfo.title, [Validators.required, Validators.minLength(1)]),
      blogDescription: new FormControl(this.blogInfo.description, [Validators.required, Validators.minLength(1)]),
    });
  }


  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.afs
        .collection('blogInfo')
        .doc(this.blogInfo.id)
        .set(
          { title: form.value.blogName, description: form.value.blogDescription },
          { merge: true })
        .then((res) => {
          console.log('Form was sent to server');
        });
    }
  }

}
