
/**
 * Created by chou6 on 2017-11-20.
 */
import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Intro {
    content: string;
}
@Component({
    selector: 'ngx-university',
    templateUrl: 'university.component.html',
    styleUrls: ['./university.component.scss'],
})
export class UniversityComponent implements OnInit{
    introsCol: AngularFirestoreCollection<Intro>;
    intros: Observable<Intro[]>;
    intro: Intro = {
      content: "",
    }

    constructor( private afs:AngularFirestore,) { }
    
    ngOnInit(){
        this.introsCol = this.afs.collection('studentCouncil').doc('university').collection('intro');
        this.intros = this.introsCol.valueChanges();    
    }
}
