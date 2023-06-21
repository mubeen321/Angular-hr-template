import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() class: string;
  @Input() disabled: boolean;
  showPassword: boolean = true;
  value: any = '';

  constructor() {
    this.label = '';
    this.class = '';
    this.disabled = false;
  }

  ngOnInit() {}

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange(event: any) {
    const value = event?.target?.value; // Use optional chaining to prevent errors
    this.value = value;
    this.onChange(this.value);
  }
  

  onTouched() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
