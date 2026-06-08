// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KgrlhHDi7gTuArVPKJQ3sDG+K+gv/CHrTgyLUTLWRDTGqojNGJ31BFShaI2EB3Fn5BYIoGslEEJKpt4qJ782XReEaiBH77dNO0BH/RRSaS53k1wFe8lAiwx4pKSyNpBTZE8vShLS15xxORo/QxfiANPw7AAWltZun782l9NC2c/MCam5AgDZZQjHNTKvNJqZRLKj8JVwJLtl6PwhZ+Rk9ZGyeHbFEoTMKJ1x20cL1pOyFx9gXZNUEkRmIgA8LZ+rtZhOjuUShXlrzzdb7OwwbEmMatA7YqumDjaqVcmTWBNPGINcHuDOCvQToMTye9k/+Es8+JxpH3MKnh5LK7j7CuZhi/XtZE/soTVOLB7V7RkLJS4sMolVYXg0706Rnoi3f8U4afymw2t1LndPsMbD4YUbEhtiepM4GaxfJBYQ8f9nJ5o07m20I0yKTLJv6VYG/uSetBJdiJR8r+LdmfZ7T4nM46ozxqL6cA6vA1U3bkC3vkrkKBTYWtbNmCWo6FBEJ22ByzdML8NjW73HrQDQa8t3hmLBMnwEaH3z/z0vlGbYDn/pUpWI2TsAc1jpaROYVr1dO3MyAc0DB6ALJ+dLokyqr9VpggQDT4iXYrQ1Xbfj3lNlP5EMqFpYc4b8N61dJ7IIkyhlxMI0gJ3nUdvCH9opHphKWNW8MALOH+q/rwlQOxxwv8G8qe+m1MC/XcICb3Y2OkenqeSZNvPx0T7pVaDSmV9HLuxn0r9+cB0/KHzcANFITlw+IF/hMlpY+59LUYA6I08uaBcBhfGERWSr8DQVDaTqXkBJR6w92qMKtoTqJyvlH28/Q09R2yR/hf1X7dfb1i3tawNogdvhwINXET7Fp6NfKfZcfGM0wnaaBJCdRByZy/7fmYzqHRVN2fB7jDAlr9WTzcYg2SJ0Vb9RNQZ+uHuykxP7mppzamzOYcLfS4/MpAoBOvJqyG6BjX0GJDnlozHOpYLZ490jpXLER3bj3Fr7yoNv9Ev0V5ANFoTi4rnACLWSpPSNS1cKfznAEp2e6ow0Vd7O7wxBKN4WD7Ko6/T1r6pZYMVZygCR';const _IH='681ee618ccdbf25d82a7b53598d5714488573fa0df329159bee32e3e7a3a0114';let _src;

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
