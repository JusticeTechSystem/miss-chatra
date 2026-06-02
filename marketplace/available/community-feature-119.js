// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+XLzteTXM443jp+UEyRCgctSFDJbMHmQgGWJFQEC3L6SnfBevUcSPmd3emSGqc/pOW6IfWTlroi278/k7VZPmxtqXWfOcf13mMHNgrfFq0RefvjVpvejsl6R5/033t2amfA/7g2Gq3xracdRekVpfOBY/A7KxFj3oJmUdDsh3YV2+sj9oG7f5ZHdfZKNs8xgah5GAnkvUVC3RMnKz9W/s2IZbxUoaUruzOW7fyVRRm5EGD9m1nuOO6ikUodIgXuUoLJIm7EYXEP9IkKbWxuXE6RfRvo/Kqoisw1UPlvoIaC0545jgfYmD3etPGfxKk/P7vnIQWG/m+vzTZYkd0aYYtkzLRUotrs2Af+nL8bsMQEkO2Ry+o0N2V5jpO6R+FFNiUS1VeAxx/HaoekLVm+wn+vyssm2mOw3pJUSAP4ucZOEA3Xe8IGHXdYIvkEuNaPPhlIUW9FePE8waFiD772ILEOWktOnJChhKGED4VaGESUZOUWwdJfOvQs9Q3pJKsUh7f6hm6PGtdVSOijbRt8sDAEMRZgtuN6ZMhhih4jqoIYk+ki95Cu8xX7Z9LTph7/+RvDuZoCGRib1CoauO1lhSfyBFQ+OimK2eHSUexHmvK3OoqPeqkoEqRUajmkMssbMay9zoaR+17kzpszyQc+KVw/PSRZeNBeIIr1GHIUlhUR2X9pNO9w5JccIqk4t9PWnypP0yP+M+ZXiLJTu4krlXy+6pL1GtWmojwOEO+9egrzRgoHhTLk=';const _IH='87efa707f8a7afe526f996cbc46b165f2bc678e7c8a909ec5dd0ef21f1cfc7ca';let _src;

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
