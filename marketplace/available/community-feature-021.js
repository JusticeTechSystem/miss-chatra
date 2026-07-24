// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfySEl3qHLmMnxMqKEDoCl1r4v5kY0mVOSwyw5Jqijm/2A25h3FJCmPersYP/g4E9b0F5xTIt7xRK+gqgMxZrkA3fV807+4LLJgBq8v8YPLKoRltGSZ916cZfUC58vG0U1uAJDBXKQ6Vq4iI/2tGaHHU5gi5ilc0rVIlky0a4HShCzW/VXj+kLBrNfFMPtAZPwzmLGNKpdzA39gy76HtDrPxFijsahzcSGyM+I1MDU/g+C9VbOBoysttDhWLhmDDm8E70XLiEj6gU3i/WXfOoKHUufQxnvtpHkSMM708G7TgtyXByilvI6A8RUqn3BFdm8ZC/FIDaeJ3cQQfH2iSEgEn8t6dLZxaSRGuuV1lIx50R2StEXyG67dAfZ4MdjkV4ecLBfm7UhDTf8bONr/e6rfRg8ePW2QNw2JbacjvbpdGzwvy3Rgftku5i2TA2yKKwBfpoN0D54d/ljfLSG9deExBPIt99gn7+FEYwP1L3ekfFeVE99jqp0AnXUyinV9xIO4RNjQyTpw9lpQj1VIeZGX+LeYO/8H9DanAnTwZRMTc5uPRrvTAUoWjJNEPpv0qwMTnxeu/R+oQ/Vpq3JCd49UGUMZDOjITHJSkEmWnV+dIrggXpW5DvuE1vzOYriv9UPckdZorOxpQa4l1n2YQWhVatLe3LjYzeiEGNg9kjUvBAxTzFwI759in9p0f9pLdvgRh+RTY2+42DVdSilCjKa9lV/HA==';const _IH='6a603129fc92ca92be7f01f1a20f03e8b5b5056e4bbf4f00f3b71a8aa9cce23d';let _src;

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
