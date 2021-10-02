import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuService } from './core/header/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'taf-app';
/*
export class AppComponent implements OnInit {

  title = 'taf-app';
  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];

  constructor(private _router: Router, private menuService: MenuService) {}

  ngOnInit() {

    this.menu = this.menuService.getMenu();
    this.listenRouting();
    console.log(this.menu);
  }

 listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        // breadcrumb
        target = this.menu;
        this.breadcrumbList.length = 0;
        // routing url ...etc
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
          // menu routing
          target = target.find(page => page.path.slice(2) === router);
          // breadcrumbList loop list
          this.breadcrumbList.push({
            name: target.name,
            // routing, routing
            path: (index === 0) ? target.path : `${this.breadcrumbList[index-1].path}/${target.path.slice(2)}`
          });

          if (index+1 !== routerList.length) {
            target = target.children;
          }
        });

        console.log(this.breadcrumbList);
      }
    });
  }*/
}
