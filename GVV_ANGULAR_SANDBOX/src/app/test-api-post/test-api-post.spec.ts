import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestApiPost } from './test-api-post';

describe('TestApiPost', () => {
  let component: TestApiPost;
  let fixture: ComponentFixture<TestApiPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestApiPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestApiPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
