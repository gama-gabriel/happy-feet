import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarrinhoComponent } from './botao-carrinho.component';

describe('BotaoCarrinhoComponent', () => {
  let component: BotaoCarrinhoComponent;
  let fixture: ComponentFixture<BotaoCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoCarrinhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
