import { Directive, TemplateRef, ElementRef, ViewContainerRef, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Directive({
  selector: '[appNgIfAdmin]'
})
export class NgIfAdminDirective implements OnInit, OnDestroy {

  subscription;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe((user) => {

      if (user) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
