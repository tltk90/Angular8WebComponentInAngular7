import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular 7 Project</h1>
    <ang8-element #ang8element item1="tzahi" item2="levi" item3="webiks" item4="angular"></ang8-element>
      
      <div *ngIf="fromExporter">
        {{fromExporter.toString()}}
      </div>
    
  `,
  styles: [
      `div{
      margin-top: 20px;
    }`
  ]
})
export class AppComponent implements OnInit{
  fromExporter: any[];
  @ViewChild('ang8element') el: ElementRef;


  ngOnInit(){
    this.el.nativeElement.addEventListener('export', (exporter) => {
      console.log(exporter)
      this.fromExporter = exporter.detail;
    });
  }
}
