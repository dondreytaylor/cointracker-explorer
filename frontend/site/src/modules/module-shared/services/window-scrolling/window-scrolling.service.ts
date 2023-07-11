import { Injectable } from '@angular/core';
import { PLATFORM_ID, Component, OnInit, Input, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollingService {

	private styleTag!: HTMLStyleElement;
	isBrowser:boolean = false

	constructor(@Inject(PLATFORM_ID) private platformId: any) {
		this.isBrowser = isPlatformBrowser(platformId)
		if (this.isBrowser) {
			this.styleTag = this.buildStyleElement();
		}
	}

	public scrollToTop() : void {
		if (this.isBrowser) { 
			window.scrollTo(0, 0)
		}
	}

	public disable() : void {
		if (this.isBrowser) { 
			document.body.appendChild( this.styleTag );
		}
	}

	public enable() : void {
		if (this.isBrowser) { 
			if (document.body.contains(this.styleTag)) {
				document.body.removeChild( this.styleTag );
			}
		}
	}

	private buildStyleElement() : HTMLStyleElement {
		var style = document.createElement( "style" );
		style.type = "text/css";
			style.setAttribute( "data-debug", "Injected by WindowScrolling service." );
			style.textContent = `
				body {
					overflow: hidden !important ;
				}
			`;
		return( style );
	}

}
