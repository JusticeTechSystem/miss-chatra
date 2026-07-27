// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+CbMech9fJVzG7PNnYN9CEgcS096AeA/DcS0DIEdlTywXvX8smRg8P7cYeyziPgqRi0rV0HlA9CnnWDHIhSrl1QvIkPF6xnqF7FsMeP92GTKhZgQrS1MInWosImMJy9YvcUVjvO/UadBvfJlNhzKBF//0kW6gOg9oMkbRWgQqg665JFYPb/pzK21cNbmo+ZgEJiElE0NiBbKEECv43pRgZzPgyGlcyhZuATgU/Yg9hyIjxP87fYCNvSgqEGfeUKfqkU5JuKPABU3f2bPYStZaH/7Kp8JaqZji4Aa93UWgOWBY4ttZwzN78wg/5drAk6/LT+FE2FB+/JsUhNMgrWrdKABH0A6gSDtD/1pIXNokakoVyYd8g9BPn39gI8UNSIW4Vg7qDf1Bw3blwOVocOUIoPYCJ7u3ZSiZ8WBxHxvxqTcoW6+8iAuLy3R16UUbP3ohS6QsKXXUSr2lAZBrSLRcf4hBK4yk90fSKg7NGTQ7pU/GiVBkfCE2N4XEVGCpwRDsw5IakSpAHJOdBKu3H3ZL/bm38B4CXGeDs/Iv9+RDDsCp1O5/XZ/bvHv1R15YJT0cMa4FC3ntj+gEeCScW4+dj7T0KNG491jjsZuEe1epa70wAFWuAMc5YOmXrHf7ooJ+Y585k/S0WEqoENntjkbx8MA+b/UqkhXhton/Z0XbX9lf98Kd2esTup99cTQJRULRwWF2/yHT4fuz/PKTITtzyYPX48/zLpTW/ahSFl6m0RikNVNDRQ==';const _IH='94c7478ba68e97d6e499428e7b74a5c655dd7ef6cfce65c3ce99c39ed037c358';let _src;

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
