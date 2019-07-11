import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'app-root',
  template: `
    <h1>Custome component</h1>
    <div>
    <ul>
    <li>{{item1}}</li>
    <li>{{item2}}</li>
    <li>{{item3}}</li>
    <li>{{item4}}</li>
    </ul>
    </div>
      <button (click)="exportList()">
        export list
      </button>
  `,
  styles: []
})
export class AppComponent {
  @Input() item1: string;
  @Input() item2: string;
  @Input() item3: string;
  @Input() item4: string;

  @Output() export = new EventEmitter<any[]>();

  exportList() {
    const list = [this.item1, this.item2, this.item3, this.item4];
    this.export.emit(list)
  }

}
