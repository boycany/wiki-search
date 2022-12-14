import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();

  term: string = '';

  onFormSubmit(event: Event) {
    event.preventDefault();
    console.log('this.term :>> ', this.term);

    this.submitted.emit(this.term);
  }
}
