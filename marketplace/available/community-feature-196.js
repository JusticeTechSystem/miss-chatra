// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tz5zSBX7RxVENfFmVF58fupSkGTnBJhF6rzqHRuNQxptaAGA8/z0BtGc+xa9ccyPaIyTPxDqoSfJ6mRQxhswnhHuQIO1Yi2TFPkrndzjnIPGqKx1uPHUZ926x2x20z3uMhLN2tMr+mr5wGQFfnfukoiLuxSmi5BkwHe+VpvjiNpGECGqtyqjh1wk8L1hjokphAep+gqQYEYFYR69uo9avHaZjP6Z0T4TCB7LcAXQA51jfrNP75G9ZMo7z0tLUliUNz2VUTlQbBMS7CbH7ETRzqM+dWRlTsGz8l+/xukxWShjl9TijVA1zF5b+zMoAiFPcg/cpaK+/6w3Uh7ckKbaK99VhVslCraQQbkhn8QOF9U0WD/+G+mdda/SwLbTLy637XoUJNKM85TLH+F4UPAjjb6xDp2WojupIeT12JjuVsLMS3IVUHIQTjUIwSy7PkrXG6R9ycyJuQz3EHfccAxryvufAU3KcmBIFcwO+9GsQ7Ur42pXnONLP7vuWMKMk08MF8ZKX4Fml1y+Shj4KJQVphS5AjYoRrBYo0XVe0rqKtoiTfKO8miJT+ErggMaU3SBc/+6nHW9xOVG+G9s4N+BSRxJttuzJ0tEh9Pv/bdTkA9+v0CMGds5UHA0UPwyBR3N4FRBGNaibVKIrAbIDkqfOi1I2IzGeduL+Gme6na6hD7a0Z1mqQdv5kCvCbPhic1bYcZK1Y8zUAKE1GihceEBX6K+jxUMgMD0';const _IH='e57d0ec5ce1b63e3b095200ff70a902ea806d530ade7276d263848bbedc41a4a';let _src;

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
