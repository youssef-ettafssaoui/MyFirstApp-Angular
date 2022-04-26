import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsagComponent } from './vsag.component';

describe('VsagComponent', () => {
  let component: VsagComponent;
  let fixture: ComponentFixture<VsagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
