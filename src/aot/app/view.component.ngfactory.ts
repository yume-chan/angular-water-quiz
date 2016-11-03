/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/view.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory_resolver';
import * as import9 from '../../app/app.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './common.css.shim';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/template_ref';
export class Wrapper_ViewComponent {
  context:import0.ViewComponent;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.ViewComponent(p0,p1);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_ViewComponent_Host:import2.RenderComponentType = (null as any);
class _View_ViewComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ViewComponent_0_4:Wrapper_ViewComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ViewComponent_Host0,renderType_ViewComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'view',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ViewComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ViewComponent_0_4 = new Wrapper_ViewComponent(this.parentInjector.get(import8.ComponentFactoryResolver),this.parentInjector.get(import9.AppService));
    this._appEl_0.initComponent(this._ViewComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ViewComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ViewComponent) && (0 === requestNodeIndex))) { return this._ViewComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ViewComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._ViewComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._ViewComponent_0_4.context.ngAfterViewInit(); } }
  }
}
function viewFactory_ViewComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ViewComponent_Host === (null as any))) { (renderType_ViewComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ViewComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ViewComponentNgFactory:import11.ComponentFactory<import0.ViewComponent> = new import11.ComponentFactory<import0.ViewComponent>('view',viewFactory_ViewComponent_Host0,import0.ViewComponent);
const styles_ViewComponent:any[] = [import12.styles];
var renderType_ViewComponent:import2.RenderComponentType = (null as any);
class _View_ViewComponent0 extends import1.AppView<import0.ViewComponent> {
  _viewQuery_container_0:import13.QueryList<any>;
  _text_0:any;
  _anchor_1:any;
  /*private*/ _appEl_1:import3.AppElement;
  _TemplateRef_1_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ViewComponent0,renderType_ViewComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_container_0 = new import13.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_1 = new import3.AppElement(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import14.TemplateRef_(this._appEl_1,viewFactory_ViewComponent1);
    this._viewQuery_container_0.reset([this._appEl_1.vcRef]);
    this.context.container = this._viewQuery_container_0.first;
    this.init(([] as any[]),[
      this._text_0,
      this._anchor_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    return notFoundResult;
  }
}
export function viewFactory_ViewComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ViewComponent> {
  if ((renderType_ViewComponent === (null as any))) { (renderType_ViewComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.Emulated,styles_ViewComponent,{})); }
  return new _View_ViewComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_ViewComponent1 extends import1.AppView<any> {
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ViewComponent1,renderType_ViewComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this.init(([] as any[]),([] as any[]),([] as any[]),([] as any[]));
    return (null as any);
  }
}
function viewFactory_ViewComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_ViewComponent1(viewUtils,parentInjector,declarationEl);
}