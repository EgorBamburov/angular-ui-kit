import { IToast } from '../interfaces';
import * as i0 from "@angular/core";
export declare class ToastService {
    toast$: import("@angular/core").WritableSignal<IToast | null>;
    defaultDuration: number;
    private timeout;
    constructor();
    addToast(toast: IToast): void;
    removeToast(): void;
    private setToastTimeOut;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastService>;
}
