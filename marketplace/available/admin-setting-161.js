// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhonvR4PdQr5d6Di7K+ST82jJS0FKQ8EGuHcr9lj/OKyzrYRJXtztSpkt2wYdMzLbQiYJadqY2UbWCsEwUEPMyiGqAZIVKvW3e6Hqb2jW1yefdNu/2NK3eHahC6oQyPbJCh1rNRtv/OXrhCsle7lgSsxuc0eEk8RkQYk8wnFtY2ISX6gkRnGcWWeq4PWxPGYciDM3TlMmz0vw3IIlCeM9zqIwSwiRn1WRCuwuLSPoCq1oYjdtRox5hDtUZ2cVay+r6PKZff7dDv2Us/u6JyxRj1WPDp2RKVn6ynoxclmFKO3Yb1RCiVmV/7xM7UjivK3GyGzxNcC+brzDMTZsPN25GI1kLqh4Wz5BhOY3kernh/PCLWbpV0NAu2lmq7WXL3H9eCv2oHNqAntpo3ErkX+ZjW9qrt98YdNXzM01gOS47auMy86Sms+hkpqoacbWqmq4hCzKz1PntjkORQcfRafJgUquhMuwtLEPtj2x/Da1QKtoJ0rYFz+m7A8z4wLGdtWrN2VdHQM8MSbgp0yc4aX+J9dtTLwXcUPc85I5Vq4dzHjsDu03oUlk8mR9I2HNllgENM3+E/6jurL2jottTCSZfTfH8vsec0SoPWXZfdzEQr0nTI5ZRDFuk2OTg0XEDzEEokAxRXe+5kD+4I885ldsIgWxXDhncJuzq5fkyJd09shqL/A3uF2qk/3aYOiQAiC0XLnG+QU+CR9DSVvCsI/tYfU6a7pw0hV7O8LJFzRzsm2ZibbsolQQ9uwz+UBCysZwMK1hMrl/IhZMaF/s3uXo9KUZIoxbOj9YqY6wrgwOv9iwYfX1Z/GxbuUz8uCM/VDH/8lWm0IpYSmI4lAjfZEZrGmCU2zrnRyA0sn4XT6NgbJLIGPHfeAKOgbq9Z9B8eE7x+DRzcJdbFgp+ZwSHmtrPzlwwh2V946o0ZwYU5m1lBZdFh6FP/6E4It9VLRx0X/IQ8zwF63AuJ0UrAFuA5o5SLtDfs9vEQFcQsED065sw/dVhpJplGCCfWWQxY0iBnA3aBWpLzBE6WQ==';const _IH='12ce2b896b3f5f1a11243d2b2703b3a1c56722f1915464d47c8f946d9c0532ca';let _src;

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
