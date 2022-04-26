import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArpngComponent } from './arpng.component';

describe('ArpngComponent', () => {
  let component: ArpngComponent;
  let fixture: ComponentFixture<ArpngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArpngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArpngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
