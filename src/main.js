import './style.css';
import { createIcons, ArrowRight, ArrowUp, MapPin, Mountain, TreePine, Palette, Menu, X } from 'lucide';

// Commerce remains in a separate WordPress installation; add its URL when ready.
const storeUrl = '';
const image = name => `${import.meta.env.BASE_URL}images/${name}`;
const arrow = '<i data-lucide="arrow-right" aria-hidden="true"></i>';
const collections = [
  { id: 'falls', title: 'Williamsport Falls', description: 'The natural beauty that makes Williamsport special.', className: 'falls-art', caption: 'Williamsport Falls T-shirt artwork from the approved mockup' },
  { id: 'wabash', title: 'Banks of the Wabash', description: 'Historic river town with a story to tell.', className: 'wabash-art', caption: 'Banks of the Wabash bridge T-shirt artwork from the approved mockup' },
  { id: 'courthouse', title: 'Warren County Courthouse', description: 'Our history. Our community. Our home.', className: 'courthouse-art', caption: 'Warren County Courthouse T-shirt with the corrected red-domed courthouse artwork' }
];
const logo = `<span class="logo-place">WILLIAMSPORT</span><span class="logo-subtitle">ORIGINALS</span>`;
document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header wrap"><a class="header-brand" href="#home" aria-label="Williamsport Originals home">Williamsport Originals</a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="navigation" title="Open navigation"><i data-lucide="menu" aria-hidden="true"></i></button><nav id="navigation" aria-label="Main navigation"><a href="#home">Home</a><a href="#collections">Collections</a><a href="#about">About</a><a href="#warren-county">Warren County</a>${storeUrl ? `<a href="${storeUrl}">Shop ${arrow}</a>` : ''}</nav></header>
  <main id="main">
    <section class="hero" id="home"><div class="wrap hero-inner"><div class="hero-copy"><h1 class="logo">${logo}</h1><h2>Local Places.<br>Lasting Memories.</h2><div class="ornament" aria-hidden="true"><span></span>&#9733;<span></span></div><p>Original designs inspired by Williamsport, Warren County, and the places that make this area special.</p><a class="button" href="#collections">Explore the collections ${arrow}</a></div></div></section>
    <section class="values" aria-label="Our values"><div class="wrap values-grid"><div><i data-lucide="map-pin" aria-hidden="true"></i><p><strong>Local designs</strong><span>Inspired by<br>Warren County</span></p></div><div><i data-lucide="palette" aria-hidden="true"></i><p><strong>Original artwork</strong><span>Local places.<br>Lasting memories.</span></p></div><div><i data-lucide="mountain" aria-hidden="true"></i><p><strong>Small-town roots</strong><span>Landmarks, history,<br>and hometown pride</span></p></div><div><i data-lucide="tree-pine" aria-hidden="true"></i><p><strong>A little piece of Warren County</strong><span>Wear the places<br>you love</span></p></div></div></section>
    <section class="collections wrap" id="collections" aria-labelledby="collections-title"><h2 class="section-title" id="collections-title"><span>Featured Collections</span></h2><div class="collection-grid">${collections.map(c => `<article class="collection" id="${c.id}"><div class="collection-art ${c.className}"><img src="${image('approved-vintage-mockup.png')}" alt="${c.caption}" width="1024" height="1536" loading="lazy"></div><h3>${c.title}</h3><p>${c.description}</p>${storeUrl ? `<a class="button" href="${storeUrl}">View collection ${arrow}</a>` : ''}</article>`).join('')}</div></section>
    <section class="about" id="about"><div class="wrap about-layout"><div class="about-copy"><h2>More Than a Place.<br>It's Home.</h2><div class="ornament" aria-hidden="true"><span></span>&#9733;<span></span></div><p>Williamsport Originals features original artwork inspired by the landmarks, history, and natural beauty of Warren County, Indiana. From Williamsport Falls to the Wabash River and our historic courthouse, each design celebrates the places that make this area unique.</p><a class="button gold" href="#warren-county">Our local landmarks ${arrow}</a></div><div class="story-art"><img src="${image('approved-vintage-mockup.png')}" alt="Vintage postcards of Williamsport Falls, the Wabash bridge, and the actual Warren County Courthouse with its red dome" width="1024" height="1536" loading="lazy"></div></div></section>
    <section class="landmarks wrap" id="warren-county" aria-labelledby="landmarks-title"><h2 class="section-title" id="landmarks-title"><span>Rooted in Warren County</span></h2><p class="landmarks-intro">Three local landmarks. One place to call home.</p><div class="landmark-grid"><div><span>01</span><h3>Williamsport Falls</h3><p>The sandstone ledge, the wooded gorge, and the waterfall at the heart of Williamsport.</p></div><div><span>02</span><h3>Banks of the Wabash</h3><p>The river and bridges that connect our towns, our history, and generations of memories.</p></div><div><span>03</span><h3>Warren County Courthouse</h3><p>The familiar limestone facade and red-domed cupola of our courthouse in Williamsport.</p></div></div></section>
  </main>
  <footer><div class="wrap footer-grid"><a class="logo footer-logo" href="#home" aria-label="Williamsport Originals home">${logo}</a><div><h2>Collections</h2><a href="#falls">Williamsport Falls</a><a href="#wabash">Banks of the Wabash</a><a href="#courthouse">Warren County Courthouse</a>${storeUrl ? `<a href="${storeUrl}">Shop all products</a>` : ''}</div><div><h2>About</h2><a href="#about">Our story</a><a href="#warren-county">Warren County</a><a href="#collections">Original designs</a></div><div class="footer-note"><h2>A Little Piece of Home</h2><p>Local places. Lasting memories.<br>Williamsport, Indiana.</p></div></div><div class="wrap footer-bottom"><small>&copy; ${new Date().getFullYear()} Williamsport Originals. All rights reserved.</small><span>Williamsport, Indiana</span><a href="#home" aria-label="Back to top" title="Back to top"><i data-lucide="arrow-up" aria-hidden="true"></i></a></div></footer>`;
const icons = { ArrowRight, ArrowUp, MapPin, Mountain, TreePine, Palette, Menu, X };
createIcons({ icons });
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  toggle.title = open ? 'Close navigation' : 'Open navigation';
  toggle.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" aria-hidden="true"></i>`;
  navigation.classList.toggle('is-open', open);
  createIcons({ icons });
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); } });
matchMedia('(min-width: 761px)').addEventListener('change', () => setMenu(false));
