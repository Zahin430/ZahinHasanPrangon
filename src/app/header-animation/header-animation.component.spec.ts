import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnimationComponent } from './header-animation.component';

describe('HeaderAnimationComponent', () => {
  let component: HeaderAnimationComponent;
  let fixture: ComponentFixture<HeaderAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
