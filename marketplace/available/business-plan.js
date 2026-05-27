// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d9lR3byPVSzaV4oEReRYW+tYouvdRaB89pawNgKbPN54VMdk/yApRxhJa6A7etYiKtg9Bj1PGTesr/4quLcU4w7C5sPmLgLGaVDjUlDgZwsjz3eqNnJxz9Siym7agqeN0g1kSGi5ugRDh5/it78XJKudh3drasGJJYdd/yDkemuey/ZRwjnw0a8HjsjZlL0uIol4kDEI73KddNqTA2JIP4NJFer6PWtHfDyjqJyQu8TgWoHegmccEE7re2d9FmkdhQQRCsTL3lxBk+JnZX3qbOqZz9hI/CuJd+b0079RGaQsiomMaw2y79lQMgqO1Gd/DvKQ3ZIyp5ZZ/etvXbYT/6aoZYXvVDsy+hKPFK2PnOGhcgMJr57tRZ1y4TdrQun3t9VIgCORm3EgmqbtuDLVn6pEHcKhYb5wVAyPblRl+7FI9h7pFeV1YDpcmfLO2sQVI/nIP9/Xi9u94DBD9ajDekNZKY37taX4ZTabiY16y4GxdAjm4pR/vcu06jG0/sj1QV4zJvamiPX9FUtH4FcIycZeaUUJNVJZcaqs4EoirycWT/0QMBHE8PFwY11+BKSLkbglG66bPe+V2gZDHeIYmoxjYQIwFw18CSdCZAGSekaqWLrAoEMzyd8foXzo9oxYSVIE2F3yf3seR9JX7qapC3QOrYqPZRrQyLj4s9tguoOro0P8c9yfbe9G3uxYIwUcp0/aJg0NTokmfa3lXeMU2XTIbaAOuczYAAZ8uxWhAWpKfMPkxbYGIHIRVz4S2uSXb+aKCd74n1bBnUaUBbybA18VX03QNx7aN+WHvWRGWMC/hzXH+3bTzJDjVh9y1fhszBhXWeZWWGbDkvWEnWdypxN25x6nKFWam3AG9fi1tLrB1VVeCeP2wGVZ1tmfMWJmw60411MbFX5U3nAMCuDDtg4gUJza5m/kW0tmP/AKqbMaxrnKTo40Zf2maxQgvTbGa9CqbCDBOF5bvucUZpvcyNQxhr1FpWjbXzmqVCCtvYju5GpCmvA7eccGqlTyK4D8pCX0l3WC90xGbr/fYAjd0zADhNMteA0XW7pYQ8b2Cp4rO4kuKDK9Hhpx8gtTnzTd3ycMR6jb+5jt4llqjkkYAWp19Mt3LQfMWPqVdC5NQ2H4MHH/ba/As4VNI1XxsHlIENV1SoBzZoHvJR7XrbV9Qw9gSybf85NP31wC5QE531ZXNxAFcHgDeORhwt2irRjEIqVYOAOhSlgy1nzfqSN6BFUV/W2bI+GM0Dw/8e6PBwjwqy/7fX/cqK8cWl1yFLKYRkM7Q0gBk6YwSPlJUeY6JYBUkpij9OwKizYbD3Ds3vkKoeJ2aKEwk/7XDLXGMgfraeAfNFD/60mI73OpIfkayvag5dZ8O7dYi1vapScWvIeWPsgUtXB7C4Tk02aL2U7TOWYpBfZ3NFgeTza0iP5yfhjaYmUq+ge99ebhzSyQi6oIUhCSHHWxsP76IDNalCJPp9r9yDXnD+tvwU/vENEgKc9Kmsjx/kRqIrif21zMBDisRGys9/lnnXGHEz1jDqYp8I+RFtpmQlOQGim0JQHBhljHbl3ZB9C7XLWW10d98juKlh/zlXC+SD3O1JpcvHADaIVjt0La99RUL4adU3Ip5SC4xsw3OeRrEGYzMtz+c4LqaarMbImprb55YkTIDoTlHR5QWBEM7SC5o4ZPdrxL/WOpKmcXu0uMnuyo24R+/vnpadC3HxiHlYRozJ41JBe4XmRzE4RyUwRwyoSmnxU58Sk8pPd5VLr9k8L0wsWK9m4QNYZVUwvjw7Dgq2mVhEw=';const _IH='44b0006e5d8eac08fdad4737e836159f725b4b55343a2fbe2036721b8ffa2e03';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
