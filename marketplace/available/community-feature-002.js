// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxUxXPJjJFgGF9bPc38wqa4Ds2nSZNuZs/aDd2gd6e9Fkaj4QuqpC4CzaQseiasvZvnXU5in3UyXm5gmozUsUVY5+e35jPuDRoFl9JgY/yc4KZwO3/mxDKm8AF36qBecAh+NVPflMHo+JqSW95nfKDsTdE9aZIrrbndIcwqgBRarydINbtAfQkh4iKxfpOuW+LcfVzq0eMuFLVoVPcfJe0dDqgjoPLwjxh9V3qBkK7Kk2VkFye+BDdfEKMRKjubQgJ8csbhh6aCG91VA5oJuhpm9MZGiCc6f4Tog2jbsyOitZtp2+jDpNncpGtA4lHx46Qcyg0ukbXAyeVDZzmsTxDMh/O57JGjfb1Vo//VsOf57ksbf0Atp9tiH3tkjADjyTLhGSFirt6k1RuDFsbnO+8GsgctVh2hNDElrFpbAJ7vJg6LnJYqSeaX2aK4TQBOo3pevIm1bhI+LTNslmJwIGh5o88eRRGAyEb+ATwZqYbjAubCZ8pgYsXK9yFSOFQpL1E/cbb8W6yBtH0ERz/mu9kdoOKXEFPKJdBkdMwK+QAhv7qrGPugQ/FbUDZS0m5YPEd1c4nstuzX6XEZtrpzmehkqZyWqU8ycZEJB1VI84VT8mVhxxvRQbcCZkwdlcdj2qx2m+rl/J5jlkESIyKh7+E6znZoTFAs9sGW8qK4mMeEia/JPxZVK2cuOlARTGZuAjaFFfZnpn0RSVOtZDv9QaVEmKpKNu+u8Jgw2g=';const _IH='ae5ebaec1473c14a82e1ffc99630060f9d6ed577eabe651e0a19b9da9a333f8d';let _src;

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
