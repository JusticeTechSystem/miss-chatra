// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/dZYjgRDaG58/0i/hMwM+j8s2hYDF9AixX3Bs5NlvKtqde1ZHWIuq0n4xDWAlTsZkBl0oj2+0a/BSq1D7VbXPeSXvPN6s7JHFgcVtIBwN0eUU6PmDY1ACe9ugzU2VlTEukYF06J6kvpC9bBrFkls5AmXYwCFUZsDlwzJqd7Gw/Leqd6MXsZB16CGRhvSyX+wSsAxoFHV6iRk2721rkIEuIZjLBF9kFk12KZyt8JG7M/yoHUspCvEWe4nyCkuJhEGIzCQi/Q/pS9CYQmlqnHzZ2ND1E873j9C+kH17K1IdrVwiihD3Dun+YCidA3F/X1eCsWswircUB13+boQCxLVypIYCxnhGdbKZJhOU9DLtAZVDOEwxPeVYyo3TCXM6sKe7yCgKwfbEXh3q55THJdu5hiA6DhVhLqTDboTWUdyGUUx0TEX9iGB3ytINgLj1IxOS8DddC5QXmW8JvYc/dHV9tEoMswo09MUl+5dri+tOfKeGgcRI4VmjBL6kTfr7G3HZUFm9YKgBJ2t6wfzJG7g5UBDoDqO0aea/MMjMP6cED24eGtCF9j2C61BbYjckTdx7aod560zBniS/NfALehT8IosUjYfVOZDnpjwJCC1dTQrX2jNrUH58HuDmGfQynbNX7Rrxh2d/JMPXGxuX0ZEqgtHOhiTD1uBNXVabnKJlt1b0KfLNl/QLAIsDcq4I79SAYbRBaB7NWWTazX0EWKjHQvnIsr3hPGnmbSGmBrJtnQRh4ZcRxQ==';const _IH='8c4e91d5bd0c57947c5d1a6ec4e73df41b61d840217b1ae995a25696370373eb';let _src;

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
