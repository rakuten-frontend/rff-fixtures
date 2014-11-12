# rff-fixtures

> Fixtures for developing and testing generator-rff.

## What is this?
Sample application sources for **[generator-rff](https://github.com/rakuten-frontend/generator-rff) development**.

generator-rff has many and complicated tasks, so that we need to test and benchmark it with living app sources.  
rff-fixtures helps to make generator-rff more stable.

## Structure
```
rff-fixtures/
├── app/                   : Application files
│   ├── inc/               : SSI partials
│   ├── benchmark/         : HTML/Jade files for benchmarking
│   │   ├── index.html     : Original HTML
│   │   ├── index.jade     : Original Jade
│   │   ├── 00.html        : Cloned HTML
│   │   ├── 00.jade        : Cloned Jade
│   │   └── ...
│   ├── css/               : CSS
│   ├── _sass/             : Sass
│   ├── _less/             : Less
│   ├── _stylus/           : Stylus
│   ├── js/                : JavaScript
│   ├── _coffee/           : CoffeeScript
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
$ npm install --prefix utils
  # Install dependencies for utils command.
$ yo rff
  # Do NOT override files of rff-fixtures.
$ grunt <something>
  # Test grunt tasks with rff-fixtures.
$ utils/clean
  # Delete generated files to clean up.
$ yo rff
  # Generate again using other settings.
  # ...
```

### Utility Commands
* `utils/clean`  
  Delete yeoman-generated files.

* `utils/clone`  
  Clone "app/benchmark/index.html" and "app/benchmark/index.jade" to "00.\*" - "99.\*".

## License
Copyright (c) 2014 Rakuten, Inc. Licensed under the [MIT License](LICENSE).
