# Reveal-sync

Reveal-md with browsersync, allows you to live edit markdown slides.

## Installation
Make sure `reveal-md` is installed globally, like this:
```
npm install -g reveal-md
```

After that, clone or download this repository, navigate to it and install its components:
```
npm install
```

Done!

## How to use
* Make your slides are in the `slides` directory. If you want to choose a different directory, change the setting in the gulpfile

* Run `gulp watch` from your commandline, and a browser window will be opened.

* Whenever you edit a markdown file in the  `slides` directory, it will be build to the `build` directory, but that can also be changed in the options in `gulpfile.js`

If you want to use different options for reveal-js, you can create `reveal.json` in the `build` directory, like explained [here](https://github.com/webpro/reveal-md#options) in the `reveal-md` documentation.
