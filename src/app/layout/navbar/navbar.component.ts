import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isExpanded = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  menus: any = [
    {
      heading: 'Dashboard',
      icon: 'dashboard',
      link: 'dashboard',
      active: false
    },
    {
      heading: 'Todos',
      icon: 'assignment',
      link: 'todo',
      active: true
    },
    {
      heading: 'Create',
      icon: 'note_add',
      link: 'create',
      active: false
    },
    {
      heading: 'Reports',
      icon: 'description',
      link: 'report',
      active: false
    }
  ];
  constructor(private breakpointObserver: BreakpointObserver) { }

  public getMenuState(currentMenu: { active: any; }) {
    return currentMenu.active ? 'down' : 'up';
  }
  public toggleMenu(currentMenu: { active: boolean; }) {
    this.menus.forEach((menu: { active: boolean; }) => {
      if (menu === currentMenu) {
        currentMenu.active = !currentMenu.active;
      } else {
        menu.active = false;
      }
    });
  }
}
