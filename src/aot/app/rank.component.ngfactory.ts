/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/rank.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
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
export class Wrapper_RankComponent {
  context:import0.RankComponent;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.RankComponent(p0);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_RankComponent_Host:import2.RenderComponentType = (null as any);
class _View_RankComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _RankComponent_0_4:Wrapper_RankComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_RankComponent_Host0,renderType_RankComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'rank',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_RankComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._RankComponent_0_4 = new Wrapper_RankComponent(this.parentInjector.get(import8.AppService));
    this._appEl_0.initComponent(this._RankComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._RankComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.RankComponent) && (0 === requestNodeIndex))) { return this._RankComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._RankComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._RankComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._RankComponent_0_4.context.ngAfterViewInit(); } }
  }
}
function viewFactory_RankComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_RankComponent_Host === (null as any))) { (renderType_RankComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_RankComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const RankComponentNgFactory:import10.ComponentFactory<import0.RankComponent> = new import10.ComponentFactory<import0.RankComponent>('rank',viewFactory_RankComponent_Host0,import0.RankComponent);
const styles_RankComponent:any[] = [
  '.scroller[_ngcontent-%COMP%] {\n		height: calc(100% - 365px);\n		overflow-y: auto;\n	}\n	\n	@media(max-height: 500px) {\n		.scroller[_ngcontent-%COMP%] {\n			height: calc(100% - 320px);\n			overflow-y: auto;\n		}\n	}\n	\n	.row[_ngcontent-%COMP%] {\n		font-size: 16px;\n		line-height: 25px;\n	}\n	\n	.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n		display: inline-block;\n		vertical-align: top;\n	}\n	\n	.column-1[_ngcontent-%COMP%] {\n		width: 50px;\n	}\n	\n	.column-2[_ngcontent-%COMP%] {\n		width: calc((100% - 100px) / 5 * 2);\n		white-space: nowrap;\n		overflow: hidden;\n		text-overflow: ellipsis;\n	}\n	\n	.column-3[_ngcontent-%COMP%] {\n		width: calc((100% - 100px) / 5 * 3);\n		white-space: nowrap;\n		overflow: hidden;\n		text-overflow: ellipsis;\n	}\n	\n	.column-4[_ngcontent-%COMP%] {\n		width: 50px;\n		text-align: end;\n	}',
  import11.styles,
  import12.styles
]
;
var renderType_RankComponent:import2.RenderComponentType = (null as any);
class _View_RankComponent0 extends import1.AppView<import0.RankComponent> {
  _viewQuery_scroller_0:import13.QueryList<any>;
  _text_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _NgSwitch_3_3:import14.Wrapper_NgSwitch;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _appEl_14:import3.AppElement;
  _TemplateRef_14_5:any;
  _NgFor_14_6:import15.Wrapper_NgFor;
  _text_15:any;
  _text_16:any;
  _anchor_17:any;
  /*private*/ _appEl_17:import3.AppElement;
  _TemplateRef_17_5:any;
  _NgSwitchCase_17_6:import14.Wrapper_NgSwitchCase;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _appEl_19:import3.AppElement;
  _TemplateRef_19_5:any;
  _NgSwitchDefault_19_6:import14.Wrapper_NgSwitchDefault;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  /*private*/ _expr_35:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_RankComponent0,renderType_RankComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_35 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_scroller_0 = new import13.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','content flex-column'),(null as any));
    this._NgSwitch_3_3 = new import14.Wrapper_NgSwitch();
    this._text_4 = this.renderer.createText(this._el_3,'\n	',(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_3,'div',new import4.InlineArray2(2,'class','rotate center'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n		',(null as any));
    this._el_7 = import4.createRenderElement(this.renderer,this._el_5,'i',new import4.InlineArray2(2,'class','i-wheel'),(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n		',(null as any));
    this._el_9 = import4.createRenderElement(this.renderer,this._el_5,'div',new import4.InlineArray2(2,'class','circle'),(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n	',(null as any));
    this._text_11 = this.renderer.createText(this._el_3,'\n	',(null as any));
    this._el_12 = import4.createRenderElement(this.renderer,this._el_3,'div',new import4.InlineArray2(2,'class','scroller box'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n		',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12,(null as any));
    this._appEl_14 = new import3.AppElement(14,12,this,this._anchor_14);
    this._TemplateRef_14_5 = new import16.TemplateRef_(this._appEl_14,viewFactory_RankComponent1);
    this._NgFor_14_6 = new import15.Wrapper_NgFor(this._appEl_14.vcRef,this._TemplateRef_14_5,this.parentInjector.get(import17.IterableDiffers),this.ref);
    this._text_15 = this.renderer.createText(this._el_12,'\n	',(null as any));
    this._text_16 = this.renderer.createText(this._el_3,'\n	',(null as any));
    this._anchor_17 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_17 = new import3.AppElement(17,3,this,this._anchor_17);
    this._TemplateRef_17_5 = new import16.TemplateRef_(this._appEl_17,viewFactory_RankComponent2);
    this._NgSwitchCase_17_6 = new import14.Wrapper_NgSwitchCase(this._appEl_17.vcRef,this._TemplateRef_17_5,this._NgSwitch_3_3.context);
    this._text_18 = this.renderer.createText(this._el_3,'\n	',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_19 = new import3.AppElement(19,3,this,this._anchor_19);
    this._TemplateRef_19_5 = new import16.TemplateRef_(this._appEl_19,viewFactory_RankComponent3);
    this._NgSwitchDefault_19_6 = new import14.Wrapper_NgSwitchDefault(this._appEl_19.vcRef,this._TemplateRef_19_5,this._NgSwitch_3_3.context);
    this._text_20 = this.renderer.createText(this._el_3,'\n	',(null as any));
    this._el_21 = import4.createRenderElement(this.renderer,this._el_3,'a',new import4.InlineArray2(2,'class','button big center'),(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'了解一下 上善若水计划',(null as any));
    this._text_23 = this.renderer.createText(this._el_3,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_12,'scroll',this.eventHandler(this._handle_scroll_12_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_21,'click',this.eventHandler(this._handle_click_21_0.bind(this)));
    this._viewQuery_scroller_0.reset([new import18.ElementRef(this._el_12)]);
    this.context.container = this._viewQuery_scroller_0.first;
    this.init(([] as any[]),[
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
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import19.NgFor) && (14 === requestNodeIndex))) { return this._NgFor_14_6.context; }
    if (((token === import16.TemplateRef) && (17 === requestNodeIndex))) { return this._TemplateRef_17_5; }
    if (((token === import20.NgSwitchCase) && (17 === requestNodeIndex))) { return this._NgSwitchCase_17_6.context; }
    if (((token === import16.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import20.NgSwitchDefault) && (19 === requestNodeIndex))) { return this._NgSwitchDefault_19_6.context; }
    if (((token === import20.NgSwitch) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._NgSwitch_3_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.rank;
    this._NgSwitch_3_3.check_ngSwitch(currVal_3_0_0,throwOnChange,false);
    this._NgSwitch_3_3.detectChangesInInputProps(this,this._el_3,throwOnChange);
    const currVal_14_0_0:any = this.context.list;
    this._NgFor_14_6.check_ngForOf(currVal_14_0_0,throwOnChange,false);
    this._NgFor_14_6.detectChangesInInputProps(this,this._anchor_14,throwOnChange);
    const currVal_17_0_0:any = (null as any);
    this._NgSwitchCase_17_6.check_ngSwitchCase(currVal_17_0_0,throwOnChange,false);
    this._NgSwitchCase_17_6.detectChangesInInputProps(this,this._anchor_17,throwOnChange);
    this._NgSwitchDefault_19_6.detectChangesInInputProps(this,this._anchor_19,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NgSwitch_3_3.detectChangesInHostProps(this,this._el_3,throwOnChange);
    const currVal_35:any = (('url(' + this.context.appService.user.headImgUrl) + ')');
    if (import4.checkBinding(throwOnChange,this._expr_35,currVal_35)) {
      this.renderer.setElementStyle(this._el_9,'backgroundImage',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_35) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_35).toString()));
      this._expr_35 = currVal_35;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_scroll_12_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_12_0:any = ((<any>this.context.scroll($event)) !== false);
    return (true && pd_12_0);
  }
  private _handle_click_21_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_21_0:any = ((<any>this.context.appService.goExternal()) !== false);
    return (true && pd_21_0);
  }
}
export function viewFactory_RankComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.RankComponent> {
  if ((renderType_RankComponent === (null as any))) { (renderType_RankComponent = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.Emulated,styles_RankComponent,{})); }
  return new _View_RankComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_RankComponent1 extends import1.AppView<any> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_RankComponent1,renderType_RankComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n			',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,(null as any),'div',new import4.InlineArray2(2,'class','row'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n				',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'div',new import4.InlineArray2(2,'class','column-1'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n				',(null as any));
    this._el_6 = import4.createRenderElement(this.renderer,this._el_1,'div',new import4.InlineArray2(2,'class','column-2'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n				',(null as any));
    this._el_9 = import4.createRenderElement(this.renderer,this._el_1,'div',new import4.InlineArray2(2,'class','column-3'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this._text_11 = this.renderer.createText(this._el_1,'\n				',(null as any));
    this._el_12 = import4.createRenderElement(this.renderer,this._el_1,'div',new import4.InlineArray2(2,'class','column-4'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'',(null as any));
    this._text_14 = this.renderer.createText(this._el_1,'\n			',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n		',(null as any));
    this.init(([] as any[]).concat([
      this._text_0,
      this._el_1,
      this._text_15
    ]
    ),[
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
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_16:any = import4.interpolate(1,'',(this.context.index + 1),'');
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setText(this._text_4,currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = import4.interpolate(1,'',this.context.$implicit.realName,'');
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setText(this._text_7,currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = import4.interpolate(2,'',this.context.$implicit.province,'',this.context.$implicit.city,'');
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setText(this._text_10,currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = import4.interpolate(1,'',this.context.$implicit.score,'分');
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setText(this._text_13,currVal_19);
      this._expr_19 = currVal_19;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_RankComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_RankComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_RankComponent2 extends import1.AppView<any> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLinkWithHref_7_3:import22.Wrapper_RouterLinkWithHref;
  _text_8:any;
  _text_9:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_RankComponent2,renderType_RankComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,(null as any),'div',new import4.InlineArray2(2,'class','box'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n			',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'span',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'我的成绩：还没有测试过',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n		',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_7 = import4.createRenderElement(this.renderer,(null as any),'a',new import4.InlineArray4(4,'class','button big center','routerLink',''),(null as any));
    this._RouterLinkWithHref_7_3 = new import22.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import23.Router),this.parent.parentInjector.get(import24.ActivatedRoute),this.parent.parentInjector.get(import25.LocationStrategy));
    this._text_8 = this.renderer.createText(this._el_7,'立即测试',(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n	',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this.init(([] as any[]).concat([
      this._text_0,
      this._el_1,
      this._text_6,
      this._el_7,
      this._text_9
    ]
    ),[
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
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkWithHref_7_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = '';
    this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0,throwOnChange,false);
    this._RouterLinkWithHref_7_3.detectChangesInInputProps(this,this._el_7,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._RouterLinkWithHref_7_3.detectChangesInHostProps(this,this._el_7,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_7_3.context.ngOnDestroy();
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_7_0:any = ((<any>this._RouterLinkWithHref_7_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_7_0);
  }
}
function viewFactory_RankComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_RankComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_RankComponent3 extends import1.AppView<any> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLinkWithHref_7_3:import22.Wrapper_RouterLinkWithHref;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_RankComponent3,renderType_RankComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_11 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,(null as any),'div',new import4.InlineArray2(2,'class','box'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n			',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'span',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n		',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_7 = import4.createRenderElement(this.renderer,(null as any),'a',new import4.InlineArray4(4,'class','button big center','routerLink',''),(null as any));
    this._RouterLinkWithHref_7_3 = new import22.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import23.Router),this.parent.parentInjector.get(import24.ActivatedRoute),this.parent.parentInjector.get(import25.LocationStrategy));
    this._text_8 = this.renderer.createText(this._el_7,'再测一次',(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n	',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this.init(([] as any[]).concat([
      this._text_0,
      this._el_1,
      this._text_6,
      this._el_7,
      this._text_9
    ]
    ),[
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
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkWithHref_7_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = '';
    this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0,throwOnChange,false);
    this._RouterLinkWithHref_7_3.detectChangesInInputProps(this,this._el_7,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_11:any = import4.interpolate(2,'我的成绩：',this.parent.context.rank.score,' 分，第 ',this.parent.context.rank.rank,' 名');
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setText(this._text_4,currVal_11);
      this._expr_11 = currVal_11;
    }
    this._RouterLinkWithHref_7_3.detectChangesInHostProps(this,this._el_7,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_7_3.context.ngOnDestroy();
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_7_0:any = ((<any>this._RouterLinkWithHref_7_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_7_0);
  }
}
function viewFactory_RankComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_RankComponent3(viewUtils,parentInjector,declarationEl);
}