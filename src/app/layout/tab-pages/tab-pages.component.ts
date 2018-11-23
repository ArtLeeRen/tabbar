import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-pages',
  templateUrl: './tab-pages.component.html',
  styleUrls: ['./tab-pages.component.less']
})
export class TabPagesComponent implements OnInit {

  /**tab索引 */
  tabIndex: number = 0;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.tabIndex = this.getTabIndexByRoute();
  }

  tabbarStyle: object = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
  };

  tabPress(event) {
    console.log('event: ', event);
    this.router.navigate([event.key]);
  }

  private getTabIndexByRoute(): number {
    let next = this.activatedRoute;
    while (next.firstChild) next = next.firstChild;
    const data = (next.snapshot && next.snapshot.data) || {};
    if (data.tabIndex)
      return data.tabIndex;
    return 0;
  }
}
