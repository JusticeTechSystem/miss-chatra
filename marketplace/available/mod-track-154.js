// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WYEfJKI6p0qnY17sKQFUamOO3p1L5Z1IbWNfQsAoDc2WoymoldU1fOndbZBpsKCQqAhel+u9z3TNiiANRdaG5zYALANEZMiEbBMGJWk/A5vcWLlepXaQDLHL9/Mt3HdS3cFQS7n0hfQW3769f6i2TH77zLIIyp6Z0qCmxwCyapuY1bMLtN4zAayOZXVMHs45EB2r/3YXjfW7Q9CMJ5q1m0f/eJmuI//wTx9qE2DhE2GninUEB8Pl7+J/bqmFglDcU6aOJRznHWkGLcVgtytr0+BWAYlYnAguvwvIK/OkrKA1hTrM9UEsawEwfdxfkz6/DDZ7Yq9FgbI2FBeM+2VIS+K0IK2I6ZlLgfYU8tHmswps46jPJccf7ynN5HxKMcXgTl0rGSrKlaxCEX5NXyz3+LS2MROtr4/gPuD9wKt1plzH88g1KZd5E2iEu/SzrAw3ZXThuhJe4PCkmRmXG4kjlgVrxWWQXuuEYNp64GnjoMHIzEtJe4uTXlY3RfpGBMDi1PjFs4a/zsZZXycXow1ZNQR2TA+u1WE7v6byq2dg7u1n3/POgYjgGo3LJ8UZQqEYPnFVZSS/6w/Keis6PIHlmkCZvlv/4KvKqsXdEl+U+qqMNxdyHOtb4aoOM/+X6lngOco/t22bpAnH0zz1179CE9/Yk991IY4YSgeD7lRCogXNpTrxQhTsPxy4VUore2CBfXkvIaUexQfgAJyMu4hMTvokxvt/k+Fhc/lD3ett4idozUFfQuKn9kVIzgF0M/7FXbLv+YROFL/jqB2lBv20WBWcZXKQqa0ox5i8WmY8k4gC8+Hs8/nq6EcRyJaaxs2H8n9HA1u+E79gpurZIfodSLEjZVErIbaUsbv/1xmfTWd4oDj4uSsgtN6zm1dkeSXPSK3wLwQyVbegzZxtKhTmXIj70ytdPdOey4P5dhxlT+3WeY1/yJH9lUXm1fSFrr9hk4Qhsy4Qbch9rjUiMyTXmrO1v7RdQI7YlCrEjzHVXmFkkzcgoOS4Cjx7BTm0RZuhrTfpLa4gjdvCRQbsd6iaYO3Ezdqq6cZidPF3AbfkgjZT94vvpA0wBX5dRBNxxQPdn7u1IdntQ/bb8OgyFRXm+oSFp3oAVdfZrKeA7RbAWe9vWdJCh1acJv1twSCRTlKSOcEZBqxJBKDNT1JNuoF51WSDRWOBkS5UdftoD9KA6BldeDK8OyMe67xoFbj7Nn49quF8nrIdj6FnmAgCCVFcoLohNq2wHfXcr51tWoJyeBxNGUppd+UrrkytshjNlj7C0TqqQup94Gl1BDJM/R1bLBygxXiXVTK0W1/pjvprBRWl4w0R9u6nofXfZYQYr9KoXnelGdDRoxqkpSYdZWsfhELzxVM4XKYPMsJPiSKB';const _IH='57ef11e6d82e4ca513edc11872f734682a780a02e1630b15c310fe3547120bdd';let _src;

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
