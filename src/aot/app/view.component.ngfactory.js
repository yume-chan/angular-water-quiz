var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/view.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory_resolver';
import * as import9 from '../../app/app.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './common.css.shim';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/template_ref';
export var Wrapper_ViewComponent = (function () {
    function Wrapper_ViewComponent(p0, p1) {
        this.changed = false;
        this.context = new import0.ViewComponent(p0, p1);
    }
    Wrapper_ViewComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_ViewComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_ViewComponent;
}());
var renderType_ViewComponent_Host = null;
var _View_ViewComponent_Host0 = (function (_super) {
    __extends(_View_ViewComponent_Host0, _super);
    function _View_ViewComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ViewComponent_Host0, renderType_ViewComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ViewComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'view', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ViewComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ViewComponent_0_4 = new Wrapper_ViewComponent(this.parentInjector.get(import8.ComponentFactoryResolver), this.parentInjector.get(import9.AppService));
        this._appEl_0.initComponent(this._ViewComponent_0_4.context, [], compView_0);
        compView_0.create(this._ViewComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ViewComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ViewComponent) && (0 === requestNodeIndex))) {
            return this._ViewComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_ViewComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ViewComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ViewComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._ViewComponent_0_4.context.ngAfterViewInit();
            }
        }
    };
    return _View_ViewComponent_Host0;
}(import1.AppView));
function viewFactory_ViewComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ViewComponent_Host === null)) {
        (renderType_ViewComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_ViewComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ViewComponentNgFactory = new import11.ComponentFactory('view', viewFactory_ViewComponent_Host0, import0.ViewComponent);
var styles_ViewComponent = [import12.styles];
var renderType_ViewComponent = null;
var _View_ViewComponent0 = (function (_super) {
    __extends(_View_ViewComponent0, _super);
    function _View_ViewComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ViewComponent0, renderType_ViewComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ViewComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_container_0 = new import13.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_1 = new import3.AppElement(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import14.TemplateRef_(this._appEl_1, viewFactory_ViewComponent1);
        this._viewQuery_container_0.reset([this._appEl_1.vcRef]);
        this.context.container = this._viewQuery_container_0.first;
        this.init([], [
            this._text_0,
            this._anchor_1
        ], [], []);
        return null;
    };
    _View_ViewComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        return notFoundResult;
    };
    return _View_ViewComponent0;
}(import1.AppView));
export function viewFactory_ViewComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ViewComponent === null)) {
        (renderType_ViewComponent = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.Emulated, styles_ViewComponent, {}));
    }
    return new _View_ViewComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_ViewComponent1 = (function (_super) {
    __extends(_View_ViewComponent1, _super);
    function _View_ViewComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ViewComponent1, renderType_ViewComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ViewComponent1.prototype.createInternal = function (rootSelector) {
        this.init([], [], [], []);
        return null;
    };
    return _View_ViewComponent1;
}(import1.AppView));
function viewFactory_ViewComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ViewComponent1(viewUtils, parentInjector, declarationEl);
}
