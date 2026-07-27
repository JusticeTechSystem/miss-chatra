// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRc3/W17hjY6PV7bJEkf1vNFSnuJervC+H8t26Iwd8mULziOB93t1dlc2zMzFT10N5hv/YQuDjpVBqaVYUj7OgiwYgISKqXiKJjC2MUGD59nCY/dZDZx3VoKIPFmkRYbqKT0+KWjTvO5coN9pCc7B8yKLH+Jpfbel9eOkwlSuwjXE8HVNVYP9aZzA8OJlzwdjpUnKFZdWk7TpoublA9gS0t7pW7udwLx8Xt4Mer72BmrSj6TSfN2PNTdKt63qkhxoputEr8OyoMsKPX36HV0mvTowcq7W/d+fh1Ld60EJ+AETDS95n57pWa2qIB4zBRZUbj/TS9MMV/I1+WnMDPHGgK+ueWg1ZKKfur+mzublq8CDhCHKIYP+nVF767zB+H1vuZZ7gSBBkOvJQGgYlCJeajCX2zMhTAroY3pAXeGciqSWUrmZ+ry1oCd6aCnd7gKKM4PFfZrEoYeGsnR/blQV5UpKi2Px7OxfhYyXV2E8wFB3LgP2lUg6dNo+Ob2MtRMDjW3NgaobA6RhhYTdoOLoX/lNy10+zn3GdbA854sX1HVN3I48iUHYnkc2XIucMgL4nuQFqh57mPbz9UiwmobOvy9x216rZL4MhWexY5xtaFBos+HqAV6ePLSFr9283ubMwPnHagOpPztE0twleZAN4fLUptZvtlMvukRrxCzN6ARnkHqEcaxtDgqaDeaE5ztV/kqh7O+e+BVy43ViYSKOO6VWgMU8q4sHgx';const _IH='cc471c87602fe773f4f812f810c4ef3e22426226b3211927a2dd02ad85a29d6b';let _src;

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
