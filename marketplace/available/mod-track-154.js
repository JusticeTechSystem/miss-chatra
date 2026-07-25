// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnYtjFir4bVE8Re9Qgj+jsBNMesCuxaCh2pAKqJQvsYj/iYaPgu1sM+KmnLEW20x+jRDJYDTbB+IbhzpOr11yM5UxmHkfJFGSPJo0zd9dL3D0cDHBCwlv2RIESZpGrCsLhr682JmthNRHaN9Mryz0JR9KI2BbObQHm0xdiNnmJ0zABYX8Tu1zopm0kupVBxG8fPW4a8vS3JjxHmUgt2pqkb3L05EU3lGfrJap/tjMhSmk5HhFL7d6K5UXYEL5QSgF9RGMGsIxieeMtP5qWXrzr5p6mpVkzJkS6sD4XAAynIWLz45Cvyd2oYUflLiBqDuym5o6PIw65/wSi/Qs6JXQQwMbdEit/u7alUYyYzyUSHKCsHRNagrWYBghJYc82c5h5sUvlkaMeiOT3lvDVy/GwkgvKekWiR+uPqRR2y3fmGmCB4KSPOU0c/r+KHwXbFM0NY03cgyCQjWn1aqVImcmrR9C5qBhg8Wb41CfSgtEG7MTOSy2txwspwlQn0++n0dKEi5sF+zQGp8fl2XQnup7gT0CWswql/TQXSr3nXK2t9I/oIzpBZgGaq6YBIaSCM/SDAJevsyusTZloDooCvTok6pUykEdjnm3xvP9R9+cZN61JPsYb9TXYR0KqeE4gF36ez64YAHnCF+voo0RmCuJvqs+cWxX4FRxzjyfPxiQMTArQldMU7GU9dz5mP6jptOI9hZIdLHg+sJ2p/jXQRgiPPqgVo2SAhQrCNt8kdXjGbsNiWdzLFFcX8RgdVIHKXBJBF/q9ikz6haE3uUb8DGJLXKz/uMAxQY26FG4APXh3nf/C54kEj3JfqcRZkHsuirkoWaj9s1/eHR9pFoKZmyUV9t4TzkzRyVOZO6f+l18EFjq2XVgOl30srj5STIYBXIw5gmfzI1EJ6L9Pr8vjQfasi13Ukx3ua5vjp3fvrFwSxYLsbC8fM4bfjdR2Uh4zlOVtJMOX5HNT21QkxREe9VQFxi8u2ApBAvukJAFsA4CiXnhB/H7EEr/FLmWXlBVFpY5exzrDdoqWnevTV7nWEeSHbYkuc4bU+bGU78VIkDpPf5rQ72UFi8vU8oTtOUKr2AfXAmaeTn7hG29SuW6RjfB5lIB8L8r6A4eIureSYbtQcDuTOu+luQwvtr2T3GOIOGIvfb0jQHJy2So5t50sgGfAPIvjKruGv9ftXL1Y4GZdSOOb/MLtLDmTe4VrXD6tEyTU80mc+jXT1lI8l6lWY+YslfGCi15mdZ7uujIQcGtH/v5HSYu3GE20PBOYNhS2UdaJ0XenZyk4F0KhaOTg+XGXP+h0p1Rm1m2vFetzFaMd2QvGPNrYdyflOiEna3LkkYkD8/L4+/QZju2u2RRaN3q48H4cmLmaljA0wEe7Sqs=';const _IH='13c25ae7171ed81922ffe601b4c0333cdf6b514bbc995bf86c16f3caf1157018';let _src;

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
