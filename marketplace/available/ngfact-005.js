// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCK27VxVFq6O39gvH4xw2l9xPBQFhvkaW/8iadkzz0cD4eT8+WgB3BCoyy0bqwq8oYQVZ/ayK/GQQhIb0/Nlkg1Gv524dkBL1jcP3krEyb86gYeAC/S/K7JkRXg9+yN1twtISbqVf3cltBCYB9OaoA3bNL/4vqw0yi0frVDvXJLDdePsaAJVqMOWY/a+sOaWojRBnVR8x93iyhDpu7Kud7iBX7/b2Ci25X0FH+jg1ohNx8nlBgFyRK3lgySG843Gw+jbeqgxUpJfGXOJ9OaiStmP42pXSJBCurGehcGumOUxKMj3H/0etXGGTsyCU3k1453HmDQklbJV7JXcYCExf9ZJVM1iE9KjQ7lxow4H2QM4m9W5UqC7Hz3wU0U2M1qK6JX235kHP6fFpK4fqOvYDi1UMY4umpHFW5RVFUUST1o9aD2OOLkNSRAdHpYj5FPJWtnRF6PiqJ5PBvhQd2N4oaqxPqyLuMko8si3a1dCR0V4mDg6jZE7pm7F7wAnSk0Ntkthj98L1GhoRGP1wihK7ltn6fhhDkFzh9ykFAmWSPaLj8dIHFS0A8dYQIVoEn6KmM3PwJArZi9lerR1DmMLEs8fLaKy3FfKYmwWEoaoho02kpnd5IMpByM8bBLUvx5nqKDFmmSuc3FXaC+ic65ZdvaOaLAAb0yo0pECVPydGYQI87R0JSOXQ8hMvrbCM5Fw==';const _IH='f991dcf6b739d62205089497c751859cd57512840eeb68c47b24c461eebdf3c5';let _src;

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
