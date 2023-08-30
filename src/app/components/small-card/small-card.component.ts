import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover:string = ""

  @Input()
  cardTittle:string = ""

  @Input()
  descriptionTitle1:string = ""

  @Input()
  descriptionTitle:string = ""

  @Input()
  Id:string="0"

  @Input()
  descriptionTitleDownload:string = ""


}
