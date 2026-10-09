import './style.css';
import { products, money, total, validCart } from './catalog.js';
let cart = [];
try { cart = validCart(JSON.parse(localStorage.getItem('warren-cart') || '[]')); } catch {}
let filter = 'All';
const art = p => `<svg viewBox="0 0 320 280" role="img" aria-label="Illustration of ${p.color} ${p.category.toLowerCase()}"><ellipse cx="160" cy="250" rx="85" ry="10" fill="#000" opacity=".07"/>${p.type === 'hat' ? '<path d="M87 175 Q86 82 167 88 Q231 89 235 172 Z" fill="#a86648"/><path d="M84 174 Q166 152 252 186 Q268 203 231 208 L107 204 Q62 200 84 174" fill="#875036"/><path d="M162 91 L162 166" stroke="#c68c6e" fill="none"/>' : `<path d="M112 65 L140 54 Q160 73 180 54 L208 65 L263 111 L231 152 L210 137 L210 235 L110 235 L110 137 L89 152 L57 111 Z" fill="${p.type === 'hoodie' ? '#365640' : '#faf5e8'}" stroke="${p.type === 'hoodie' ? '#294631' : '#d2c9b7'}" stroke-width="2"/>${p.type === 'hoodie' ? '<path d="M134 65 Q114 18 160 21 Q206 18 186 65 L161 91 Z" fill="#294631"/><path d="M135 183 L185 183 L193 211 L127 211 Z" fill="#294631"/><path d="M150 86 L147 128 M172 86 L176 128" stroke="#b9c4b4" stroke-width="3"/>' : '<path d="M140 55 Q160 88 180 55" stroke="#d2c9b7" stroke-width="5" fill="none"/>'}` }<text x="160" y="${p.type === 'hat' ? '145' : '145'}" text-anchor="middle" fill="${p.type === 'tee' ? '#365640' : '#f5efdf'}" font-size="17" font-family="Georgia" font-weight="bold">WARREN</text><text x="160" y="162" text-anchor="middle" fill="${p.type === 'tee' ? '#365640' : '#f5efdf'}" font-size="8" letter-spacing="3">CO.</text></svg>`;
document.querySelector('#app').innerHTML = `
<div class="announcement">GOOD GEAR. EVERY DAY.</div>
<header><a class="brand" href="#">WARREN <span>CO. MERCH</span></a><nav aria-label="Main navigation"><a href="#shop">Shop the collection</a><button id="cart-open" class="cart-button">Bag <span id="count">0</span></button></nav></header>
<main><section class="hero"><div><p class="eyebrow">THE EVERYDAY COLLECTION / 01</p><h1>Wear your<br>kind of <em>everyday.</em></h1><p class="intro">Easy staples. A little hometown spirit.<br>T-shirts, hoodies, and hats from Warren Co.</p><a class="primary" href="#shop">Find your everyday ↗</a><p class="hero-note">KEEP IT SIMPLE. MAKE IT YOURS.</p></div><div class="hero-art">${art(products[1])}<span class="stamp">WARREN CO.<br>THE EVERYDAY GOODS</span><span class="edition">01 / FOREST</span></div></section>
<section id="shop" class="shop"><div class="section-title"><div><p class="eyebrow">THE GOOD STUFF</p><h2>Your next go-to.</h2></div><p>Three staples. Endless everyday.</p></div><div id="filters" role="group" aria-label="Filter products">${['All','T-shirts','Hoodies','Hats'].map(f=>`<button data-filter="${f}" aria-pressed="${f==='All'}">${f}</button>`).join('')}</div><div class="products" id="products"></div></section>
<section class="story"><p class="eyebrow">A LITTLE WARREN. A LOT OF YOU.</p><h2>For wherever the day takes you.</h2><p>From the first coffee to the long way home. Pick your favorite, throw it on, and make it your own.</p></section></main>
<footer><a class="brand" href="#">WARREN <span>CO. MERCH</span></a><p>Everyday goods. Warren Co. spirit.</p><small>Sample storefront · Orders are not yet available.</small></footer>
<dialog id="bag"><div class="bag-head"><h2>Your bag</h2><button id="cart-close" aria-label="Close shopping bag">✕</button></div><div id="cart-items"></div><div class="bag-bottom"><p>Subtotal <strong id="subtotal"></strong></p><small>Sample products and prices. Shipping and taxes are not calculated.</small><button id="checkout" class="primary">Checkout information</button><p id="checkout-note" hidden role="status">This store is a preview. Checkout is not connected and no orders or payments can be accepted yet.</p></div></dialog><div id="toast" role="status"></div>`;
function renderProducts() {
 document.querySelector('#products').innerHTML = products.filter(p => filter === 'All' || p.category === filter).map(p=>`<article class="product"><div class="product-art" style="background:${p.background}"><span>${p.tag}</span>${art(p)}</div><div class="product-heading"><h3>${p.name}</h3><strong>${money(p.price)}</strong></div><p class="color">${p.color} / ${p.category}</p><div class="buy-row"><label class="sr-only" for="size-${p.id}">Size for ${p.name}</label><select id="size-${p.id}">${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select><button data-add="${p.id}">Add to bag +</button></div></article>`).join('');
}
function renderCart() {
 document.querySelector('#count').textContent = cart.reduce((n,i)=>n+i.quantity,0);
 document.querySelector('#subtotal').textContent = money(total(cart));
 document.querySelector('#cart-items').innerHTML = cart.length ? cart.map((i,index)=> { const p=products.find(p=>p.id===i.id); return `<article class="cart-item"><div>${art(p)}</div><section><h3>${p.name}</h3><p>${p.color} · ${i.size}</p><strong>${money(p.price*i.quantity)}</strong><div class="quantity"><button data-minus="${index}" aria-label="Decrease ${p.name} quantity">−</button><span>${i.quantity}</span><button data-plus="${index}" aria-label="Increase ${p.name} quantity" ${i.quantity>=99?'disabled':''}>+</button><button data-remove="${index}" class="remove">Remove</button></div></section></article>`; }).join('') : '<p class="empty">Your bag is waiting for a new favorite.<br><a href="#shop" id="browse">Explore the collection ↗</a></p>';
 try { localStorage.setItem('warren-cart',JSON.stringify(cart)); } catch {}
}
let toastTimer;
document.addEventListener('click', e=> {
 const b=e.target.closest('button');
 if(b?.dataset.filter) { filter=b.dataset.filter; document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b))); renderProducts(); }
 if(b?.dataset.add) { const id=b.dataset.add,size=document.querySelector(`#size-${id}`).value, item=cart.find(i=>i.id===id&&i.size===size); if(item) item.quantity=Math.min(99,item.quantity+1); else cart.push({id,size,quantity:1}); renderCart(); document.querySelector('#toast').textContent='Added to your bag'; clearTimeout(toastTimer); toastTimer=setTimeout(()=>document.querySelector('#toast').textContent='',2500); }
 for(const action of ['minus','plus','remove']) if(b?.dataset[action]!==undefined) { const index=Number(b.dataset[action]); if(action==='remove')cart.splice(index,1); else {cart[index].quantity+=action==='plus'?1:-1;if(cart[index].quantity===0)cart.splice(index,1);} renderCart(); }
 if(b?.id==='cart-open')document.querySelector('#bag').showModal();
 if(b?.id==='cart-close'||e.target.id==='browse')document.querySelector('#bag').close();
 if(b?.id==='checkout')document.querySelector('#checkout-note').hidden=false;
});
renderProducts(); renderCart();
