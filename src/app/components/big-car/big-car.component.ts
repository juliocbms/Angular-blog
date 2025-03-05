import { Component, Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-car',
  standalone: true,
  imports: [RouterModule],
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
  @Input()
  Id:string="0"

}
