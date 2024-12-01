import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoUserComponent } from './botao-user.component';

describe('BotaoUserComponent', () => {
  let component: BotaoUserComponent;
  let fixture: ComponentFixture<BotaoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
