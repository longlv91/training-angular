import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

// Creating a structural directive

@Directive({
  selector: '[appMyCustomIf]'
})
export class MyCustomIfDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appMyCustomIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
