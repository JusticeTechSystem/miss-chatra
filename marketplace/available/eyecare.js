// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCrHMW+gEuDcv65qy9jFlOgFiW6MadQ3rTWpJGGAqVFJMTkQPKR+Kv3arvKl5vsTHTGPJ7rETaDSRGd7BEdeuP5zfD3yDBtG2KOoMU0sl/myZCqHd0Obu76JUWyAVLDEBX6bsFRgZweU3b7/ACc9jMS9iYa1J9c/MsAcOHWwEVKMlSHKml29OeAaF3EkF8IKa6SGwr8i0gZ5OLp3cRnvWTVSJplsWIuoxLryot/tCdotiaLu7dPC22dYyCikmIrKElTlUE+b7DBJ58r19hAPj1pP4MBcLQYJoTN2kZOdVLMRrclhK5NrgwynS+IMBnuzmXJB9tzZ289Pagw6tpfvPQ/loV+a7f4k9LVF19rOrJMxSmMSsAO8xyMihsh9ixtrtf/PY5jtBLR1jUi8lRMNr8FslLenMQE41RnPWXruSJP9oU9X4+MWRbYuRA1Gk5mrXx0b6Uhw5+4/Jm9e0H7whwdMpjQzL3y/BZwyXJPNwuFdvrxo5i6SgFvZCkkqtqcZS/vfRfbHGVf/4LUbJnBymfTm/nhKL+LfEN1kyOgQbtIsN/BjmHl5YRw2wfp1viN+pl9gOUPAFCp/dWUtvmgQ720ljrwXHuF9aYxmjQxdqgz3sfX2L476om5/wk4R0ZdPtDDp/16XrFqebYw/JzZX4bkcB/F1gLN2rkiANA4kRwNVJAgwzgiM2weYUDOL3WzkyRyOyix+7DlBov5/KTB55wD20uj+gMoIzpGbnbolXprKrtD9njD5Gv+0EgMwIaiP28oFAHrXfmdWkZBIrMb6KMyEK8WtEHZThTZFNcAI2Bkt646OLIizFrYAkmcY28Ogv7u7PbtKXWTxUyBKBv+50rb8KvouqKAC7QlOKfEXgv/wz4RHjNw2hjGzpXEFgStKthWQpIuLx8h91pmcSUS+XoBrUjkNRS1mZlAAb9pCBwgX2BGCRWCm9GmDY2wYLjYfNw2udJfaTev+jLUePR8cUXCZoifYTMjGhhci89qAk3PtVrBwOAcu7X4d0RReWJpsbV2ICO8ZyF/+9PBJwjVth/G3Q2ltN6piW4polX++RMFANok6b96nLWZWPHyB1Yha36yXX1pnH4NcX9sLaFeGGH0LkzIBdopZCyYc2exId8nwteRr36Ayrjd+nkRaMT+0iY3QmVL1q5mItmAuYl31V7GKZSovZOyiPMhY9AVw8QGx49jyiWSniIrILBpA==';const _IH='29d5531a1bd9dd94886b5888200b77a1a515aff86fdc675bbc25f850fc8f6033';let _src;

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
