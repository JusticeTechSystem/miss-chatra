// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6u3nOPq+B0VaI7qz+ulKO6PZA+Ete+pYNRYopgFfyN+MjzKWUrdxp/Z6PBgCHeZb27ghNFQg99Ky/WADIcqDJZJ05AIKsdzjU2xKoKu1+xvGkcnjcRXxJyO6k8jPreVPCNNsuWIbzrEB/jEmGjuuceQZRll9z7shvB5ziHOGJ4dstHHNs5/Gld4TikTynY92FVDf5GYO8XQf/eFp7dMlaBxFcI4jfkq4bJzLHDE06QDOeQD/XuPMKwYHoZ735EuEln18Z5Nqjno0PTtjza5WAgD/KCB/mCpD/ieuG1YWpbZocjHkDWEPkfD1vW7N57gI51rQt6WYwQFcslWWv/fWQCl5cA7BG8yI//DMkhq1MwmLsl1MqCoQ5na5GUuhUtvhJynmjrIH98gJbIDOp7WDL/GNAFx7ZNjg2NVuTD1lclRU0IRme9QRx82OFTLAUuK9vOIyeA6Ng7TDJWOfidgRgvx+E4NRW99GCSBTWlQeAXkI2kqbpb5wfRx5Xcs/eOYJLmUkavraXtebZGpxozw3mHCaqxbuyhMm8nIlQ4jMps8I0bT6xFaNEk8M1PxMSVsxHhOgrxkSP/u3HWBvFpX6q/HUxkHSG/wUd9+ZKvtFrSxgcY7Y6O4VWvsK3f7zK3wAfR9ojzQ94SaaAUxH28iAm6PO6fXMfLeJrGHKvPrGow3CbkB2xzWTin94wjS5+5nny3WhlemsA3+hOSyu9aL2FCKPmVPtBS1RvmZMkGVXRFOWICkVFP0Pa2VGZfpBmtvn6VjH8d/xSCQANMUinWv3M3+V8X27PNvnQhyNi3S+VpkmwLmlYueqYtOXcCIFKlZkmJvuVfYHpJkrf4g73XC3I+a5e00mspTd9n2iHKXERHVtAuOlTdFDBBr/k9WM4a95o5ZSIT0w1tKk2gd515IvXgnLhDqQZs0zJtgoBix5uNb3TXcrxLiOwFFk79jsUz+r13huRhUOWogNFb6liq3FVhZOACXLdUrruocNUqzTFo7Ebp7Stk8IKb+qPiXfk+xMwfrTkqrTQuQ7EhF9JWCpeR6nktjjrPjjdF/M6YPYp6Nqq857mVh9OqVS/MC56b8nTMl/q9TwMaxyqqPpXkKL6RAYQ97Stog4xpIXTuPaJ+lX03qFxqkHJbnKCtkiuSfksk0lfIYLvlDLELEPzLQjMplhn01lqUdSgdzHRbvZccPhNGBxM72xLEeDjZVHXtNDZBHJ4te7hT++Ne3qfVHIoG+6QpFulqkk4aJvu4aXOAuw4UdopqwRA+M3qzf6DqxpTR9yFjVWeMvgHIPUPoOBglmFfXJrWmhoLsINivR6sfRamTLqWH5EN0kJ5agilz2U3c4UPakl1oXDNBdzDK6M1SV+gk5wO8IFwQ6vI+WOg==';const _IH='889376a69d0cec4efce655a02d586801bd14f36f72ebacba59aebe3c27910a68';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
