import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'lib-button',
  template: `
    <p>
      Button works!
    </p>
    <button> {{ searchValue }} </button>
    <p> Today's formatted date is: {{ formattedDate }} </p>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit  {

  constructor(
    private commonService: CommonService
  ) { }

  searchValue: string = '';
  formattedDate!: string;

  ngOnInit(): void {
      this.searchValue = this.commonService.getSearchValue();
      this.formattedDate = this.commonService.getFormattedDate(new Date());
  }

}
