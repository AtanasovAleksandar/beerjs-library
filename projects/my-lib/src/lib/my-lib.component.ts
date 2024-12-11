import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [MyLibComponent],
  template: ` <p>my-lib works!</p> `,
  styles: ``,
})
export class MyLibComponent {}
