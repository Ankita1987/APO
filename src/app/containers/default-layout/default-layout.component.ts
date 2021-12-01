import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import {navItems1} from '../../_nav2';
import {oicnavItems} from '../../oic_nav';
import {AuthService} from '../../../services/auth.service';
import  {Router}  from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public navItems1 = navItems1;
  public oicnavItems = oicnavItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  
  constructor(@Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  logOut()
  {
    sessionStorage.clear();
    
    //Router.navigate(["/login"]);
  }
  ngOnDestroy(): void {
    this.changes.disconnect();
    
  }
}
