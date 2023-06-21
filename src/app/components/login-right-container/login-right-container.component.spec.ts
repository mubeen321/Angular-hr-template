import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRightContainerComponent } from './login-right-container.component';

describe('LoginRightContainerComponent', () => {
  let component: LoginRightContainerComponent;
  let fixture: ComponentFixture<LoginRightContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRightContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRightContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
