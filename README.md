# Storybook CssDebug Addon

Storybook CssDebug Addon allows your stories to be displayed in different sizes and layouts in [Storybook](https://storybook.js.org). This helps build responsive components inside of Storybook.

[Framework Support](https://github.com/storybooks/storybook/blob/master/ADDONS_SUPPORT.md)

![Screenshot](https://github.com/storybooks/storybook/blob/master/addons/cssdebug/docs/cssdebug.png)

## Installation

Install the following npm module:

```sh
npm i --save-dev @cbspire/storybook-addon-cssdebug
```

or with yarn:

```sh
yarn add -D @cbspire/storybook-addon-cssdebug
```

Then, add following content to .storybook/addons.js

```js
import '@cbspire/storybook-addon-cssdebug/register';
```

## Configuration

The cssdebug addon is configured by story parameters with the `cssdebug` key. To configure globally, import `addParameters` from your app layer in your `config.js` file.

```js
import { addParameters } from '@storybook/react';

addParameters({ cssdebug: options });
```

Options can take a object with the following keys:

### defaultViewport : String

---

Setting this property to, let say `iphone6`, will make `iPhone 6` the default device/cssdebug for all stories. Default is `'responsive'` which fills 100% of the preview area.

### viewports : Object

---

A key-value pair of cssdebug's key and properties (see `CssDebug` definition below) for all viewports to be displayed. Default is [`INITIAL_VIEWPORTS`](src/defaults.js)

#### CssDebug Model

```js
{
  /**
   * name to display in the dropdown
   * @type {String}
   */
  name: 'Responsive',

  /**
   * Inline styles to be applied to the story (iframe).
   * styles is an object whose key is the camelCased version of the style name, and whose
   * value is the style’s value, usually a string
   * @type {Object}
   */
  styles: {
    width: '100%',
    height: '100%',
  },

  /**
   * type of the device (e.g. desktop, mobile, or tablet)
   * @type {String}
   */
  type: 'desktop',
}
```

## Configuring per component or story

Parameters can be configured for a whole set of stories or a single story via the standard parameter API:

```js
import addStories from '@storybook/react';

addStories('Stories', module)
  // To set a default cssdebug for all the stories for this component
  .addParameters({ cssdebug: { defaultViewport: 'iphone6' }})
  .add('story', () => </>, { cssdebug: { defaultViewport: 'iphonex' }});
```

## Examples

### Use Custom Set of Devices

This will replace all previous devices with `Kindle Fire 2` and `Kindle Fire HD` by simply calling `addParameters` with the two devices as `viewports` in `config.js` file in your `.storybook` directory.

```js
import { addParameters } from '@storybook/react';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  cssdebug: { viewports: newViewports },
});
```

### Add New Device

This will add both `Kindle Fire 2` and `Kindle Fire HD` to the list of devices. This is acheived by making use of the exported [`INITIAL_VIEWPORTS`](src/defaults.js) property, by merging it with the new viewports and pass the result as `viewports` to `configureViewport` function

```js
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@cbspire/storybook-addon-cssdebug';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addParameters({
  cssdebug: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
});
```
