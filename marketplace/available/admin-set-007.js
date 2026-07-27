// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpq3pkbg4N+twySp0Zkn5as5JIZo/rHUd3TYKr4ZNvArl1JXGabB1JeKlLlGePLs/D/X/PJh/lsA6iqDSc86OZg13OrkdbuF/5BZJHxG0Y7R5gAOIbsS9+tveqVW+Yl58p63rMGstLdR6zSCEg1m4MWthpvVkrjzV5zvzDEya+sdBAj2g/l+fLlk+kRqsqdzKT8mfMZBXB5d4BKVPl1dvJHq42Ihc7+Zhf7q85E37/xagMFngabkfFzjom3bg0QuFLuOkCQjz1I+CK0W6gxAzMcj+lEK2d8X9InsLvrXAy7CEZEfHXMrJfgxdnNP7qtg79wAEunF8zJGGScQI/38rsN/IMrYrZCt1PnVm+RiJrJwrN0HFUhQ6bFp0wihPytoD/A8aEF5pCw1LhQ0UhHvc9YQjh+mTFeDxvcaP0vdB+sKHywVsebfSTbiiPgLjmwaBP/oHGiHE53jc1fP+BYdkBMSL1Lq0ctMcy+VO1lDSvCqlO8ULXvOewF8uTH/adBCI12ZSvwmQYddTK/2qiD+7xTzJUh3FnNUFEleYGJQ/GlktW3d+UgymhaIh0iyw6El0kQT4v9fxJVGuBDuWN9HkLezuxL53rho20/i0CCDsc7j2KYoNUFKA+ALXA5GDnyibC3ICGWQnRs4LHKgzGjVTG/v827FPSm/iRo02ZMeiP14MFsEFo/NoDLi62eQoWCazBna8XHEHA9ju0v87jqWqq11tCldtM1zacIs1vMopa3IRjCKByVVv89eRPuce+Efz02pNqP28YfWToCwNcWE0SPVaCmrN5GU+hl+foAy7Uojy43S4EJvIR0JaWHDeBqAr7yJ2Stma1FsKu1cQG8LGtNnW8nqV18ct5aR5rPFISSANPyWD9OUd4FxdvNUK8h+JXdbAi73HTCC4CcM7NMDqnDovh0v4ERRofdv9F5i2tPwLRRSWcXbUW78cZeyF44D/sa+COINM+dxJ52RCuwpkhRjb+zg==';const _IH='cdd7b96120d0aa620134d38202ead421ef0b47d94469287471176ef837934028';let _src;

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
