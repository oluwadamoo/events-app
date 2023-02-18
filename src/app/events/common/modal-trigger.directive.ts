import { Directive, ElementRef, Inject, Input, OnInit} from "@angular/core";
import { JQUERY_TOKEN } from "./jquery.service";


@Directive({
  selector:'[modal-trigger]'
})

export class ModalDirective implements OnInit{
  @Input('modal-trigger') modalId:string
  private el:HTMLElement;
  constructor(ref:ElementRef, @Inject(JQUERY_TOKEN) private $:any){
    this.el = ref.nativeElement;
  }
  ngOnInit(){
    this.el.addEventListener('click', ()=>{
      this.$(`#${this.modalId}`).modal({})
    })
  }
}
