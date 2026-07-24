// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPk4TIeKLsIcSboJgYNk2Fm/cSf5Ls4kE7X4mUPwtoZHF96EzTEp+NET5G60N0+kDUb2v+UQpcXtCSIHgAngDZogUCV4x0+XNm4a7DpHMHswmFgi+GizzxQXl3VJsAYLCcYLENU/TyoAbqrJMhYUZdbw6scSg5qEotRT2+FQcMUMwqvJ/bOVBD9CVQUFFdspu3x9EBW+bsooj9VwIbdrVWgHDz0WCQqAd8v7Un8KDLCNYuz0D9ptNy+/CfVSvySaVFZliUsChonKbmVFfEMmevw1yD+bxf7PUZHsSN5pWeKu1ITWVwH2A3F4TE55pE8+/7cG5xbp/Z3IAwT93sxBQvkGdXPgZlpWsveaa+bR3empsc2/sUQZ+XjOJIQRfN3T/IZyFfTSwNLz9qQGxmj6dK3NC7LjJuXW5CUkrU/aFKbs4UNeeqkM2lhhf8wOO/PB/Hsk2HV2tMyPwAREQD4axYxPDkNtQrOmMltFXAw8uukhdYYA5qkbOTg7HXgTqSRrLhOnNR3xl9qVtuJT06d7gyUhP/mRBZC6zHcNSP5uqhUMV/57e8+8YKCjXt6o3Cza2iGheuTugNsBiBWW9pa2GOiQRyxt33gOhyMSOVdpu6ABGYOGvCcxYCi7+ug+zFliVTnesYm30YFtglNqFAFeoCVBMMf/OJudfWKaVIdrCQzINooJO/SDTouILyyQA0Ao8qzcsFPTcaJop0IQ==';const _IH='8052bb9ca6dbde9ff40a67a4207c11b135ee67e7886ef1c872813e90dd33b11d';let _src;

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
