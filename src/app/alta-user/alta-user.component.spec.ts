import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaUserComponent } from './alta-user.component';

describe('AltaUserComponent', () => {
  let component: AltaUserComponent;
  let fixture: ComponentFixture<AltaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
