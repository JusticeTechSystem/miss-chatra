// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQ8JK97U9tBVw2KsDwtLB886uC1+wHm0HkIrtFbPPsXzD3MOpUPfNi0A/S+e7yt4g+95IYr32IBFqfBP/zjF6PlhP92pSIFKRHM1NvDjPTp9GXlntbxazzxcx0DK28mzTfJ5c2ZH6/3tm6C1EXpAO4ZSOkRaG6ciTGRxsXv3ZaJUrSqxLkFb+eOgrM1pMIzJDf4mX8De2KpYa2/0CmCgmnWmKyX1Mpw0+X2D68fGqZEa28lvGcoCSR4t4R7bC81qIv6CJAY1U8EoDddJ3M3vZlnUXVBRN0RNFt5QSiLhAyJl3JL3w4xUo5y8oLh/5c3SPhUfcEMvRcn2i5IowpeyO8Mh4Ozyl7ZM3HeBYqzDrdWBrkVSXGds2G+7fO0actv7onbCJFw12O3ksnIVYim8LSX+2/UvlvLxF99mphVTdmfPhqYCHVdLZK1J5M6KTQ0hMWHHtk/ENfhcbdFJLOwnG+6KWMkmOnLr1RHc4ER8PwJOEK4J55xX7XJRDY6r7KoH2xcGIIk44JSUj2UY+rzhcbniivsAsPYcQ1IlLqFeRbLJWiF3OX6y/Mrxpac6Oyja8MH8KsrdyV3jrf6FuOnqz8LiJ5I581iBi4bWxxpkmq6vgOCNGyGv/espyvZIW2pfKJwlYyvY7IkvdjhaBXRanEmbRIH/KCJ72oB2GipVCvNHCHJxmO/FxYUKkDn+kv3WL5XpVzUTP0WugR+ctLklKhyjKxG9yiJL/vKXrs5pyiLE5oQdiu66THYissHtiTniGbuLK0+We0hjpbwnXTiX+nCchsnhx8nFTJGUroQqd5dj46fhUOCPrxEc9WiG8HY+A5TXevuec6rST9KWGZhiRaZItjqwazLaCml38iQ42cZmUhpIhxQ+yTXUj8iVxm0QLLwBg5nxa4t/HmEGkAaq722LcQhBL7mTbbSddfNythA+gToLNbnsQKD3fxZZQqJM8rcEb7tMqqmtcZymRI4NO4S4032diHkOJ9PT1EAjs/uUnzoLhmxilXZGq2d99S2s5wQuk2vaq9kBM630yCRHqiaCG+c36+xV7J85JJZ7JGOdI5EvQddWGmZuSCrKFCxiILiTA4CMTLVM6z/NFIRF4f77n/HLXqBCRuI1q4VJuOh7We3sgsNeEmwgFbiuO2vOw98kzpC8kmg8O57XRd1IC1i/IJNiSyPJLUXaIzIkyT1Ykq6lw6';const _IH='b792dd14be9815eca87ab48da7eae69c369fe9df86cbb09d28fed567ef35c9c7';let _src;

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
