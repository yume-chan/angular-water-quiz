/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/greeting.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../app/app.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './common.css.shim';
export class Wrapper_GrettingComponent {
  context:import0.GrettingComponent;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.GrettingComponent(p0,p1);
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
var renderType_GrettingComponent_Host:import2.RenderComponentType = (null as any);
class _View_GrettingComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _GrettingComponent_0_4:Wrapper_GrettingComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_GrettingComponent_Host0,renderType_GrettingComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'gretting',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_GrettingComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._GrettingComponent_0_4 = new Wrapper_GrettingComponent(this.parentInjector.get(import8.Router),this.parentInjector.get(import9.AppService));
    this._appEl_0.initComponent(this._GrettingComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._GrettingComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.GrettingComponent) && (0 === requestNodeIndex))) { return this._GrettingComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._GrettingComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._GrettingComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_GrettingComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_GrettingComponent_Host === (null as any))) { (renderType_GrettingComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_GrettingComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const GrettingComponentNgFactory:import11.ComponentFactory<import0.GrettingComponent> = new import11.ComponentFactory<import0.GrettingComponent>('gretting',viewFactory_GrettingComponent_Host0,import0.GrettingComponent);
const styles_GrettingComponent:any[] = [import12.styles];
var renderType_GrettingComponent:import2.RenderComponentType = (null as any);
class _View_GrettingComponent0 extends import1.AppView<import0.GrettingComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_GrettingComponent0,renderType_GrettingComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','content flex-column'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n	',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,this._el_1,'i',new import4.InlineArray2(2,'class','i-drop small center'),(null as any));
    this._text_4 = this.renderer.createText(this._el_1,'\n	',(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_1,'div',new import4.InlineArray2(2,'class','box round font-small'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n		本测验由浙江省矿业联合会牵头发起，为响应浙江省政府最新提出的“健康浙江”规划方针，本着传播科学本质的健康饮水认知，提高我省居民对有益身体健康的矿泉水的真貌认知，在饮水方面科普健康认知，为实现“健康浙江”贡献一份力量；由浙江省矿业联合会热矿水专委会监制。\n	',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n	',(null as any));
    this._el_8 = import4.createRenderElement(this.renderer,this._el_1,'div',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n		',(null as any));
    this._el_10 = import4.createRenderElement(this.renderer,this._el_8,'h1',new import4.InlineArray4(4,'class','text-center','style','margin: 0'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'浙江省矿联热矿水专委会',(null as any));
    this._text_12 = this.renderer.createText(this._el_8,'\n		',(null as any));
    this._el_13 = import4.createRenderElement(this.renderer,this._el_8,'h1',new import4.InlineArray4(4,'class','text-center','style','margin: 0'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'矿泉水科学认知测验',(null as any));
    this._text_15 = this.renderer.createText(this._el_8,'\n	',(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n	',(null as any));
    this._text_17 = this.renderer.createText(this._el_1,'\n	',(null as any));
    this._el_18 = import4.createRenderElement(this.renderer,this._el_1,'div',new import4.InlineArray2(2,'class','box font-small'),(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'\n		1）、本测试题共12题，总分为100分；',(null as any));
    this._el_20 = import4.createRenderElement(this.renderer,this._el_18,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_21 = this.renderer.createText(this._el_18,'\n2）、测试结果分为：100分为“优+”、95-99分为“优”、80-94分为“良”、60-79分为“中”和60分以下为“差”五种结果；',(null as any));
    this._el_22 = import4.createRenderElement(this.renderer,this._el_18,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_23 = this.renderer.createText(this._el_18,'\n3）、做题过程中，每做完一题提交答案后，会及时提示“对或错”的提示信息，并告知该题您获得了几分；',(null as any));
    this._el_24 = import4.createRenderElement(this.renderer,this._el_18,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_25 = this.renderer.createText(this._el_18,'\n4）、做完一轮测试，告知总得分结果，在该页面您可以点击“选一题查看答案”按钮，进入所测题列表，选择您最想知道答案的那一题进行查看，一轮只能查看一题；',(null as any));
    this._el_26 = import4.createRenderElement(this.renderer,this._el_18,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_27 = this.renderer.createText(this._el_18,'\n5）、最后，该测试的成绩，您可以将测试的成绩提交至浙江省矿业联合会的官网上，为您保留并展现在官网上。	',(null as any));
    this._el_28 = import4.createRenderElement(this.renderer,this._el_18,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_18,'\n	',(null as any));
    this._text_30 = this.renderer.createText(this._el_1,'\n	',(null as any));
    this._el_31 = import4.createRenderElement(this.renderer,this._el_1,'i',new import4.InlineArray2(2,'class','i-start center'),(null as any));
    this._text_32 = this.renderer.createText(this._el_1,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_31,'click',this.eventHandler(this._handle_click_31_0.bind(this)));
    this.init(([] as any[]),[
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
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  private _handle_click_31_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_31_0:any = ((<any>this.context.start()) !== false);
    return (true && pd_31_0);
  }
}
export function viewFactory_GrettingComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.GrettingComponent> {
  if ((renderType_GrettingComponent === (null as any))) { (renderType_GrettingComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.Emulated,styles_GrettingComponent,{})); }
  return new _View_GrettingComponent0(viewUtils,parentInjector,declarationEl);
}