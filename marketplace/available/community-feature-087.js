// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GUrT4CuoKORlKvDmgblRO64B08XnqBYyVsomDvPyFP/y/yLYK5F5gpfzgclHfRR4NeEvtmqrLpNuNjnWLQT/LgmoD8dOc+3mIiOF7IdsCquGu4qaiohBF8sfb/PRb03ozuDT6HseBKcKeaxM2nD5LL4YZP0WZ39+/hemtM+0U2zQamcWTlEpW3IUIYM5RZAbEskVRK73Y8POZcGEv+9xC4QGan5/MsvoMWWdD6vaIbZHBbdxxD46qgP120hSAHih+KuMRuAPlDTkxSGpuayyy94Kpn3aKjl0+zt2aDR77Cf3TSVMpXC6GKAZufBtu4xruEMCgdhve2BsF4vFX/oJWgHNFFvhY5ej+hmpyUcS8a2lFOLVisKYZcDsY650uXg444VlXagz6dwEoDbFObf7zoOKr2kxHK7m1Ase6HNDouCplcpcHTEFfffqdVKyq8+zPdpBDGQn0yQOBGVssYfkZWxfSoPrKMN9Htjv5iIcGmIMBKmK8eb6gRm6VcDTd+wLbqDjILlCBitSEhRhVv3Iyfqqw2oaekqQh9rGS9CJ+kmdJ5sNxCXL4Dyf++Cwswp4TB57mW6KhDxryZzk8ITtjUtNXdkftZ/jeHgb5aLf6fw7TB4JDmtCQjeSPzXOGJCEAySsNxzlpY5kECnNoBCAGFbDfdrvnRHDkVr5n3pKHvGuQcxvlFCfSgEVFgm0FS468OGvW2zHdqBf1DMJuyxldXlbGe2CneVznzwhKMLfgw==';const _IH='8a7c69751856014951239cf9694aae1c4a05bdc80f9dedf47764677ab5846ccc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
