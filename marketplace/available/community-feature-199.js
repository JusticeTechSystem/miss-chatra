// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fQSFigWaMRh5c639VEGBD+sMqzsEjjWiF0uVJ+EgjJW2gQcA6+v7AeVOpXuYyqwQZ674Bw4tcAhMjtRkgrKSURNjKi5xnpztFyeUphg2n/wltiKqdQzn3ROrgfJ/qWhz0S4LUGHpAey4+R8l8MTyCNDMVouEG46gb+Y5UOh22NBpb91jqHnPo2lIrfTSwe98wAy1LRgBEMSwYVSD2O3WuENOMrVFR8BbwrlLvhN+uy69Lg+Pt7W8GECfpcaJt5W6aMyXm2xDX095+xHg2dro5ffaaPqKouGQ+CpV237NeyQkReuwuXEpyDHBvIPud3/NMecufKXmW29Fitz5yQmMq+pJhNTPHUQ8w1QVec4ze9C/TLSy/OSkcWVBAoY2uSCC9MZctOg/tx+kX1OZbVvg49ZETl8lxTWXaWy/NC3J0iC77+9Zl/DdT/UvlZBOuH5pZXgEHXQEl39Xt67hLYj9iTDh06ZJ3vJRyZE95gG4+J2PetX8QeeuTznX/KaT9u26X0/4yemYLo6NEV6wci+Oce3LJD1dBZk3Ekw/GyJHw3jG2+kOCQHgBvXBVaLcNwIw/Br15cMXJdO6fAg/JFuhoS0MBvjw0N4PbBjFxXSeioiTpWMn8Vj9q66lk9wKSqArN+1sdmyn5ItwOjj2SBS3+0jTYx1b87DPeciLgz3qdL0FBYh25V9odTOvNwXqcUpPNBPUKg9+8lfr4y2jUp8pmgYAwqqyIoecB5iOQLRUwbvXP8sSb90=';const _IH='d46fd9debfa5ca78b7307bfce693f1fc7e4b7d80d3b7c4667267af4954dcb858';let _src;

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
