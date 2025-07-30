// features/support/world.ts

import { setWorldConstructor, World, IWorldOptions,IWorld } from '@cucumber/cucumber';
import { BrowserContext, Page } from 'playwright';

export class CustomWorld extends World {
  context!: BrowserContext;
  page!: Page;
  attach: IWorld['attach'];

  constructor(options: IWorldOptions) {
    super(options); // Important to call super() so attach(), log(), etc. are available
    this.attach = options.attach || (() => {}); // Fallback if attach is not provided
  }
}

setWorldConstructor(CustomWorld);
