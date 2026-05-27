// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eD3itIG8Jrke5Bi0JHYmdQrkDhhrM/GCtPlZeUMedH9xkt9VvMaOjtXiNO7zsFtxF/xmgMCT+HptRTtGn11Dqz5D81iDUlD19muLiKub2/9hSGhV7IXODIRuoiNRzKKSt11zQCv7fK9z1XiMT7UHLdPQ9WOwdvPZe8J/IegOhq2iEsaB5kBBWsdi4N4UouhD8ZezpZeRYn/35Z6fq+V7BxSUzOxrwDa5IkcQgsNM9cb+we+d7JuibViOjZT+MekBTMTxhYcSeYuFvsGcsv4YX920nB2kfM04627ftw8HppWfYivtQbZJ6wtDyb0iJUV5Q/yIPfhbe1fqdrJBAjrA2grE1M0bduF4YmuWmEugz29H8wfKO3JIfn1hVRmQOvKcGmqE0I+wAAHAxBmVfi8ha58KO00hFcw9Fff9vEItBsCIAV4eRHWjRUh6xDl/Y9vcN33ngdMrkw/jaMkeB0OwZg28Tn42VYq17OsIXEezk+n9v9QVDKtAmICDYEHg0g/m66bmaVA00cLlkeQoF7y2R3Yl1YFsIwkD+301wnhy36IoAuhQlGaoc3xCGmh/u2MSAu1TzrwyZ3XT7oJSpQgeIOdZl95n4lSPw4ifdjGj/ANPzI8RiWJdMOrQm5MkaANZE8xYMhF8DSXZ5h+mnKuk6mz2Qz792HRsjQ==';const _IH='a51ce1d7e27207dcbc026be5333316e9afc0b45cee2e23fa5d09bb05e515773e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
