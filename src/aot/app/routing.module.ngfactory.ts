/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/routing.module';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from '@angular/common/src/location/location';
import * as import4 from '@angular/router/src/url_tree';
import * as import5 from '@angular/router/src/router_outlet_map';
import * as import6 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import7 from '@angular/router/src/router_preloader';
import * as import8 from '../../app/not-found-guard.module';
import * as import9 from '../../app/login-guard.module';
import * as import10 from '../../app/view-guard.module';
import * as import11 from '@angular/core/src/di/injector';
import * as import12 from './greeting.component.ngfactory';
import * as import13 from './answer.component.ngfactory';
import * as import14 from './city.component.ngfactory';
import * as import15 from './rank.component.ngfactory';
import * as import16 from './view.component.ngfactory';
import * as import17 from './submit.component.ngfactory';
import * as import18 from './not-found.component.ngfactory';
import * as import19 from '@angular/common/src/location/platform_location';
import * as import20 from '@angular/common/src/location/location_strategy';
import * as import21 from '@angular/core/src/linker/compiler';
import * as import22 from '../../app/greeting.component';
import * as import23 from '../../app/answer.component';
import * as import24 from '../../app/city.component';
import * as import25 from '../../app/rank.component';
import * as import26 from '../../app/view.component';
import * as import27 from '../../app/submit.component';
import * as import28 from '../../app/not-found.component';
import * as import29 from '@angular/core/src/application_ref';
import * as import30 from '../../app/app.service';
import * as import31 from '@angular/router/src/router';
import * as import32 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import33 from '@angular/router/src/router_config_loader';
import * as import34 from '@angular/router/src/router_state';
import * as import35 from '@angular/core/src/application_tokens';
class AppRoutingModuleInjector extends import0.NgModuleInjector<import1.AppRoutingModule> {
  _ROUTER_FORROOT_GUARD_0:any;
  _RouterModule_1:import2.RouterModule;
  _AppRoutingModule_2:import1.AppRoutingModule;
  __ROUTER_CONFIGURATION_3:any;
  __LocationStrategy_4:any;
  __Location_5:import3.Location;
  __UrlSerializer_6:import4.DefaultUrlSerializer;
  __RouterOutletMap_7:import5.RouterOutletMap;
  __NgModuleFactoryLoader_8:import6.SystemJsNgModuleLoader;
  __ROUTES_9:any[];
  __Router_10:any;
  __ActivatedRoute_11:any;
  _NoPreloading_12:import7.NoPreloading;
  _PreloadingStrategy_13:any;
  _RouterPreloader_14:import7.RouterPreloader;
  __PreloadAllModules_15:import7.PreloadAllModules;
  __APP_BOOTSTRAP_LISTENER_16:any[];
  __NotFoundGuard_17:import8.NotFoundGuard;
  __LoginGuard_18:import9.LoginGuard;
  __ViewGuard_19:import10.ViewGuard;
  constructor(parent:import11.Injector) {
    super(parent,[
      import12.GrettingComponentNgFactory,
      import13.AnswerComponentNgFactory,
      import14.CityComponentNgFactory,
      import14.CityComponentNgFactory,
      import15.RankComponentNgFactory,
      import16.ViewComponentNgFactory,
      import17.SubmitComponentNgFactory,
      import18.NotFoundComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _ROUTER_CONFIGURATION_3():any {
    if ((this.__ROUTER_CONFIGURATION_3 == (null as any))) { (this.__ROUTER_CONFIGURATION_3 = {useHash: true}); }
    return this.__ROUTER_CONFIGURATION_3;
  }
  get _LocationStrategy_4():any {
    if ((this.__LocationStrategy_4 == (null as any))) { (this.__LocationStrategy_4 = import2.provideLocationStrategy(this.parent.get(import19.PlatformLocation),this.parent.get(import20.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_3)); }
    return this.__LocationStrategy_4;
  }
  get _Location_5():import3.Location {
    if ((this.__Location_5 == (null as any))) { (this.__Location_5 = new import3.Location(this._LocationStrategy_4)); }
    return this.__Location_5;
  }
  get _UrlSerializer_6():import4.DefaultUrlSerializer {
    if ((this.__UrlSerializer_6 == (null as any))) { (this.__UrlSerializer_6 = new import4.DefaultUrlSerializer()); }
    return this.__UrlSerializer_6;
  }
  get _RouterOutletMap_7():import5.RouterOutletMap {
    if ((this.__RouterOutletMap_7 == (null as any))) { (this.__RouterOutletMap_7 = new import5.RouterOutletMap()); }
    return this.__RouterOutletMap_7;
  }
  get _NgModuleFactoryLoader_8():import6.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_8 == (null as any))) { (this.__NgModuleFactoryLoader_8 = new import6.SystemJsNgModuleLoader(this.parent.get(import21.Compiler),this.parent.get(import6.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_8;
  }
  get _ROUTES_9():any[] {
      if ((this.__ROUTES_9 == (null as any))) { (this.__ROUTES_9 = [[
        {
          path: '',
          component: import22.GrettingComponent,
          canActivate: [import9.LoginGuard]
        }
        ,
        {
          path: 'answer/:id',
          component: import23.AnswerComponent,
          canActivate: [import9.LoginGuard]
        }
        ,
        {
          path: 'answer',
          redirectTo: ''
        }
        ,
        {
          path: 'city',
          component: import24.CityComponent,
          canActivate: [import9.LoginGuard]
        }
        ,
        {
          path: 'city/:province',
          component: import24.CityComponent,
          canActivate: [import9.LoginGuard]
        }
        ,
        {
          path: 'rank',
          component: import25.RankComponent,
          canActivate: [import9.LoginGuard]
        }
        ,
        {
          path: 'question',
          component: import26.ViewComponent,
          canActivate: [import10.ViewGuard]
        }
        ,
        {
          path: 'submit',
          component: import27.SubmitComponent,
          canActivate: [import9.LoginGuard]
        }
        ,
        {
          path: '**',
          component: import28.NotFoundComponent,
          canActivate: [import8.NotFoundGuard]
        }

      ]
    ]); }
    return this.__ROUTES_9;
  }
  get _Router_10():any {
    if ((this.__Router_10 == (null as any))) { (this.__Router_10 = import2.setupRouter(this.parent.get(import29.ApplicationRef),this._UrlSerializer_6,this._RouterOutletMap_7,this._Location_5,this,this._NgModuleFactoryLoader_8,this.parent.get(import21.Compiler),this._ROUTES_9,this._ROUTER_CONFIGURATION_3)); }
    return this.__Router_10;
  }
  get _ActivatedRoute_11():any {
    if ((this.__ActivatedRoute_11 == (null as any))) { (this.__ActivatedRoute_11 = import2.rootRoute(this._Router_10)); }
    return this.__ActivatedRoute_11;
  }
  get _PreloadAllModules_15():import7.PreloadAllModules {
    if ((this.__PreloadAllModules_15 == (null as any))) { (this.__PreloadAllModules_15 = new import7.PreloadAllModules()); }
    return this.__PreloadAllModules_15;
  }
  get _APP_BOOTSTRAP_LISTENER_16():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_16 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_16 = [import2.initialRouterNavigation(this._Router_10,this.parent.get(import29.ApplicationRef),this._RouterPreloader_14,this._ROUTER_CONFIGURATION_3)]); }
    return this.__APP_BOOTSTRAP_LISTENER_16;
  }
  get _NotFoundGuard_17():import8.NotFoundGuard {
    if ((this.__NotFoundGuard_17 == (null as any))) { (this.__NotFoundGuard_17 = new import8.NotFoundGuard(this._Router_10)); }
    return this.__NotFoundGuard_17;
  }
  get _LoginGuard_18():import9.LoginGuard {
    if ((this.__LoginGuard_18 == (null as any))) { (this.__LoginGuard_18 = new import9.LoginGuard(this._Router_10,this.parent.get(import30.AppService))); }
    return this.__LoginGuard_18;
  }
  get _ViewGuard_19():import10.ViewGuard {
    if ((this.__ViewGuard_19 == (null as any))) { (this.__ViewGuard_19 = new import10.ViewGuard(this._Router_10,this.parent.get(import30.AppService))); }
    return this.__ViewGuard_19;
  }
  createInternal():import1.AppRoutingModule {
    this._ROUTER_FORROOT_GUARD_0 = import2.provideForRootGuard(this.parent.get(import31.Router,(null as any)));
    this._RouterModule_1 = new import2.RouterModule(this._ROUTER_FORROOT_GUARD_0);
    this._AppRoutingModule_2 = new import1.AppRoutingModule();
    this._NoPreloading_12 = new import7.NoPreloading();
    this._PreloadingStrategy_13 = this._NoPreloading_12;
    this._RouterPreloader_14 = new import7.RouterPreloader(this._Router_10,this._NgModuleFactoryLoader_8,this.parent.get(import21.Compiler),this,this._PreloadingStrategy_13);
    return this._AppRoutingModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_0; }
    if ((token === import2.RouterModule)) { return this._RouterModule_1; }
    if ((token === import1.AppRoutingModule)) { return this._AppRoutingModule_2; }
    if ((token === import2.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_3; }
    if ((token === import20.LocationStrategy)) { return this._LocationStrategy_4; }
    if ((token === import3.Location)) { return this._Location_5; }
    if ((token === import4.UrlSerializer)) { return this._UrlSerializer_6; }
    if ((token === import5.RouterOutletMap)) { return this._RouterOutletMap_7; }
    if ((token === import32.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_8; }
    if ((token === import33.ROUTES)) { return this._ROUTES_9; }
    if ((token === import31.Router)) { return this._Router_10; }
    if ((token === import34.ActivatedRoute)) { return this._ActivatedRoute_11; }
    if ((token === import7.NoPreloading)) { return this._NoPreloading_12; }
    if ((token === import7.PreloadingStrategy)) { return this._PreloadingStrategy_13; }
    if ((token === import7.RouterPreloader)) { return this._RouterPreloader_14; }
    if ((token === import7.PreloadAllModules)) { return this._PreloadAllModules_15; }
    if ((token === import35.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_16; }
    if ((token === import8.NotFoundGuard)) { return this._NotFoundGuard_17; }
    if ((token === import9.LoginGuard)) { return this._LoginGuard_18; }
    if ((token === import10.ViewGuard)) { return this._ViewGuard_19; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._RouterPreloader_14.ngOnDestroy();
  }
}
export const AppRoutingModuleNgFactory:import0.NgModuleFactory<import1.AppRoutingModule> = new import0.NgModuleFactory(AppRoutingModuleInjector,import1.AppRoutingModule);