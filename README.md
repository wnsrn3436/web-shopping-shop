# Shopping Shop

[한국어](README.ko.md)

This is a one-page website themed around a clothing shop. A menu fixed at the top moves between three sections: Main, Shop and WebToons. The main banner advances on its own, the product gallery spreads out as you scroll, and the background decorations move at different speeds as the page scrolls. It is a school assignment made by a team of 3 with HTML, CSS and jQuery.

<p>
  <img src="docs/screenshots/screenshot-1.jpg" width="480" alt="Shop section">
</p>


## How to use

Download the archive from Releases, extract it and open `index.html` in a web browser. It is a fixed-width layout sized for a screen 1280 pixels wide.

| Section | Content |
|---|---|
| Main | A three-image main banner. The left and right buttons or the thumbnails below change the image, and it advances on its own every 4 seconds |
| Shop | Six product thumbnails and a large product photo. Hovering a thumbnail brings it to the front, and clicking it switches the large photo to that product |
| WebToons | A page with a two-level menu leading to portal, webtoon and school sites and a four-image sliding banner |


## How it works

**The menu and the scroll position stay in sync.** Clicking a menu item animates `scrollTop` to the position of the section with the same index, so the page scrolls down smoothly. In the other direction, each scroll checks the sections in order to find the one whose top has passed the top of the screen, and the menu item with that index gets the `on` class so it is highlighted.

**The main banner advances by swapping its background image.** Each change runs a 0.5-second `fadeOut` on the banner, swaps `background-image` to the next picture and runs `fadeIn` again. Only the thumbnail of the current picture has an opacity of 1, and the rest are at 0.5. The 4-second timer restarts whenever someone changes the banner by hand.

**The product gallery is built when you reach the section.** When the Shop section reaches the top of the screen, a large photo and six thumbnails are added on the spot. Each thumbnail moves to a position offset by 30 pixels per index, and each later one takes 0.2 seconds longer, so they fan out diagonally and overlap. The large photo is as wide as the window minus 380 pixels, up to 850 pixels. Leaving the section removes them all, and resizing the window rebuilds them.

**The background decorations move at a different rate per index.** On every scroll, the `top` of each of the six decoration images is set again. The distance scrolled inside the current section is multiplied by 2, divided by the index and then added, so later images move less and the page gets a sense of depth.

```js
parallax.each(function (i){
	var target = $(this);
	target.css({
		top: scroll_top + 100*(i+1) + (sub*2/(i+1))
	});
});
```

**The WebToons section shows a separate page in an `iframe`.** When the mouse is over a top menu item, the two-level menu in `webpagemaking/webpagemake.html` opens by growing the menu area's height to include the submenu. The sliding banner moves the current picture out to the left while the next one slides in from the right into place, and hovering a dot button below jumps to that picture. Left alone, it advances by itself.


## Files

| Path | Content |
|---|---|
| `source/index.html`, `source/index.css` | One-page body and styles |
| `source/scroll_menu.js` | Scrolling on menu clicks and highlighting the current section |
| `source/gallery.js` | Main banner |
| `source/responsive.js` | Product gallery |
| `source/parallax.js` | Background decorations |
| `source/image/` | Banner, product and decoration images |
| `source/webpagemaking/` | Page with the WebToons section's two-level menu and sliding banner |
| `docs/screenshots/` | Screenshots |
| Releases | The whole site |


## Credits

- `jquery-1.11.1.min.js`, `webpagemaking/js/jquery-1.9.1.min.js`, `webpagemaking/js/jquery.min.map`: jQuery by the jQuery Foundation. MIT License
- `jquery.easing.1.3.js`, `webpagemaking/js/jquery.easing.1.3.min.js`: jQuery Easing 1.3 by George McGinley Smith. BSD License


## License

zlib. See [LICENSE](LICENSE). Bundled libraries made by other people keep their own licenses. The product photos and pictures used on the site belong to their respective copyright holders.
