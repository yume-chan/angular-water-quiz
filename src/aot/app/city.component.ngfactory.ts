/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/city.component';
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
import * as import14 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/common/src/directives/ng_for';
export class Wrapper_CityComponent {
  context:import0.CityComponent;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.CityComponent(p0,p1,p2);
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
var renderType_CityComponent_Host:import2.RenderComponentType = (null as any);
class _View_CityComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _CityComponent_0_4:Wrapper_CityComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_CityComponent_Host0,renderType_CityComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'city',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CityComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CityComponent_0_4 = new Wrapper_CityComponent(this.parentInjector.get(import8.Router),this.parentInjector.get(import9.ActivatedRoute),this.parentInjector.get(import10.AppService));
    this._appEl_0.initComponent(this._CityComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._CityComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CityComponent) && (0 === requestNodeIndex))) { return this._CityComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._CityComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._CityComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_CityComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_CityComponent_Host === (null as any))) { (renderType_CityComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_CityComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const CityComponentNgFactory:import12.ComponentFactory<import0.CityComponent> = new import12.ComponentFactory<import0.CityComponent>('city',viewFactory_CityComponent_Host0,import0.CityComponent);
const styles_CityComponent:any[] = [
  '.content[_ngcontent-%COMP%] {\n		padding: 0;\n		max-width: unset !important;\n	}\n	\n	.item[_ngcontent-%COMP%] {\n		height: 50px;\n		line-height: 45px;\n		border-top: 1px solid #CCC;\n		margin-top: -1px;\n	}\n	\n	.inner[_ngcontent-%COMP%] {\n		max-width: 375px;\n		padding: 0 20px;\n	}',
  import13.styles
]
;
var renderType_CityComponent:import2.RenderComponentType = (null as any);
class _View_CityComponent0 extends import1.AppView<import0.CityComponent> {
  _text_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import3.AppElement;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import14.Wrapper_NgFor;
  _text_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_CityComponent0,renderType_CityComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','content'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n	',(null as any));
    this._el_4 = import4.createRenderElement(this.renderer,this._el_2,'div',new import4.InlineArray2(2,'class','item text-center'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'请选择',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n	',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_7 = new import3.AppElement(7,2,this,this._anchor_7);
    this._TemplateRef_7_5 = new import15.TemplateRef_(this._appEl_7,viewFactory_CityComponent1);
    this._NgFor_7_6 = new import14.Wrapper_NgFor(this._appEl_7.vcRef,this._TemplateRef_7_5,this.parentInjector.get(import16.IterableDiffers),this.ref);
    this._text_8 = this.renderer.createText(this._el_2,'\n',(null as any));
    this.init(([] as any[]),[
      this._text_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._anchor_7,
      this._text_8
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import17.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = this.context.list;
    this._NgFor_7_6.check_ngForOf(currVal_7_0_0,throwOnChange,false);
    this._NgFor_7_6.detectChangesInInputProps(this,this._anchor_7,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_CityComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.CityComponent> {
  if ((renderType_CityComponent === (null as any))) { (renderType_CityComponent = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.Emulated,styles_CityComponent,{})); }
  return new _View_CityComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_CityComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_CityComponent1,renderType_CityComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_5 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'div',new import4.InlineArray2(2,'class','item'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n		',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'div',new import4.InlineArray2(2,'class','inner'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n	',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_5:any = import4.interpolate(1,'',this.context.$implicit.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_3,currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.parent.context.next(this.context.$implicit.id,this.context.$implicit.name)) !== false);
    return (true && pd_0_0);
  }
}
function viewFactory_CityComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_CityComponent1(viewUtils,parentInjector,declarationEl);
}