export const products = [
 { id: 'tee', name: 'The Everyday Tee', category: 'T-shirts', price: 2800, color: 'Natural', sizes: ['S','M','L','XL','2XL'], type: 'tee', background: '#e6dfd0', tag: 'Everyday essential' },
 { id: 'hoodie', name: 'The Weekend Hoodie', category: 'Hoodies', price: 5800, color: 'Forest', sizes: ['S','M','L','XL','2XL'], type: 'hoodie', background: '#ced7cd', tag: 'Layer up' },
 { id: 'hat', name: 'The Field Cap', category: 'Hats', price: 2400, color: 'Clay', sizes: ['One size'], type: 'hat', background: '#e3cec0', tag: 'Finish the fit' }
];
export const money = cents => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
export function total(cart) { return cart.reduce((sum, item) => sum + (products.find(p => p.id === item.id)?.price ?? 0) * item.quantity, 0); }
export function validCart(value) { return Array.isArray(value) ? value.filter(item => products.some(p => p.id === item.id && p.sizes.includes(item.size)) && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99).map(({id,size,quantity})=>({id,size,quantity})) : []; }
