// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pA6XXqbT0zcobdZMasNEjwRulyO6v3E1KcBe+jU28didTwNjc2SFBRRskDZfyGCnq7Ii76EdWS8PO2Hs0dwIpfdlGLr10e4EuXL2+5Ir8CBIl7FzicQZXnWHDYrgIB96Wwy4+wDe3lZXG53vLAD1+w4avGqbnyKODcDe3ddtK2O9uXMdpc8M0bhXeYnMtPiGrIlC2dgxfvFAKLROFPcoo8V074GhK7ucSxAI49lCUS1qFEkv4fQsOZvA6RPGPrCdmhMfqtkMskJTHT6UYwz2454zsbwqxkk1MZbasFNfKUvIpNmRrwwWE9FSNPrlZ3T0iJVWsykUXYIaHjLUzJRgWRiTmEc8l1COUTVGwwPqQcNswU93uP+2sD6RB3pMwTgJ9/lwTtSRGLM2FpF4FG/4O0R4jB8p2fXEz2WDAlIqqJuGpsK5gbLLdUtm8m47XguUuTz6QmP4cycWKbu3+AJ/EXgjqIKRL/UvLkyWfrWTR6vj1lIoKwZGuSoIs4rLnaFEwVeP1hgUTHdjuyyd6O7cQ6oEML+e7N+a6rhuy1MrBm4EdgJ0zjV9ratbnrguyyQ0MeWH/vBetCUvfp3HDNXqnUYnsST/Qx3WDWx+1+4p0AX7VP5hVMLHKr/Cu2w99UO4E46UD3Qy3Tj1D7+vmlCwjvlLulIUgGPIxLBJVTnVX961unVyWUsOinpOYtQGU5pdf8lMh2vFWeeDi2RYVn8zgiWr3RXkRRCwZyWi08Rq7U0uq+1ns9fbFhWWm40y1h6+nT2KfxoXfFMRcns9CZfZmpmHPqIkiN5j+WKSYsB52Mq4PjgMPmRQRuxBK8mk9qhwQ6WxfaE95QCk3Xy5Hd7wClCWWD/1+A1yyEacT9fCcFtYyqVGUsaU+Jqi7x8DlMLT31Z+aZ3cHmEFG0e0G/BhvJqyr7nfwyl8DZcfelgzZWSeGARULOsIqEpbfjevBVm/pYgM9YvYDKOV2Nw7/dpesnvmlxJPOf4MljaLLn6OPYqoEig=';const _IH='6a2930fd6655771e455835750cc0f520641555c17450d2478ce1e7439cbc8190';let _src;

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
