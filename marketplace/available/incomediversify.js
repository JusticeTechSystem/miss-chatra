// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRIIY4hTy5grgOgu19wgRlag9G4zb9pC8spJ+L9F4Bl+aPwf7zUN3Ze5UKpWQ166pa4jZiLEDwIslDDm2o4qG1jS5GuumC5ljVq760w0KHdRvjYM44Px8gtYAhweAkxyE8wpBKe1PclO3XC//bp4Hkb6t7x63DeGTW79uMZqA/j1SSqjPAzW9ke5IoCvkplzluA60Dy2rT5wwaI5xQ2BgyOyFdRzsBg23Xib4AE0d6HOqPgVriJrL6l597jX0u/g6f8NcXtJGnedeFEcIejn0zUKPNTMPD2JrEABr0tFuXIDm731bjawSc8m1er+2syqlXM65Q7TYBCkHzL8ds3Vp3rPdblvmBKJSS+5jyt8F1tty6gdyJCDLaO/RKT3f8F24MEh7n4J47vd7RI21zEnMjbEv0hWpXMM/8GQ/cvI8BIb4legzU9KANMVnQkdy6IeVyiNXOy1ITSqa5+/4L5Y08v9isnjc6hgEhbNMKc4mNm5luQlYMDuXPRhnitojVtPqbK1wPwbeoEstfn39fEJDLeZg0g6R0Ven6thuE2UMe5pXnnuQFfiE6iHdLNdPYDEEShTMFQHBe38VV1nzdSF0gNIjGaAPcoJDWFk5YkAqUSoWO4c3lz2znv4NEPOF85Hn9WZC/RioLRBAykBKm0pUseFoS/YdDt/CchNo+TB0E5K4mPnSy3o2M2q+tJY8d47EGwT4IDe1p2RRNnvUGFt+3Yzm2hb7W60BGXGmYL8GOE0XxUifOtKxQYYQm4GCrEDXkMh2kdRY9SYj4+eYG1pPbTolw/hrS3mRP9WeuGxq9bsmEW2S5CcmqgAAQEX/5kqWCobdGEF0/daHqDcRUEDBICudifGldQGjmTtU/WMQBRAr+A9eP9svf/azgXz9gIvZ6hXB6NSgE5VfGTxNQoUVPOUWiSAllw21JIJyFV2X12ZhEOGjPZUEf4wjpilFmCmni+KoAIo5JLKG9IEjM60PrFrCC51XV9R9kG9uEPARcbPV0RbbbvRkIAcpW8I3S7FtQUE8ESxi0BmRtmyNNcnD/XBDlJvYjW+yN6RbvgN4maLuAF9NVpGOSMcBgWkWFG8exfiPUNqrIPgCfb+IVnuPnwl+4ZPefecw0CSmFW0Gh8ekYX8chYt38t8vjY/YiCn8ql7UNgwE5+cGTXNIDFo/DKrhm887j347TX5C0fPRhXAW0VvTUNPRox6KDK5mdCpfHfGYcRQ6QeeOrbMRnu';const _IH='abc6ef8c6f5ebaa94e181842891060c911bffff6803caab5bb5dd39cc58f1e22';let _src;

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
