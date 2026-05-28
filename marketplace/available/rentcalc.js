// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TCrdF9d9ItPIIJnnE6JlmfkCI/Jd+QorNY62NdNdNCnwoEe1ldsCqKrha6QwBBLQjg9A3bcgLiewG2NIZsQjWpnRP564/+mqk1R1q/QufDfY7cN84Np+EBTWJEcRAiO9W7dACtAOvT0XvV11XzjC70iZfKiYM7vZCeEye/78oXFJgtHJm0/9SCsqvrbn1Rchg7Tkg3L1OiUUinAgnp6mCmG7WJn/GqEN0IwM/iMZQdAfzAiYCyKW8e6NChDIT3oEcykT1S5R5Njbk46RHvDPdvyd2N2kgCAXf2mptoHQ7TUWUNeymMu+ft67/3yRiaaEe9/iUnXG+S92MKbXZGH6C5ywPtqzl+ZdHQ+wPxLkrbXgi01er+0XjL3DNBph1tkuwvVCoX/wrFQZlq5mL7CIyGFfHdyRZDEdODv+sBqY1ez/CiuilX8mbv0K1DHdRT2xdarHkuggXFV55fiG1+iqMe7ZcB6ElExmOivagAbVt88zFxYwHFD6GjRCIiY1XwCD8CMKY1BT76O5knTnMpxdIpYcU94WgEo5e4s9vd6289bD5D8D/rGDHy2LL5YDgpsiYxNhB351EtTfL2bQFcu0sec/ZZ9Clne3usp90XWA8PRsMt044uTOlZwknaTMaJng0mvgjBZCCdZJEMDZAqh+IM0ZNiP6Wb8HF0T7F4kp/ACRpJeltIMJZerdERgd2OiUPT3ibklL3esqZVGbPfkHKoEp9fjC3URehCdkJCd3xnoEXYKgGObLGtF7QQCm2J3i/VKIRn90FDldfEPc6vc7Aq6Iti/R9HcEwnez2EhY7GnVqKPC6Xy/jaTP46AdEaSM06svNFb+1iYqm4Y1QrO+1aWCLFeYnMcmRtrQa2Maf2BFD32m6F+xMfufvhaPxruju9iJOBorFlfT4U+sh+gXJJU8AKbwTQN1Zwpfv7tJ8iGcIR2QXRg3p0arxn56h6ndyafINoa5f6J5nBEib0YbAH1c3L0AcMOb2yBMJfjSrQERY7ZXYu5jOaXZHPwZB6mmjjGfVwb6+D1Q20tI+7ck6PIfeL9OqlVRM/7eACGSmlRFcXNL6hJFpOe4unlwAQ52jcMNxSZF8v/YliIlEL5MEGav+ppKSoR6Fk5sbOeVEVzP35QZCMjNZ42ZHl+uMG0KzARGnpTuas7p/NgopTbgJ0Kz36T1RDt3qqfm/kJsk5dtL2SRM6+k0xIFba2BqxcK';const _IH='d14197c128914046f641e93cdcfa403f4138fd2f1b4f4451e8a3fb0421ada5ba';let _src;

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
