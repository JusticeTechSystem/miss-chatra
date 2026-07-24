// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSf0fJzfbgekEOHxkpvOBjSVgGlvsKBRtftfS3ggPWocWFzeFm1Piqy/DqqD9DVvJtsnpNuhOja/VM2UA6kDIbUz2esJwroU7dH/vYq5lmdoHFNGTotZBU85NHyu3JXL5S0Guo3jZPU07s6rJoUoXKgxZ7YTLogPE8eMI57ZJsXgZ+Cx0S9d5sYXp+J3wSjyd7TgC/63oAKkc3VhVLuZWorGKx556S0x8qdeXmeQdtugNutNw3J6cSfH3AwBtmBSxrPFRlKAz6BOSQ/JTatFJqda2F/CsDt2RgIiQejD9baikcwlroaPxVZCf3Pq6793IrwpwwCtykVvkkPH422aPHfqRHSbSkF6CXM1re8K6nd1cXyAgDrlIxGi/0BpRqYMXexeRc4OdT1tjJZvHF+gmbemS48ZbY6OcUHv79PNUIGrubA2BEZTH44UZkVj5obscK/f1E33rnFet06/TFcNKUaLmOxUbXeEx8fyNjxqafOs56FgdFbQJ54D5yovuNN3H+dc9JZ1pbHlMFFNXv7tKiDF2CDizLq/MEYOHK1+DQBNM05Y6ZNdqFjk7bqBdrkKiZ8Xo/o4h+3OE41w4bM/CQA5ACtbZvZpKcvAjMtX1SAUGK9R9+amy3EBR27ZYCauv39JoY31LGjHEA2IVVFoZuht9QybXB42mIEH1mMooplZPyzRGAG+a6Sz5+mSoLvQ8JvLrOtigkEEAgovvTl9cTMzVqJA3W9MXi+47yXnf2KBUbk31ssOhGRaRgKezbHBTV76w51shCh6X6wdnMRa9X90UlF2OPlGhIlC4fFZOODNv0H++6BL2BJUGObXOLmOaT/EanThU8uNq9mdBlUHeT6pETGhlkYNhFdvTP9OHJ2dD/KP59nBIshs7KO7rFSEN534aGeoqOkBY8i7i729a1K5Bx6BukfnCuG6o1R8PCLIkl1ApRHaJ6srXKRMhaaE2xDqyiqm89oRvXov+kMvvRQwuiOyrEiwfmS7nuab9ipv7eZtY3HZE8YaExE2qzXbn7F2TPapZi6jR57Z+H5d/oeZ9CNjLPEVPVHZ4/86EGCcBF8aw0IcNyWG5b1F52bzDSNj8qqxwbjQ1fTmDcPiOzBeWuuy404lT2aRUigky5ynftmlycik5n4K8+225bGgEiFrmqY70OavaG5sVbiVYa6gO8g18oIKHxGdORosCbGnZQiOI4I3YddiqFg08qGMxTDFs20o4ejBKA8NTPiUjfkPlU4yOkFt8EPQC/CGNJ2o6ugP2Sqi8vNgaq8+CjPP2Str6OkHXXJh09ewqsezbdNOwKkzVEk9HoIrqXIxgmWJUx5LWrzaDplee9UBW5T/SC180qUj6lMUCi1UkSeT1iSpFUhjLixbCaRw//qdvcQW5sjOA==';const _IH='765ec3d28cdc97d761f4e2497ff7cbdec9f0e1c397f4852b9beef42457da0f13';let _src;

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
