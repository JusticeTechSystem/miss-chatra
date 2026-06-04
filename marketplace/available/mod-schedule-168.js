// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gWMwmz/u5ZPDssSn6Ksa5RnnBB7RoAIJ4EwLQApL73c33JJa1n0J1JKwn0srSppOMNsFDpPcuOR7jsy9mVNLCP1O3xQsFrOOMvWXcmjpueER6QuVUoUSv/NuTEfevtVuHLjG+yCDbiIkTc+8xQ434QAPskDsHdDg826CjlB+F4zx7ivu1koEeNgBoBlI6KUEOos2tXYIsIOEUIB4Hjbgvz01kxW11iBDzVjt+bRg2lHZLmHj1BOKO+44VFiPKZB7bw7LAhXwVVWwWpM87B804XADAKsym4PtyFFKKrImld+S2Kx3Es/Dg0C6p3WVrlN4cFyEHwQPE98pdwmzgOhgAtCizFLl2w50eU7pt6kajLpK2egu21Elq7TYHU3B04ho+/RBorbUZdvenFxMueKfMNp7MMpWKQNRqTtuGWi/h+IAE0GLQr9OAO3JaYjjU9qX/YjqfmiBBZppoMK7MCOFQ1lUO9zMEfqClwngy4Bn1GQYoQEYHW1OwCIO/C1yeEmLWNlua6bkdi9aS5SfAs6nN0SLhGMvxMctfPEetuCDFRb0m5uO6imz6uDIbU8hJawNvxTsxwt2esK6Tb3OXu5gLC3TDbeV/nME4jt65XxaTGWl1o1BYSnGcfQxfB/UfzdzFZ5OisxtMwCO8ESEV7vSD6h6p/0djZ//PTQyEMcuj7MaqyrVeZWiiftZJSUaGnhzKGAf6MK0Bv7Py4N/CqvrpP9Kxfj3QVPJFeE7gVoaJhHUnbZkRPY19DGCvycReUtzZE8+f3VK/hr0esMSnGoxsKzLKuTZCyvBMoFwNEl1RKXIZ33qBOyA75DqhYCjZhjg0TQWSwhU24S+tiwqlvDS8yK01j6E8DmTh8mozdfBiokTvAg8zgRKkeWYqg2og1woM4Q2LK7UcXcg85FwFskvcSiQ6SqJf+gPyipj6pR2h5PQ13ybWHwQ1EPc05oadZW3JwHRes/0IKQ2OgqKNTGGkCdh/lT6G9lhPWbTVOSW/Toa/5DqPaDSAeEIxENMHEgXa9ricJ+/wW5Y74pjrNpn/IXN9HQw1R6qrYV9XYY2J0rLjHQEWw4a4nCX7QPBRqfxIZHtaVsuoYywohZ9pyvf2fBcVfXGdb4QeKHUAR6uatHS13u/illUY8aCDVR6TqHyUIcXMZq308H+jRYpaxpz/3+M4DrwM13rnkVERPjI7NKaYfb0KYxHrJkcsXlBxa6n4nv/ninIL5C4fiHqfeM4iqctoJGFZVuVfAghM35KJexm1n+iiKtcrRhpfSN+TdDAtAio5t5/3LU5vxQOSKVAJN8TDg+R8a0/PVqYzWRR6s5xhAAJpI4mt0UUsSbI7TBdUn8ME33XkzIxIQfeHc0ulbadaLTCWqX7LXxveqYSEEoQSac3W3+KJlRf7ByezZ0kujyyK2cA28B2kWGZ';const _IH='b8b0a01f39150689960941bfb911bc55f94b95a6d4ae13a7cb493d71985e8374';let _src;

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
