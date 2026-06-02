// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aKRnxlO8wqoLC/jq2Z/KiXpjeNdIhFZuQ+ASJB0kdNkH1NYWyuTx2wy53MVLsT439ispCO+nYDwS5YwfcDw6Yf72N0zOZqT0j719ByjwfA1KgjbUuBgfOeuuOpf4kyxyxJuKqSD7WROdoD0CjosN0za8rNTGWDhVFpfJUqMEvmNybvvXVfnv7zDiTUfxbjSyIvDbQmfl5bZUq5m/+tMc0wBeO/pGIr7enTE5wj7YqB3OqtTNa2pi6lSmj7Dl7D4pTU1FSDNvSQhZy3UgDaHq71V29AVdBelq64oS3r99YTuU4BSkOwHNPT2dqdxkgLJD3JhUKeeKYvTN/m5mphAb/A/lLwfqC6tM/IPOjoOqWjruY+z2rwm5kyr9dUW/qhnJSWxntC85zw/0oZYGuKLFXlxJqspns9LvoAQfDOI1Rpxv7Kuyz4Jt5DPVxrSSXGLOhkc7qpb0LvRO0drZuW0/+IfhMwFzdJznp/0OCbP0e5XA1IAZH28IdGhW5/okkQQIAsssg4GMr1gDFVESY1Vr/NNZZdnpcv5njtq/kmHl4Bi250908aulsaNjEuxP3J1w7C1JsWTiMOWdPSb2fbiHCTJlQEvR8b+rA1DzsewFqS50WhCWdr8B2DzFCUvUAt4pnG1QjCy1IJNQBlJLcyB/feD1JhSzkdSGU/hfFQnxQKuRbz2juWIk2qeI6ADw1Yf5xGtjfrpkU/UaYCne/o8ws+lDhiYmiMNBv39BFXb84lUZO33DAYsrw+PJZmrOidsRFjjOWpLEgxHYG/01ItH8vs4tpSecKZMvrtN6xA4cDZV8f3W07UQETMRC72LMPQsmvPB55p2Hey5gQ2sGG8WvcC363iNffAOYCjNHFnc/ojNfoficzL0nt6PCY0FaGFH2krBYwwz9sEJ+iEMzX8LZb8iQ/bMIWk+nJv7yIDuFvRpjprrRt+9qZNJNh+khDvgl2dgtGlGAddlJeQPv7KSyS8y6ekshEnXhqHRaSdVTXZ2bn1alKpo=';const _IH='667c865de6fa11f4417459f2457c3dbc9273c099907e186d2974bcfaea6ede22';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
