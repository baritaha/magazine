import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFlip } from 'page-flip';

@Component({
  selector: 'app-magazine-browser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magazine-browser.component.html',
  styleUrl: './magazine-browser.component.scss',
})
export class MagazineBrowserComponent implements AfterViewInit, OnDestroy {
  @ViewChild('magazine') magazine!: ElementRef;

  private pageFlip?: any;
  private resizeTimer?: number;
  currentPage = 0;

  pages = [
    {
      type: 'cover',
      title: 'LUXE MAGAZINE',
      subtitle: 'Spring Editorial / Issue 04',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    },
    {
      title: 'Modern Living',
      tag: 'Design',
      text: 'Explore elegant interiors, inspiring architecture, and refined lifestyle stories.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    },
    {
      title: 'Fashion Edit',
      tag: 'Style',
      text: 'A curated look at seasonal trends, textures, colors, and premium fashion pieces.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    },
    {
      title: 'Travel Notes',
      tag: 'Travel',
      text: 'Discover beautiful destinations, boutique hotels, and unforgettable escapes.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
    {
  title: 'Food Culture',
  tag: 'Cuisine',
  text: 'Taste refined recipes, chef stories, and elegant dining experiences from around the world.',
  image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
},
{
  title: 'Art & Vision',
  tag: 'Art',
  text: 'Meet artists, galleries, and creative voices shaping the future of modern visual culture.',
  image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968',
},
{
  title: 'Wellness Life',
  tag: 'Wellness',
  text: 'Explore mindful routines, peaceful spaces, and balanced living ideas for everyday luxury.',
  image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
},
    {
      title: 'The End',
      tag: 'Final Page',
      text: 'Thank you for browsing our digital magazine.',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e',
    },
  ];

  ngAfterViewInit(): void {
    this.initMagazine();
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.resizeTimer);
    this.destroyMagazine();
  }

  @HostListener('window:resize')
  onResize(): void {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      this.syncPageSizeVars();
      this.pageFlip?.update();
    }, 180);
  }

  private initMagazine(): void {
    const nativeMagazine = this.magazine.nativeElement;

    this.syncPageSizeVars();

    this.pageFlip = new PageFlip(nativeMagazine, {
      width: 320,
      height: 432,
      minWidth: 130,
      maxWidth: 380,
      minHeight: 176,
      maxHeight: 513,
      size: 'stretch',
      showCover: true,
      usePortrait: false,
      mobileScrollSupport: true,
      drawShadow: true,
      maxShadowOpacity: 0.35,
      flippingTime: 750,
    });

    this.pageFlip.loadFromHTML(
      nativeMagazine.querySelectorAll('.magazine-page')
    );

    this.pageFlip.on('flip', (event: { data: number }) => {
      this.currentPage = event.data;
    });
  }

  goPrev(): void {
    this.pageFlip?.flipPrev();
  }

  goNext(): void {
    this.pageFlip?.flipNext();
  }

  private syncPageSizeVars(): void {
    const { pageWidth, pageHeight } = this.getMagazineSize();
    const nativeMagazine = this.magazine.nativeElement;

    nativeMagazine.style.setProperty('--page-width', `${pageWidth}px`);
    nativeMagazine.style.setProperty('--page-height', `${pageHeight}px`);
  }

  private getMagazineSize(): {
    pageWidth: number;
    pageHeight: number;
  } {
    const viewportWidth = window.innerWidth;
    const availableWidth = Math.max(viewportWidth - 32, 260);
    const maxSpreadWidth = viewportWidth <= 1180 ? availableWidth : 760;
    const pageWidth = Math.min(Math.floor(maxSpreadWidth / 2), 380);
    const pageHeight = Math.round(pageWidth * 1.35);

    return { pageWidth, pageHeight };
  }

  private destroyMagazine(): void {
    if (this.pageFlip?.destroy) {
      this.pageFlip.destroy();
    }

    this.pageFlip = undefined;
  }
}
