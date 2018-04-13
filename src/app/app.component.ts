import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

const fruits = [
  { id: 1, name: 'Pera' },
  { id: 2, name: 'Manzana' },
  { id: 3, name: 'Mandarina' },
  { id: 4, name: 'Coco' },
  { id: 5, name: 'Banano' },
  { id: 6, name: 'Sandia' },
  { id: 7, name: 'Melon' },
  { id: 8, name: 'Papaya' },
  { id: 9, name: 'Uva' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  myControl: FormControl = new FormControl();

  fruits: any[];

  filteredOptions: Observable<string[]>;

  constructor() {
    this.fruits = fruits;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.fruits.filter(fruit =>
      fruit.name.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }
}
