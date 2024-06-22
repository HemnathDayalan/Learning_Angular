import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIWorksComponent } from './api-works.component';

describe('APIWorksComponent', () => {
  let component: APIWorksComponent;
  let fixture: ComponentFixture<APIWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIWorksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(APIWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
