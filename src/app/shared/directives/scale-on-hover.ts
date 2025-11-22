import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[scaleOnHover]'
})
export class ScaleOnHover {
  scale: number = 1.1;
  duration: number = 0.2;

  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.transition') transition = `transform ${this.duration}s ease`;

  @HostListener('mouseenter')
  onEnter() {
    this.transform = `scale(${this.scale})`;
  }

  @HostListener('mouseleave')
  onLeave() {
    this.transform = 'scale(1)';
  }
}
