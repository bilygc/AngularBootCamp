import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkOneComponent } from './homework-one.component';

describe('HomeworkOneComponent', () => {
  let component: HomeworkOneComponent;
  let fixture: ComponentFixture<HomeworkOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeworkOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeworkOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
