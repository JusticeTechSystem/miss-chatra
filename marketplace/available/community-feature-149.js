// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7NUeIC5597vkIg9NIPCenk18PZ4GHQPCi92S2A2/CjyxAFYjgD6ij/DZuwzyeBbXidZZL3QOjnT2C30bamCB7i8GfeFHOpY2H1t9hu4Zn6Lc+QSIq+9Hvda8RN9i/bh61MX9J8swP8FEgaALGIUvwRD4ezvJ5ElULgLuTFrU/6/phPOYm6EPHYS1Str6bUKZLh7L4DEjG5KIkHPmSzEjy0za/Sb2hgeruP/bXZ9ix5hfbObZk2M1akSGB1HfWd5B/FuUjD28zZHqmWXOGYDGfXxA9vXADp3A7vxNeCOtDx8U990m62Kric0sdZXPquyopNt4f5anifhcz3lWf43wkLuSSPnkCv48QwiyK9pEAUyeq/vVqzjWaYmCsXhazKfmaNnZ5BIfoHy72iAow5DLug6d/rgxnOrVzbONe19DWVe8TzpcuqLkcpHvk6GWyrJf8De1mA7CxCnhpFFiju/ACIb5s7slCE7HzGA9nEoLc106bkpcpNj/V+yhNG5l10tgXDb7764K//95aF/YqGb2Z11YyL+8fvaen0KFjKFsQUUKoII+LUx6An4CxT5CyV4K5Ye9iXv5B3Fk0z1jnGMQ8Ya/wq0cl9wfLDBK61dBjvoHPANoIZiCa+sF0tRgBHVZTvYl1GUvWolERQYHCv7Hfgqq3W9bb0du7pdPZB8Fxrs2GSEIY5DFcfy/v2btGSNdXtPB3Q08Tcd0Mi8blj/IB42G6cW83OLjR8NU6F1dZNEpGPTYn38=';const _IH='59105b12110a6397674315421c8670b81b69720db9ae999d71b1c20e58442a1c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
