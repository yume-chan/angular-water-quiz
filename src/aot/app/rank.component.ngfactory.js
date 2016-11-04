var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/rank.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../app/app.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './common.css.shim';
import * as import12 from './result.component.css.shim';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '../node_modules/@angular/common/src/directives/ng_switch.ngfactory';
import * as import15 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '@angular/common/src/directives/ng_switch';
import * as import21 from '@angular/core/src/security';
import * as import22 from '../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import23 from '@angular/router/src/router';
import * as import24 from '@angular/router/src/router_state';
import * as import25 from '@angular/common/src/location/location_strategy';
import * as import26 from '@angular/router/src/directives/router_link';
export var Wrapper_RankComponent = (function () {
    function Wrapper_RankComponent(p0) {
        this.changed = false;
        this.context = new import0.RankComponent(p0);
    }
    Wrapper_RankComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_RankComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_RankComponent;
}());
var renderType_RankComponent_Host = null;
var _View_RankComponent_Host0 = (function (_super) {
    __extends(_View_RankComponent_Host0, _super);
    function _View_RankComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RankComponent_Host0, renderType_RankComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RankComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'rank', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_RankComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._RankComponent_0_4 = new Wrapper_RankComponent(this.parentInjector.get(import8.AppService));
        this._appEl_0.initComponent(this._RankComponent_0_4.context, [], compView_0);
        compView_0.create(this._RankComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_RankComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.RankComponent) && (0 === requestNodeIndex))) {
            return this._RankComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_RankComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RankComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RankComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._RankComponent_0_4.context.ngAfterViewInit();
            }
        }
    };
    return _View_RankComponent_Host0;
}(import1.AppView));
function viewFactory_RankComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RankComponent_Host === null)) {
        (renderType_RankComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_RankComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var RankComponentNgFactory = new import10.ComponentFactory('rank', viewFactory_RankComponent_Host0, import0.RankComponent);
var styles_RankComponent = [
    '.scroller[_ngcontent-%COMP%] {\n		height: calc(100% - 365px);\n		margin-top: 200px !important;\n		overflow-y: auto;\n	}\n	\n	@media(max-height: 500px) {\n		.scroller[_ngcontent-%COMP%] {\n			height: calc(100% - 300px);\n			margin-top: 150px !important;\n			overflow-y: auto;\n		}\n	}\n	\n	.row[_ngcontent-%COMP%] {\n		line-height: 22px;\n		font-size: 0;\n	}\n	\n	.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n		display: inline-block;\n		vertical-align: top;\n		font-size: 15px;\n	}\n	\n	.column-1[_ngcontent-%COMP%] {\n		width: 30px;\n	}\n	\n	.column-2[_ngcontent-%COMP%] {\n		width: calc((100% - 80px) / 5 * 3);\n		white-space: nowrap;\n		overflow: hidden;\n		text-overflow: ellipsis;\n	}\n	\n	.column-3[_ngcontent-%COMP%] {\n		width: calc((100% - 80px) / 5 * 2);\n		white-space: nowrap;\n		overflow: hidden;\n		text-overflow: ellipsis;\n	}\n	\n	.column-4[_ngcontent-%COMP%] {\n		width: 50px;\n		text-align: end;\n	}',
    import11.styles,
    import12.styles
];
var renderType_RankComponent = null;
var _View_RankComponent0 = (function (_super) {
    __extends(_View_RankComponent0, _super);
    function _View_RankComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RankComponent0, renderType_RankComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_35 = import7.UNINITIALIZED;
    }
    _View_RankComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._viewQuery_scroller_0 = new import13.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'content flex-column'), null);
        this._NgSwitch_3_3 = new import14.Wrapper_NgSwitch();
        this._text_4 = this.renderer.createText(this._el_3, '\n	', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_3, 'div', new import4.InlineArray2(2, 'class', 'wheel center'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n		', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'i', new import4.InlineArray2(2, 'class', 'i-wheel'), null);
        this._text_8 = this.renderer.createText(this._el_5, '\n		', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_5, 'div', new import4.InlineArray2(2, 'class', 'circle'), null);
        this._text_10 = this.renderer.createText(this._el_5, '\n	', null);
        this._text_11 = this.renderer.createText(this._el_3, '\n	', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_3, 'div', new import4.InlineArray2(2, 'class', 'scroller box'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n		', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._appEl_14 = new import3.AppElement(14, 12, this, this._anchor_14);
        this._TemplateRef_14_5 = new import16.TemplateRef_(this._appEl_14, viewFactory_RankComponent1);
        this._NgFor_14_6 = new import15.Wrapper_NgFor(this._appEl_14.vcRef, this._TemplateRef_14_5, this.parentInjector.get(import17.IterableDiffers), this.ref);
        this._text_15 = this.renderer.createText(this._el_12, '\n	', null);
        this._text_16 = this.renderer.createText(this._el_3, '\n	', null);
        this._anchor_17 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._appEl_17 = new import3.AppElement(17, 3, this, this._anchor_17);
        this._TemplateRef_17_5 = new import16.TemplateRef_(this._appEl_17, viewFactory_RankComponent2);
        this._NgSwitchCase_17_6 = new import14.Wrapper_NgSwitchCase(this._appEl_17.vcRef, this._TemplateRef_17_5, this._NgSwitch_3_3.context);
        this._text_18 = this.renderer.createText(this._el_3, '\n	', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._appEl_19 = new import3.AppElement(19, 3, this, this._anchor_19);
        this._TemplateRef_19_5 = new import16.TemplateRef_(this._appEl_19, viewFactory_RankComponent3);
        this._NgSwitchDefault_19_6 = new import14.Wrapper_NgSwitchDefault(this._appEl_19.vcRef, this._TemplateRef_19_5, this._NgSwitch_3_3.context);
        this._text_20 = this.renderer.createText(this._el_3, '\n	', null);
        this._el_21 = import4.createRenderElement(this.renderer, this._el_3, 'a', new import4.InlineArray2(2, 'class', 'button big center'), null);
        this._text_22 = this.renderer.createText(this._el_21, '了解一下 上善若水计划', null);
        this._text_23 = this.renderer.createText(this._el_3, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_12, 'scroll', this.eventHandler(this._handle_scroll_12_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        this._viewQuery_scroller_0.reset([new import18.ElementRef(this._el_12)]);
        this.context.container = this._viewQuery_scroller_0.first;
        this.init([], [
            this._text_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._text_16,
            this._anchor_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_RankComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import19.NgFor) && (14 === requestNodeIndex))) {
            return this._NgFor_14_6.context;
        }
        if (((token === import16.TemplateRef) && (17 === requestNodeIndex))) {
            return this._TemplateRef_17_5;
        }
        if (((token === import20.NgSwitchCase) && (17 === requestNodeIndex))) {
            return this._NgSwitchCase_17_6.context;
        }
        if (((token === import16.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import20.NgSwitchDefault) && (19 === requestNodeIndex))) {
            return this._NgSwitchDefault_19_6.context;
        }
        if (((token === import20.NgSwitch) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._NgSwitch_3_3.context;
        }
        return notFoundResult;
    };
    _View_RankComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.rank;
        this._NgSwitch_3_3.check_ngSwitch(currVal_3_0_0, throwOnChange, false);
        this._NgSwitch_3_3.detectChangesInInputProps(this, this._el_3, throwOnChange);
        var currVal_14_0_0 = this.context.list;
        this._NgFor_14_6.check_ngForOf(currVal_14_0_0, throwOnChange, false);
        this._NgFor_14_6.detectChangesInInputProps(this, this._anchor_14, throwOnChange);
        var currVal_17_0_0 = null;
        this._NgSwitchCase_17_6.check_ngSwitchCase(currVal_17_0_0, throwOnChange, false);
        this._NgSwitchCase_17_6.detectChangesInInputProps(this, this._anchor_17, throwOnChange);
        this._NgSwitchDefault_19_6.detectChangesInInputProps(this, this._anchor_19, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgSwitch_3_3.detectChangesInHostProps(this, this._el_3, throwOnChange);
        var currVal_35 = (('url(' + this.context.appService.user.headImgUrl) + ')');
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementStyle(this._el_9, 'backgroundImage', ((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE, currVal_35) == null) ? null : this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE, currVal_35).toString()));
            this._expr_35 = currVal_35;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_RankComponent0.prototype._handle_scroll_12_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_12_0 = (this.context.scroll($event) !== false);
        return (true && pd_12_0);
    };
    _View_RankComponent0.prototype._handle_click_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_21_0 = (this.context.appService.goExternal() !== false);
        return (true && pd_21_0);
    };
    return _View_RankComponent0;
}(import1.AppView));
export function viewFactory_RankComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RankComponent === null)) {
        (renderType_RankComponent = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.Emulated, styles_RankComponent, {}));
    }
    return new _View_RankComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_RankComponent1 = (function (_super) {
    __extends(_View_RankComponent1, _super);
    function _View_RankComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RankComponent1, renderType_RankComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
    }
    _View_RankComponent1.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n			', null);
        this._el_1 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'row'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n				', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_1, 'div', new import4.InlineArray2(2, 'class', 'column-1'), null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n				', null);
        this._el_6 = import4.createRenderElement(this.renderer, this._el_1, 'div', new import4.InlineArray2(2, 'class', 'column-2'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_1, '\n				', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_1, 'div', new import4.InlineArray2(2, 'class', 'column-3'), null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_1, '\n				', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_1, 'div', new import4.InlineArray2(2, 'class', 'column-4'), null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_1, '\n			', null);
        this._text_15 = this.renderer.createText(null, '\n		', null);
        this.init([].concat([
            this._text_0,
            this._el_1,
            this._text_15
        ]), [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15
        ], [], []);
        return null;
    };
    _View_RankComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_16 = import4.interpolate(1, '', (this.context.index + 1), '');
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setText(this._text_4, currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = import4.interpolate(1, '', this.context.$implicit.realName, '');
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setText(this._text_7, currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = import4.interpolate(2, '', this.context.$implicit.province, '', this.context.$implicit.city, '');
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setText(this._text_10, currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = import4.interpolate(1, '', this.context.$implicit.score, '分');
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setText(this._text_13, currVal_19);
            this._expr_19 = currVal_19;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RankComponent1;
}(import1.AppView));
function viewFactory_RankComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_RankComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_RankComponent2 = (function (_super) {
    __extends(_View_RankComponent2, _super);
    function _View_RankComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RankComponent2, renderType_RankComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RankComponent2.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n		', null);
        this._el_1 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'box text-center'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n			', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_1, 'span', import4.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '我的成绩：还没有测试过', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n		', null);
        this._text_6 = this.renderer.createText(null, '\n		', null);
        this._el_7 = import4.createRenderElement(this.renderer, null, 'a', new import4.InlineArray4(4, 'class', 'button big center', 'routerLink', ''), null);
        this._RouterLinkWithHref_7_3 = new import22.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import23.Router), this.parent.parentInjector.get(import24.ActivatedRoute), this.parent.parentInjector.get(import25.LocationStrategy));
        this._text_8 = this.renderer.createText(this._el_7, '立即测试', null);
        this._text_9 = this.renderer.createText(null, '\n	', null);
        var disposable_0 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        this.init([].concat([
            this._text_0,
            this._el_1,
            this._text_6,
            this._el_7,
            this._text_9
        ]), [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ], [disposable_0], []);
        return null;
    };
    _View_RankComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._RouterLinkWithHref_7_3.context;
        }
        return notFoundResult;
    };
    _View_RankComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = '';
        this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0, throwOnChange, false);
        this._RouterLinkWithHref_7_3.detectChangesInInputProps(this, this._el_7, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterLinkWithHref_7_3.detectChangesInHostProps(this, this._el_7, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_RankComponent2.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_7_3.context.ngOnDestroy();
    };
    _View_RankComponent2.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_7_0 = (this._RouterLinkWithHref_7_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_7_0);
    };
    return _View_RankComponent2;
}(import1.AppView));
function viewFactory_RankComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_RankComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_RankComponent3 = (function (_super) {
    __extends(_View_RankComponent3, _super);
    function _View_RankComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RankComponent3, renderType_RankComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_11 = import7.UNINITIALIZED;
    }
    _View_RankComponent3.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n		', null);
        this._el_1 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'box text-center'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n			', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_1, 'span', import4.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n		', null);
        this._text_6 = this.renderer.createText(null, '\n		', null);
        this._el_7 = import4.createRenderElement(this.renderer, null, 'a', new import4.InlineArray4(4, 'class', 'button big center', 'routerLink', ''), null);
        this._RouterLinkWithHref_7_3 = new import22.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import23.Router), this.parent.parentInjector.get(import24.ActivatedRoute), this.parent.parentInjector.get(import25.LocationStrategy));
        this._text_8 = this.renderer.createText(this._el_7, '再测一次', null);
        this._text_9 = this.renderer.createText(null, '\n	', null);
        var disposable_0 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        this.init([].concat([
            this._text_0,
            this._el_1,
            this._text_6,
            this._el_7,
            this._text_9
        ]), [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ], [disposable_0], []);
        return null;
    };
    _View_RankComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._RouterLinkWithHref_7_3.context;
        }
        return notFoundResult;
    };
    _View_RankComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = '';
        this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0, throwOnChange, false);
        this._RouterLinkWithHref_7_3.detectChangesInInputProps(this, this._el_7, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_11 = import4.interpolate(2, '我的成绩：', this.parent.context.rank.score, ' 分，第 ', this.parent.context.rank.rank, ' 名');
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_4, currVal_11);
            this._expr_11 = currVal_11;
        }
        this._RouterLinkWithHref_7_3.detectChangesInHostProps(this, this._el_7, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_RankComponent3.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_7_3.context.ngOnDestroy();
    };
    _View_RankComponent3.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_7_0 = (this._RouterLinkWithHref_7_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_7_0);
    };
    return _View_RankComponent3;
}(import1.AppView));
function viewFactory_RankComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_RankComponent3(viewUtils, parentInjector, declarationEl);
}
