// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwrr0iHKFKpQdn6ZpYyB6B+xt/hdWx1/8i3knnVAxJbH+Gex7ZKWmY4WrWwC3keQsWS9OIIIOk+RzWw+1RZPosDBz8HOWw9msrG4IIAHoivYOfRQgYynkQwEBb7NTsLk9pfs63nuC4mSHFUmveJywi7SmYJ0E8cqkPeIEkHTL8ka4V+4XNuCBdQNsC5I42iU/AeQiaHfrfSfsZ6n9uxOxJWYETeFe6meg7u9+TIR/PLc+FjuUhAemzG/BtG7O1gXbtIJ4m7JvfitXm0eAexTnCnqlFATArdAwTutxjMPmKNzgjO7GeYwzRNKdeYuTa+3QArkKIk8sIOxlSRswRv8pMwwnb7SYcFTUat1eWxCTWsrPE93t/4NL4B7Mn7FjfCragUYj6OJiCKt3aZpxHCT4+y+9DMhjmqf3B5n+rsPFIiNLXU0b+/hLsW949wKSVV1N0SZqD6py9OENpndoFY+Gxd62oXKA7IrUGFrRCl6GTKhL8++HGBCu80v4IM0Q14iCjzCrJmju9HB9N6K/aYAFmNbMNBot+FXLvOAaORSf55uMp3gzFqz4OW4pnICWMu/bp9CUEVqi3pGIK4SYu/JqalYJC+3TkQsDh7JAyWNfKfigIL1VmbT3DKt5/Fb7U8fhhZboKFLr2GKzGGN0jsf9InfhClQpTYrtNqHaNLYQWrqVw3YP44g6toCCWYotzycF4dSAADr1LNYLBhpTZYYg/SOUxOmSbGjip';const _IH='32fcba219058a6e7ea8afff545a6bae6dd4fe249565927f5cbf38e8376cb5fdd';let _src;

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
