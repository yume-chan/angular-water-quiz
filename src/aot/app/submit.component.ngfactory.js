var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/submit.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '../../app/app.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './common.css.shim';
import * as import12 from './result.component.css.shim';
import * as import13 from '../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import14 from '@angular/router/src/router';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/router/src/directives/router_link';
import * as import18 from '@angular/core/src/security';
export var Wrapper_SubmitComponent = (function () {
    function Wrapper_SubmitComponent(p0) {
        this.changed = false;
        this.context = new import0.SubmitComponent(p0);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_SubmitComponent.prototype.check_result = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.result = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_SubmitComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_SubmitComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_SubmitComponent;
}());
var renderType_SubmitComponent_Host = null;
var _View_SubmitComponent_Host0 = (function (_super) {
    __extends(_View_SubmitComponent_Host0, _super);
    function _View_SubmitComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SubmitComponent_Host0, renderType_SubmitComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_SubmitComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'submit', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SubmitComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SubmitComponent_0_4 = new Wrapper_SubmitComponent(this.parentInjector.get(import8.AppService));
        this._appEl_0.initComponent(this._SubmitComponent_0_4.context, [], compView_0);
        compView_0.create(this._SubmitComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_SubmitComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.SubmitComponent) && (0 === requestNodeIndex))) {
            return this._SubmitComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_SubmitComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SubmitComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._SubmitComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_SubmitComponent_Host0;
}(import3.AppView));
function viewFactory_SubmitComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SubmitComponent_Host === null)) {
        (renderType_SubmitComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_SubmitComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var SubmitComponentNgFactory = new import10.ComponentFactory('submit', viewFactory_SubmitComponent_Host0, import0.SubmitComponent);
var styles_SubmitComponent = [
    'img[_ngcontent-%COMP%] {\n		width: 96px;\n		height: 96px;\n		border-radius: 96px;\n	}',
    import11.styles,
    import12.styles
];
var renderType_SubmitComponent = null;
var _View_SubmitComponent0 = (function (_super) {
    __extends(_View_SubmitComponent0, _super);
    function _View_SubmitComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SubmitComponent0, renderType_SubmitComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_36 = import1.UNINITIALIZED;
        this._expr_37 = import1.UNINITIALIZED;
    }
    _View_SubmitComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray2(2, 'class', 'content'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n	', null);
        this._el_5 = import2.createRenderElement(this.renderer, this._el_3, 'div', new import2.InlineArray2(2, 'class', 'wheel center'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n		', null);
        this._el_7 = import2.createRenderElement(this.renderer, this._el_5, 'i', new import2.InlineArray2(2, 'class', 'i-wheel'), null);
        this._text_8 = this.renderer.createText(this._el_5, '\n		', null);
        this._el_9 = import2.createRenderElement(this.renderer, this._el_5, 'div', new import2.InlineArray2(2, 'class', 'circle'), null);
        this._text_10 = this.renderer.createText(this._el_5, '\n	', null);
        this._text_11 = this.renderer.createText(this._el_3, '\n	', null);
        this._el_12 = import2.createRenderElement(this.renderer, this._el_3, 'div', new import2.InlineArray2(2, 'class', 'white'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n		', null);
        this._el_14 = import2.createRenderElement(this.renderer, this._el_12, 'i', new import2.InlineArray2(2, 'class', 'i-success center'), null);
        this._text_15 = this.renderer.createText(this._el_12, '\n		', null);
        this._el_16 = import2.createRenderElement(this.renderer, this._el_12, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, '', null);
        this._text_18 = this.renderer.createText(this._el_12, '\n		', null);
        this._el_19 = import2.createRenderElement(this.renderer, this._el_12, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, '\n			感谢参与，您的结果已经保存至浙江省矿业联合会官网中的上善若水计划板块中，您可以点击以下按钮链接进入矿联官网上善若水板块，进行查看您的成绩；', null);
        this._el_21 = import2.createRenderElement(this.renderer, this._el_19, 'br', import2.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_19, ' \n			水是生命质量好坏的最基础的营养元素，好水“铸造”好体质，好的体内水环境有助与其他营养素的吸收、利用的效率，保持人体健康动态平衡。', null);
        this._el_23 = import2.createRenderElement(this.renderer, this._el_19, 'br', import2.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_19, ' \n			可能以自来水和净水器为主的这类解决您安全饮用的日常生活饮用水，已经不能满足拥有您这样健康饮水认知的人士群体，上善若水计划或许正好能满足您这样的健康饮水需求，为您提供亲民实惠的价格以及协助您养成科学健康的饮水习惯的互联网管家式服务；', null);
        this._el_25 = import2.createRenderElement(this.renderer, this._el_19, 'br', import2.EMPTY_INLINE_ARRAY, null);
        this._text_26 = this.renderer.createText(this._el_19, ' \n			有兴趣不妨点击“了解一下 上善若水计划”。\n		', null);
        this._text_27 = this.renderer.createText(this._el_12, '\n		', null);
        this._el_28 = import2.createRenderElement(this.renderer, this._el_12, 'a', new import2.InlineArray4(4, 'class', 'button big blue center', 'routerLink', '/rank'), null);
        this._RouterLinkWithHref_28_3 = new import13.Wrapper_RouterLinkWithHref(this.parentInjector.get(import14.Router), this.parentInjector.get(import15.ActivatedRoute), this.parentInjector.get(import16.LocationStrategy));
        this._text_29 = this.renderer.createText(this._el_28, '进入官网 查看排名', null);
        this._text_30 = this.renderer.createText(this._el_12, '\n		', null);
        this._el_31 = import2.createRenderElement(this.renderer, this._el_12, 'a', new import2.InlineArray2(2, 'class', 'button big blue center'), null);
        this._text_32 = this.renderer.createText(this._el_31, '了解一下 上善若水计划', null);
        this._text_33 = this.renderer.createText(this._el_12, '\n	', null);
        this._text_34 = this.renderer.createText(this._el_3, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_28, 'click', this.eventHandler(this._handle_click_28_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_31, 'click', this.eventHandler(this._handle_click_31_0.bind(this)));
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
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._text_34
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_SubmitComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.RouterLinkWithHref) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._RouterLinkWithHref_28_3.context;
        }
        return notFoundResult;
    };
    _View_SubmitComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_28_0_0 = '/rank';
        this._RouterLinkWithHref_28_3.check_routerLink(currVal_28_0_0, throwOnChange, false);
        this._RouterLinkWithHref_28_3.detectChangesInInputProps(this, this._el_28, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_36 = (('url(' + this.context.appService.user.headImgUrl) + ')');
        if (import2.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementStyle(this._el_9, 'backgroundImage', ((this.viewUtils.sanitizer.sanitize(import18.SecurityContext.STYLE, currVal_36) == null) ? null : this.viewUtils.sanitizer.sanitize(import18.SecurityContext.STYLE, currVal_36).toString()));
            this._expr_36 = currVal_36;
        }
        var currVal_37 = import2.interpolate(1, '亲爱的 ', (this.context.appService.user.realName || this.context.appService.user.nickName), '');
        if (import2.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setText(this._text_17, currVal_37);
            this._expr_37 = currVal_37;
        }
        this._RouterLinkWithHref_28_3.detectChangesInHostProps(this, this._el_28, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_SubmitComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_28_3.context.ngOnDestroy();
    };
    _View_SubmitComponent0.prototype._handle_click_28_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_28_0 = (this._RouterLinkWithHref_28_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_28_0);
    };
    _View_SubmitComponent0.prototype._handle_click_31_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_31_0 = (this.context.appService.goExternal() !== false);
        return (true && pd_31_0);
    };
    return _View_SubmitComponent0;
}(import3.AppView));
export function viewFactory_SubmitComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SubmitComponent === null)) {
        (renderType_SubmitComponent = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.Emulated, styles_SubmitComponent, {}));
    }
    return new _View_SubmitComponent0(viewUtils, parentInjector, declarationEl);
}
