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
    selector: 'ngx-alpa-notice',
    templateUrl: 'alpa-notice.component.html',
})
export class AlpanoticeComponent implements OnInit {
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
    }

    closeModal() {
        this.activeModal.close();
    }

    // addNotice(){
    //   this.afs.collection('notice').add({
    //     'title': this.notice.title,
    //     'content': this.notice.content,
    //   })
    // }
}
