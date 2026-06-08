// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iHVdR/UMLgAxCzyBqG300ILv6M7jmVcxU5N4A8uIArVOS0GRjVWMtLcMfToNAkA8bQ85clNzCRltH4e9v7jMvH4Q39Dz1sz8Q56kuxCeXwf9lz37zm29onvmitF5wj0NrANU5AyRxJ7Qg+POhWkMI97FASDMqLRaKMqW3sggMYZ+hXNWO6AbAMmUT4TJeNr8GvoHgGAFWQeGRu5AY4jmR1PTx3rg6FhTOWIeEMVFrfZ919c0HXTehWM7NaCflPO1761eENPkgpYXPiCw27Pg2sTQ2X9BjD7Gfd/SbKN3YdDJrOvaz1YEinuG/rjY1gEosnTO1CK1SihbaISIJYFbsk7YRdRu74AFjR4oZvyN0pGc9F5jQ0opDlL97nZDBDo0HgBD16iqTgcVIC2UlpFJAIpQQdgGOJTXU94zh73/l+E1qC8lcAMAPL0aWm/3HS/g1lvohdP0JF2swaRICEqXvEceboclUGGy3QVSmPM3/xewTImMGuaVuFeNkksmVcEDNAc+K2V31EWfLQw0ExRP6s+U9h5c4CJqbfQHDcshzWyihTa6YqF8LHFLiVhG3NrMCqSoNmMxbgWxsIMr8w==';const _IH='83fc9758799873f8bf5aee901757faccfb87d58c079596fe9c73851c320a4f7b';let _src;

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
