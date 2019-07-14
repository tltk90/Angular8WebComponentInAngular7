import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  //selector: 'ang8-element',
  template: `
    <h1>Custome component</h1>
    <div>
    <ul *ngIf="items">
    <li *ngFor="let item of items">{{item}}</li>
    </ul>
    </div>
    <div class="button">
      <button (click)="exportList()">
        export list
      </button>
    </div>
  `,
  styles: [
      `
      h1 {
        background-color: #aed4a1;
        color: #99f1ee;
      }
        div{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-content: center;
        }
        li{
          font-style: italic;
        }
        li:first-child, li:last-child {
          text-decoration: underline;
        }
        div.button{
          display: inline-flex;
          -webkit-box-shadow: 1px 3px 3px 6px #000;-moz-box-shadow: 1px 3px 3px 6px #000;box-shadow: 1px 3px 3px 6px #000;
          border-radius: 100%;
        }
        div.button button {
          background-color: transparent;
          border: none;
        }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  @Input() items: string[];

  @Output() export = new EventEmitter<any[]>();

  exportList() {
    this.export.emit(this.items)
  }

}
