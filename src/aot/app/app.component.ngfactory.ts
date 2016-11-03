/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/app.component';
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
import * as import14 from './app.component.css.shim';
import * as import15 from '../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import16 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import17 from '@angular/router/src/router_outlet_map';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/router/src/directives/router_outlet';
import * as import21 from '@angular/common/src/directives/ng_if';
export class Wrapper_AppComponent {
  context:import0.AppComponent;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.AppComponent(p0,p1,p2);
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
var renderType_AppComponent_Host:import2.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AppComponent_0_4:Wrapper_AppComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'app',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new Wrapper_AppComponent(this.parentInjector.get(import8.Router),this.parentInjector.get(import9.ActivatedRoute),this.parentInjector.get(import10.AppService));
    this._appEl_0.initComponent(this._AppComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AppComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AppComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import12.ComponentFactory<import0.AppComponent> = new import12.ComponentFactory<import0.AppComponent>('app',viewFactory_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = [
  import13.styles,
  import14.styles
]
;
var renderType_AppComponent:import2.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _text_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _RouterOutlet_2_5:import15.Wrapper_RouterOutlet;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import16.Wrapper_NgIf;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,parentRenderNode,'router-outlet',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_2 = new import3.AppElement(2,(null as any),this,this._el_2);
    this._RouterOutlet_2_5 = new import15.Wrapper_RouterOutlet(this.parentInjector.get(import17.RouterOutletMap),this._appEl_2.vcRef,this.parentInjector.get(import18.ComponentFactoryResolver),(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_4 = new import3.AppElement(4,(null as any),this,this._anchor_4);
    this._TemplateRef_4_5 = new import19.TemplateRef_(this._appEl_4,viewFactory_AppComponent1);
    this._NgIf_4_6 = new import16.Wrapper_NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this.init(([] as any[]),[
      this._text_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.RouterOutlet) && (2 === requestNodeIndex))) { return this._RouterOutlet_2_5.context; }
    if (((token === import19.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import21.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._RouterOutlet_2_5.detectChangesInInputProps(this,this._el_2,throwOnChange);
    const currVal_4_0_0:any = this.context.loading;
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.detectChangesInInputProps(this,this._anchor_4,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._RouterOutlet_2_5.detectChangesInHostProps(this,this._el_2,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterOutlet_2_5.context.ngOnDestroy();
  }
}
export function viewFactory_AppComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.Emulated,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_AppComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent1,renderType_AppComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'div',new import4.InlineArray2(2,'class','loading'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'div',new import4.InlineArray2(2,'class','rotate'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import4.createRenderElement(this.renderer,this._el_2,'i',new import4.InlineArray2(2,'class','ring'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
function viewFactory_AppComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_AppComponent1(viewUtils,parentInjector,declarationEl);
}