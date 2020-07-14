![](https://github.com/santiago-iturriaga/markchongo.js/blob/master/img/logo.png)

Markchongo is yet another javascript website engine using markdown. It is fully file-based and client-based using javascript for markdown processing.

Based on:
* Bootstrap http://getbootstrap.com/
* JQuery https://jquery.com/
* Marked https://github.com/chjj/marked
* bib-publication-list https://github.com/vkaravir/bib-publication-list

Sample web site: http://santiago-iturriaga.github.io/markchongo.js/

## Configuring Markchongo.js

The only mandatory markdown files are main.md and sidebar.md

* main.md: the homepage
* sidebar.md: the sidebar

Global configuration (such as title and subtitle) may be configured in the config.js file

You can easily change the site skin by editing index.html and using any bootstrap skin

Some skins examples are included in css/ and may be included using:

* `<link href="css/bootstrap.darkly.min.css" rel="stylesheet">`
* `<link href="css/bootstrap.flatty.min.css" rel="stylesheet">`
* `<link href="css/bootstrap.readable.min.css" rel="stylesheet">`
* `<link href="css/bootstrap.sandstone.min.css" rel="stylesheet">`
* `<link href="css/bootstrap.superhero.min.css" rel="stylesheet">`

A markdown cheat sheet can be found here: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## Development environment setup

Simply change to markchongo.js directory and run:
```python2 -m SimpleHTTPServer```
or
```python3 -m http.server```

And then browse to http://localhost:8000/index.html

