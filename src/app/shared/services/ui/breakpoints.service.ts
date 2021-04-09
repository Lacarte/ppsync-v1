import { Injectable } from '@angular/core';

@Injectable()
export class BreakpointsService {


private _mqAlias: string;

  constructor() { }

get mqAlias(): string{
 return this._mqAlias;
}


set mqAlias(newMqAlias: string){
  this._mqAlias = newMqAlias;
}


get isLtMdLtSm(): boolean{
  return (this._mqAlias === 'lt-md' || this._mqAlias === 'lt-sm');
 }





}
