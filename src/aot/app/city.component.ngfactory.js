var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/city.component';
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
import * as import14 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/common/src/directives/ng_for';
export var Wrapper_CityComponent = (function () {
    function Wrapper_CityComponent(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.CityComponent(p0, p1, p2);
    }
    Wrapper_CityComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_CityComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_CityComponent;
}());
var renderType_CityComponent_Host = null;
var _View_CityComponent_Host0 = (function (_super) {
    __extends(_View_CityComponent_Host0, _super);
    function _View_CityComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_CityComponent_Host0, renderType_CityComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_CityComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'city', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_CityComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._CityComponent_0_4 = new Wrapper_CityComponent(this.parentInjector.get(import8.Router), this.parentInjector.get(import9.ActivatedRoute), this.parentInjector.get(import10.AppService));
        this._appEl_0.initComponent(this._CityComponent_0_4.context, [], compView_0);
        compView_0.create(this._CityComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_CityComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CityComponent) && (0 === requestNodeIndex))) {
            return this._CityComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_CityComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._CityComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._CityComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_CityComponent_Host0;
}(import1.AppView));
function viewFactory_CityComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CityComponent_Host === null)) {
        (renderType_CityComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_CityComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var CityComponentNgFactory = new import12.ComponentFactory('city', viewFactory_CityComponent_Host0, import0.CityComponent);
var styles_CityComponent = [
    '.content[_ngcontent-%COMP%] {\n		padding: 0;\n		max-width: unset !important;\n	}\n	\n	.item[_ngcontent-%COMP%] {\n		height: 50px;\n		line-height: 45px;\n		border-top: 1px solid #CCC;\n		margin-top: -1px;\n	}\n	\n	.inner[_ngcontent-%COMP%] {\n		max-width: 375px;\n		padding: 0 20px;\n	}',
    import13.styles
];
var renderType_CityComponent = null;
var _View_CityComponent0 = (function (_super) {
    __extends(_View_CityComponent0, _super);
    function _View_CityComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_CityComponent0, renderType_CityComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_CityComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'content'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n	', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'item text-center'), null);
        this._text_5 = this.renderer.createText(this._el_4, '请选择', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n	', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_7 = new import3.AppElement(7, 2, this, this._anchor_7);
        this._TemplateRef_7_5 = new import15.TemplateRef_(this._appEl_7, viewFactory_CityComponent1);
        this._NgFor_7_6 = new import14.Wrapper_NgFor(this._appEl_7.vcRef, this._TemplateRef_7_5, this.parentInjector.get(import16.IterableDiffers), this.ref);
        this._text_8 = this.renderer.createText(this._el_2, '\n', null);
        this.init([], [
            this._text_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._anchor_7,
            this._text_8
        ], [], []);
        return null;
    };
    _View_CityComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import17.NgFor) && (7 === requestNodeIndex))) {
            return this._NgFor_7_6.context;
        }
        return notFoundResult;
    };
    _View_CityComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this.context.list;
        this._NgFor_7_6.check_ngForOf(currVal_7_0_0, throwOnChange, false);
        this._NgFor_7_6.detectChangesInInputProps(this, this._anchor_7, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_CityComponent0;
}(import1.AppView));
export function viewFactory_CityComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_CityComponent === null)) {
        (renderType_CityComponent = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.Emulated, styles_CityComponent, {}));
    }
    return new _View_CityComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_CityComponent1 = (function (_super) {
    __extends(_View_CityComponent1, _super);
    function _View_CityComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_CityComponent1, renderType_CityComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_5 = import7.UNINITIALIZED;
    }
    _View_CityComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'item'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'inner'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n	', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [disposable_0], []);
        return null;
    };
    _View_CityComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_5 = import4.interpolate(1, '', this.context.$implicit.name, '');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_3, currVal_5);
            this._expr_5 = currVal_5;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_CityComponent1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.next(this.context.$implicit) !== false);
        return (true && pd_0_0);
    };
    return _View_CityComponent1;
}(import1.AppView));
function viewFactory_CityComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_CityComponent1(viewUtils, parentInjector, declarationEl);
}
