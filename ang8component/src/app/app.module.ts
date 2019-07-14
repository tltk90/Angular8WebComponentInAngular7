import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {createCustomElement} from "@angular/elements";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [],
    entryComponents: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        try {
            const el = createCustomElement(AppComponent, {injector: this.injector});
            customElements.define('ang8-element', el);
        } catch (e) {
            console.error('unable define element ', e.message);
        }
    }
}
