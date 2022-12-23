import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import ngx-translate and the http loader
import {TranslateService} from '@ngx-translate/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// required for AOT compilation

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
// configure the imports
HttpClientModule,
TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
})
  ],
  exports: [
    TranslateModule
]
})

export class AppTranslateModule {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}

 }


