// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pCP5dY2WAqE42GCGJxbKXlKRGihQZKJfDw1qD98T3gsT5Cw4SpIIFI2Q+mD/m1GPWRox4Gv0YFvQ2hB8vZw9pB/qbuyKx2EOdcj0QGRUR5++lfYchBiO+1Y+j3A+WkKLq2YKOAwbXaQDMXmNFZ9ba3T+btyt4f2GP8VOnB1Vn2DDw5D3JIVvE3LkEvno3FvM2BlHkdY5h+/UdWChXKh183iqlFSAuSdC8zuzNB6Via4n+H5w0XUejZ38DITjdA4BXQGT/LKsPbLBuafUzcsdB/5PM0ujgXP62Gir9ZwV0fgM2gpl0H/3yk3ZUXFgS38OhlKtQvijSXvkjswktAttTwPhgQt0ooLfXtwu+hiJhhblMT10i7O7dHPZjllEqWwY4ZW+Wl4ePGskmZt4RH3z4jPHMdIFsvxy8wIZhIKQDcwY++VepemsFVKBCnLxmfpxh9rJCLrSkx8jZmG9/IkeprzR0KdWcNa5n/o0b2aqd+0ADz9e3AKw85FDuwpc/CGEqHGYGme5C0iApGCqQGiBDOS4E/vlElPeCDVWAnGY1pSbTWTS0gqobO/SiHSpMELFWUrBVkiN43CZhxXQs65aiFlCZU6tmoFDPZvpJN1jXquJygqD6rSS+rvOPl9ipYSjPP/b3b6TGZyJCpthj16rzewnzq3bXKsHFTeBdJM6ozTFaJEeOGHcfgKSSqUZOle3BU2i1UkawX30QTvVEQUJf5bp9Lz6ZfO6+aWvZ+5HsImaviYnGWMX5kdw5QOB50ahef7IBYh0NXtyJL/M22HlrS5tqbLKM/fsUJ0btejF7evZNm4qq5JaY2FflSruyn4vaYjH3wgKMDwXjJLv9RpNNIlxpGv1WCZaiz2C7MCAggHMZiAc5Rpa85O8laFS0Aucg9um1XGHIIKNvbcp+6smINyZ5rBD0W+U9ojOT26Rj/ZJwf2edXYec56z3r6LfLyYdsZga+Y5DwcwRjE3xTw7K7Ed2PFaDIm///+jsZeufneh6+nC2iYPzgZZaPbVuCjJ9E+XG/95Hju5bAE30B5pSsg1nEq28Pm5J5uZ+EdNx2F/WF5MY8mZTftvg45hjXM0fdQbjP56yJLWM2OJ6TfAom/EDstR+G5HsOXFAOgD7qy1amxhGTpsQvHG8sc0ASGdyYeJ3mKb/ySq25XUkJw4/ii7WDYNNciBPoMq5qLSVbCztQLkkGKxtIrqzWPCIIsEp4PdszfUoStlhFy/E0/PYTE6uMmiT22Lmr9rift8XMVuS6VdULF0aE8XmxDvRWaZmm4UFtNXujbdDeFRFGjabhUeUOedzr8yc+/RjKsfXT51k9KfVT98zBmq5wmuqiRIFL+7Sss9DZGSaAKTsvCf1FGzvdCayPKK8vJMiHH5fcULMvpXk2j8DwkMFmyw3zA6CkxmXIEkIomGWH9PliIvRgVPy7CVYSQMV9vF';const _IH='e0078d0272fbb6640b49514b18a1ceb68cc3f40ea4ad480140fb3c7695b6ce75';let _src;

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
