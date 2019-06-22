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
    selector: 'ngx-fifo-notice',
    templateUrl: 'fifo-notice.component.html',
})
export class FifonoticeComponent implements OnInit {
    noticesCol: any;
    notices: Observable<Notice[]>;
    noticeDoc: any;

    notice: Notice = {
        title: '',
        content: '',
        date: '',
    };

    modalHeader: string;
    modalContent: string;

    constructor(private activeModal: NgbActiveModal,
               ) {
    }

    ngOnInit() {
        // this.noticesCol = this.afs.collection('academy').doc('FIFO').collection('notice');
        // this.notices = this.noticesCol.valueChanges();
    }

    closeModal() {
        this.activeModal.close();
    }
}
