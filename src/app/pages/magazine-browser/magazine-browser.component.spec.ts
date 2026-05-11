import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineBrowserComponent } from './magazine-browser.component';

describe('MagazineBrowserComponent', () => {
  let component: MagazineBrowserComponent;
  let fixture: ComponentFixture<MagazineBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagazineBrowserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazineBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
