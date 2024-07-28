import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() imagePlaceHolder: String = "//www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png";
  @Input() titlePlaceHoldedr: String = "Insira seu titulo"
  @Input() textPlaceHolder: String = "Insira seu texto"
}
