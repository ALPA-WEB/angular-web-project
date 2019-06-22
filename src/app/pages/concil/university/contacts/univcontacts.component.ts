import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../../@core/data/users.service';
import {Observable} from 'rxjs/Observable';
interface User {
  name: string;
  role: string;
}
@Component({
  selector: 'ngx-univcontacts',
  styleUrls: ['./univcontacts.component.scss'],
  templateUrl: './univcontacts.component.html',
})
export class UnivContactsComponent implements OnInit, OnDestroy {
  advertisers: Observable<User[]>;
  finances: Observable<User[]>;
  executions: Observable<User[]>;
  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;
  UserSubscription: any;


  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
  ) {

    this.breakpoints = breakpointService.getBreakpointsMap();
    this.themeSubscription = themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {
    // this.Advertise = this.afs.collection('studentCouncil').doc('university').collection('members').doc('l2I9usSkn2Y5EGHYqdCW')
    //     .collection('advertise');
    // this.advertisers = this.Advertise.valueChanges();
    // this.Finance = this.afs.collection('studentCouncil').doc('university').collection('members').doc('l2I9usSkn2Y5EGHYqdCW')
    //     .collection('finance');
    // this.finances = this.Finance.valueChanges();
    // this.Execution = this.afs.collection('studentCouncil').doc('university').collection('members').doc('l2I9usSkn2Y5EGHYqdCW')
    //     .collection('execution');
    // this.executions = this.Execution.valueChanges();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
