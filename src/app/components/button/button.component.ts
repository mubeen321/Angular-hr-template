import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();
  @Input() class: string;
  @Input() disabled: boolean | null;
  ngOnInit(): void {
  }

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

  ngOnChanges() {
    console.log('this is disabled', this.disabled);
  }

  constructor() {
    this.label = "";
    this.class = "";
    this.disabled = false;
  }
}
