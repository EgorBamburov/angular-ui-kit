import { ToastService } from './services/toast.service';
import * as i0 from "@angular/core";
export declare class UiKitToast {
    toastService: ToastService;
    icon: string;
    defaultDuration: number | string;
    constructor(toastService: ToastService);
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UiKitToast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UiKitToast, "ui-kit-toast", never, { "icon": { "alias": "icon"; "required": false; }; "defaultDuration": { "alias": "defaultDuration"; "required": false; }; }, {}, never, never, false, never>;
}
