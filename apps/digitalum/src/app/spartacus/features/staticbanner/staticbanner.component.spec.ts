import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticbannerComponent } from './staticbanner.component';

describe('StaticbannerComponent', () => {
  let component: StaticbannerComponent;
  let fixture: ComponentFixture<StaticbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
