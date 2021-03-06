/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/answer.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
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
export class Wrapper_AnswerComponent {
  context:import0.AnswerComponent;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.AnswerComponent(p0,p1,p2);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_AnswerComponent_Host:import2.RenderComponentType = (null as any);
class _View_AnswerComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AnswerComponent_0_4:Wrapper_AnswerComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AnswerComponent_Host0,renderType_AnswerComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'answer',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AnswerComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AnswerComponent_0_4 = new Wrapper_AnswerComponent(this.parentInjector.get(import8.Router),this.parentInjector.get(import9.ActivatedRoute),this.parentInjector.get(import10.AppService));
    this._appEl_0.initComponent(this._AnswerComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AnswerComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AnswerComponent) && (0 === requestNodeIndex))) { return this._AnswerComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AnswerComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AnswerComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AnswerComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AnswerComponent_Host === (null as any))) { (renderType_AnswerComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AnswerComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AnswerComponentNgFactory:import12.ComponentFactory<import0.AnswerComponent> = new import12.ComponentFactory<import0.AnswerComponent>('answer',viewFactory_AnswerComponent_Host0,import0.AnswerComponent);
const styles_AnswerComponent:any[] = [
  import13.styles,
  import14.styles
]
;
var renderType_AnswerComponent:import2.RenderComponentType = (null as any);
class _View_AnswerComponent0 extends import1.AppView<import0.AnswerComponent> {
  _text_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _appEl_6:import3.AppElement;
  _TemplateRef_6_5:any;
  _NgFor_6_6:import15.Wrapper_NgFor;
  _text_7:any;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import16.Wrapper_NgIf;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AnswerComponent0,renderType_AnswerComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','content flex-column'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n	',(null as any));
    this._el_4 = import4.createRenderElement(this.renderer,this._el_2,'i',new import4.InlineArray2(2,'class','i-drop small center'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n	',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_6 = new import3.AppElement(6,2,this,this._anchor_6);
    this._TemplateRef_6_5 = new import17.TemplateRef_(this._appEl_6,viewFactory_AnswerComponent1);
    this._NgFor_6_6 = new import15.Wrapper_NgFor(this._appEl_6.vcRef,this._TemplateRef_6_5,this.parentInjector.get(import18.IterableDiffers),this.ref);
    this._text_7 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._anchor_9);
    this._TemplateRef_9_5 = new import17.TemplateRef_(this._appEl_9,viewFactory_AnswerComponent2);
    this._NgIf_9_6 = new import16.Wrapper_NgIf(this._appEl_9.vcRef,this._TemplateRef_9_5);
    this.init(([] as any[]),[
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
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import19.NgFor) && (6 === requestNodeIndex))) { return this._NgFor_6_6.context; }
    if (((token === import17.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import20.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6_0_0:any = this.context.questions;
    this._NgFor_6_6.check_ngForOf(currVal_6_0_0,throwOnChange,false);
    this._NgFor_6_6.detectChangesInInputProps(this,this._anchor_6,throwOnChange);
    const currVal_9_0_0:any = this.context.current;
    this._NgIf_9_6.check_ngIf(currVal_9_0_0,throwOnChange,false);
    this._NgIf_9_6.detectChangesInInputProps(this,this._anchor_9,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_AnswerComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AnswerComponent> {
  if ((renderType_AnswerComponent === (null as any))) { (renderType_AnswerComponent = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.Emulated,styles_AnswerComponent,{})); }
  return new _View_AnswerComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_AnswerComponent1 extends import1.AppView<any> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AnswerComponent1,renderType_AnswerComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,(null as any),'h2',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    this._text_3 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_4 = import4.createRenderElement(this.renderer,(null as any),'h3',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_7 = import4.createRenderElement(this.renderer,(null as any),'i',new import4.InlineArray2(2,'class','i-answer center'),(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n	',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this.init(([] as any[]).concat([
      this._text_0,
      this._el_1,
      this._text_3,
      this._el_4,
      this._text_6,
      this._el_7,
      this._text_8
    ]
    ),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_9:any = import4.interpolate(2,'问题',this.context.$implicit.order,' (',((this.context.$implicit.type == 1)? '选择题': '判断题'),')');
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_2,currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = import4.interpolate(1,'',this.context.$implicit.content,'');
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setText(this._text_5,currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this.parent.context.disabled;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_7,'disabled',currVal_11);
      this._expr_11 = currVal_11;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_7_0:any = ((<any>this.parent.context.showAnswer(this.context.$implicit)) !== false);
    return (true && pd_7_0);
  }
}
function viewFactory_AnswerComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_AnswerComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_AnswerComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AnswerComponent2,renderType_AnswerComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'div',new import4.InlineArray2(2,'class','mask'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'div',new import4.InlineArray2(2,'class','popup'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n		',(null as any));
    this._el_4 = import4.createRenderElement(this.renderer,this._el_2,'h2',new import4.InlineArray2(2,'class','orange'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n		',(null as any));
    this._el_7 = import4.createRenderElement(this.renderer,this._el_2,'h3',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n		',(null as any));
    this._el_10 = import4.createRenderElement(this.renderer,this._el_2,'i',new import4.InlineArray2(2,'class','i-know center'),(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n	',(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_10,'click',this.eventHandler(this._handle_click_10_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
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
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_13:any = import4.interpolate(1,'此题的答案应该选择',this.parent.context.current.isCorrect,'');
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_5,currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = import4.interpolate(1,'',this.parent.context.current.correctDetail,'');
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setText(this._text_8,currVal_14);
      this._expr_14 = currVal_14;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_10_0:any = ((<any>(this.parent.context.current = (null as any))) !== false);
    return (true && pd_10_0);
  }
}
function viewFactory_AnswerComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_AnswerComponent2(viewUtils,parentInjector,declarationEl);
}