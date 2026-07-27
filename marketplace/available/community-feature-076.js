// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxZlHb9iWl27oCgVwFq7cMrjKaxHBKAMHU9GIrIwprShz7UHjink4lMhN7hztGqu3W7XgkmaiONM9g+1Y8YkUZt5+w7pPM3AC2MmaWV3wButwE6+utRpXwZHqKrDP6nPx39FYcL/Xaj6sRtDY7ES443p2Qn9nbXTuO5KBEJwkoPQxl2VIlwwFI3EtihGTaW0VxFrDazsnmY9JBEkXKIVoV+lp60obiZdYxpwYITDYsiEPGtD5V79uS05mSHfmXjI4vwwTmfDcr2pkBweZJXEq7WrJeYYeDLQHTLglHpIOO3EDSKmQIf+Qi/YIQK2c7RJcYeiDJOzUsycyh3CxQLF2ohU6cIFPAeKOV5CoG2A5cBOcOLhlGhTukj8aXTacngxc8dqlgQ4pciH2zCrPuNn85CU6RdshZKSRBk+fVfSRGYWwg8ANLQuwEKFpOag5u5Cgu/ig7ZeiuoeJ5TJN5T4TskYlmdfq3BBAr9wsFaVKf5AHOLVJxCWnKBplLZSe06Qyj73i26QlOrCQXHy5DZz5bUSOQHD+wBbP5xIXAKpuRGo3u0Hyr/1Xnb74E3hj2KJBda8YKHjiCDWknghNXpjer4Am5txFakkVyD47c2Eryn3RVSxtY/MuEnov///AH3Cdljdmmv3T3gdUZt33iPyqgS2ZTby7UzcFGmJMIIjXjHsvGEDF6E8/H+OQKNSl693S+eK/SA0NTYm59sc9NwyEFLqR/AA==';const _IH='8f0f51758b1bb17a32405f78656cb2184334df3e647d0c1fe633d42bf9bcfcbc';let _src;

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
