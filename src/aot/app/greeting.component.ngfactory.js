var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/greeting.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../app/app.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './common.css.shim';
export var Wrapper_GrettingComponent = (function () {
    function Wrapper_GrettingComponent(p0, p1) {
        this.changed = false;
        this.context = new import0.GrettingComponent(p0, p1);
    }
    Wrapper_GrettingComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_GrettingComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_GrettingComponent;
}());
var renderType_GrettingComponent_Host = null;
var _View_GrettingComponent_Host0 = (function (_super) {
    __extends(_View_GrettingComponent_Host0, _super);
    function _View_GrettingComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GrettingComponent_Host0, renderType_GrettingComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_GrettingComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'gretting', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_GrettingComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._GrettingComponent_0_4 = new Wrapper_GrettingComponent(this.parentInjector.get(import8.Router), this.parentInjector.get(import9.AppService));
        this._appEl_0.initComponent(this._GrettingComponent_0_4.context, [], compView_0);
        compView_0.create(this._GrettingComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_GrettingComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.GrettingComponent) && (0 === requestNodeIndex))) {
            return this._GrettingComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_GrettingComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._GrettingComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._GrettingComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_GrettingComponent_Host0;
}(import1.AppView));
function viewFactory_GrettingComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GrettingComponent_Host === null)) {
        (renderType_GrettingComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_GrettingComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var GrettingComponentNgFactory = new import11.ComponentFactory('gretting', viewFactory_GrettingComponent_Host0, import0.GrettingComponent);
var styles_GrettingComponent = [import12.styles];
var renderType_GrettingComponent = null;
var _View_GrettingComponent0 = (function (_super) {
    __extends(_View_GrettingComponent0, _super);
    function _View_GrettingComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GrettingComponent0, renderType_GrettingComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
    }
    _View_GrettingComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'content flex-column'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n	', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_1, 'i', new import4.InlineArray2(2, 'class', 'i-drop small center'), null);
        this._text_4 = this.renderer.createText(this._el_1, '\n	', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_1, 'div', new import4.InlineArray2(2, 'class', 'box font-small'), null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_1, '\n	', null);
        this._el_8 = import4.createRenderElement(this.renderer, this._el_1, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '\n		', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_8, 'h1', new import4.InlineArray2(2, 'class', 'text-center'), null);
        this._text_11 = this.renderer.createText(this._el_10, '浙江省矿联热矿水专委会', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n		', null);
        this._el_13 = import4.createRenderElement(this.renderer, this._el_8, 'h1', new import4.InlineArray4(4, 'class', 'text-center', 'style', 'margin-top: 10px'), null);
        this._text_14 = this.renderer.createText(this._el_13, '矿泉水科学认知测验', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n	', null);
        this._text_16 = this.renderer.createText(this._el_1, '\n	', null);
        this._text_17 = this.renderer.createText(this._el_1, '\n	', null);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_1, 'div', new import4.InlineArray2(2, 'class', 'box font-small'), null);
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._text_20 = this.renderer.createText(this._el_1, '\n	', null);
        this._el_21 = import4.createRenderElement(this.renderer, this._el_1, 'i', new import4.InlineArray2(2, 'class', 'i-start center'), null);
        this._text_22 = this.renderer.createText(this._el_1, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22
        ], [disposable_0], []);
        return null;
    };
    _View_GrettingComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_23 = import4.interpolate(1, '', this.context.content1, '');
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setText(this._text_6, currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = import4.interpolate(1, '', this.context.content2, '');
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setText(this._text_19, currVal_24);
            this._expr_24 = currVal_24;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_GrettingComponent0.prototype._handle_click_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_21_0 = (this.context.start() !== false);
        return (true && pd_21_0);
    };
    return _View_GrettingComponent0;
}(import1.AppView));
export function viewFactory_GrettingComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GrettingComponent === null)) {
        (renderType_GrettingComponent = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.Emulated, styles_GrettingComponent, {}));
    }
    return new _View_GrettingComponent0(viewUtils, parentInjector, declarationEl);
}
