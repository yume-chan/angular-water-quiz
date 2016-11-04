var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '../../app/routing.module';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '@angular/core/src/application_init';
import * as import10 from '@angular/core/src/testability/testability';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/core/src/linker/compiler';
import * as import13 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import14 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import15 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import16 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import17 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import18 from '@angular/core/src/linker/view_utils';
import * as import19 from '@angular/platform-browser/src/browser/title';
import * as import20 from '@angular/http/src/backends/browser_xhr';
import * as import21 from '@angular/http/src/base_response_options';
import * as import22 from '@angular/http/src/backends/xhr_backend';
import * as import23 from '@angular/http/src/base_request_options';
import * as import24 from '@angular/common/src/location/location';
import * as import25 from '@angular/router/src/url_tree';
import * as import26 from '@angular/router/src/router_outlet_map';
import * as import27 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import28 from '@angular/router/src/router_preloader';
import * as import29 from '../../app/not-found-guard.module';
import * as import30 from '../../app/app.service';
import * as import31 from '../../app/login-guard.module';
import * as import32 from '../../app/view-guard.module';
import * as import34 from './greeting.component.ngfactory';
import * as import35 from './answer.component.ngfactory';
import * as import36 from './city.component.ngfactory';
import * as import37 from './rank.component.ngfactory';
import * as import38 from './view.component.ngfactory';
import * as import39 from './submit.component.ngfactory';
import * as import40 from './not-found.component.ngfactory';
import * as import41 from './question.component.ngfactory';
import * as import42 from './result.component.ngfactory';
import * as import43 from './app.component.ngfactory';
import * as import44 from '@angular/core/src/application_tokens';
import * as import45 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import46 from '@angular/platform-browser/src/dom/events/key_events';
import * as import47 from '@angular/core/src/zone/ng_zone';
import * as import48 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import49 from '@angular/common/src/location/platform_location';
import * as import50 from '@angular/common/src/location/location_strategy';
import * as import51 from '../../app/greeting.component';
import * as import52 from '../../app/answer.component';
import * as import53 from '../../app/city.component';
import * as import54 from '../../app/rank.component';
import * as import55 from '../../app/view.component';
import * as import56 from '../../app/submit.component';
import * as import57 from '../../app/not-found.component';
import * as import58 from '@angular/router/src/router';
import * as import59 from '@angular/core/src/console';
import * as import60 from '@angular/core/src/i18n/tokens';
import * as import61 from '@angular/core/src/error_handler';
import * as import62 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import63 from '@angular/platform-browser/src/dom/animation_driver';
import * as import64 from '@angular/core/src/render/api';
import * as import65 from '@angular/core/src/security';
import * as import66 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import67 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import68 from '@angular/http/src/interfaces';
import * as import69 from '@angular/http/src/http';
import * as import70 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import71 from '@angular/router/src/router_config_loader';
import * as import72 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import34.GrettingComponentNgFactory,
            import35.AnswerComponentNgFactory,
            import36.CityComponentNgFactory,
            import36.CityComponentNgFactory,
            import37.RankComponentNgFactory,
            import38.ViewComponentNgFactory,
            import39.SubmitComponentNgFactory,
            import40.NotFoundComponentNgFactory,
            import34.GrettingComponentNgFactory,
            import41.QuestionComponentNgFactory,
            import42.ResultComponentNgFactory,
            import43.AppComponentNgFactory
        ], [import43.AppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_8", {
        get: function () {
            if ((this.__LOCALE_ID_8 == null)) {
                (this.__LOCALE_ID_8 = 'en-US');
            }
            return this.__LOCALE_ID_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_9", {
        get: function () {
            if ((this.__NgLocalization_9 == null)) {
                (this.__NgLocalization_9 = new import8.NgLocaleLocalization(this._LOCALE_ID_8));
            }
            return this.__NgLocalization_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_14", {
        get: function () {
            if ((this.__ApplicationRef_14 == null)) {
                (this.__ApplicationRef_14 = this._ApplicationRef__13);
            }
            return this.__ApplicationRef_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_15", {
        get: function () {
            if ((this.__Compiler_15 == null)) {
                (this.__Compiler_15 = new import12.Compiler());
            }
            return this.__Compiler_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_16", {
        get: function () {
            if ((this.__APP_ID_16 == null)) {
                (this.__APP_ID_16 = import44._appIdRandomProviderFactory());
            }
            return this.__APP_ID_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_17", {
        get: function () {
            if ((this.__DOCUMENT_17 == null)) {
                (this.__DOCUMENT_17 = import4._document());
            }
            return this.__DOCUMENT_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_18", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_18 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_18 = new import13.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_19", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_19 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_19 = [
                    new import45.DomEventsPlugin(),
                    new import46.KeyEventsPlugin(),
                    new import13.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_18)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_20", {
        get: function () {
            if ((this.__EventManager_20 == null)) {
                (this.__EventManager_20 = new import14.EventManager(this._EVENT_MANAGER_PLUGINS_19, this.parent.get(import47.NgZone)));
            }
            return this.__EventManager_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_21", {
        get: function () {
            if ((this.__DomSharedStylesHost_21 == null)) {
                (this.__DomSharedStylesHost_21 = new import15.DomSharedStylesHost(this._DOCUMENT_17));
            }
            return this.__DomSharedStylesHost_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_22", {
        get: function () {
            if ((this.__AnimationDriver_22 == null)) {
                (this.__AnimationDriver_22 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_23", {
        get: function () {
            if ((this.__DomRootRenderer_23 == null)) {
                (this.__DomRootRenderer_23 = new import16.DomRootRenderer_(this._DOCUMENT_17, this._EventManager_20, this._DomSharedStylesHost_21, this._AnimationDriver_22));
            }
            return this.__DomRootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_24", {
        get: function () {
            if ((this.__RootRenderer_24 == null)) {
                (this.__RootRenderer_24 = import48._createConditionalRootRenderer(this._DomRootRenderer_23, this.parent.get(import48.NgProbeToken, null)));
            }
            return this.__RootRenderer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_25", {
        get: function () {
            if ((this.__DomSanitizer_25 == null)) {
                (this.__DomSanitizer_25 = new import17.DomSanitizerImpl());
            }
            return this.__DomSanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_26", {
        get: function () {
            if ((this.__Sanitizer_26 == null)) {
                (this.__Sanitizer_26 = this._DomSanitizer_25);
            }
            return this.__Sanitizer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_27", {
        get: function () {
            if ((this.__ViewUtils_27 == null)) {
                (this.__ViewUtils_27 = new import18.ViewUtils(this._RootRenderer_24, this._APP_ID_16, this._Sanitizer_26));
            }
            return this.__ViewUtils_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_28", {
        get: function () {
            if ((this.__IterableDiffers_28 == null)) {
                (this.__IterableDiffers_28 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_29", {
        get: function () {
            if ((this.__KeyValueDiffers_29 == null)) {
                (this.__KeyValueDiffers_29 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_30", {
        get: function () {
            if ((this.__SharedStylesHost_30 == null)) {
                (this.__SharedStylesHost_30 = this._DomSharedStylesHost_21);
            }
            return this.__SharedStylesHost_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_31", {
        get: function () {
            if ((this.__Title_31 == null)) {
                (this.__Title_31 = new import19.Title());
            }
            return this.__Title_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_32", {
        get: function () {
            if ((this.__BrowserXhr_32 == null)) {
                (this.__BrowserXhr_32 = new import20.BrowserXhr());
            }
            return this.__BrowserXhr_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_33", {
        get: function () {
            if ((this.__ResponseOptions_33 == null)) {
                (this.__ResponseOptions_33 = new import21.BaseResponseOptions());
            }
            return this.__ResponseOptions_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_34", {
        get: function () {
            if ((this.__XSRFStrategy_34 == null)) {
                (this.__XSRFStrategy_34 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_35", {
        get: function () {
            if ((this.__XHRBackend_35 == null)) {
                (this.__XHRBackend_35 = new import22.XHRBackend(this._BrowserXhr_32, this._ResponseOptions_33, this._XSRFStrategy_34));
            }
            return this.__XHRBackend_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_36", {
        get: function () {
            if ((this.__RequestOptions_36 == null)) {
                (this.__RequestOptions_36 = new import23.BaseRequestOptions());
            }
            return this.__RequestOptions_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_37", {
        get: function () {
            if ((this.__Http_37 == null)) {
                (this.__Http_37 = import5.httpFactory(this._XHRBackend_35, this._RequestOptions_36));
            }
            return this.__Http_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_38", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_38 == null)) {
                (this.__ROUTER_CONFIGURATION_38 = { useHash: true });
            }
            return this.__ROUTER_CONFIGURATION_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_39", {
        get: function () {
            if ((this.__LocationStrategy_39 == null)) {
                (this.__LocationStrategy_39 = import6.provideLocationStrategy(this.parent.get(import49.PlatformLocation), this.parent.get(import50.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_38));
            }
            return this.__LocationStrategy_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_40", {
        get: function () {
            if ((this.__Location_40 == null)) {
                (this.__Location_40 = new import24.Location(this._LocationStrategy_39));
            }
            return this.__Location_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_41", {
        get: function () {
            if ((this.__UrlSerializer_41 == null)) {
                (this.__UrlSerializer_41 = new import25.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_42", {
        get: function () {
            if ((this.__RouterOutletMap_42 == null)) {
                (this.__RouterOutletMap_42 = new import26.RouterOutletMap());
            }
            return this.__RouterOutletMap_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_43", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_43 == null)) {
                (this.__NgModuleFactoryLoader_43 = new import27.SystemJsNgModuleLoader(this._Compiler_15, this.parent.get(import27.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_44", {
        get: function () {
            if ((this.__ROUTES_44 == null)) {
                (this.__ROUTES_44 = [[
                        {
                            path: 'greeting',
                            component: import51.GrettingComponent,
                            canActivate: [import31.LoginGuard]
                        },
                        {
                            path: 'answer/:id',
                            component: import52.AnswerComponent,
                            canActivate: [import31.LoginGuard]
                        },
                        {
                            path: 'answer',
                            redirectTo: ''
                        },
                        {
                            path: 'city',
                            component: import53.CityComponent,
                            canActivate: [import31.LoginGuard]
                        },
                        {
                            path: 'city/:province',
                            component: import53.CityComponent,
                            canActivate: [import31.LoginGuard]
                        },
                        {
                            path: 'rank',
                            component: import54.RankComponent,
                            canActivate: [import31.LoginGuard]
                        },
                        {
                            path: 'question',
                            component: import55.ViewComponent,
                            canActivate: [import32.ViewGuard]
                        },
                        {
                            path: 'submit',
                            component: import56.SubmitComponent,
                            canActivate: [import31.LoginGuard]
                        },
                        {
                            path: '**',
                            component: import57.NotFoundComponent,
                            canActivate: [import29.NotFoundGuard]
                        }
                    ]
                ]);
            }
            return this.__ROUTES_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_45", {
        get: function () {
            if ((this.__Router_45 == null)) {
                (this.__Router_45 = import6.setupRouter(this._ApplicationRef_14, this._UrlSerializer_41, this._RouterOutletMap_42, this._Location_40, this, this._NgModuleFactoryLoader_43, this._Compiler_15, this._ROUTES_44, this._ROUTER_CONFIGURATION_38));
            }
            return this.__Router_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_46", {
        get: function () {
            if ((this.__ActivatedRoute_46 == null)) {
                (this.__ActivatedRoute_46 = import6.rootRoute(this._Router_45));
            }
            return this.__ActivatedRoute_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_50", {
        get: function () {
            if ((this.__PreloadAllModules_50 == null)) {
                (this.__PreloadAllModules_50 = new import28.PreloadAllModules());
            }
            return this.__PreloadAllModules_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_51", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_51 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_51 = [import6.initialRouterNavigation(this._Router_45, this._ApplicationRef_14, this._RouterPreloader_49, this._ROUTER_CONFIGURATION_38)]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NotFoundGuard_52", {
        get: function () {
            if ((this.__NotFoundGuard_52 == null)) {
                (this.__NotFoundGuard_52 = new import29.NotFoundGuard(this._Router_45));
            }
            return this.__NotFoundGuard_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AppService_53", {
        get: function () {
            if ((this.__AppService_53 == null)) {
                (this.__AppService_53 = new import30.AppService(this._Http_37, this._Router_45));
            }
            return this.__AppService_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LoginGuard_54", {
        get: function () {
            if ((this.__LoginGuard_54 == null)) {
                (this.__LoginGuard_54 = new import31.LoginGuard(this._Router_45, this._AppService_53));
            }
            return this.__LoginGuard_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewGuard_55", {
        get: function () {
            if ((this.__ViewGuard_55 == null)) {
                (this.__ViewGuard_55 = new import32.ViewGuard(this._Router_45, this._AppService_53));
            }
            return this.__ViewGuard_55;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import58.Router, null));
        this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
        this._AppRoutingModule_6 = new import7.AppRoutingModule();
        this._AppModule_7 = new import1.AppModule();
        this._ErrorHandler_10 = import4.errorHandler();
        this._ApplicationInitStatus_11 = new import9.ApplicationInitStatus(this.parent.get(import9.APP_INITIALIZER, null));
        this._Testability_12 = new import10.Testability(this.parent.get(import47.NgZone));
        this._ApplicationRef__13 = new import11.ApplicationRef_(this.parent.get(import47.NgZone), this.parent.get(import59.Console), this, this._ErrorHandler_10, this, this._ApplicationInitStatus_11, this.parent.get(import10.TestabilityRegistry, null), this._Testability_12);
        this._NoPreloading_47 = new import28.NoPreloading();
        this._PreloadingStrategy_48 = this._NoPreloading_47;
        this._RouterPreloader_49 = new import28.RouterPreloader(this._Router_45, this._NgModuleFactoryLoader_43, this._Compiler_15, this, this._PreloadingStrategy_48);
        return this._AppModule_7;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_4;
        }
        if ((token === import6.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import7.AppRoutingModule)) {
            return this._AppRoutingModule_6;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_7;
        }
        if ((token === import60.LOCALE_ID)) {
            return this._LOCALE_ID_8;
        }
        if ((token === import8.NgLocalization)) {
            return this._NgLocalization_9;
        }
        if ((token === import61.ErrorHandler)) {
            return this._ErrorHandler_10;
        }
        if ((token === import9.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_11;
        }
        if ((token === import10.Testability)) {
            return this._Testability_12;
        }
        if ((token === import11.ApplicationRef_)) {
            return this._ApplicationRef__13;
        }
        if ((token === import11.ApplicationRef)) {
            return this._ApplicationRef_14;
        }
        if ((token === import12.Compiler)) {
            return this._Compiler_15;
        }
        if ((token === import44.APP_ID)) {
            return this._APP_ID_16;
        }
        if ((token === import62.DOCUMENT)) {
            return this._DOCUMENT_17;
        }
        if ((token === import13.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_18;
        }
        if ((token === import14.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_19;
        }
        if ((token === import14.EventManager)) {
            return this._EventManager_20;
        }
        if ((token === import15.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_21;
        }
        if ((token === import63.AnimationDriver)) {
            return this._AnimationDriver_22;
        }
        if ((token === import16.DomRootRenderer)) {
            return this._DomRootRenderer_23;
        }
        if ((token === import64.RootRenderer)) {
            return this._RootRenderer_24;
        }
        if ((token === import17.DomSanitizer)) {
            return this._DomSanitizer_25;
        }
        if ((token === import65.Sanitizer)) {
            return this._Sanitizer_26;
        }
        if ((token === import18.ViewUtils)) {
            return this._ViewUtils_27;
        }
        if ((token === import66.IterableDiffers)) {
            return this._IterableDiffers_28;
        }
        if ((token === import67.KeyValueDiffers)) {
            return this._KeyValueDiffers_29;
        }
        if ((token === import15.SharedStylesHost)) {
            return this._SharedStylesHost_30;
        }
        if ((token === import19.Title)) {
            return this._Title_31;
        }
        if ((token === import20.BrowserXhr)) {
            return this._BrowserXhr_32;
        }
        if ((token === import21.ResponseOptions)) {
            return this._ResponseOptions_33;
        }
        if ((token === import68.XSRFStrategy)) {
            return this._XSRFStrategy_34;
        }
        if ((token === import22.XHRBackend)) {
            return this._XHRBackend_35;
        }
        if ((token === import23.RequestOptions)) {
            return this._RequestOptions_36;
        }
        if ((token === import69.Http)) {
            return this._Http_37;
        }
        if ((token === import6.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_38;
        }
        if ((token === import50.LocationStrategy)) {
            return this._LocationStrategy_39;
        }
        if ((token === import24.Location)) {
            return this._Location_40;
        }
        if ((token === import25.UrlSerializer)) {
            return this._UrlSerializer_41;
        }
        if ((token === import26.RouterOutletMap)) {
            return this._RouterOutletMap_42;
        }
        if ((token === import70.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_43;
        }
        if ((token === import71.ROUTES)) {
            return this._ROUTES_44;
        }
        if ((token === import58.Router)) {
            return this._Router_45;
        }
        if ((token === import72.ActivatedRoute)) {
            return this._ActivatedRoute_46;
        }
        if ((token === import28.NoPreloading)) {
            return this._NoPreloading_47;
        }
        if ((token === import28.PreloadingStrategy)) {
            return this._PreloadingStrategy_48;
        }
        if ((token === import28.RouterPreloader)) {
            return this._RouterPreloader_49;
        }
        if ((token === import28.PreloadAllModules)) {
            return this._PreloadAllModules_50;
        }
        if ((token === import44.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_51;
        }
        if ((token === import29.NotFoundGuard)) {
            return this._NotFoundGuard_52;
        }
        if ((token === import30.AppService)) {
            return this._AppService_53;
        }
        if ((token === import31.LoginGuard)) {
            return this._LoginGuard_54;
        }
        if ((token === import32.ViewGuard)) {
            return this._ViewGuard_55;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__13.ngOnDestroy();
        this._RouterPreloader_49.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
