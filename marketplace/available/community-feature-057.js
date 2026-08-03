// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5IJYZnsXsCLn8TTHSPABy2fyMEjO+RpgMkSKDxl/KdDsOTh98B9A6ZKFypcmHlYRWR6VTF3CZRbn5l5/JvNPHzP7QqgUyF61AFuxktF8pI3mBxAlLxeotX4dqLqNE73+bgc4+wsIHuQp6wXTUmm5PFTl3BwKHFxowzuzSsmyogwwvwHdu1In/AFrRP3C7ePQzPpUSe+ajI2jjuLqTozWJVg0ryvz+oAe43neriWEAM5SDNbr60+v4Zlck6hIzkMRdqduYJYbpoFrYEBpcBIGS2V0hyPbCxyvr57oCw2M5yAjrgR8MMNuF/GXtG1kKPakz0bo0a/K5tiIO01EiK+y7ALOsd7Ajv1wH8vKrI2rxuN+G9YUjU+YeMNv+mLIaSbfFKzqWZLQ2pLjjyXuS0F/VBeD30L+UoRF8tn1/LJpKzcRJGs9rm26RLP4MGq/VHZvDd/2Z6QiNaBSaVOYMw6aAdJ5E1K3fmRGPfKB6cCDL2Ixy9kT3m9gEH/PkYtavbb9h4Q0Eq1/4Wk6tnTfYX6yKDTWp+N8wGJTui940ysD7u5co3GbxgQYuBWvEPkYZOuUIGsYrTYwPNU7WBSNN70z6gL1CNYuLBwJevcVdFzfwaue3lcMXJ45p9xxr5CtS04iKWrhlEOoOdxSoBh4YI86od3v5/8oboDo7kUsDI828tHN770p1OFThD0oaL7myM15fYmXOS9M7TtrVjNTDtaEcf7+Ph95OhMU7PVA=';const _IH='7245b236b488797ab5fc248ad6907ea8497de5fee630b97d7a8b5b06158abff6';let _src;

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
