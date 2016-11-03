var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/router/src/router';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '../../app/app.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from './common.css.shim';
import * as import14 from './app.component.css.shim';
import * as import15 from '../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import16 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import17 from '@angular/router/src/router_outlet_map';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/router/src/directives/router_outlet';
import * as import21 from '@angular/common/src/directives/ng_if';
export var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.AppComponent(p0, p1, p2);
    }
    Wrapper_AppComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AppComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = null;
var _View_AppComponent_Host0 = (function (_super) {
    __extends(_View_AppComponent_Host0, _super);
    function _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'app', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new Wrapper_AppComponent(this.parentInjector.get(import8.Router), this.parentInjector.get(import9.ActivatedRoute), this.parentInjector.get(import10.AppService));
        this._appEl_0.initComponent(this._AppComponent_0_4.context, [], compView_0);
        compView_0.create(this._AppComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AppComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppComponent_Host0;
}(import1.AppView));
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var AppComponentNgFactory = new import12.ComponentFactory('app', viewFactory_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [
    import13.styles,
    import14.styles
];
var renderType_AppComponent = null;
var _View_AppComponent0 = (function (_super) {
    __extends(_View_AppComponent0, _super);
    function _View_AppComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_2 = import4.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import4.EMPTY_INLINE_ARRAY, null);
        this._appEl_2 = new import3.AppElement(2, null, this, this._el_2);
        this._RouterOutlet_2_5 = new import15.Wrapper_RouterOutlet(this.parentInjector.get(import17.RouterOutletMap), this._appEl_2.vcRef, this.parentInjector.get(import18.ComponentFactoryResolver), null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_4 = new import3.AppElement(4, null, this, this._anchor_4);
        this._TemplateRef_4_5 = new import19.TemplateRef_(this._appEl_4, viewFactory_AppComponent1);
        this._NgIf_4_6 = new import16.Wrapper_NgIf(this._appEl_4.vcRef, this._TemplateRef_4_5);
        this.init([], [
            this._text_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4
        ], [], []);
        return null;
    };
    _View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.RouterOutlet) && (2 === requestNodeIndex))) {
            return this._RouterOutlet_2_5.context;
        }
        if (((token === import19.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import21.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        return notFoundResult;
    };
    _View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RouterOutlet_2_5.detectChangesInInputProps(this, this._el_2, throwOnChange);
        var currVal_4_0_0 = this.context.loading;
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.detectChangesInInputProps(this, this._anchor_4, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterOutlet_2_5.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AppComponent0.prototype.destroyInternal = function () {
        this._RouterOutlet_2_5.context.ngOnDestroy();
    };
    return _View_AppComponent0;
}(import1.AppView));
export function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.Emulated, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_AppComponent1 = (function (_super) {
    __extends(_View_AppComponent1, _super);
    function _View_AppComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent1, renderType_AppComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'loading'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'rotate'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'i', new import4.InlineArray2(2, 'class', 'ring'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ], [], []);
        return null;
    };
    return _View_AppComponent1;
}(import1.AppView));
function viewFactory_AppComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_AppComponent1(viewUtils, parentInjector, declarationEl);
}
