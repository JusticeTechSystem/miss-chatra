// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gM25r96CbcISXMqSqyFDOtxsBg65M3toYekPP1Ky7SBYafKtrwksZS+3WT1ae5BpZ7e3tG4R4qf8PLFZm3mT+dGOKOfimLzpkb+isK7KmAvMFADidVc0jCx38HA25jWvBdjhrhB2+A/jRVNVdnlvbLysWVldIPV4J6RAGOApKgFQkOw9ZDpHroGJ7RlHCF03Sbz3L5m6k0wzPURLUJcnTshU7cM4fDzfvKEhg5fq01khh3Wc23P2QbPXdRz0/bA2BfGAayuXq8dSw0Mb+ZQ/MGr+WSbgCkIHYOiEqcoSqbyj7AG36BmyYmBso+znIrDvSdY2tc1t+IOdGMEuHHMVW/1lBiXugynq9snjmw7z3FL+hMhxBsQVzMNSHj5Ctn23BE7oeETnuvoPiuL0R5gHvyTXMwCyoAfYrh7FqWKA4jjrxP4y+Y0V9gSG4+wKSszNk6blopcqpBY5OtP0zWrrtMC+SXfGBc4fEVv5HsiuLXNeUtIGdJmQr5EMDCle9LrnCIxJe50Gir54WG/8NV6HqCafYJOZgme+wBvqTSLNMZVOpTaC5x832/xKfpb1s2HGIty7YT8TZAciso8OzywN5MnWBVThwYyEndqvas0JIT4xsZztCxqQrvTNF5efY9t6cpZvKNA1IcMEg3qes48ccvokVEyDnvBUqNmtyYLFwKtRVTMfHOt5MGNmN0DJE14UYY9A8tsLaDmytkUSMhYEz4homyjmFcTqwPNyaJ7whLbIIwbcwS2sbSN1wpLBeMkQVYbu/c2v87rRs1JI0ifD7Y/Hhkq9HZBsCQLyx72ybM3XYENzhtCjr542z7xacFgUzVvfek80TZpBWfsm6InXGcYJ+Mzqd9NSVUAY9x3IzZpx/izq6PEqhQP2wwSuTkUmvpeEMJJWqgxVbS4KjyQVV+v4cBt0NDpVyOThOexiuviPF3z5/tZz4DPK2EUIDxnEX67sOUBvGplK9+i2kE6pyNUvwVqjclU2EuxEkRX5jhe6MPYkjdo6/eLdJQ4IL32Yi0URGM3tFTSYpRaNUXuXmUOmLO9eriQTkfWiD05g';const _IH='b8985abea5c1004404017ff7ec25c8c449337adc8657953fbcd4d2edd1ab40ba';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
