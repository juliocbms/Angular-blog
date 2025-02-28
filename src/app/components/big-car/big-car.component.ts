import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-car',
  standalone: true,
  imports: [],
  templateUrl: './big-car.component.html',
  styleUrl: './big-car.component.css'
})
export class BigCarComponent {
  @Input()
  photocover: string = ""
  @Input()
  carTitle:string= ""
  @Input()
  cardDescription:string = ""

}
