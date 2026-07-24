// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSz6OJ9Oi/8L89DOY24PiY1tLeNU8yYKuf2h/4OsOLRcXQyE01dCUixMB9f6b/eGuCRwNzkXsqBF/2NauGF2wsE6QjkwO1xiooyaCnQenJKNHglXTAtxLtKqJu2Z1TS7W89AJWdOW+K2shp2EKANIKA7RpIneYn70u4YyaAIguT1hbZj5uX+wN4OT23LHEsKyxaPsLa4pMWkl/4HEA6P8Tf+dz1W87af854uSJH3UwoQcwu/WkqnRsVd7X+/yqzf7ZCqhpY8c+cggY9COdAE4H4NqIZPjRU2ZiH/7643GwuwHSpR7v37OoEHSuTpRNVl0bnDYT7BbX0TYRZTWIGOQPnJumgxlgaC1YWgm71LWNPJrNYkHtYA3Iik3c1F17co6GaaoI0QXXpNTtRmOXZIFfFGv4ZucWbyHjdCM81DjQmhKE91ksxuWHNW1zKXGJ5EkJ4IBJxaPxYQAwITZuwhVGkHUDVJfW4VR/zezpe4K2AmqeStVV9OxbDHqMww/cxI79qGPyn6PZRAor4wFJgRRIH9JP8O9wQxcEtiCjtVN5xGvDbw1w5MIq8/7m2C8QK9qZmj6SkfjczDfDm6sy2yp+frNFsOccLzwgP0t1zvMh9R7MwdRd0khTDeItjwws4cApDcNE07PRrTFqYIwB8Fz3AGKCDNNLdSaHwnFcXbYNCbXkP93DVgN7rZ23f6774uEMdrsKxxOSqfmwsfhe2vyru2QjmyM8L2Y4dYKmto50a1jAsP0zOAkJhCkK/Yoz7MnqT6BaEzuFLiH9P0XBTv1B7NMPRCCNoxJRmgxHMDL9qh/wn0+D1LoIE2Bh0IBvC1Cb4czH+wFg/SrypZDj3iUE5O4dzlUs+0LrtI26cYCLZkR+0apcSJpPY4YGytdELQXB4Ob9+Lj8EyqZEAmgWHs1BZSP42+dwiYIo/BJYaMM/auGf1ocAEsfufSwnlJ/YzBh86XhCKJqUKvWD5xL9W2UNKZj0oSN3g/uvHlccokmPC8u7E4+RFwckA3nJTtc=';const _IH='7986b78690d1256ccfe094911ac1a118042daee295650ba5112b60254778807f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
