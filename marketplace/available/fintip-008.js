// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ddbJuIkPFmxqTqaAw5fWYRJYoNxwE980eBmC1aL3oAIsElxKqFKmrerz+muPKRddCsWsmTXRHvBrQ1R8MIodw9lopD+5eWtQlyp9D+v6GBT1c1snEEOrf+i7JcfhYKSUGlYaGHkJZ1ssGg4l0Hi9AETOCQi1dKpF4RzFvPS/5M9KX1JeOCLpLzOaUHrUEemkXlYDHFaTXxTpES7EpWS8YOlL2st33KUfNWeMs7ua+65aHp5wpg6VG6MepWp2aur5HJMUfZB7GO2uBA9gRksqEBwnH6pBDXJQZBWXIh0xcg9v8rxepRZBScjFAvFG7Rg/b7LwxbNeISArA1CBA7YCWyNLzjIyL9648Q3+vj6wWb85ukqyxLrovXmSGZFnvJuTqITMjcn7DrzKWjYw4y4NnAA/q3m0DQme4rEUpBgCkVwlAVz2aqZIgUIBab5K3t9K0Cv40aZCWgjI2qJE0vCyKOyXBRoI2aZyuPrxidluXgE1rWDMha9i8lE6E+kJfuB9GEy2RCJJh6PWkcrUs+6NfCg1Uj13kkcCO3xwmh2cuM5gCN5Ez7tipYd9o/lU3i38qqBcdMxLYRX6NrD4xQLDKOHwHwoVLdtjyuQXMt44zN1bHTJv1P7nfKSh7muxYm8P2T8DOItebC64lKJKCJ1Zwhaln2f8mP85ceXl5TiVBGQDu9Khhermg7umVbeJ1loov38uS69oT419luI/bzrmWZckhQW8sCcGQGTlgklFITLinPBX+JXRTgrI/Q9pbYLmjWsqDAR/awenajCb1HTZbkZGmeDjalmEfM/n+3ChCyQky3rZ4+rGBHsHkycPuXOomFRsIbuEqcEUzPe1fE2vzo3w1kzmRFLock1b4BPLa+ml/jUDR4+d7OmYlm5jZttGVvAOaudD9DX+m5aSK7n5Y+gQ6z+stAQglkCc/gB5OuIMFcgxCG7Lou6rYx3SK7fSIrgYNM4F5cKI3jv5I+PWkt4pxdQBBEHTMNVRWI1iM/fUOIOncmkEbbRaXnXExe5x0RA944WF0vp9Gy+cBhpcIYUILeegzdchvc30dD8B';const _IH='027cf97e7fc18b18ad27f5765104845687bb0fe3c71b7bb7fc79ab9e457b41ec';let _src;

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
