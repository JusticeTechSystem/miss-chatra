// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAILhn/w66qFCUlerIs87/n6gCuluR2CHShK1vRAvsIT7npqyQCc0j94KwT476HuVzRmg5bYIk6chxj753LlsKr5Kg2o6p03TfcbwX/uu+OY48WV2Qtk+zxNjxG/KXlV+3iFKvsACt6Y/1k3TQSCqVJjunBxioHAHFBsyXAuDtFc9QcQmVipRgrFZ37Egrk1LDRjUt4Z67vQSQFCYsSA5Wv9QSl0Zd9KL1Nig3q77aTHEvwNFesiBNHPNBjhWdyhZgF9fqW75GZU89IppS8j7TgfqYLFQXNDTUn4mOCg/Xn1tSvACkOaT3EJOJbDVwGunzpGidH/BuQAcF5u0jTB0zULKsZuQGAUs+846VijtX7sPYiD8MytFyH/WO8bEsE59pff5GnRSlxc8h1sPu/OQxhsQeuuCbTGer99A5GmiMXHgfV3MJGfZqdGZzt8fQ+CAXpqGsIxF6l7WDyVOBIIZJ+WfdWYABCWwNlfGYQvY/qol9pxyOueXpIuzo2RkusE8aGvw57npZaKS/h8TN3PgIH2qKpI6ZwphC2kOgOZEC+LfsWoc/6D8BYKbGSE0sZJH2TR+BPOh0lxJcdPEQC9mDwYmDF0xHnEL55EBDj7/oq990U5R54zpSJxOcnY8l8SMrSg3iJpLOXrBEGDlMo12UnvZSt4WIes3jhFtJmZt4Eu9sCrqqmq2nwSFDn84l4DnKhHaDBnMwy3MhfNt2V74iD8bF24hILJq6dERu7tL2aPu70xpWSM2vbPSf8gjWQ6epYD6CJX6S6lD306xw8BeVzhpahVWnZqGP8HKwEkR/Q3Tix+zAPh4IZvnu3lL9TjDUcIWkpI2OY18oV1KZnF34reQ9hXmhSqBoM6BbaA2iAdVXXMt2t2J8f4D7YxvNZHqkwdHC85m0g05yLvIXyuzauFVCPjmmvYzxRaZpQBR4bIlFSkqqtdYcxtlOKsm4dVrgBNWK+IUkBp7xpaoi1ZiDc0aVvL2fVNtsCPPmHvISiAku+vt4pKKM3cGMpqzD0F2tUFtNQKcaAKaOr0eOQHASpWVLJUewMjowBi90vC3t8+Gi9TNB/OI5bdCfIh0ml0+nT2w/cZi2eU5IpQB8c+Q3W/D3XZ7O+Kj0PMo8NXuawTr2ceWFKSEiduuIh5ZIlqhH3Ud5AEsadAlppS6+6frgymrZ2HzjgbOuaox6W5flBChfHxdlFD0J7IBbGeMLmeQIJ6hN9eiz5S6MtaoxxHujubKEBooVV9kLDBEWp3JEQmiDZuwqQ8TCxOIQUseQY10rRbGATfVSmj7uOrE+fpuyW4YkHTvIZCMlKfZRwnhb0zc7R4T/S8cvj6bBrLfZ4ziVB3NC/gNMArTzPXFXnHcEgNOr2BzlgCYqlJxYNTs=';const _IH='273fde0b034fb2b635e0aed3589a914f67b6278d0f6a4f3a4cb8425ded9b087d';let _src;

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
