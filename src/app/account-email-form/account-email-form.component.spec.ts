import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEmailFormComponent } from './account-email-form.component';

describe('AccountEmailFormComponent', () => {
  let component: AccountEmailFormComponent;
  let fixture: ComponentFixture<AccountEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEmailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
