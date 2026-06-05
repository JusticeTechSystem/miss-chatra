// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9KdERJ+xEWPVbgaRvjzkuqhxOaNr4kKceo+fHRIT7QXNm9MVIrZQDGkgrCxbbmkOM9HSi2F5S56yi9FnEAyWuM3vRX2JvJTab8xFPZljnDBPuB9t57zsK1+NQXuxYjSkJ4aLwPdvwclcqi+lLZi7VDyI9XWejgeaeLYHsib2ULJDJ0/O7nK7+9CfzeCYmVveR+ol9spD2tu6JdwqyOw53WZNMlNZmd8k9Gqhja/sATdrB1by26c+AWAorfhUZv57TC88siELlL2OjX0XPAW4reYEBm39fiFe2xyRzi8rJE28AcU0Os8RNHYpUXH39vSKW3c0g8jLkJdPV19GIp90QRD+QSISefh9KGuK6SfeJvsZG0ER2ydMWXjJpH0Pjskr0CuM+wOZAuol4qIScddahH/rZcEXFJkF2oAkLs2wj7e5zxgeog+vf21AMTKX+iQ7fQxJYOVDVjtNLWJmcVgPNMIY6yhlhLU5KgHG4VI6pnXZFPhkrsFhJepOg+T9ATNCIOetdfatFu2rt8Fw3kQyhi1LylIXS4z/SbWj2rdN5l5a0qLQTjHPbH1sOcPU3CEbZXlK79Bet1KDS4YoqtKOoZWk9dnB9snKTrVCPNLqr7R6o6IiOr83QictnaSxFfI2HtfvCNkhjCjTgvDE1TE/MW+afheQVXsAsqnwZ1fcG2t1Sqr9BaE3QtxsS87FOXSGhOq8XuP0xkHXPXcDTtxC0rLYyIlfU4cgqmzU6n3xRSZI7moP8YZl+XMrd2HATEuv4L4MDuK6AzcMqvyHtYtjA1pd19GZF2jq0vq/7ZRw0aw8tU+M50zBYeqZoBaGABsjaTg9E87lo9ec5WAerMi+AZDTpc4L3kSQbACMS3rxVWYk/sF+/HT57bMqIQ32yzLEYQiaTt7yKTaML6q+hO3W52l7YyrvI9+Oby0v0W0Mjc7FqW6A49WyOClocFTy+yZCqrkrG0JJz8WkpNskPrnxvoF3sCJqTHfqIdFp3DsOawjRftlzFxwxmfh/yVYrk0bPTDVE8BMSbGkOc18jDg1mDkydgHJ3BqwO5ycDsdNwDdRV7AWWga+4dNsu6nUCiBZM/NS4/W3uEYCfROYEU2suSmbxrR2F8sEC04odV2NjhwMd59GSz+785AQ+QJxL4wygBDgBL0rOxygiOLOxtOb6B3Hdka/+9Slu9Z1PdH8LC0FHSn5mTAuOD+p19xGKF8+QL5G/JheemfLmdkNa8d0yWN9skR5TM6mazQnEAsi8mTQpskPqheokwghaoE4wXOY9LKpHWxDTUXntgQ4Nw5hvmNmWnE7z6BqoPepKxrfMld5xp9n7s2adrP6PUxm1ukbGDipb895ydsW1xi+6I9/HEIMHNcHMEHRxcXKuQOWW';const _IH='776958fe20dff27eb5939a734cad721a8701141e43786c39849a61b83d355cf6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
