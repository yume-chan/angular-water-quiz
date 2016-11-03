var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/question.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import5 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '../../app/app.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './common.css.shim';
import * as import12 from './question.component.css.shim';
import * as import13 from '../node_modules/@angular/common/src/directives/ng_switch.ngfactory';
import * as import14 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_switch';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '@angular/common/src/directives/ng_for';
export var Wrapper_QuestionComponent = (function () {
    function Wrapper_QuestionComponent(p0) {
        this.changed = false;
        this.context = new import0.QuestionComponent(p0);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_QuestionComponent.prototype.check_question = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this.changed = true;
            this.context.question = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_QuestionComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_QuestionComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_QuestionComponent;
}());
var renderType_QuestionComponent_Host = null;
var _View_QuestionComponent_Host0 = (function (_super) {
    __extends(_View_QuestionComponent_Host0, _super);
    function _View_QuestionComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent_Host0, renderType_QuestionComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_QuestionComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer, 'question', import2.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import5.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_QuestionComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._QuestionComponent_0_4 = new Wrapper_QuestionComponent(this.parentInjector.get(import8.AppService));
        this._appEl_0.initComponent(this._QuestionComponent_0_4.context, [], compView_0);
        compView_0.create(this._QuestionComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_QuestionComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.QuestionComponent) && (0 === requestNodeIndex))) {
            return this._QuestionComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_QuestionComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._QuestionComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._QuestionComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_QuestionComponent_Host0;
}(import3.AppView));
function viewFactory_QuestionComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_QuestionComponent_Host === null)) {
        (renderType_QuestionComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_QuestionComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var QuestionComponentNgFactory = new import10.ComponentFactory('question', viewFactory_QuestionComponent_Host0, import0.QuestionComponent);
var styles_QuestionComponent = [
    import11.styles,
    import12.styles
];
var renderType_QuestionComponent = null;
var _View_QuestionComponent0 = (function (_super) {
    __extends(_View_QuestionComponent0, _super);
    function _View_QuestionComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent0, renderType_QuestionComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_49 = import1.UNINITIALIZED;
        this._expr_50 = import1.UNINITIALIZED;
    }
    _View_QuestionComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_2 = import2.createRenderElement(this.renderer, parentRenderNode, 'div', new import2.InlineArray2(2, 'class', 'content flex-column'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n	', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_2, 'i', new import2.InlineArray2(2, 'class', 'i-drop small center'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n	', null);
        this._el_6 = import2.createRenderElement(this.renderer, this._el_2, 'h2', import2.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n	', null);
        this._el_9 = import2.createRenderElement(this.renderer, this._el_2, 'h3', new import2.InlineArray2(2, 'class', 'text-center'), null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n	', null);
        this._el_12 = import2.createRenderElement(this.renderer, this._el_2, 'div', new import2.InlineArray2(2, 'class', 'selections'), null);
        this._NgSwitch_12_3 = new import13.Wrapper_NgSwitch();
        this._text_13 = this.renderer.createText(this._el_12, '\n		', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._appEl_14 = new import5.AppElement(14, 12, this, this._anchor_14);
        this._TemplateRef_14_5 = new import15.TemplateRef_(this._appEl_14, viewFactory_QuestionComponent1);
        this._NgSwitchCase_14_6 = new import13.Wrapper_NgSwitchCase(this._appEl_14.vcRef, this._TemplateRef_14_5, this._NgSwitch_12_3.context);
        this._text_15 = this.renderer.createText(this._el_12, '\n		', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._appEl_16 = new import5.AppElement(16, 12, this, this._anchor_16);
        this._TemplateRef_16_5 = new import15.TemplateRef_(this._appEl_16, viewFactory_QuestionComponent3);
        this._NgSwitchCase_16_6 = new import13.Wrapper_NgSwitchCase(this._appEl_16.vcRef, this._TemplateRef_16_5, this._NgSwitch_12_3.context);
        this._text_17 = this.renderer.createText(this._el_12, '\n		', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._appEl_18 = new import5.AppElement(18, 12, this, this._anchor_18);
        this._TemplateRef_18_5 = new import15.TemplateRef_(this._appEl_18, viewFactory_QuestionComponent5);
        this._NgSwitchCase_18_6 = new import13.Wrapper_NgSwitchCase(this._appEl_18.vcRef, this._TemplateRef_18_5, this._NgSwitch_12_3.context);
        this._text_19 = this.renderer.createText(this._el_12, '\n		', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._appEl_20 = new import5.AppElement(20, 12, this, this._anchor_20);
        this._TemplateRef_20_5 = new import15.TemplateRef_(this._appEl_20, viewFactory_QuestionComponent7);
        this._NgSwitchDefault_20_6 = new import13.Wrapper_NgSwitchDefault(this._appEl_20.vcRef, this._TemplateRef_20_5, this._NgSwitch_12_3.context);
        this._text_21 = this.renderer.createText(this._el_12, '\n	', null);
        this._text_22 = this.renderer.createText(this._el_2, '\n	', null);
        this._el_23 = import2.createRenderElement(this.renderer, this._el_2, 'div', new import2.InlineArray2(2, 'style', 'height: 30px'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n		', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_23, null);
        this._appEl_25 = new import5.AppElement(25, 23, this, this._anchor_25);
        this._TemplateRef_25_5 = new import15.TemplateRef_(this._appEl_25, viewFactory_QuestionComponent9);
        this._NgIf_25_6 = new import14.Wrapper_NgIf(this._appEl_25.vcRef, this._TemplateRef_25_5);
        this._text_26 = this.renderer.createText(this._el_23, '\n	', null);
        this._text_27 = this.renderer.createText(this._el_2, '\n', null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_29 = new import5.AppElement(29, null, this, this._anchor_29);
        this._TemplateRef_29_5 = new import15.TemplateRef_(this._appEl_29, viewFactory_QuestionComponent10);
        this._NgIf_29_6 = new import14.Wrapper_NgIf(this._appEl_29.vcRef, this._TemplateRef_29_5);
        this.init([], [
            this._text_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._anchor_29
        ], [], []);
        return null;
    };
    _View_QuestionComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import16.NgSwitchCase) && (14 === requestNodeIndex))) {
            return this._NgSwitchCase_14_6.context;
        }
        if (((token === import15.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import16.NgSwitchCase) && (16 === requestNodeIndex))) {
            return this._NgSwitchCase_16_6.context;
        }
        if (((token === import15.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import16.NgSwitchCase) && (18 === requestNodeIndex))) {
            return this._NgSwitchCase_18_6.context;
        }
        if (((token === import15.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import16.NgSwitchDefault) && (20 === requestNodeIndex))) {
            return this._NgSwitchDefault_20_6.context;
        }
        if (((token === import16.NgSwitch) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._NgSwitch_12_3.context;
        }
        if (((token === import15.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import17.NgIf) && (25 === requestNodeIndex))) {
            return this._NgIf_25_6.context;
        }
        if (((token === import15.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import17.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        return notFoundResult;
    };
    _View_QuestionComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_12_0_0 = this.context.question.subjectOptionList.length;
        this._NgSwitch_12_3.check_ngSwitch(currVal_12_0_0, throwOnChange, false);
        this._NgSwitch_12_3.detectChangesInInputProps(this, this._el_12, throwOnChange);
        var currVal_14_0_0 = 2;
        this._NgSwitchCase_14_6.check_ngSwitchCase(currVal_14_0_0, throwOnChange, false);
        this._NgSwitchCase_14_6.detectChangesInInputProps(this, this._anchor_14, throwOnChange);
        var currVal_16_0_0 = 3;
        this._NgSwitchCase_16_6.check_ngSwitchCase(currVal_16_0_0, throwOnChange, false);
        this._NgSwitchCase_16_6.detectChangesInInputProps(this, this._anchor_16, throwOnChange);
        var currVal_18_0_0 = 4;
        this._NgSwitchCase_18_6.check_ngSwitchCase(currVal_18_0_0, throwOnChange, false);
        this._NgSwitchCase_18_6.detectChangesInInputProps(this, this._anchor_18, throwOnChange);
        this._NgSwitchDefault_20_6.detectChangesInInputProps(this, this._anchor_20, throwOnChange);
        var currVal_25_0_0 = this.context.canNext;
        this._NgIf_25_6.check_ngIf(currVal_25_0_0, throwOnChange, false);
        this._NgIf_25_6.detectChangesInInputProps(this, this._anchor_25, throwOnChange);
        var currVal_29_0_0 = this.context.result;
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.detectChangesInInputProps(this, this._anchor_29, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_49 = import2.interpolate(2, '问题', this.context.question.order, ' (', ((this.context.question.type == 1) ? '选择题' : '判断题'), ')');
        if (import2.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setText(this._text_7, currVal_49);
            this._expr_49 = currVal_49;
        }
        var currVal_50 = import2.interpolate(1, '', this.context.question.content, '');
        if (import2.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setText(this._text_10, currVal_50);
            this._expr_50 = currVal_50;
        }
        this._NgSwitch_12_3.detectChangesInHostProps(this, this._el_12, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_QuestionComponent0;
}(import3.AppView));
export function viewFactory_QuestionComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_QuestionComponent === null)) {
        (renderType_QuestionComponent = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.Emulated, styles_QuestionComponent, {}));
    }
    return new _View_QuestionComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent1 = (function (_super) {
    __extends(_View_QuestionComponent1, _super);
    function _View_QuestionComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent1, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_QuestionComponent1.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n			', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_1 = new import5.AppElement(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import15.TemplateRef_(this._appEl_1, viewFactory_QuestionComponent2);
        this._NgFor_1_6 = new import18.Wrapper_NgFor(this._appEl_1.vcRef, this._TemplateRef_1_5, this.parent.parentInjector.get(import19.IterableDiffers), this.parent.ref);
        this._text_2 = this.renderer.createText(null, '\n		', null);
        this.init([].concat([
            this._text_0,
            this._appEl_1,
            this._text_2
        ]), [
            this._text_0,
            this._anchor_1,
            this._text_2
        ], [], []);
        return null;
    };
    _View_QuestionComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import20.NgFor) && (1 === requestNodeIndex))) {
            return this._NgFor_1_6.context;
        }
        return notFoundResult;
    };
    _View_QuestionComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this.parent.context.question.subjectOptionList;
        this._NgFor_1_6.check_ngForOf(currVal_1_0_0, throwOnChange, false);
        this._NgFor_1_6.detectChangesInInputProps(this, this._anchor_1, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_QuestionComponent1;
}(import3.AppView));
function viewFactory_QuestionComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent2 = (function (_super) {
    __extends(_View_QuestionComponent2, _super);
    function _View_QuestionComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent2, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
    }
    _View_QuestionComponent2.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n				', null);
        this._el_1 = import2.createRenderElement(this.renderer, null, 'a', new import2.InlineArray2(2, 'class', 'button radio'), null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        this._text_3 = this.renderer.createText(null, '\n			', null);
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        this.init([].concat([
            this._text_0,
            this._el_1,
            this._text_3
        ]), [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3
        ], [disposable_0], []);
        return null;
    };
    _View_QuestionComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = this.context.$implicit.checked;
        if (import2.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_1, 'solid', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import2.interpolate(1, '', this.context.$implicit.optionDetail, '');
        if (import2.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_2, currVal_5);
            this._expr_5 = currVal_5;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_QuestionComponent2.prototype._handle_click_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_1_0 = (this.parent.parent.context.change(this.context.$implicit) !== false);
        return (true && pd_1_0);
    };
    return _View_QuestionComponent2;
}(import3.AppView));
function viewFactory_QuestionComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent3 = (function (_super) {
    __extends(_View_QuestionComponent3, _super);
    function _View_QuestionComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent3, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_QuestionComponent3.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n			', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_1 = new import5.AppElement(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import15.TemplateRef_(this._appEl_1, viewFactory_QuestionComponent4);
        this._NgFor_1_6 = new import18.Wrapper_NgFor(this._appEl_1.vcRef, this._TemplateRef_1_5, this.parent.parentInjector.get(import19.IterableDiffers), this.parent.ref);
        this._text_2 = this.renderer.createText(null, '\n		', null);
        this.init([].concat([
            this._text_0,
            this._appEl_1,
            this._text_2
        ]), [
            this._text_0,
            this._anchor_1,
            this._text_2
        ], [], []);
        return null;
    };
    _View_QuestionComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import20.NgFor) && (1 === requestNodeIndex))) {
            return this._NgFor_1_6.context;
        }
        return notFoundResult;
    };
    _View_QuestionComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this.parent.context.question.subjectOptionList;
        this._NgFor_1_6.check_ngForOf(currVal_1_0_0, throwOnChange, false);
        this._NgFor_1_6.detectChangesInInputProps(this, this._anchor_1, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_QuestionComponent3;
}(import3.AppView));
function viewFactory_QuestionComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent4 = (function (_super) {
    __extends(_View_QuestionComponent4, _super);
    function _View_QuestionComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent4, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
    }
    _View_QuestionComponent4.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n				', null);
        this._el_1 = import2.createRenderElement(this.renderer, null, 'a', import2.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        this._text_3 = this.renderer.createText(null, '\n			', null);
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        this.init([].concat([
            this._text_0,
            this._el_1,
            this._text_3
        ]), [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3
        ], [disposable_0], []);
        return null;
    };
    _View_QuestionComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = import2.interpolate(1, '', ('checkbox wide i-s' + this.context.index), '');
        if (import2.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_1, 'className', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.$implicit.checked;
        if (import2.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_1, 'solid', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import2.interpolate(1, '', this.context.$implicit.optionDetail, '');
        if (import2.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_2, currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_QuestionComponent4.prototype._handle_click_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_1_0 = (this.parent.parent.context.change(this.context.$implicit) !== false);
        return (true && pd_1_0);
    };
    return _View_QuestionComponent4;
}(import3.AppView));
function viewFactory_QuestionComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent4(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent5 = (function (_super) {
    __extends(_View_QuestionComponent5, _super);
    function _View_QuestionComponent5(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent5, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_QuestionComponent5.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n			', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_1 = new import5.AppElement(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import15.TemplateRef_(this._appEl_1, viewFactory_QuestionComponent6);
        this._NgFor_1_6 = new import18.Wrapper_NgFor(this._appEl_1.vcRef, this._TemplateRef_1_5, this.parent.parentInjector.get(import19.IterableDiffers), this.parent.ref);
        this._text_2 = this.renderer.createText(null, '\n		', null);
        this.init([].concat([
            this._text_0,
            this._appEl_1,
            this._text_2
        ]), [
            this._text_0,
            this._anchor_1,
            this._text_2
        ], [], []);
        return null;
    };
    _View_QuestionComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import20.NgFor) && (1 === requestNodeIndex))) {
            return this._NgFor_1_6.context;
        }
        return notFoundResult;
    };
    _View_QuestionComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this.parent.context.question.subjectOptionList;
        this._NgFor_1_6.check_ngForOf(currVal_1_0_0, throwOnChange, false);
        this._NgFor_1_6.detectChangesInInputProps(this, this._anchor_1, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_QuestionComponent5;
}(import3.AppView));
function viewFactory_QuestionComponent5(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent5(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent6 = (function (_super) {
    __extends(_View_QuestionComponent6, _super);
    function _View_QuestionComponent6(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent6, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
    }
    _View_QuestionComponent6.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n				', null);
        this._el_1 = import2.createRenderElement(this.renderer, null, 'a', import2.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        this._text_3 = this.renderer.createText(null, '\n			', null);
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        this.init([].concat([
            this._text_0,
            this._el_1,
            this._text_3
        ]), [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3
        ], [disposable_0], []);
        return null;
    };
    _View_QuestionComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = import2.interpolate(1, '', ('checkbox wide i-s' + this.context.index), '');
        if (import2.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_1, 'className', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.$implicit.checked;
        if (import2.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_1, 'solid', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import2.interpolate(1, '', this.context.$implicit.optionDetail, '');
        if (import2.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_2, currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_QuestionComponent6.prototype._handle_click_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_1_0 = (this.parent.parent.context.change(this.context.$implicit) !== false);
        return (true && pd_1_0);
    };
    return _View_QuestionComponent6;
}(import3.AppView));
function viewFactory_QuestionComponent6(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent6(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent7 = (function (_super) {
    __extends(_View_QuestionComponent7, _super);
    function _View_QuestionComponent7(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent7, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_QuestionComponent7.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n			', null);
        this._anchor_1 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_1 = new import5.AppElement(1, null, this, this._anchor_1);
        this._TemplateRef_1_5 = new import15.TemplateRef_(this._appEl_1, viewFactory_QuestionComponent8);
        this._NgFor_1_6 = new import18.Wrapper_NgFor(this._appEl_1.vcRef, this._TemplateRef_1_5, this.parent.parentInjector.get(import19.IterableDiffers), this.parent.ref);
        this._text_2 = this.renderer.createText(null, '\n		', null);
        this.init([].concat([
            this._text_0,
            this._appEl_1,
            this._text_2
        ]), [
            this._text_0,
            this._anchor_1,
            this._text_2
        ], [], []);
        return null;
    };
    _View_QuestionComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import20.NgFor) && (1 === requestNodeIndex))) {
            return this._NgFor_1_6.context;
        }
        return notFoundResult;
    };
    _View_QuestionComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this.parent.context.question.subjectOptionList;
        this._NgFor_1_6.check_ngForOf(currVal_1_0_0, throwOnChange, false);
        this._NgFor_1_6.detectChangesInInputProps(this, this._anchor_1, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_QuestionComponent7;
}(import3.AppView));
function viewFactory_QuestionComponent7(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent7(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent8 = (function (_super) {
    __extends(_View_QuestionComponent8, _super);
    function _View_QuestionComponent8(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent8, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
    }
    _View_QuestionComponent8.prototype.createInternal = function (rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n				', null);
        this._el_1 = import2.createRenderElement(this.renderer, null, 'a', import2.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '', null);
        this._text_3 = this.renderer.createText(null, '\n			', null);
        var disposable_0 = this.renderer.listen(this._el_1, 'click', this.eventHandler(this._handle_click_1_0.bind(this)));
        this.init([].concat([
            this._text_0,
            this._el_1,
            this._text_3
        ]), [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3
        ], [disposable_0], []);
        return null;
    };
    _View_QuestionComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = import2.interpolate(1, '', ('checkbox i-s' + this.context.index), '');
        if (import2.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_1, 'className', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.$implicit.checked;
        if (import2.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_1, 'solid', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import2.interpolate(1, '', this.context.$implicit.optionDetail, '');
        if (import2.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_2, currVal_6);
            this._expr_6 = currVal_6;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_QuestionComponent8.prototype._handle_click_1_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_1_0 = (this.parent.parent.context.change(this.context.$implicit) !== false);
        return (true && pd_1_0);
    };
    return _View_QuestionComponent8;
}(import3.AppView));
function viewFactory_QuestionComponent8(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent8(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent9 = (function (_super) {
    __extends(_View_QuestionComponent9, _super);
    function _View_QuestionComponent9(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent9, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_QuestionComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'a', new import2.InlineArray2(2, 'class', 'button center'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'OK', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_QuestionComponent9.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.submit() !== false);
        return (true && pd_0_0);
    };
    return _View_QuestionComponent9;
}(import3.AppView));
function viewFactory_QuestionComponent9(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent9(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent10 = (function (_super) {
    __extends(_View_QuestionComponent10, _super);
    function _View_QuestionComponent10(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent10, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
    }
    _View_QuestionComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', new import2.InlineArray2(2, 'class', 'mask'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'result center'), null);
        this._NgSwitch_2_3 = new import13.Wrapper_NgSwitch();
        this._text_3 = this.renderer.createText(this._el_2, '\n		', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import5.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import15.TemplateRef_(this._appEl_4, viewFactory_QuestionComponent11);
        this._NgSwitchCase_4_6 = new import13.Wrapper_NgSwitchCase(this._appEl_4.vcRef, this._TemplateRef_4_5, this._NgSwitch_2_3.context);
        this._text_5 = this.renderer.createText(this._el_2, '\n		', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_6 = new import5.AppElement(6, 2, this, this._anchor_6);
        this._TemplateRef_6_5 = new import15.TemplateRef_(this._appEl_6, viewFactory_QuestionComponent12);
        this._NgSwitchDefault_6_6 = new import13.Wrapper_NgSwitchDefault(this._appEl_6.vcRef, this._TemplateRef_6_5, this._NgSwitch_2_3.context);
        this._text_7 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n	', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._text_9
        ], [disposable_0], []);
        return null;
    };
    _View_QuestionComponent10.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import16.NgSwitchCase) && (4 === requestNodeIndex))) {
            return this._NgSwitchCase_4_6.context;
        }
        if (((token === import15.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import16.NgSwitchDefault) && (6 === requestNodeIndex))) {
            return this._NgSwitchDefault_6_6.context;
        }
        if (((token === import16.NgSwitch) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._NgSwitch_2_3.context;
        }
        return notFoundResult;
    };
    _View_QuestionComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parent.context.result.flag;
        this._NgSwitch_2_3.check_ngSwitch(currVal_2_0_0, throwOnChange, false);
        this._NgSwitch_2_3.detectChangesInInputProps(this, this._el_2, throwOnChange);
        var currVal_4_0_0 = true;
        this._NgSwitchCase_4_6.check_ngSwitchCase(currVal_4_0_0, throwOnChange, false);
        this._NgSwitchCase_4_6.detectChangesInInputProps(this, this._anchor_4, throwOnChange);
        this._NgSwitchDefault_6_6.detectChangesInInputProps(this, this._anchor_6, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NgSwitch_2_3.detectChangesInHostProps(this, this._el_2, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_QuestionComponent10.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0_0 = (this.parent.context.next() !== false);
        return (true && pd_0_0);
    };
    return _View_QuestionComponent10;
}(import3.AppView));
function viewFactory_QuestionComponent10(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent10(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent11 = (function (_super) {
    __extends(_View_QuestionComponent11, _super);
    function _View_QuestionComponent11(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent11, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_15 = import1.UNINITIALIZED;
    }
    _View_QuestionComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n			', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'i', new import2.InlineArray2(2, 'class', 'left i-good'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n			', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'text'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_6 = import2.createRenderElement(this.renderer, this._el_4, 'i', new import2.InlineArray2(2, 'class', 'i-t-good'), null);
        this._text_7 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_8 = import2.createRenderElement(this.renderer, this._el_4, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '此道题您答对啦~~~', null);
        this._text_10 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_11 = import2.createRenderElement(this.renderer, this._el_4, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n			', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n		', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
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
            this._text_14
        ], [], []);
        return null;
    };
    _View_QuestionComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_15 = import2.interpolate(2, '本题得分 ', this.parent.parent.context.result.score, ' 分，目前总分 ', this.parent.parent.context.result.allScore, ' 分');
        if (import2.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setText(this._text_12, currVal_15);
            this._expr_15 = currVal_15;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_QuestionComponent11;
}(import3.AppView));
function viewFactory_QuestionComponent11(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent11(viewUtils, parentInjector, declarationEl);
}
var _View_QuestionComponent12 = (function (_super) {
    __extends(_View_QuestionComponent12, _super);
    function _View_QuestionComponent12(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_QuestionComponent12, renderType_QuestionComponent, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_15 = import1.UNINITIALIZED;
    }
    _View_QuestionComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import2.createRenderElement(this.renderer, null, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n			', null);
        this._el_2 = import2.createRenderElement(this.renderer, this._el_0, 'i', new import2.InlineArray2(2, 'class', 'left i-bad'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n			', null);
        this._el_4 = import2.createRenderElement(this.renderer, this._el_0, 'div', new import2.InlineArray2(2, 'class', 'text'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_6 = import2.createRenderElement(this.renderer, this._el_4, 'i', new import2.InlineArray2(2, 'class', 'i-t-bad'), null);
        this._text_7 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_8 = import2.createRenderElement(this.renderer, this._el_4, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '此道题您答错了~~~', null);
        this._text_10 = this.renderer.createText(this._el_4, '\n				', null);
        this._el_11 = import2.createRenderElement(this.renderer, this._el_4, 'div', import2.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n			', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n		', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
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
            this._text_14
        ], [], []);
        return null;
    };
    _View_QuestionComponent12.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_15 = import2.interpolate(2, '本题得分 ', this.parent.parent.context.result.score, ' 分，目前总分 ', this.parent.parent.context.result.allScore, ' 分');
        if (import2.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setText(this._text_12, currVal_15);
            this._expr_15 = currVal_15;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_QuestionComponent12;
}(import3.AppView));
function viewFactory_QuestionComponent12(viewUtils, parentInjector, declarationEl) {
    return new _View_QuestionComponent12(viewUtils, parentInjector, declarationEl);
}
