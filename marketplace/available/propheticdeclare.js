// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UEdI4P7QBNZOINETVKziyzpE6Zl6WMwjRdiNyVAfpd7X7/gZFO6skQAdwAbiIWmEOT4GECy5ZcmatgWkBzehyx+sMwjyZVLwFKzNcrnSmwF9/Fs9CUyCkRvlYTou3Y1SJkMyisMzF2x6V3JWbNZfmlXBbxSopo79Ot09JDW89n/4OpOs+jYDDeCGQYkMAMoodSydlvewRgtt3C575OvIZGNX+hhrPAJ4y+q5f8t1KP/3tR/e2Y8nSOfarijZ+1Y1N/mOMbTVqQdoeSd2OnuNQLcAwOnQDofqCGtsN/qebwGgEE1+HU/Zvp7vdAm8//r3/24B/ELwV/7eNdU1SQGRDB00pf5F4jZzxlabqe01aSsB5AUF9ad33py/ynsCwYkQjrpiPmqMQ0Uw0jdcICvI0eIb53w5u78wDngLdAoP1JS3guIhVFTsLVHs5chy3XwLQ6ZFfX8FljhpLxbeuBZfeImEQZEmZuls3WMH8FSdeV1pgQN6dGjHxLzGjBhFmffuqzR9H/LXerLnvPQZYIo3TyKmCgE4HlWzZsky2Cph8mRX5NsIc793d1wZAv9CZV9Qs8dQR8bmxMp09bXv2V+vVE1Q7V6q5r+jsHhBTUX11wa6pUUSmSIXq+iGbGZn18tbNYGGd9hPiogVL+sI8AeLhSsD7H3glKnL/IPJbcF2rx8nU9ziSjS1iigiU8Rcda3ki18ivFJ2GMIqcJ5gUVzPDtpwK2GNTWpGgjUnrIyt0Fc3EKAU0xHlKnUulgva8iosJx0j6h0XLMCPPfT1I4kNekH+gy4QGYKk92Ga9BX6/xbwV1jVyGRFuBOB3APim1cE2QzHsikAizmIE1xWgzfEb/CKDRloQbyjcNLWOmEdAT6VAAIxNWvkahOnRXT+4mRrxr2lm/IHeTW8b4X39Xa5VY8CSS2siZNFC5zmw80wv9Bzady1nzQmf182VBx1F5JJGaDE7o70sfpEK2sn0Mq7gAvQGE7UXcAEPFHiSKxCRBF5MxOsdWfeP+UnS2PiuN/7DnPbtrry34Gc4RuA+noYGYQk5J7sQnhtwPyLhci2hcngCduHhzxEmQ6efrZjtydTuMmoQrbZl1MScLmX+v4GFLEUyJEoGqmf20n6sQh3B/vJ0ohRTjg1dr7sdWIF23KzSNLuiBTzwohZeCsx6DOKGgyfgKbVguhcRfydU2X9QRzKTXcc71dm/4utj6/AV+RwOFERBNKXgVS+OEDJVUQZDAOuc+C0';const _IH='85e609239c353d41ade2348c4ad50f183d616131bd5c9c206cbab142079a4b50';let _src;

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
