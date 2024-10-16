import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{
  items!: MenuItem[];

  constructor(private router: Router) {
    this.items = [

    ];
  }

  navegarPara(url: string) {
    this.router.navigate([url]);
  }
}
