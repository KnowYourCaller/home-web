import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourcesComponent } from './open-sources.component';

describe('OpenSourcesComponent', () => {
  let component: OpenSourcesComponent;
  let fixture: ComponentFixture<OpenSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
