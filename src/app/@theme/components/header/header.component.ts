import {Component, Input, OnInit} from '@angular/core';
import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {UserService} from '../../../@core/data/users.service';
import {AnalyticsService} from '../../../@core/utils/analytics.service';
import {User} from '../../../@core/data/user';

@Component({
    selector: 'ngx-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
    @Input() position = 'normal';
    user: User;

    userMenu = [
        {title: 'Log out'},
    ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              public userService: UserService,
              private analyticsService: AnalyticsService,
              ) {
    this.user = userService.getCurrentUser();
  }
  /*
  login() {
    // this.userService.googleLogin();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  */
  ngOnInit() {
    // if(this.afAuth.authState) {
    // this.afAuth.authState.subscribe((user: firebase.User) => this.user = {name : user.displayName});
    // }else{
    // this.user = {name : "Google Sign In!!"};
    // this.userService.getUsers()
    //   .subscribe((users: any) => this.user = users.nologin);
    // }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
  log(val) { console.warn(val); }
  onMenuClick($event) {
  }
}
