// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mveI1o+xwwPI0gMN9r467oO8bbuOG1Q2XNR6jcd7C4AtXkNV/wZJ0Sjd9Xng8uMyFrQX1xR6WA/HccHo7naAkyz0yznFC1cvmqv7SJ07BcDdChxSqAimp/d0O2egsg9sDeEWaJmF+ndE1Dxp/kYwiDMmOaBl1mneHqmIDje+fvEGKfxMrrElz84v44UY2ERCC5TOi18EFclDC2wJZhvLCgOFQXpftzMd5XXGL6vpLXm7mtiYWkm2VlKDPFdvKWvdbDrrz4i/MZlr2XK9CgF5lBYACletMSQ9UWgvO2XalCJV6GjlSVN/ZlCvDpxKx5EX8qjb8hgn6CrAhi0xsqHGBin88bqTMB8qyhR1XoTP1bKEAAvsbYkBL69diNhIT/MxcNPHTfkoFfCHZQce1NFihrk2d8RzON7mEAZ5u/fry8CaduHEpa4LpLLWru/UOq0Gb2c0HOHtGEkdtaybFKR/XOSUNOwwl9hjHj3YrOPOYQ74xcTqeahyNEEdD5tG/sjfD8cGXPzFBXbkAhmH3uL5T5bVOXTeqMRABjH4DjIE250Gyq2sUxspT8gHvJbGaJjNHIqwB4gLfPgrIz4NT3QExJ3jkgnAzzVTmBdfhqiPbSmGfk+GwGEToZlbvN8aXW3dImllcvjLbuvwKiX4MaCaLgTxXub3NEgjMkF22NocaNLV0tW5dXpHGTnXNXuOmcXHogr/UtsDueX1slEfqncLdbkpruANJ4O5hJ3u2NGLn/lV2gbyxynj3GsjZ2BXxbLeDj4586LUdz3uIzTGKN2rtZZ6WqcxjNtxnhXZ4XoJqmBYtZWMrVYT5IT+yffVSZHR5xeXniVy+udnFxDyjIfsWB+Q0HNHUgcRHw2ywowMRegwYiV58BgyDrmKFJBVHfQkC0RhIQLE4LLJN8nRv7VDh9Kv3YJlkCpeDkYovP6W+k6Hm71bJ2MrvDwRxu25uI+NKVBjRm8JbWrUm/tQaCeZNBZEtDFvnrBFdr5hj/Z1s4uMrxTFcvSbBEIDZghSpTrS0A==';const _IH='240e3366e35c4dfa230bb2bb028aca302db562c22867caaea4f891cea0b8b969';let _src;

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
