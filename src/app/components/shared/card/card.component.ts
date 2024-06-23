import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() route: string | any[] | null | undefined;
  @Input() image: string | undefined = "";
  @Input() title: string | undefined = "";
  @Input() description: string | undefined = "";
  @Input() tooltipMessage: string | undefined = "";
  @Input() loading: boolean = false;
}
