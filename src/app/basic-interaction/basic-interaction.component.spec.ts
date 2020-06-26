import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInteractionComponent } from './basic-interaction.component';

describe('BasicInteractionComponent', () => {
  let component: BasicInteractionComponent;
  let fixture: ComponentFixture<BasicInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
