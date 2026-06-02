// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oz85MwYksuOhlZeDAJ71GvnQwD48FRLuBlqM6b9B5izJBZiVP7OhOVY9ialPuBF7PKavkFGMkmmE7mfvWejb0TVCV932sXmwuCtuGaLs5uBObZGAkYjIziQ/W2bHuLEbXNZUC/o1NclBmsxPxuUeA8zjKpSvm2yjHHjzUZMr7CC/X7o5cM9Zq09Wzba5VL223jXlkzhMfwl7sziftXPtxrtLD+AV7N1rREIgePzvekLVeEvts8YYZUPI+CPZi1lbWoqUYA7T6lE0Gx53fmN02PZvp/AiDxOJljq4Kvvaj9ymb556EIgM9hmHkIwgTOlMhxtmUWBrE+bdkMoRGKmQKEGPkRw337dSwwaDcfAxi5OBGhxepLRySXADQsd503plfQIUOAu1Wj2Gc0tJxBjlDQ1cCJiC+kCKTe/Iczx4yb1TbpymspC7PDgDQkhj0RTZEmWq4/H796s+LCjDUPY7DjKEtUQTqI5rRA/AdEJZCDVuBngLhC1j7YcCeyZeKL4iKxQn9gp527hIUUCAi6ZI94HANrhvkpkmfSLJG1C8RLMa7CzdwEUatrgnoiATGONwc6nexY67S1wbss0sds9OrVxqEx9fh9o3pAvUX4JDioAt3L5MNRKSq4el1AWknYKrO3o5a78uQIFfQal6q3AUea1Qe37/axBEyqpLE8nCQCRNnz7cgcK1GS+yW81Ktj997N65PzMhRAP5YxERU9Eyr0gj9ghp5jvI+nXBNLeT9JS6rteDr4wCS539151SR4nGMO3KrbOc5mO/D5srzn0l0VOhgn0A0jXQXjzEF6HwNPeKso7cd0i/wowTNVOk8OSPLcQYgd1W/i7bBbZ/zNLJyVw9IysGf8zBwRW4Rg2a/4yrM7hcYz4mH9lTmyxOxa8MEUcw0LGIusZmRSvSj5wSvI+WXZU2QgtPjt6mJFWKFOXmVayre/wK85v39abovdBCJ7qr6BdaRdVTtkyvGZsASip30LnHS1uGlH2mSdWKHOcPjepXuK8ZOfjABe5daHfjtJYKeX2eHCfkNJafPD4nQchdRcbpHy7cXl+TJovgDvM2uRcAk4lxW75aqsZCk6ZnwUKie4PVkJFepaF1OfxxEij1GXj+nH4m13LaF6RHzNTmJU5QkEH/lavr7PcM8i9P6AA6n93nyVxY6Re+AIt0PY9KiwPwYwJKJFi4gJC8SbYcSlm9k1f/I05o3bfTTZHYQRxDYD1casYTYAUcB9Di9Mj2zqxl';const _IH='3398f0bd55f7affac7874c7d15e5f58c63902b667c0c421e2aaacf9828df18ae';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
