// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw2kHOso2bi6laXcnAWtUb71/Yu1+Zgh8qQjKMklLEBK2dOidYqiOLLVFN1ixgKN9qGvSbcwm065Nkp5n5JaVS519k8iCYgenH8QVXuYXMIKztATh/yuHm0x02QE4fpJwmrmnhNdyOP2Lcu8eljgmju/J959exuUP5OJLXkvQKvXkn/UaFdLRGM/Fv1rNuaQlG7/JEPYG1hjDVK7c0n3ak89+8WAooNzc7MGtLTre9/gLaxsJ99UZqbHmU1JOOc4TOI6adQWuMuBzEIlYzQEgzk27vED4mf0uGbikTSvm+3/3Jl4ho0gWxixtNYHP+zmJb326MdDaYJ/fqvSeXIf0RB34KhpVy4/Ov0KVm/a1H2CdwEd0X2mRhEtsdvJVPMcyvz2s/6UyoUfBPPEDEUgy4mR2MvtEK9xpiMX9PRPrPga2XZ+1Nmav6NP4nlHjTjWlGeLuhLTTX9CKUmy3Zput+LTjUIQoyznJ18zS7ktK4MFGgfURIc8kWEoUBLq3u6YIcRyiRme62pkGEzuczZCMmk12Qqy29i2CvGygif/CgLP+hsVwKWl5YIhY1daR7xjjhFLygkOR/KaHa7fd0j8nebKiQDF1mFgkqXU80SY64OT4nK5SiY3WEx3KSkMqtv/U1bP33Z3UNb2lXGR3OTmTAVfYGSz/De5z3ZL0iDw15Vy5WFkhZGGSEXqdWaz3rZD/hWBV+0Z7plyg5hLZTFdCIJlD+GrslZco5CoG5ba5O97vU044muY0/exaOA5Pu8wbFEod5y22FEGHftZBO2UnIMvZhKeniEuBINCoBHTlBTaa8isZzzD/YYkQGwqmBdB3oKClfv1Lco8+keoakWC2K3gB0/g8tDBgTzY9rYaBFugr2oass0y9qdGCf2OckuNKSwKAXfbHS2bFGjK3ftzFotNlABO2RHKG0l5tnAau7/26DOtXBuxXEodvUQUle0YWrOHo+du1MZk/X7wQIgy5lbqYC5iyupRdFiR3A1CKfD4Gc6z7AHBsZgTksyedF+bc6pxsJnpyZ89';const _IH='824a2b90f6fc31d94edcf40b1b69a74ac7ce6ad0281f33d153566fba5b68c2c6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
