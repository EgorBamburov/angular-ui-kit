import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class ToastService {
    toast$ = signal(null);
    defaultDuration = 2000;
    timeout = 0;
    constructor() { }
    addToast(toast) {
        const toastClone = { ...toast };
        if (!toast.title) {
            switch (toast.type) {
                case 'error':
                    toastClone.title = 'Ошибка';
                    break;
                case 'warning':
                    toastClone.title = 'Предупреждение';
                    break;
                case 'success':
                    toastClone.title = 'Успешно';
                    break;
            }
        }
        this.toast$.set(toastClone);
        this.setToastTimeOut(toastClone.duration);
    }
    removeToast() {
        clearTimeout(this.timeout);
        this.toast$.set(null);
    }
    setToastTimeOut(duration) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.removeToast();
        }, duration || this.defaultDuration);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToastService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVpLWtpdC9zcmMvY29tcG9uZW50cy90b2FzdC9zZXJ2aWNlcy90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQU9sRCxNQUFNLE9BQU8sWUFBWTtJQUNoQixNQUFNLEdBQUcsTUFBTSxDQUFnQixJQUFJLENBQUMsQ0FBQTtJQUNwQyxlQUFlLEdBQVcsSUFBSSxDQUFDO0lBRTlCLE9BQU8sR0FBVyxDQUFDLENBQUM7SUFFNUIsZ0JBQWUsQ0FBQztJQUVULFFBQVEsQ0FBQyxLQUFhO1FBQzNCLE1BQU0sVUFBVSxHQUFXLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQTtRQUV2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pCLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQixLQUFLLE9BQU87b0JBQ1YsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7b0JBQzNCLE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaLFVBQVUsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUE7b0JBQ25DLE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaLFVBQVUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFBO29CQUM1QixNQUFNO1lBQ1YsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRU0sV0FBVztRQUNoQixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxlQUFlLENBQUMsUUFBaUI7UUFDdkMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3BCLENBQUMsRUFBRyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7d0dBdkNVLFlBQVk7NEdBQVosWUFBWSxjQUhYLE1BQU07OzRGQUdQLFlBQVk7a0JBSnhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBRW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SVRvYXN0fSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG5cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcbiAgcHVibGljIHRvYXN0JCA9IHNpZ25hbDxJVG9hc3QgfCBudWxsPihudWxsKVxuICBwdWJsaWMgZGVmYXVsdER1cmF0aW9uOiBudW1iZXIgPSAyMDAwO1xuXG4gIHByaXZhdGUgdGltZW91dDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFkZFRvYXN0KHRvYXN0OiBJVG9hc3QpOiB2b2lkIHtcbiAgICBjb25zdCB0b2FzdENsb25lOiBJVG9hc3QgPSB7IC4uLnRvYXN0IH1cblxuICAgIGlmICghdG9hc3QudGl0bGUpIHtcbiAgICAgIHN3aXRjaCAodG9hc3QudHlwZSkge1xuICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgdG9hc3RDbG9uZS50aXRsZSA9ICfQntGI0LjQsdC60LAnXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgIHRvYXN0Q2xvbmUudGl0bGUgPSAn0J/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjQtSdcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgdG9hc3RDbG9uZS50aXRsZSA9ICfQo9GB0L/QtdGI0L3QvidcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRvYXN0JC5zZXQodG9hc3RDbG9uZSlcbiAgICB0aGlzLnNldFRvYXN0VGltZU91dCh0b2FzdENsb25lLmR1cmF0aW9uKVxuICB9XG5cbiAgcHVibGljIHJlbW92ZVRvYXN0KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgdGhpcy50b2FzdCQuc2V0KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUb2FzdFRpbWVPdXQoZHVyYXRpb24/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVUb2FzdCgpXG4gICAgfSwgIGR1cmF0aW9uIHx8IHRoaXMuZGVmYXVsdER1cmF0aW9uKVxuICB9XG59XG4iXX0=