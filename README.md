# Page Icon

A library to find the highest resolution website logo for a given url.

This a TypeScript implementation of the original page-icon library.


## Installation

```bash
$ yarn install page-icon --dev
```

## Usage

```typescript
import pageIcon from 'page-icon';

const URL = 'https://www.facebook.com/';
  try {
    const icon = await pageIcon(URL);
    console.log('ICON: ', icon);
  } catch (err) {
    console.error(err);
  }
```

#### Example Icon Object

```typescript
{ 
    source: 'https://www.facebook.com/images/fb_icon_325x325.png',
    name: 'www.facebook.com',
    data: <Buffer 89 50 4e ... >,
    size: 1919,
    ext: '.png',
    mime: 'image/png' 
}
```

## Tests

```bash
$ yarn test
```

## License

Original author: [Goh Jia Hao](<https://github.com/jiahaog>
)  
Forked from <https://github.com/jiahaog/page-icon>

MIT
