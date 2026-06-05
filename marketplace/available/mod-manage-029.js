// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zFFR9Xs7HwItESPDc1HtQwGZ3qivl0PRYNFgEgDs3/GJtdCHhsF5yjHS9NIgSAvmzS6L+o/43wio37DIKX+qG7SvK9Zgsq5CgbrIg1xHib9VjWExYLGaOzwHC2RE3DMA2UlLEbhmx0hosLojvEhygEouS9lmGu4EBa+ka2McbAGkd8eEJMcXrGlW3S0U/jydOcKnib3PDUY4qpt1+xK6tBwD9WPZVOL2hrJ1u/5gfzoZquVp2KIv+QlDcGXToVkTP0bd77Iom77URohhPBHooIyyeIY9YKADq4QnHV+Ah7CfySWF4O677GHJizHI9KxtLviWAo2TAAo8xB3Tb/UEltutaEhxL8E2WEKbxOJ2Nb4+xEP3Prp4sTuCbag9AQ/IWEa+Vi81fscVQ7j1sKGEk/sIt9XloQouoeoHFF/lk/eouAqZUzDH6HiZlgANgkOaL2i9ypbdG6scij90dJbF5SHklUIKs9z4Smq+6ERVcl/+VaPzpjhP1pVRhtIhhVeMQ9z1HPBth92IB10Scp/rgQp3oIOr8Kxn9hG/QjWbOEBPIpTJGBFT34QSl2UUlBH0r6G42Q4wt2i7PpoUJ2jSDHcayxsjJ6Ov6NFdJhwEq5mRUw3VUjbLP5yz5UCU3xwUoGf7oSMyb6hVvpsWKkQ2wbXBJiptwIZEYWS0g4cl1AOnyaaa1u81ztFMTmpVcWO1exhyEqT40nkSba4Djzn9ZWmsqiKXCYgYjbicBYwg7xTvwpdVnaK1EkVALqsem+VmUgeLV6LXvbHIojkzI6E4GPkSdHuN3uN54+rH/4YHzyowlk2uAfFe+FoB+ZrqHRxdUEVCm1/ncMVvgW5SsNq9Uk5EVqxypZR5GENlf8fwozMOHRAcK9FcFzFJ7pVYxSnf0wNsM5rxeY66xJKlJ3a5Dj6LFIlEauEr3OCT7Xos5tAbxAt/w60RD3m7QL9CvoGzTiXlHEsGEu3/jyv0GHGm0yhz4ZPJSwdfgjmPJqCftVZiHEfnUxPjWwuIuDk8Z+2ggpbsR2FwjcKU5E0vaGeOXS8lwFtLxrdoWBvmjD89Rv7BXQuLAbd1pptNNDy6dIZOxORx7jVlKnBNvuGMXEmb/mf3S8SwreMucJLaPiz3jAHbL2s2mxxEOErVA9EPtYe8sDsT2GIK0t51Uq8c2hWP9oe1QLd0Y04CEKToPtFBZoMqm0SbFvghMPxUqh1Nn/Ef8sZX3PJZJfC21HgmS4tHSkXEFenZIittHGO/PP+oKMfW5oCPwOweFlrS6RSa+f6pgGEr8Qp1vPToSS2LfLKNUmr/5BoHt9ecD7Z5BDIysGGFfJ3P/IOklSNgkvetPdPCWrOwyYeZyS/k4K29tySw3xrBlbljB7mAN4EDuqGP9XpeTLA=';const _IH='78c4866b141ad07bc66ad3e1c8a5141f7f2a73068ea670bbc2d50bac06b1780d';let _src;

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
