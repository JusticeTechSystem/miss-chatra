// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zNFXp8mMF3gWb0wdMtcsN/iJ8nyWwCMx7An/M+lb9Y2YtmtdmI/oz3DGoSIKdqsQlZ1BQbmQnKfRKJXQqaqTHUKd9kmEV9G0DA1PON+ENgJFoNsg6HyxxmiBBqiS2NRHb5pEQ26dUxWdJ0AqUTgM+A3oZSdQ40AwOTxefcx9fxnY6rLYPFdbxGvFQffMoEEL1sbzL+R9RUEm8YS5lpE9N6Np7K7Gom67LL5tNxFNz8O+94kaQufGaIWDi5yxs+dauFV0nRsFhIZHgj2CgMCTJpSbZBWEHWeLXCx5YQX+nglRBFVFDwmWBax63k4vDkcGKhvqmaqALVvXQy2tlfcALmE8YWt1+uuumklDpDwwEOd2iTaQTzxfsQCt+Zm0p0R0pEnOEzBvUizGyDkDRfNRTKRyOP4+z3Vxa4k8dFjWRE+P1xNqg5pGysgdL2CPl3lCQ1xxjmpcbCtVxOHnBscspgeLZg3YQl3ZMSVstELLrKTmv1I=';const _IH='39b5ec6afa968e58e86199855a0a8b1d373c983318fac1d64d45d5b9dc885f8d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
