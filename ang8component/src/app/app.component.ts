import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ang8-element',
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
        ul:first-child, ul:last-child {
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
  encapsulation: ViewEncapsulation.ShadowDom
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
