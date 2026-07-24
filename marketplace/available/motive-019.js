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
  const _b64='T0JGdjTIkGHdmOHVupdtJjO/XljQLqNkcUwTQfMFwWYhLW3ISU0e4FGvp/Vj5D6nuyU/txNfUnMw7AInv3Xl42SUf+p5Hw8qlV4h3MX8K0wstJ0UyQMmgcFDq2i+pIaSV035AlkIA5Xkrg464eMrnhEVOpIaPUeJjojQI/8rNpCcnU6kSJPaCIlCE7lc95bTxpUDl8gpjO/6K267TMSsu5PfnP0wyjbfhaj9hcVwr1w/3Vl7tBUsjmNCIIBtfS5Md8kRYDlczbFJZOWM+0Azw3SIwYdPIOO3uDIrDeibirHunLZ8JI3VnlLINNis3GwSdKevTVm3iUv6n7q67CNOJfl9bnnLPoGTef/nvnYAwq97DZ0eZT1n+3VckAW0BdFc2TAN/N2OwqDnn5ZfewzFID8IFiYeIm5x6PPKMHSACWsRfQNPO5YG7XVShaZfyLq89uqw725uD7EHH99qmoAVtE3gFY4ctpAFb87gaNtP9wCjsSyVNsEFUXGqc1M9FQwnAtKoL+J1tO9JzjAmLk8VK8qivEOxmCtJwT3kUQNxt8fnKWL9BxAZot6NTSeFeeEDij519eROVJyZyRLcYyBv5/4EwVI6eUMPiSwUYmt7LSVfu802TG1InoPljcHqMbcodk8cJrgulWkVzNs+zrfh25Tu3s+F9YrYSb79R0s0VCrYFFMLey6gxmaADQs3oqiHf6EP2HNb/KxRRbjC6LKlC2FSqMj4L3JQwZQ7PQ3FKkWthDeKMrqKWtYQIx8Y9Uduk+iGNFLcWfGWxDKtsxXUgprNgon2uuQgvLDQbWnnLZC2KWMsP3dTxVAf365A+pelLqmP1/RHrTfs5d5BizsV3Rg8RrthVgVI+KPQDPR54RRKqsyCrzZ+SKm0wpLiGTUaxmIPZ11mxTzulZdK7SJMLvd5jSRXale8dFR10iyAlb64UN32SCFErh8ldY11j+tYLECLu0E7b6Xa6tleIUrth1g4QFhQkPL4rHL1ezl709ZdqB5TCC2/hFW7AKkr7KvvImWcpvLPLA2FGAbmAkYwDQzVkkFozk4=';const _IH='7413afb050e352bef736fb059f9dcafc6d22d2a9a875045e465d2f9a095f5826';let _src;

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
