import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocTreeStrutureComponent } from './poc-tree-struture.component';

describe('PocTreeStrutureComponent', () => {
  let component: PocTreeStrutureComponent;
  let fixture: ComponentFixture<PocTreeStrutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocTreeStrutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocTreeStrutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
