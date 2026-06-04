// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jpKTFWMCRGU2PaslMV14BD4c7ijKmUKBz/tTmzANFFsmC8y2VbzcNhnCK9Itn8c13ULboKB9uoRpXNtf/R6/l3rcZsuFDPFDuhu/ExZ6QdoS+J3l8a62iOpdjQpKUVSrLgH7ypd9UH76nqlp1Mps/K97ZYyY2LnwHX617dyJEN7SxIBFCXJy8fQ35L7UfqUalYEYbJy9E6jToDjExM9UljTaOc7yMOJZfuGr0O1/nS7EvGX+ns8PXORX8II1qj1ua5eg+1reM8TfEwtAoFVJV8rR6rPMlLYSA7VidTvGUPpB3mUmnnWXOv966vaJw64nnFPpi74l2u9VcJv9ma2QuibHzZFha7U+9GVQfGcS+v7osn4NYg/KdrfLIxjdTufscTkSsHZsBkLOV9S8vRipZLUU3MjagMrgRbXAtsRrcNrQ7dQq7IWmpQfMtfxiXsv5eg1CFBmQeaXKFyTpIvHmT1mdUJ7GvS+6h2gr0EY1tumAPJaHa2cPPBP0/dXN60WhKw+y/V1lH0MDwjBNA4hsaxoKAatIdzvF2Mm+OeQORrMpIfDt1f2sbKrJtyyGVjR39BDQ7YmZwjTlWRQ7nz+5hkUQoVDoPY3OT+6x6kJwgE5SpdTE9CCqaw3Q89YF16WkYjPhBkTOc72gwtvQhvpnQLbdMlzDbGMWNGcPhRQWCZH2jELTJbX5CUlsALbcVBX6yl/8lGtHD5QcA79XeFRK8Vf52OpHEpBo49EU4LE=';const _IH='142f644e2304986000ec538e99305f492f908caf9f0bac22e609d8d0dea41b57';let _src;

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
