import {configure} from "@shoplineos/shopline-pixels-extension";

configure((api) => {
    // subscribe page view event example
    api.analytics.subscribe('page_viewed', (event) => {
      console.log('Page viewed', event);
    });
});