import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorHomeComponent } from './home.component';

describe('ProfessorHomeComponent', () => {
  let component: ProfessorHomeComponent;
  let fixture: ComponentFixture<ProfessorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
