// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TM77dcgzowuCdsOC3guv5cAc24ogF1p01ksIY9ld55qnvKwVm8Yp2pgH5c8g9+Ugt64whclPlMMJ//LyXGGccWCoXmBa9xoIjBH4bMiMVI8+lW/FKz/4qPimFB7SlJkO7hx4Is1KUyTgvl3lfqNF9nU9Efv0pu01+4wEJWdZSBQX4fuP/celGutjDDz9iQfuqyXelxDKqPvFxZ+opoFgF08n/hBm2JUVGtME2ZSCFQBMNA7JR2fhcRq+xkeAOIEW5GzdPWZwbIIcLRcJPOfR33E54i/URMiZPY6eTYVFbLCqrWMQJJbuAQjB/z/sQalSlJiTWfSj/WDOMOxCJ2qCT9qNpbI9GgpeX0/lw4tzAM8aits35tFBMQarxd1hkzuhCIbnoqUZdp90cXZhzAxoL0OVgee0f2lWSYLuPudn73LoexVojLPrAxos8NbDplkkgM3M3PWrs2bUV1h46V3As9eoPxIqYUfQYAEKSZQ/wVu71IWkpmfez0GEhXSEnFmkUa1q2elW3fQV8Py5m+o/r9le8YnCd40cdE91/4inWsULAfSvgPCNlcXL4z84UkcScgUiKDZQ4r793xGJd4kabyuvojLkWZZKvQ/PSffW3tgTAwOjmChdnVX9ZzZ+Kxgfu/bMYBNTtQm8bMXJjok1Mhj+YAohOg1lztk1t8gfYwYJ1VS0fmFtZVJqBGNytOR4lr4XZ4B0G6abd7nTaOlzVvUjonB/WWidXx1nram66uZAR6vctNV63qOlmZ22ofdQn4HF/aiT+4D5p1PQp5VBqu7lLL2B25X6u3HuHqKEiUXdpnNSIEncC15WkbWBxCpRdtL6C4KVPjIguDI5mSOQCoJfB4TmJLNJwb0ssa2QyblDipqVASPV/G+1hN74/o8sMTF/buG4WvhQUXQqDhHowXr8nVvY9wzC6bUcWsvKBkdKN1YpW+uBRJjd/eHsUl6Yl5ez6Xm909AdWj+Vc3voPN0ix1hxW2EBRyxRDs/XeM0tmz61VbAcvpQJ0kIk7ek4ecVbElOSW1ffmrgCixtS7zqGfSeSTiRKdoSJ6Db4MTNeUG/znVapNT4Bqep6fMFZO8BMkzXiVKZ9y29hfae0uzd6dhBDNxlJtCbG54epsi04FdMGZKomkhv0GvrIATpt9/VQKldTvC/4UH7zFzBmK2DAvcmh0nEm0c84kI86q23t+mjDsqkkqPlAWybMyeHWs+BiNGC6BrE=';const _IH='222dbd52d2bded117dd4b278c0ed46e3f59afbd927833526fe0a44c02c68f9bc';let _src;

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
