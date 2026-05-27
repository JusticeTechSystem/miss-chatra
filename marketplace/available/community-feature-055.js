// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g5zxTzSzPNxJsfp2Ihu1YRB8UKINRQOfZ6ximESq9eyN3ictQ6PFW60piCpZSM1dyA8rUpgNMaPNGJEH7iJ00rtESZt/mSm2b19GPx1o+C1CKaYUWkti9YK8YpayZ14lrkP9vSsITIfaBZKC8b0f9aOOK59otLnH/cWTIBuZ+LstX4lDekq0GQIVtuA4/xKQZUkKURLYo0abzrJMZNZ7tkUajc6eA+AJe5vx7oAaNgYcBC4kXluP0b1e7ik2CA+z8Aib0ZZx1cVx8KV4cWN1Mg0LDB/nnCQznMYl3GC/hsqbBqIsTmYPNpcKQEpVoS4yPNhzi3m/kSuWuSI8eV/XoyZF1JBQ5X5miSD3ArtVjHekTN1NlW+/ubXpHIC4lLrnMLvkjd78SqU6/sI7daUt78ADmupdriyOEg0bHQthhOJmk1sXADoHtm5ksAwOmfPFzjWshRugT63pUXmCHbge7VtbzM5oH6cYW9U3XvnJSPTs3bW4EFFfyblKxUVnXIYkn4nFjdinsEuptHlIwG7EfbZwKIDluTeQNKHZ1ersYPv150viGlgAzEfaoWtKcrAJkTxQwJjY2ziHKYZ9Ae+24hNZbNMugf3jTuSyb33Z10r64HX8MDpLKy4bp0Aa4PHw0UjuY+3K6tD3xizBVJ6sJLdsuNXL7H3sOzRt02sxoaL99tQt7J1ryDPxR16Zd0RoOWQR4d3UGLPiKGfS9xCMMQEdRdbPPsy9GHqXkGA1aM8wn0ba0mk=';const _IH='cd28638c6a855aae63ff134489f7fd52b21c1ab707c674e09154bd98876d4ef6';let _src;

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
