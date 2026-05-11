import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFlip } from 'page-flip';

@Component({
  selector: 'app-magazine-browser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magazine-browser.component.html',
  styleUrl: './magazine-browser.component.scss',
})
export class MagazineBrowserComponent implements AfterViewInit {
  @ViewChild('magazine') magazine!: ElementRef;

  pages = [
    {
      type: 'cover',
      title: 'LUXE MAGAZINE',
      subtitle: 'Browse the Magazine',
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
  const isMobile = window.innerWidth <= 700;

  const pageFlip = new PageFlip(this.magazine.nativeElement, {
    width: 380,
    height: 520,
    size: 'fixed',
    showCover: true,
    usePortrait: isMobile,
    mobileScrollSupport: false,
    drawShadow: true,
    maxShadowOpacity: 0.35,
    flippingTime: 750
  });

  pageFlip.loadFromHTML(
    this.magazine.nativeElement.querySelectorAll('.magazine-page')
  );
}
}
