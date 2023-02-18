
// import { Injectable } from '@angular/core';

// declare let toastr: any;
// @Injectable({
//   providedIn: 'root',
// })
// export class ToastrService {
//   success(message: string, title?: string) {
//     toastr.success(title, message);
//   }

//   info(message: string, title?: string) {
//     toastr.info(title, message);
//   }

//   warning(message: string, title?: string) {
//     toastr.warning(title, message);
//   }

//   error(message: string, title?: string) {
//     toastr.error(title, message);
//   }
// }

import { InjectionToken } from "@angular/core";

export let TOASTR_TOKEN = new InjectionToken<IToastr>('toastr')

export interface IToastr {
  success(message: string, title?: string):void;
  info(message: string, title?: string):void;
  warning(message: string, title?: string):void;
  error(message: string, title?: string):void
}
