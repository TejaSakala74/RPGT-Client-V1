import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhobiComponent } from './dhobi.component';

describe('CategoriesComponent', () => {
  let component: DhobiComponent;
  let fixture: ComponentFixture<DhobiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhobiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
