// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J6ko19vw46+CeGUPfaL/EIzD8AdZix1JezWnl2IeVAyH8T7VwaBf3yuHy1mvd37SKOT+hTHp9lz84Zx7BNYHYwZ+19ClTlcNfsJaU2Njy1kzcuLuZ20zeuKkWbGffiGeABpROD0b8mO5BNj33zdbZj6XnO8EmYQZuB5otibLLcwqUNn7Nzn6u1pIRm1DLDqkeosURcw/0blFAN+oFFz37T7pKkmhoQHf2Ox2TXN1HkZAr18EuURueRUJbazT8csSeToBW3w8DLpyVGuGi6XwlA3f+9GC8qjxEqAsXzBKcdlpvPI2wDE47oV9/gHsQ+O60uw2MgfLsxWp7vL7UNE/mvONZC4UAjpblMv2F6+iYThVcZI/B2qQpow9/fIUhbw6rVzMQeCy1b5u/pVcZ5JZqr3pxXyOiksbbvNv6ldWZAHRo04Hic7kQysWrvHfReQtUWEwGH6pRMs2X7lqnxxq+mc6cwM3GDheT/Ce86ggnnxySRqqq2OTKsKDjfSCyPvrFqZwbgAk5cESxAKx82f+0iVTzi5O7WzeOl9l48Tr8vYPWqWRIqAyvoy9oceLr9zbf9JU91I279Urlcnw6tscQ9hOIQV5UlqPFMPonq7qJvQgFITNzafCdIcHai1WIGZ3oLG2J9KJE2JlvYvgOr2p0Uc2+DUR57Tf/KijtDoG6ePyDWUgykNHJRy6WP0xQc6o5jE8GwJVlgIYqcluFg5EUkoay/a+gkjzH43Hw07YFb7ZSvxqkwUfw9vFwDRIttiH8mvRI4l0tXnXuRpFnnXhpL+YHBq7zuX/fXLtb2ap+J6lw+KOHY62zMbu2Bk2trDYe83Cf/UyNQGWUuKhsBTgcK3xX2sGIqnzxeSz1/yxh/S9VcWkRmf6S18/3gIR3sGtLuUCqFJUaiJsaqTmhKSKtqXHgZAYlfeoxX6TW/YYr4aoRZns7Xt8y49UgJehR1HA7/HGDNZTgPuGUNrsVNEb5W7M4sE74nLGtm3uj9X6+heCZWQk7PYKqoXiaXA17OBM3iQVIBeiBo56SoGXNo6Q1wAx';const _IH='bacb6cf055fafa7aff4fea5bd31cec6ed6d77cf14378569f91baca2534aefe69';let _src;

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
