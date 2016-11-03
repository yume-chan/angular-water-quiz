var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/not-found.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './common.css.shim';
export var Wrapper_NotFoundComponent = (function () {
    function Wrapper_NotFoundComponent() {
        this.changed = false;
        this.context = new import0.NotFoundComponent();
    }
    Wrapper_NotFoundComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_NotFoundComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_NotFoundComponent;
}());
var renderType_NotFoundComponent_Host = null;
var _View_NotFoundComponent_Host0 = (function (_super) {
    __extends(_View_NotFoundComponent_Host0, _super);
    function _View_NotFoundComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotFoundComponent_Host0, renderType_NotFoundComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NotFoundComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'not-found', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NotFoundComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NotFoundComponent_0_4 = new Wrapper_NotFoundComponent();
        this._appEl_0.initComponent(this._NotFoundComponent_0_4.context, [], compView_0);
        compView_0.create(this._NotFoundComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NotFoundComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NotFoundComponent) && (0 === requestNodeIndex))) {
            return this._NotFoundComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_NotFoundComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NotFoundComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NotFoundComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NotFoundComponent_Host0;
}(import1.AppView));
function viewFactory_NotFoundComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NotFoundComponent_Host === null)) {
        (renderType_NotFoundComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_NotFoundComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var NotFoundComponentNgFactory = new import9.ComponentFactory('not-found', viewFactory_NotFoundComponent_Host0, import0.NotFoundComponent);
var styles_NotFoundComponent = [import10.styles];
var renderType_NotFoundComponent = null;
var _View_NotFoundComponent0 = (function (_super) {
    __extends(_View_NotFoundComponent0, _super);
    function _View_NotFoundComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotFoundComponent0, renderType_NotFoundComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NotFoundComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'NOT FOUND', null);
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2
        ], [], []);
        return null;
    };
    return _View_NotFoundComponent0;
}(import1.AppView));
export function viewFactory_NotFoundComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NotFoundComponent === null)) {
        (renderType_NotFoundComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_NotFoundComponent, {}));
    }
    return new _View_NotFoundComponent0(viewUtils, parentInjector, declarationEl);
}
