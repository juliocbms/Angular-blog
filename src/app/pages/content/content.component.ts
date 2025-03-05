import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  photcover:string= ""
  contentTitlte:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      console.log(value.get("Id"))
    )
  }

  setValuesToCOmponent(id:string | null){
    const result = dataFake.filter(
      article => article.id == id)


  }
}
