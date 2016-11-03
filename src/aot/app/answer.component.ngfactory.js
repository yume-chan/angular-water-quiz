var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/answer.component';
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
import * as import14 from './answer.component.css.shim';
import * as import15 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '@angular/common/src/directives/ng_if';
export var Wrapper_AnswerComponent = (function () {
    function Wrapper_AnswerComponent(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.AnswerComponent(p0, p1, p2);
    }
    Wrapper_AnswerComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AnswerComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_AnswerComponent;
}());
var renderType_AnswerComponent_Host = null;
var _View_AnswerComponent_Host0 = (function (_super) {
    __extends(_View_AnswerComponent_Host0, _super);
    function _View_AnswerComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AnswerComponent_Host0, renderType_AnswerComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AnswerComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'answer', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AnswerComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AnswerComponent_0_4 = new Wrapper_AnswerComponent(this.parentInjector.get(import8.Router), this.parentInjector.get(import9.ActivatedRoute), this.parentInjector.get(import10.AppService));
        this._appEl_0.initComponent(this._AnswerComponent_0_4.context, [], compView_0);
        compView_0.create(this._AnswerComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AnswerComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AnswerComponent) && (0 === requestNodeIndex))) {
            return this._AnswerComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_AnswerComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AnswerComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AnswerComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AnswerComponent_Host0;
}(import1.AppView));
function viewFactory_AnswerComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AnswerComponent_Host === null)) {
        (renderType_AnswerComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_AnswerComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var AnswerComponentNgFactory = new import12.ComponentFactory('answer', viewFactory_AnswerComponent_Host0, import0.AnswerComponent);
var styles_AnswerComponent = [
    import13.styles,
    import14.styles
];
var renderType_AnswerComponent = null;
var _View_AnswerComponent0 = (function (_super) {
    __extends(_View_AnswerComponent0, _super);
    function _View_AnswerComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AnswerComponent0, renderType_AnswerComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_AnswerComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_2 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'class', 'content flex-column'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n	', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'i', new import4.InlineArray2(2, 'class', 'i-drop small center'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n	', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_6 = new import3.AppElement(6, 2, this, this._anchor_6);
        this._TemplateRef_6_5 = new import17.TemplateRef_(this._appEl_6, viewFactory_AnswerComponent1);
        this._NgFor_6_6 = new import15.Wrapper_NgFor(this._appEl_6.vcRef, this._TemplateRef_6_5, this.parentInjector.get(import18.IterableDiffers), this.ref);
        this._text_7 = this.renderer.createText(this._el_2, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_9 = new import3.AppElement(9, null, this, this._anchor_9);
        this._TemplateRef_9_5 = new import17.TemplateRef_(this._appEl_9, viewFactory_AnswerComponent2);
        this._NgIf_9_6 = new import16.Wrapper_NgIf(this._appEl_9.vcRef, this._TemplateRef_9_5);
        this.init([], [
            this._text_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._anchor_9
        ], [], []);
        return null;
    };
    _View_AnswerComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import19.NgFor) && (6 === requestNodeIndex))) {
            return this._NgFor_6_6.context;
        }
        if (((token === import17.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import20.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        return notFoundResult;
    };
    _View_AnswerComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.context.questions;
        this._NgFor_6_6.check_ngForOf(currVal_6_0_0, throwOnChange, false);
        this._NgFor_6_6.detectChangesInInputProps(this, this._anchor_6, throwOnChange);
        var currVal_9_0_0 = this.context.current;
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.detectChangesInInputProps(this, this._anchor_9, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AnswerComponent0;
}(import1.AppView));
export function viewFactory_AnswerComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AnswerComponent === null)) {
        (renderType_AnswerComponent = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.Emulated, styles_AnswerComponent, {}));
    }
    return new _View_AnswerComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_AnswerComponent1 = (function (_super) {
    __extends(_View_AnswerComponent1, _super);
    function _View_AnswerComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AnswerComponent1, renderType_AnswerComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
    }
    _View_AnswerComponent1.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n		', null);
        this._el_1 = import4.createRenderElement(this.renderer, null, 'h2', import4.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        this._text_3 = this.renderer.createText(null, '\n		', null);
        this._el_4 = import4.createRenderElement(this.renderer, null, 'h3', new import4.InlineArray2(2, 'class', 'center'), null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(null, '\n		', null);
        this._el_7 = import4.createRenderElement(this.renderer, null, 'i', new import4.InlineArray2(2, 'class', 'i-answer center'), null);
        this._text_8 = this.renderer.createText(null, '\n	', null);
        var disposable_0 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        this.init([].concat([
            this._text_0,
            this._el_1,
            this._text_3,
            this._el_4,
            this._text_6,
            this._el_7,
            this._text_8
        ]), [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8
        ], [disposable_0], []);
        return null;
    };
    _View_AnswerComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_9 = import4.interpolate(2, '问题', this.context.$implicit.order, ' (', ((this.context.$implicit.type == 1) ? '选择题' : '判断题'), ')');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_2, currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = import4.interpolate(1, '', this.context.$implicit.content, '');
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_5, currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this.parent.context.disabled;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_7, 'disabled', currVal_11);
            this._expr_11 = currVal_11;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AnswerComponent1.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_7_0 = (this.parent.context.showAnswer(this.context.$implicit) !== false);
        return (true && pd_7_0);
    };
    return _View_AnswerComponent1;
}(import1.AppView));
function viewFactory_AnswerComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_AnswerComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_AnswerComponent2 = (function (_super) {
    __extends(_View_AnswerComponent2, _super);
    function _View_AnswerComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AnswerComponent2, renderType_AnswerComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
    }
    _View_AnswerComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', new import4.InlineArray2(2, 'class', 'mask'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'popup'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_4 = import4.createRenderElement(this.renderer, this._el_2, 'h2', new import4.InlineArray2(2, 'class', 'orange center'), null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_2, 'h3', import4.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_2, 'i', new import4.InlineArray2(2, 'class', 'i-know center'), null);
        this._text_11 = this.renderer.createText(this._el_2, '\n	', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_10, 'click', this.eventHandler(this._handle_click_10_0.bind(this)));
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
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12
        ], [disposable_0], []);
        return null;
    };
    _View_AnswerComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_13 = import4.interpolate(1, '此题的答案应该选择', this.parent.context.current.isCorrect, '');
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_5, currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = import4.interpolate(1, '', this.parent.context.current.correctDetail, '');
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setText(this._text_8, currVal_14);
            this._expr_14 = currVal_14;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AnswerComponent2.prototype._handle_click_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_10_0 = ((this.parent.context.current = null) !== false);
        return (true && pd_10_0);
    };
    return _View_AnswerComponent2;
}(import1.AppView));
function viewFactory_AnswerComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_AnswerComponent2(viewUtils, parentInjector, declarationEl);
}
