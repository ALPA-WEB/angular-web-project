import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';

interface Notice {
    title: string;
    content: string;
    date: string;
}

@Component({
    selector: 'ngx-zeroone-notice',
    templateUrl: 'zeroone-notice.component.html',
})
export class ZeroonenoticeComponent implements OnInit {
    notices: Observable<Notice[]>;

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
        // this.noticesCol = this.afs.collection('academy').doc('ZERONE').collection('notice');
        // this.notices = this.noticesCol.valueChanges();
    }

    closeModal() {
        this.activeModal.close();
    }

}
