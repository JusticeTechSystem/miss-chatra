// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n4gEv1KwOaFWeZtRiFhMhcBdlkz0+/ynmKXCH/p0pooZUc8jNAG28Sl30sBHhh14k0VAvWrSbkad08JX5SgBgM7ZCbxaBE9ohIWG86dIBBnPbvDllZdVl3ZNDDkXNSz4rvImVPEl4o6zdVjTBK5k/naNu90jcU6uYxAzCcBAz/G3IVOHc7OAryCGJ3bE8JWtoASZbloW1LSyfhGKkZriAsjUaqFK1fuIwT+hkhs/C3aPOPaQMiA//W+L2emzp6YyHwvmvqxfzyG5LRWZHFqdI+zdkSMdFdZXoMbRLHlToh8tcidvIJCfiEoRfVRbv0RuO1zfQnrzDHka+j+cy0agSLYAFAKMUE31Ydjq23BKXaMEPocMKvW5CScWi91gpshIj7eTQALEVMl/y7IygVf8C/8HVNsEWKeiAIkOYxuKf2Rj9XRGA8JI/W+RPUd06/ZlSKVcDAHir6xAyIV1eOeP3IpNL7fIRIpNYdRzjoi2fjxkq6NHSbMNPkkEPxaCyp5V5B9WDbdI3nOIoOjGnmS11n0PzJTzkE8CzettEdQY0xWDl5Pvp1FZpVldI2PgnqQ+CVqaB78lZ1oU2XOF+E+1GyYrksURkFD8P7Akwl1XGMd78Z+qm9PJ8nWACi83ypW1WJECjnpJsr0CTDa8f+zVHQKlFYJtByUZLfw8KL1sV7DaIEe8ab+j1ZavUnJW7Lrd0Ypg9IyNH93HkgaUrLzEsAS25Vl924QDOw6Yce9KBm2tUYlgFpGLLFWPVsPIl8T9SOERLDhf3lzCRu+P10Wr1FYcss2iGU8PZJ7jk5DUkABDRk+BQYhD9odiajZQWp1ynyI2cpc557XmndlJV6ekGLZbZ/bUZsj7x0wZ8zDrmq7AmFAv6H+Q5m5uOSrVe+DAHBCnGGManZcDyxOwlJ3nPJQsbZGWheyIR63Pr5M9JWtoITcUEbX6b+TpZT+OjG1iiKVDCejLXzWhwCWvcQviKoWwfxqmKoPqSDONGjYy1i8FE5K840dIbxBxPVf0aeziaXIw/XAznrdf8S62jiAYM31k35LNaAYzEHp6f1V2oOHWyh64yObrMtLJIOcupNQZUX2FhlT7FxlpNYp3zb3N34Ajo5IQqAw8wWHptCwpdbFoeUz+RxOP7MGTw9x+Pi1onUEBr6Pxr+Cc0lQ9/utAac6XFQ3Sro+dcWET6Pp9PWC0KxnQ3e8yNN5HljyIO8KTJvnsoCXF';const _IH='9e7bb4a906ac08b363be0ca798552b1748fdfd628c5b64a19b133df980f4c4a7';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
