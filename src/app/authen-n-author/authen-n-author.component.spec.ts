import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenNAuthorComponent } from './authen-n-author.component';

describe('AuthenNAuthorComponent', () => {
  let component: AuthenNAuthorComponent;
  let fixture: ComponentFixture<AuthenNAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenNAuthorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenNAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
