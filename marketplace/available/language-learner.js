// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/+BjGGobdah36JKHnFFd/P/AnRGcNv/WlTwSn1+xHdRio+TrDt1/2ur66/5lmYqSPw9ySfTHt17IGH25+Nh88pKZ6kOVx8bWfSqi3qvEwXUFFJPnBLr+z1uI2az2bbuwQ1YREylnWvYXfUo/+bJzI81RqwdXLF0OA5K7CkeXHy0jeLvNuITBKO/KA/I8mkJSZ4Tb7In5ruXUmk+5JOCQIs92rwHhZpyDMelakimJyr3Ya5PftvaGEtdFuaViAGCIQc5hbY3+TCZeOKmEsQFrB4rfa21U967l3aO3G62qzA4O7y2E2uLapNftDdjxmBVjrh+NO+d5OKucb90ED9rYqEgAzSGUYaTGq5foX5TnabyB2ijNcC5nb+H+3jBlfl96761M2Gi2R1p5gSpxkAPEheclaW+HcCwBRNu6KGPBaz2d6aSuga3HcqBBpEUh67QM6zM6lLUvOIXm2eA8Uac+KtgT2J0kjYNgttooiwIxRgn1jpl7s55BHeVjYURkhCcSeDcFADwEDB1QhKSHMLyz9h04/ISR0Qbj/a8vTu+ScgnGtzXBybMH56UKHklICUwyprMQ9NyXjFW/W0rN9mv6+JNNs0oQ4HhjF3QyupXJ3e8GWel7';const _IH='2a1ca8ff5bd8e11d497436b389c7b8e4e5f3bc7e33832b1f46083f65aa439fc3';let _src;

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
