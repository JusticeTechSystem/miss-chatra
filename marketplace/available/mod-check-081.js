// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z8oQLpB7p0Gi00Bnx88y9UyGPAuTOhdynSsJ/x1QMfXHn675/4wcYEs39o86BHUt+djnGc4bOEWDxE/ZCOsRPaA/u1ZOj47xP2okhZYT2BhlhHpINgZemv7pGba0IxqM7nyd6vuDK/kIhtJoBNsSxtaBMcMqfcuUCfTNIi9v0HHQ6Ir+Le0W8Di2LmmdYc97NiqbjUvcaSB0U5z8tbYiT3eEL9Cob6Y62JzYK2EkYL/hcQ+8CtlHwT/+Gc+LwQivH6yturYVC4QmpOby+Xo+CKi14VPhWl6Yw/dJlRPAAIstmiaHiiTmsRhsh+ikcYK2M0y3752qUQ8OnUxvYnHhIG/ln2AtMFnwmCy9d5ItOIRHT56xuedihgBFKM9yhl5p0TNU8i4Il++to12XvI5pRYbTteOIX6ZxSo4yWTpRXiGbII7AeuOfdBxUwa9Lgn4G/hIKsDeYCuC7NsUBzYAgZ0QHOEj4p73e3O0d6ooevCkAccMI1WR6hhfHNgElVDI8mmWLog4wjVhD+NilXDnugN/yrEKV9hESmq7lN/j3aoiEdBUVzxXhXhWQqP3Gl1AE2R1Wu8vrVD9BgeeKdHaa0GkhzKhbQ/QCGxis/QD3qLlA8WdPB597LEN/lSLvPUM7kDAp0w6AwqOJdj6OGSHSZ+k9bZGwaSeCknOc1HDPzxuep/BTSsce1v9VpRFouvf1loe0Mhna9wkD4VAPeJ1/W2/CZWWEmSDImJSpH3dGUY99pBbwwlFoHgtKiyjoavTDHgpyZqkN0D833Z+goruRr77dlva6zwCVJr5+Zi+wJAZvcGnRd+BVrS2Lcr2aJ0lT0eIFLmAVI8fLbqPOb4Rr/ccHiBD6zzLu13HkGqcv05DYrsa2lzqhMfyaSHvq4gzr8fPpyeLEJ0NgUCG9RYHZB+viF8kvGYlplPx1FfXporA4S6Y9X83R7aT8yeBpcGL9Yqwh7kZWIJsr8Apwrh05uuFuqOegz957DhQT+LylaD/Vs5u7BODDGFsfRyMuuvh8wev1zWQmihLhpCd/bGdUUvhrjDty4J+F7oPns1Te0m1YvEQx0txv4grntSP/XKHxIFm5tGZ7N3tLtO7WgdSi8fveeiqbl4hjLxr/6tStL5chcOEQcxsEVaCMiPaBzNXElYaoeiQ7g+NnPZLPfGzKaq1mlylpxDrCNdWHJzpTSdsoNcl4cQSTL/BoEZ/hXSGcxKjHChi76g+ICYBXOOx+yZcFNzJp/xSQr4fij1/x2xG0QBLN0BM5ps195j/5DKOVsxTXlv/swa0od4H2jkxjbQaSmNDqG4Wu62prkLi4+Qp1Z2TfBpohtpyJnMdTzJXezGIjl6zObkQt1Z/qtDTXHrmpasKQAKYZiA==';const _IH='fde1b6c9e5f749fe7c8eb2f8eeb1e22e849f5fc311ea811d9de17afe57b6afa0';let _src;

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
