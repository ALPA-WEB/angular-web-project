import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// import { AcademyService } from '../../../@core/data/academy.service';
import {Observable} from 'rxjs/Observable';

interface Notice {
    title: string;
    content: string;
    date: string;
}

@Component({
    selector: 'ngx-hycube-notice',
    templateUrl: 'hycube-notice.component.html',
})
export class HycubenoticeComponent implements OnInit {
    notices: Observable<Notice[]>;
    notice: Notice = {
        title: '',
        content: '',
        date: '',
    };

    modalHeader: string;
    modalContent: string;

    constructor(private activeModal: NgbActiveModal) {
    }

    ngOnInit() {
        // this.noticesCol = this.afs.collection('academy').doc('HYCUBE').collection('notice');
        // this.notices = this.noticesCol.valueChanges();
    }
    closeModal() {
        this.activeModal.close();
    }

}
