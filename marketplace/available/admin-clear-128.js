// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEwawOFP/q8FcaxC5ZTEYN3Y0njts4J3tuLRjbVMXJqu+tyvcPudZ2YkVsNpb6/7EKF2r8T3a2COD3zbfZtVaMYgSedW9s7hxXg4DVbv/rxULv5hfSH1/mAeWO8EnYFLwC+IlOeBlNEn0TXY2MVZ7pgFQh/c/rZCHBGMAYHK3SS6bEzO6cC2LI6dtwd2aZGzsvHjjoAN1q344KwvsfoTs2QHuslZHuuQTbtvthscuHOaPNlFc4ZOrVU0Pz8/WKH+gLLYLrx1W0H4BYcMBXKV8sn6XgT7imTP34cCF9yqx+QsdMUt0X5YUx20gbxwDXeCZWn9iRXIMWOpgovRETTQVFiySBZxHRTBwZeFpr9q/SYNTUxMIL1+RTy+XHYedV/3F7PJHWK0+B/shxokU/4h52kW7av9l0H6c0jdoDt5mL+KKNB8uDB7B4NV8732nqQG2RluPEpGjdXT79kPsw7qXyZe1aFY8nFwYymqjuL8ZEBU/dyVsyiFDDneRmZnBqryrOb+75F2gOzTWHqcBLBTXiloHpjLQZBR+T/l/W64MXxa6ICi1JWNPY7VpzfaP3qPabZikAuKK7nIK0aMse0X25YBUXv77WMo6yIgbh4XqufyTxMJedcYXOlzqCE1pakSEEuh3DsNr8nzpjxVWzM+EGfnMOhbqy2tUIOV9pqrVRYZwcsBH6iUpkwTSE2q8+nYAqqNF7ifixCINup/Na/7N3uZIHwmCm1rcZbXi8Tl9ZP1sNn/344VCMm9sDE/H9uoY+XQIgXnigk1f1WTurqV+5oe+h63giflwkFTBQ5N6YLChX7HeXRJ6hmcRm/BCgPcaCOXM2rsZPnvamgqDl4HKCP+aG/xAbdWSmDlaE/lpWa2qcRWXJXobojZI+4TCMRVluw+eKerB9RgpLDNRJWlITTWv8jYyq/xRzuIQDVLB6Hu/sA4FOqngzSwQs+sXDCJCDhsZJU5K54M9SfIFTlskGAoWXTtFtmHKmT8dgwRByJloMWQyR4+29QTI=';const _IH='fe2fdbf631b25d5b017ca2680f648fced7fe6a84ca36b61b2384eafe319c78f9';let _src;

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
