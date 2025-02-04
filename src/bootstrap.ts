import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(UserModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
