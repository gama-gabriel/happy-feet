import { Component, OnInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { provideIcons } from '@ng-icons/core';
import { lucideSearch, lucideUser, lucideShoppingCart, lucideMenu } from '@ng-icons/lucide';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BotaoCarrinhoComponent } from '../botao-carrinho/botao-carrinho.component';
import { BotaoUserComponent } from '../botao-user/botao-user.component';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HlmIconComponent, ReactiveFormsModule, BotaoCarrinhoComponent, BotaoUserComponent, CommonModule],
  providers: [provideIcons({ lucideSearch, lucideUser, lucideShoppingCart, lucideMenu })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerContent') headerContent!: ElementRef;
  @ViewChild('navContent') navContent!: ElementRef;
  @ViewChild('actionButtons') actionButtons!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('searchButton') searchButton!: ElementRef;
  @ViewChild('mobileSearchInput') mobileSearchInput!: ElementRef;
  @ViewChild('mobileSearchButton') mobileSearchButton!: ElementRef;

  termoBuscado: FormControl = new FormControl('');
  resultadosBusca: any[] = [];
  menuOpen = false;
  isSearching = false;
  isButtonClicked = true;
  innerWidth: number = 1024;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query: string = params['termo'] || '';
      this.termoBuscado.setValue(query);
    });

    if (isPlatformBrowser(this.platformId)) {
      this.innerWidth = window.innerWidth;
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }

  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.innerWidth = window.innerWidth;
    }
  }

  onSearchFocus(): void {
    if (!this.isMobile()) {
      this.toggleSearch();
    }
  }

  toggleSearch(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.isSearching = !this.isSearching;

    if (this.isSearching) {
      if (this.isMobile()) {
        setTimeout(() => {
          this.mobileSearchInput.nativeElement.focus();
        }, 300);
      } else {
        gsap.to(this.searchInput.nativeElement, {
          x: '100px',
          width: '400px',
          duration: 0.3
        });

        gsap.to(this.searchButton.nativeElement, {
          x: '100px',
          duration: 0.3
        });

        gsap.to(this.actionButtons.nativeElement, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            this.actionButtons.nativeElement.style.visibility = "hidden"
          }
        });
      }
    } else {
      if (this.isMobile()) {
      } else {
        gsap.to(this.searchInput.nativeElement, {
          x: '0px',
          width: '8rem',
          duration: 0.3
        });

        gsap.to(this.searchButton.nativeElement, {
          x: '0px',
          duration: 0.3
        });

        gsap.to(this.actionButtons.nativeElement, {
          onStart: () => {
            this.actionButtons.nativeElement.style.visibility = "visible"
          },
          opacity: 1,
          duration: 0.3,
        });
      }
    }
  }


  onSearch(): void {
    this.isButtonClicked = true;
    const query: string = this.termoBuscado.value?.trim();
    this.router.navigate(["/busca"], {
      queryParams: { termo: query || null },
      queryParamsHandling: 'merge'
    });
    if (this.isMobile()) {
      this.toggleSearch();
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  isMobile(): boolean {
    return this.innerWidth < 768;
  }
}
