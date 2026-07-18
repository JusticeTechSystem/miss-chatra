// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiA4Km0YIH/peJNFANi2FkDMHWe45/xCa4wl3LwuFN+IgTEsD3TuPcbj4Ldu6MhNZUdAnXB6Dy8j5izGatV4cHWtN2Wzsfh1R8PH/oKb/r+KiI2Cle04HtJYcbMpN0YQL3x14XTBrlcRwy/AaqumebXE6YbcCdXc2aypDdzoMDGePqAcSTFSf6m0lri18Ac3ZNTMjGTX+CIVjYj2FlpqZpndsS5xtDixgF11Ks/8CW/9jWX4POO3qOq22Gnr/56YJWdDFXMB8rFcA4Bu2oAQwC8vaGNTYZ+sE8gUoWm7Za8XNmv7FPUlNHXxphiVyy54iCf7pycYQE8mfpJXhfch2veLUIjg7/8R9seMBLvjBLKmcxJZdKT7EvyOEj6+yvPZPWYZrcOUOS6FCIwV2sh5uKi3GkjHAw2fY2rpLnUVovwHKS9QBdM1GsFYCQoiI0MiWqPwNdO4R0BC4Cvip12WEpybxVWYQ6xj35Q9a2sv9SOYnv2kLYHlPMUiBHMPM8Z2obQtunboRPF5RZsP3HV7jHHQ3CiXRA3WQWbXLGNS+1kPpsFlzQLaWB0ecVPq+rbz67pj3MjTXu0rdlSHAwprUKGhprZZqne/jK+zRssTMMgX65wD9IO1hee/SzWwScUW08uVSwv9vYK34LDHovG1WftkHzHdV4jLXaGq+st6tPqLXPtcbVfNszM26J797T6ypJ19s9pZJB9Cotx4q/aST8WO9JOQ==';const _IH='3247caa608b83a28015ccf29571895de50d06c0e2901a4aa4fdc2476c92ea636';let _src;

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
