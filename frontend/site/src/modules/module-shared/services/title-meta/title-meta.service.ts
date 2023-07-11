import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleMetaService {

  constructor(private titleService: Title, private metaService: Meta) {
  }

  setFromContent(content:any = {}) {
      this.setTags( (content.title || ''), (content.description || ''), (content.keywords || []), (content.thumbnail_url || ''), `${environment.site.endpoint}/learnmoney/content/${content._id}/${(content.title || '').replace(/[^a-zA-Z0-9]+/g, '-')}` )
      this.metaService.addTag({property: 'article:published_time', content: content._created_at})
      this.metaService.addTag({property: 'article:modified_time', content: content._updated_at})

      if (content.type === 'video') {
        this.metaService.addTag({property: 'og:video', content: (content.main_media_url || '')})
        this.metaService.updateTag({name: 'twitter:card', content: 'player'}, "name='twitter:card'")
        this.metaService.addTag({name: 'twitter:player:width', content: '832'})
        this.metaService.addTag({name: 'twitter:player:height', content: '468'})
      }
  }

  setTags(title:string = '', description:string = '', keywords:any[] = [], image:string = '', url:string = `${environment.site.endpoint}`) {
    this.titleService.setTitle(title || environment.site.title);
    this.metaService.updateTag({name: 'keywords', content: keywords.length > 0 ? keywords.join(',') : environment.site.keywords.join(',')},"name='keywords'")
    this.metaService.updateTag({name: 'description', content: description || environment.site.description}, "name='description'")
    this.metaService.updateTag({name: 'apple-itunes-app', content: `app-id=${environment.site.appleStoreID}, app-argument=${(url.length > 0 ? url : (typeof window != "undefined" ? window.location.href : ''))}`}, "name='apple-itunes-app'")

    this.metaService.updateTag({name: 'twitter:card', content: environment.site.cardType}, "name='twitter:card'")
    this.metaService.updateTag({name: 'twitter:site', content: environment.site.twitterHandle}, "name='twitter:site'")
    this.metaService.updateTag({name: 'twitter:title', content: title || environment.site.title}, "name='twitter:title'")
    this.metaService.updateTag({name: 'twitter:description', content: description || environment.site.description}, "name='twitter:description'")
    this.metaService.updateTag({name: 'twitter:creator', content: environment.site.twitterHandle}, "name='twitter:creator'")
    this.metaService.updateTag({name: 'twitter:image:src', content: image || environment.site.image}, "name='twitter:image:src'")
    this.metaService.updateTag({name: 'twitter:app:id:iphone', content: environment.site.appleStoreID}, "name='twitter:app:id:iphone'")
    this.metaService.updateTag({name: 'twitter:app:url:iphone', content: environment.site.deepLinkBase}, "name='twitter:app:url:iphone'")
    this.metaService.updateTag({name: 'twitter:app:id:ipad', content: environment.site.appleStoreID}, "name='twitter:app:id:ipad'")
    this.metaService.updateTag({name: 'twitter:app:url:ipad', content: environment.site.deepLinkBase}, "name='twitter:app:url:ipad'")
    this.metaService.updateTag({name: 'twitter:app:id:googleplay', content: environment.site.playStoreID}, "name='twitter:app:id:googleplay'")

    this.metaService.updateTag({property: 'og:title', content: title || environment.site.title}, "property='og:title'")
    this.metaService.updateTag({property: 'og:url', content: url.length > 0 ? url : (typeof window != "undefined" ? window.location.href : '')}, "property='og:url'")
    this.metaService.updateTag({property: 'og:image', content: image || environment.site.image}, "property='og:image'")
    this.metaService.updateTag({property: 'og:description', content: description || environment.site.description}, "property='og:description'")
    this.metaService.updateTag({property: 'og:site_name', content: environment.site.siteName}, "property='og:site_name'")

    this.metaService.removeTag("property='og:video'")
    this.metaService.removeTag("property='article:published_time'")
    this.metaService.removeTag("property='article:modified_time'")
    this.metaService.removeTag("name='twitter:player'")
    this.metaService.removeTag("name='twitter:player:width'")
    this.metaService.removeTag("name='twitter:player:height'")
  }
}
