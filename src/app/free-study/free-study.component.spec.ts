import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeStudyComponent } from './free-study.component';

describe('FreeStudyComponent', () => {
  let component: FreeStudyComponent;
  let fixture: ComponentFixture<FreeStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
