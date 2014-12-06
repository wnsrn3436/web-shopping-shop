# Shopping Shop

A one-page website themed as a clothing shop. A menu fixed at the top moves between the Main, Shop and WebToons sections, and the site has a main banner that advances on its own, a product gallery that spreads out as you scroll, and background decorations that move at different speeds with the scroll, all made with HTML, CSS and jQuery. A school assignment made by a team of 3.

<p>
  <img src="docs/screenshots/screenshot-1.jpg" width="480" alt="Shop section">
</p>


## How to use

Download from Releases, extract it and open `index.html` in a web browser. The layout has a fixed width made for a 1280 pixel wide screen.

| Section | Content |
|---|---|
| Main | A three-image main banner. The left and right buttons or the thumbnails below change the image, and it advances on its own every 4 seconds |
| Shop | Six product thumbnails and a large product photo. Hovering a thumbnail brings it to the front, and clicking it switches the large photo to that product |
| WebToons | A page with a two-level menu leading to portal, webtoon and school sites and a four-image sliding banner |


## How it works

**The menu and the scroll position follow each other.** Clicking a menu item animates `scrollTop` to the section with the same index, so the page scrolls there smoothly. In the other direction, every scroll goes through the sections in order to find the ones whose top has passed the top of the screen, and the menu item with the matching index gets the `on` class.

**The main banner changes its background image.** Each change runs a 0.5 second `fadeOut` on the banner, swaps `background-image` to the next picture and runs `fadeIn` again. Only the thumbnail of the current picture has an opacity of 1, and the rest are at 0.5. The 4 second timer restarts whenever the banner is changed by hand.

**The product gallery is built when the section is reached.** When the Shop section reaches the top of the screen, a large photo and six thumbnails are added on the spot. Each thumbnail moves to a spot offset by 30 pixels per index, with later ones taking 0.2 seconds longer each, so they spread out in an overlapping diagonal. The large photo is as wide as the window minus 380 pixels, up to 850 pixels. Leaving the section removes them all, and resizing the window rebuilds them.

**The background decorations move at a different rate per index.** Every scroll sets the `top` of the six decoration images again. The distance scrolled inside the current section is multiplied by 2 and divided by the index before being added, so later images move less and the page gains depth.

```js
parallax.each(function (i){
	var target = $(this);
	target.css({
		top: scroll_top + 100*(i+1) + (sub*2/(i+1))
	});
});
```

**The WebToons section shows a separate page in an `iframe`.** The two-level menu in `webpagemaking/webpagemake.html` opens when the mouse is over a top item, by growing the menu area's height to include the submenu. The sliding banner changes pictures by moving the current one out to the left while the next one comes in from the right, and hovering a dot below jumps to that picture. Left alone, it advances by itself.


## Files

| Path | Content |
|---|---|
| `source/index.html`, `source/index.css` | One-page body and styles |
| `source/scroll_menu.js` | Scrolling on menu clicks and highlighting the current section |
| `source/gallery.js` | Main banner |
| `source/responsive.js` | Product gallery |
| `source/parallax.js` | Background decorations |
| `source/image/` | Banner, product and decoration images |
| `source/webpagemaking/` | The two-level menu and sliding banner page of the WebToons section |
| `docs/screenshots/` | Screenshots |
| Releases | The whole site |


## Credits

- `jquery-1.11.1.min.js`, `webpagemaking/js/jquery-1.9.1.min.js`, `webpagemaking/js/jquery.min.map`: jQuery by the jQuery Foundation. MIT License
- `jquery.easing.1.3.js`, `webpagemaking/js/jquery.easing.1.3.min.js`: jQuery Easing 1.3 by George McGinley Smith. BSD License


## License

zlib. See [LICENSE](LICENSE). Bundled libraries made by other people keep their own licenses. The product photos and pictures used on the site belong to their respective copyright holders.
