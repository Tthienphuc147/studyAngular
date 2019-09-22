import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestominalComponent } from './testominal.component';

describe('TestominalComponent', () => {
  let component: TestominalComponent;
  let fixture: ComponentFixture<TestominalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestominalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestominalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
