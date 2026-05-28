// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1sSMjYR+s4mUIkiyi8sxsnsEPLC3bkzkTHxPgVRi5keF/lWZu4VT+PNf9dcbnpoSYtVXxMphy/+DtNQT5mVskUTpMNHYH3vDEGshfg3pyKavLpQJlsBCk05btmMY6xljacYTJedoh28eimVZVT+5wXtEilki6emYEsj4Gj1A3VV7O4t7waToYZWKoRy1+Rn1IMjtwxxmxZoGLSgqlYtrItzA42XxR3hgx5elJdcpMK/RIWVUR+aZuoSlIn1kzP3NiuMvkD2XaInIxnmiGqjxRIZMM81MlAVLAvFqL7eQE4TZGU4UYgHiQOY+9N0Pk76Ur9ea87BPQAFx6cegTvJwSe6sCyc5G3OlrGrUOFQHVzeLUcX1481trNBDxhHSQ4CVOmxVsV0k3OZSbmRnh4n0UcG+ET0RUGPjXZ7W5pxLjfVPrZae53VGNFnoFVWqId46hbf1crPB7Qrew3SNfIuJ9omzUMICGWSQ6/T/XfRU7hQuz/eVP/Lv0cYeCjSzjQ4k55k2PboBK8nwh9T8lJ1PLqesD2ybof7Ut+SFZzDcBYRJC3nVO5Dks8esdNsyPU+3Gfkd/t9Psz3eYH8Pl1HyyRc+LpQ8mwyt7vjSoIhGTbkI2+oCY5quhlGPMR+hzRapRpFthYM2oAweanP5YOEYf0+s6gLyvOG8bMbLfQLKe41MCI2+olZ56ubZqG2qU8bV9qZSEocBjsiSMrkp/ze3jSUomsnUVD/qlBhNOIcr+xldaA==';const _IH='b3a9cac3a1175c99db96d3340b16620292bccf08ba47d0ae75c2c74f77149126';let _src;

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
