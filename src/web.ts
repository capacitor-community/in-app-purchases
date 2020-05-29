import { WebPlugin } from '@capacitor/core';
import { InAppPurchasesPlugin } from './definitions';

export class InAppPurchasesWeb extends WebPlugin implements InAppPurchasesPlugin {
  constructor() {
    super({
      name: 'InAppPurchases',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const InAppPurchases = new InAppPurchasesWeb();

export { InAppPurchases };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(InAppPurchases);
