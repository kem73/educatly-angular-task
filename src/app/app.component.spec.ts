import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance; 
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the title 'educatly-angular-task'`, () => {
    expect(app.title).toEqual('eeducatly-angular-task');
  });

  it('should render title in the template', () => {
    fixture.detectChanges(); 
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, educatly-angular-task');
  });
});
