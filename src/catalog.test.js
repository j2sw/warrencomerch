import test from 'node:test';
import assert from 'node:assert/strict';
import { total, validCart, money } from './catalog.js';
test('subtotal prices multiple products and quantities in cents',()=>{assert.equal(total([{id:'tee',quantity:2},{id:'hoodie',quantity:1},{id:'hat',quantity:1}]),13800);assert.equal(total([]),0);assert.equal(money(2800),'$28.00');});
test('stored cart rejects unknown products, invalid sizes, and unsafe quantities',()=>{const good={id:'tee',size:'M',quantity:2};assert.deepEqual(validCart([good,{id:'missing',size:'M',quantity:1},{id:'hat',size:'XL',quantity:1},{id:'tee',size:'M',quantity:-1},{id:'tee',size:'M',quantity:1.5},{id:'tee',size:'M',quantity:100}]),[good]);assert.deepEqual(validCart(null),[]);});
