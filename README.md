# rff-fixtures

> Fixtures for developing and testing generator-rff.

## What is this?
Example application sources for **[generator-rff](https://github.com/rakuten-frontend/generator-rff) development**.

Because generator-rff has many and complicated tasks, we need to test and benchmark it with living app sources.  
rff-fixtures helps to make generator-rff more stable.

## Structure
```
rff-fixtures/
├── app/                   : Application files
│   ├── inc/               : SSI partials
│   ├── _sass/             : Stylesheets
│   ├── js/                : Scripts
│   └── img/               : Images
│       ├── _sprites/      : Base images for spritesheet
│       └── _glyphs/       : Base SVG files for icon font
└── bower.json             : Front-end packages installed by bower
```

## Usage
Whatever you like! :-)  
This is typical usage, I think.

```shell
$ git clone https://github.com/rakuten-frontend/rff-fixtures.git && cd rff-fixtures
$ yo rff
  # Do NOT override files of rff-fixtures.
$ grunt <something>
  # Test grunt tasks with rff-fixtures.
```

## License
Copyright (c) 2014 Rakuten, Inc. Licensed under the [MIT License](LICENSE).
