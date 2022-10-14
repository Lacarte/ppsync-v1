import { AbstractControl, FormGroup } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProfile',
  pure: false

})
export class FilterProfile implements PipeTransform {

 public transform(list: AbstractControl[], searchText: any): any {
    if (searchText == null || list == null) {
      return list;
    }

    //console.log("list",list);
    //console.log("searchText",searchText);

    return list.filter(
      (control) => control.value.description.toLowerCase().trim().indexOf(searchText.toLowerCase()) !== -1
    );  
  }
}
