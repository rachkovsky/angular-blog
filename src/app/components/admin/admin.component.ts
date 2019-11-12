import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  profileForm;

  ngOnInit() {

    let userInfo = this.db.object('test-2c54d').valueChanges().subscribe((data) => {
      console.log(data);
    });

    
    console.log(userInfo);

    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });

    this.profileForm.get('firstName').valueChanges.subscribe(val => {
      // console.log(val);
      // console.log(this.profileForm.valid);
    });

  }

  onSubmit(form) {
    if (form.valid && form.touched) {
      //
    }
    console.log('=== ', form);
  }

}
