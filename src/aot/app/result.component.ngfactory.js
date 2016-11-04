var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/result.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../app/app.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './common.css.shim';
import * as import13 from './result.component.css.shim';
import * as import14 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/router/src/router_state';
import * as import18 from '@angular/common/src/location/location_strategy';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from '@angular/router/src/directives/router_link';
import * as import21 from '@angular/core/src/security';
export var Wrapper_ResultComponent = (function () {
    function Wrapper_ResultComponent(p0, p1) {
        this.changed = false;
        this.context = new import0.ResultComponent(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_ResultComponent.prototype.check_result = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.result = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ResultComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ResultComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_ResultComponent;
}());
var renderType_ResultComponent_Host = null;
var _View_ResultComponent_Host0 = (function (_super) {
    __extends(_View_ResultComponent_Host0, _super);
    function _View_ResultComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent_Host0, renderType_ResultComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'result', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ResultComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ResultComponent_0_4 = new Wrapper_ResultComponent(this.parentInjector.get(import8.Router), this.parentInjector.get(import9.AppService));
        this._appEl_0.initComponent(this._ResultComponent_0_4.context, [], compView_0);
        compView_0.create(this._ResultComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ResultComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ResultComponent) && (0 === requestNodeIndex))) {
            return this._ResultComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_ResultComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ResultComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._ResultComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ResultComponent_Host0;
}(import3.AppView));
function viewFactory_ResultComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ResultComponent_Host === null)) {
        (renderType_ResultComponent_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_ResultComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var ResultComponentNgFactory = new import11.ComponentFactory('result', viewFactory_ResultComponent_Host0, import0.ResultComponent);
var styles_ResultComponent = [
    import12.styles,
    import13.styles
];
var renderType_ResultComponent = null;
var _View_ResultComponent0 = (function (_super) {
    __extends(_View_ResultComponent0, _super);
    function _View_ResultComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent0, renderType_ResultComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_60 = import1.UNINITIALIZED;
        this._expr_61 = import1.UNINITIALIZED;
        this._expr_62 = import1.UNINITIALIZED;
    }
    _View_ResultComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_2 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray2(2, 'class', 'content'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n	', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_2, 'div', new import2.InlineArray2(2, 'class', 'wheel center big'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n		', null);
        this._el_6 = import2.createRenderElement(this.renderer, this._el_4, 'i', new import2.InlineArray2(2, 'class', 'i-wheel'), null);
        this._text_7 = this.renderer.createText(this._el_4, '\n		', null);
        this._el_8 = import2.createRenderElement(this.renderer, this._el_4, 'div', new import2.InlineArray2(2, 'class', 'circle normal'), null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_4, '\n		', null);
        this._el_11 = import2.createRenderElement(this.renderer, this._el_4, 'div', new import2.InlineArray2(2, 'class', 'circle back'), null);
        this._text_12 = this.renderer.createText(this._el_4, '\n	', null);
        this._text_13 = this.renderer.createText(this._el_2, '\n	', null);
        this._el_14 = import2.createRenderElement(this.renderer, this._el_2, 'div', new import2.InlineArray2(2, 'class', 'white'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n		', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._appEl_16 = new import5.AppElement(16, 14, this, this._anchor_16);
        this._TemplateRef_16_5 = new import16.TemplateRef_(this._appEl_16, viewFactory_ResultComponent1);
        this._NgIf_16_6 = new import14.Wrapper_NgIf(this._appEl_16.vcRef, this._TemplateRef_16_5);
        this._text_17 = this.renderer.createText(this._el_14, '\n		', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._appEl_18 = new import5.AppElement(18, 14, this, this._anchor_18);
        this._TemplateRef_18_5 = new import16.TemplateRef_(this._appEl_18, viewFactory_ResultComponent2);
        this._NgIf_18_6 = new import14.Wrapper_NgIf(this._appEl_18.vcRef, this._TemplateRef_18_5);
        this._text_19 = this.renderer.createText(this._el_14, '\n		', null);
        this._el_20 = import2.createRenderElement(this.renderer, this._el_14, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, '', null);
        this._text_22 = this.renderer.createText(this._el_14, '\n		', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._appEl_23 = new import5.AppElement(23, 14, this, this._anchor_23);
        this._TemplateRef_23_5 = new import16.TemplateRef_(this._appEl_23, viewFactory_ResultComponent3);
        this._NgIf_23_6 = new import14.Wrapper_NgIf(this._appEl_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_14, '\n		', null);
        this._el_25 = import2.createRenderElement(this.renderer, this._el_14, 'div', new import2.InlineArray2(2, 'class', 'font-small text-center'), null);
        this._text_26 = this.renderer.createText(this._el_25, '提交结果后，会保存并显示在浙江省矿联官网上', null);
        this._text_27 = this.renderer.createText(this._el_14, '\n		', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_14, null);
        this._appEl_28 = new import5.AppElement(28, 14, this, this._anchor_28);
        this._TemplateRef_28_5 = new import16.TemplateRef_(this._appEl_28, viewFactory_ResultComponent6);
        this._NgIf_28_6 = new import14.Wrapper_NgIf(this._appEl_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_14, '\n		', null);
        this._el_30 = import2.createRenderElement(this.renderer, this._el_14, 'a', new import2.InlineArray2(2, 'class', 'button big blue center'), null);
        this._text_31 = this.renderer.createText(this._el_30, '分享朋友圈 辣一辣小伙伴们', null);
        this._text_32 = this.renderer.createText(this._el_14, '\n		', null);
        this._el_33 = import2.createRenderElement(this.renderer, this._el_14, 'a', new import2.InlineArray4(4, 'class', 'button big blue center', 'routerLink', ''), null);
        this._RouterLinkWithHref_33_3 = new import15.Wrapper_RouterLinkWithHref(this.parentInjector.get(import8.Router), this.parentInjector.get(import17.ActivatedRoute), this.parentInjector.get(import18.LocationStrategy));
        this._text_34 = this.renderer.createText(this._el_33, '分数不够 重新挑战', null);
        this._text_35 = this.renderer.createText(this._el_14, '\n	', null);
        this._text_36 = this.renderer.createText(this._el_2, '\n\n	', null);
        this._anchor_37 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_37 = new import5.AppElement(37, 2, this, this._anchor_37);
        this._TemplateRef_37_5 = new import16.TemplateRef_(this._appEl_37, viewFactory_ResultComponent7);
        this._NgIf_37_6 = new import14.Wrapper_NgIf(this._appEl_37.vcRef, this._TemplateRef_37_5);
        this._text_38 = this.renderer.createText(this._el_2, '\n\n	', null);
        this._anchor_39 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_39 = new import5.AppElement(39, 2, this, this._anchor_39);
        this._TemplateRef_39_5 = new import16.TemplateRef_(this._appEl_39, viewFactory_ResultComponent8);
        this._NgIf_39_6 = new import14.Wrapper_NgIf(this._appEl_39.vcRef, this._TemplateRef_39_5);
        this._text_40 = this.renderer.createText(this._el_2, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_30, 'click', this.eventHandler(this._handle_click_30_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_33, 'click', this.eventHandler(this._handle_click_33_0.bind(this)));
        this.init([], [
            this._text_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._anchor_37,
            this._text_38,
            this._anchor_39,
            this._text_40
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_ResultComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import19.NgIf) && (16 === requestNodeIndex))) {
            return this._NgIf_16_6.context;
        }
        if (((token === import16.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import19.NgIf) && (18 === requestNodeIndex))) {
            return this._NgIf_18_6.context;
        }
        if (((token === import16.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import19.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        if (((token === import16.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import19.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        if (((token === import20.RouterLinkWithHref) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._RouterLinkWithHref_33_3.context;
        }
        if (((token === import16.TemplateRef) && (37 === requestNodeIndex))) {
            return this._TemplateRef_37_5;
        }
        if (((token === import19.NgIf) && (37 === requestNodeIndex))) {
            return this._NgIf_37_6.context;
        }
        if (((token === import16.TemplateRef) && (39 === requestNodeIndex))) {
            return this._TemplateRef_39_5;
        }
        if (((token === import19.NgIf) && (39 === requestNodeIndex))) {
            return this._NgIf_39_6.context;
        }
        return notFoundResult;
    };
    _View_ResultComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_16_0_0 = (!this.context.advanceMode || (this.context.submitCount <= 3));
        this._NgIf_16_6.check_ngIf(currVal_16_0_0, throwOnChange, false);
        this._NgIf_16_6.detectChangesInInputProps(this, this._anchor_16, throwOnChange);
        var currVal_18_0_0 = (this.context.advanceMode && (this.context.submitCount > 3));
        this._NgIf_18_6.check_ngIf(currVal_18_0_0, throwOnChange, false);
        this._NgIf_18_6.detectChangesInInputProps(this, this._anchor_18, throwOnChange);
        var currVal_23_0_0 = (!this.context.advanceMode || (this.context.submitCount <= 3));
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.detectChangesInInputProps(this, this._anchor_23, throwOnChange);
        var currVal_28_0_0 = (this.context.advanceMode && (this.context.submitCount > 3));
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.detectChangesInInputProps(this, this._anchor_28, throwOnChange);
        var currVal_33_0_0 = '';
        this._RouterLinkWithHref_33_3.check_routerLink(currVal_33_0_0, throwOnChange, false);
        this._RouterLinkWithHref_33_3.detectChangesInInputProps(this, this._el_33, throwOnChange);
        var currVal_37_0_0 = this.context.showForm;
        this._NgIf_37_6.check_ngIf(currVal_37_0_0, throwOnChange, false);
        this._NgIf_37_6.detectChangesInInputProps(this, this._anchor_37, throwOnChange);
        var currVal_39_0_0 = this.context.share;
        this._NgIf_39_6.check_ngIf(currVal_39_0_0, throwOnChange, false);
        this._NgIf_39_6.detectChangesInInputProps(this, this._anchor_39, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_60 = import2.interpolate(1, '', this.context.result.allScore, '分');
        if (import2.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this.renderer.setText(this._text_9, currVal_60);
            this._expr_60 = currVal_60;
        }
        var currVal_61 = (('url(' + this.context.result.imgUrl) + ')');
        if (import2.checkBinding(throwOnChange, this._expr_61, currVal_61)) {
            this.renderer.setElementStyle(this._el_11, 'backgroundImage', ((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE, currVal_61) == null) ? null : this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE, currVal_61).toString()));
            this._expr_61 = currVal_61;
        }
        var currVal_62 = import2.interpolate(1, '', this.context.result.comment, '');
        if (import2.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this.renderer.setText(this._text_21, currVal_62);
            this._expr_62 = currVal_62;
        }
        this._RouterLinkWithHref_33_3.detectChangesInHostProps(this, this._el_33, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ResultComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_33_3.context.ngOnDestroy();
    };
    _View_ResultComponent0.prototype._handle_click_30_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_30_0 = ((this.context.share = true) !== false);
        return (true && pd_30_0);
    };
    _View_ResultComponent0.prototype._handle_click_33_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_33_0 = (this._RouterLinkWithHref_33_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_33_0);
    };
    return _View_ResultComponent0;
}(import3.AppView));
export function viewFactory_ResultComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ResultComponent === null)) {
        (renderType_ResultComponent = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.Emulated, styles_ResultComponent, {}));
    }
    return new _View_ResultComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_ResultComponent1 = (function (_super) {
    __extends(_View_ResultComponent1, _super);
    function _View_ResultComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent1, renderType_ResultComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._arr_2 = import2.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
    }
    _View_ResultComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'i', new import2.InlineArray2(2, 'class', 'i-see-answer center'), null);
        this._RouterLink_0_3 = new import15.Wrapper_RouterLink(this.parent.parentInjector.get(import8.Router), this.parent.parentInjector.get(import17.ActivatedRoute), this.parent.parentInjector.get(import18.LocationStrategy));
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [this._el_0], [disposable_0], []);
        return null;
    };
    _View_ResultComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.RouterLink) && (0 === requestNodeIndex))) {
            return this._RouterLink_0_3.context;
        }
        return notFoundResult;
    };
    _View_ResultComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._arr_2('/answer', this.parent.context.result.userExamId);
        this._RouterLink_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLink_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterLink_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ResultComponent1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this._RouterLink_0_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0_0);
    };
    return _View_ResultComponent1;
}(import3.AppView));
function viewFactory_ResultComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_ResultComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_ResultComponent2 = (function (_super) {
    __extends(_View_ResultComponent2, _super);
    function _View_ResultComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent2, renderType_ResultComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'h2', new import2.InlineArray2(2, 'class', 'orange text-center'), null);
        this._text_1 = this.renderer.createText(this._el_0, '查看测评答案', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_ResultComponent2;
}(import3.AppView));
function viewFactory_ResultComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_ResultComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_ResultComponent3 = (function (_super) {
    __extends(_View_ResultComponent3, _super);
    function _View_ResultComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent3, renderType_ResultComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultComponent3.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n			', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_1 = new import5.AppElement(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import16.TemplateRef_(this._appEl_1, viewFactory_ResultComponent4);
        this._NgIf_1_6 = new import14.Wrapper_NgIf(this._appEl_1.vcRef, this._TemplateRef_1_5);
        this._text_2 = this.renderer.createText(null, '\n			', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_3 = new import5.AppElement(3, null, this, this._anchor_3);
        this._TemplateRef_3_5 = new import16.TemplateRef_(this._appEl_3, viewFactory_ResultComponent5);
        this._NgIf_3_6 = new import14.Wrapper_NgIf(this._appEl_3.vcRef, this._TemplateRef_3_5);
        this._text_4 = this.renderer.createText(null, '\n		', null);
        this.init([].concat([
            this._text_0,
            this._appEl_1,
            this._text_2,
            this._appEl_3,
            this._text_4
        ]), [
            this._text_0,
            this._anchor_1,
            this._text_2,
            this._anchor_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_ResultComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import19.NgIf) && (1 === requestNodeIndex))) {
            return this._NgIf_1_6.context;
        }
        if (((token === import16.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import19.NgIf) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6.context;
        }
        return notFoundResult;
    };
    _View_ResultComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = !this.parent.context.result.submit;
        this._NgIf_1_6.check_ngIf(currVal_1_0_0, throwOnChange, false);
        this._NgIf_1_6.detectChangesInInputProps(this, this._anchor_1, throwOnChange);
        var currVal_3_0_0 = this.parent.context.result.submit;
        this._NgIf_3_6.check_ngIf(currVal_3_0_0, throwOnChange, false);
        this._NgIf_3_6.detectChangesInInputProps(this, this._anchor_3, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ResultComponent3;
}(import3.AppView));
function viewFactory_ResultComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_ResultComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_ResultComponent4 = (function (_super) {
    __extends(_View_ResultComponent4, _super);
    function _View_ResultComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent4, renderType_ResultComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'a', new import2.InlineArray2(2, 'class', 'button big blue solid center'), null);
        this._text_1 = this.renderer.createText(this._el_0, '提交结果 获得官方认知勋章', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_ResultComponent4.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.parent.context.show() !== false);
        return (true && pd_0_0);
    };
    return _View_ResultComponent4;
}(import3.AppView));
function viewFactory_ResultComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_ResultComponent4(viewUtils, parentInjector, declarationEl);
}
var _View_ResultComponent5 = (function (_super) {
    __extends(_View_ResultComponent5, _super);
    function _View_ResultComponent5(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent5, renderType_ResultComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'a', new import2.InlineArray2(2, 'class', 'button big blue solid center'), null);
        this._text_1 = this.renderer.createText(this._el_0, '结果已提交', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_ResultComponent5;
}(import3.AppView));
function viewFactory_ResultComponent5(viewUtils, parentInjector, declarationEl) {
    return new _View_ResultComponent5(viewUtils, parentInjector, declarationEl);
}
var _View_ResultComponent6 = (function (_super) {
    __extends(_View_ResultComponent6, _super);
    function _View_ResultComponent6(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent6, renderType_ResultComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'a', new import2.InlineArray4(4, 'class', 'button big blue center', 'routerLink', '/rank'), null);
        this._RouterLinkWithHref_0_3 = new import15.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import8.Router), this.parent.parentInjector.get(import17.ActivatedRoute), this.parent.parentInjector.get(import18.LocationStrategy));
        this._text_1 = this.renderer.createText(this._el_0, '进入官网，查看排名', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_ResultComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._RouterLinkWithHref_0_3.context;
        }
        return notFoundResult;
    };
    _View_ResultComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = '/rank';
        this._RouterLinkWithHref_0_3.check_routerLink(currVal_0_0_0, throwOnChange, false);
        this._RouterLinkWithHref_0_3.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterLinkWithHref_0_3.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ResultComponent6.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_0_3.context.ngOnDestroy();
    };
    _View_ResultComponent6.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this._RouterLinkWithHref_0_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0_0);
    };
    return _View_ResultComponent6;
}(import3.AppView));
function viewFactory_ResultComponent6(viewUtils, parentInjector, declarationEl) {
    return new _View_ResultComponent6(viewUtils, parentInjector, declarationEl);
}
var _View_ResultComponent7 = (function (_super) {
    __extends(_View_ResultComponent7, _super);
    function _View_ResultComponent7(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent7, renderType_ResultComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_30 = import1.UNINITIALIZED;
        this._expr_31 = import1.UNINITIALIZED;
        this._expr_32 = import1.UNINITIALIZED;
        this._expr_33 = import1.UNINITIALIZED;
        this._expr_34 = import1.UNINITIALIZED;
        this._expr_35 = import1.UNINITIALIZED;
    }
    _View_ResultComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'mask'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n		', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'form', new import2.InlineArray2(2, 'class', 'text-center'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_2, 'div', new import2.InlineArray4(4, 'class', 'close', 'style', 'margin: 0'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'X', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_7 = import2.createRenderElement(this.renderer, this._el_2, 'img', import2.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_9 = import2.createRenderElement(this.renderer, this._el_2, 'i', new import2.InlineArray2(2, 'class', 'i-input center'), null);
        this._text_10 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_11 = import2.createRenderElement(this.renderer, this._el_2, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._el_12 = import2.createRenderElement(this.renderer, this._el_11, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '姓名：', null);
        this._el_14 = import2.createRenderElement(this.renderer, this._el_11, 'input', new import2.InlineArray8(6, 'class', 'input', 'name', 'username', 'type', 'text'), null);
        this._text_15 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_16 = import2.createRenderElement(this.renderer, this._el_2, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._el_17 = import2.createRenderElement(this.renderer, this._el_16, 'span', import2.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, '城市：', null);
        this._el_19 = import2.createRenderElement(this.renderer, this._el_16, 'span', new import2.InlineArray4(4, 'class', 'input', 'routerLink', '/city'), null);
        this._RouterLink_19_3 = new import15.Wrapper_RouterLink(this.parent.parentInjector.get(import8.Router), this.parent.parentInjector.get(import17.ActivatedRoute), this.parent.parentInjector.get(import18.LocationStrategy));
        this._text_20 = this.renderer.createText(this._el_19, '', null);
        this._text_21 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_22 = import2.createRenderElement(this.renderer, this._el_2, 'a', new import2.InlineArray2(2, 'class', 'button big blue center'), null);
        this._text_23 = this.renderer.createText(this._el_22, '确认提交', null);
        this._text_24 = this.renderer.createText(this._el_2, '\n			', null);
        this._el_25 = import2.createRenderElement(this.renderer, this._el_2, 'div', new import2.InlineArray2(2, 'class', 'font-small'), null);
        this._text_26 = this.renderer.createText(this._el_25, '注：本测试由浙江省矿业联合会全程监管可进入省矿业联合会官网进行查看', null);
        this._text_27 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_28 = this.renderer.createText(this._el_0, '\n	', null);
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_14, 'change', this.eventHandler(this._handle_change_14_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_19, 'click', this.eventHandler(this._handle_click_19_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_22, 'click', this.eventHandler(this._handle_click_22_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], []);
        return null;
    };
    _View_ResultComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.RouterLink) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._RouterLink_19_3.context;
        }
        return notFoundResult;
    };
    _View_ResultComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_19_0_0 = '/city';
        this._RouterLink_19_3.check_routerLink(currVal_19_0_0, throwOnChange, false);
        this._RouterLink_19_3.detectChangesInInputProps(this, this._el_19, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_30 = this.parent.context.appService.user.headImgUrl;
        if (import2.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementAttribute(this._el_7, 'src', ((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL, currVal_30) == null) ? null : this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL, currVal_30).toString()));
            this._expr_30 = currVal_30;
        }
        var currVal_31 = this.parent.context.realName;
        if (import2.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementProperty(this._el_14, 'value', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_32 = this.parent.context.appService.user.nickName;
        if (import2.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementProperty(this._el_14, 'placeholder', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = !this.parent.context.appService.user.city;
        if (import2.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_19, 'gray', currVal_33);
            this._expr_33 = currVal_33;
        }
        this._RouterLink_19_3.detectChangesInHostProps(this, this._el_19, throwOnChange);
        var currVal_34 = import2.interpolate(1, '', (this.parent.context.appService.user.city ? (this.parent.context.appService.user.province + this.parent.context.appService.user.city) : '必填'), '');
        if (import2.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setText(this._text_20, currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_35 = !this.parent.context.appService.user.city;
        if (import2.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementClass(this._el_22, 'disabled', currVal_35);
            this._expr_35 = currVal_35;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ResultComponent7.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_4_0 = ((this.parent.context.showForm = false) !== false);
        return (true && pd_4_0);
    };
    _View_ResultComponent7.prototype._handle_change_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_14_0 = (this.parent.context.change($event) !== false);
        return (true && pd_14_0);
    };
    _View_ResultComponent7.prototype._handle_click_19_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_19_0 = (this._RouterLink_19_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_19_0);
    };
    _View_ResultComponent7.prototype._handle_click_22_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_22_0 = (this.parent.context.submit() !== false);
        return (true && pd_22_0);
    };
    return _View_ResultComponent7;
}(import3.AppView));
function viewFactory_ResultComponent7(viewUtils, parentInjector, declarationEl) {
    return new _View_ResultComponent7(viewUtils, parentInjector, declarationEl);
}
var _View_ResultComponent8 = (function (_super) {
    __extends(_View_ResultComponent8, _super);
    function _View_ResultComponent8(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ResultComponent8, renderType_ResultComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_ResultComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'share-mask'), null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [this._el_0], [disposable_0], []);
        return null;
    };
    _View_ResultComponent8.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = ((this.parent.context.share = false) !== false);
        return (true && pd_0_0);
    };
    return _View_ResultComponent8;
}(import3.AppView));
function viewFactory_ResultComponent8(viewUtils, parentInjector, declarationEl) {
    return new _View_ResultComponent8(viewUtils, parentInjector, declarationEl);
}
