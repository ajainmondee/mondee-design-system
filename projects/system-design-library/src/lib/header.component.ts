import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'lib-header',
  template: `
    <p>
      Header works!
    </p>
    <input type="text" [(ngModel)]="inputValue">
    <button type="button" (click)="inputValSearch()"></button>
  `,
  styles: [
  ]
})
export class HeaderComponent {

  formattedDate!: string;

  constructor(
    private commonService: CommonService
  ) { }

  inputValue: string = '';

  inputValSearch() {
    this.commonService.setSearchValue(this.inputValue);
    this.formattedDate = this.commonService.getFormattedDate(new Date());
  }

}
