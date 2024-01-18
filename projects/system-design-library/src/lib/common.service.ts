import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  searchValue: string = '';

  constructor() { }

  setSearchValue(value: string) {
    this.searchValue = value;
  }

  getSearchValue() { 
    return this.searchValue;
  }

  getFormattedDate(date: Date) {
    return moment(date).format('MM/DD/YYYY');
  }

}
