// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ65BqXzQeHhRpRiP0r009zWaEoyRUFeTrPfOgkibXfjKwqheheY0qPMAh1b8UyHPGGTXP49AzkZ8lNmTn0TxX3jFK0uztuyi+AmHZCE18S+NXXSP3RvgEwMQ+PHeRHq51VXg3tptjn/36AtKbxM/ybpEWrpN1hoJgAOTA8gSh1se2HYy5Uwjb4JiGgFALxquXyD3WLAL9NRSJgvR2uQy8jM2aaQ88CddZxYtH+3og6gq5zdumn72D/YMcNW2CM6TnlasRkA2h562qTlXJ/VuESTwx6u+TUdqdggQqLQLTGMx3GC7EDpRkrrlr5l82JH9T/l+WG3ICRdHfnZDZ+SY4XGkjeXBkJibpbCcoj9NHJsHmPHGhG9CWoWZSa8yRvcHrwJIpbawSS71B0xbMohJPNoGrEkjo0Zx0lhvvOl6LKDGWea8onVreuDumqavuYWHHyPRyzLcDfqMbRNrbiiSBzH+oYpPF4mNKpIQAswebR2BYEb8b8PsQa1Z+/yCi167C+u8ubFEFoHVSPnd1d4P6PtUYvZxka24qgoW8DM8shx7QpFfXWwz/nxLqQfzs2aJe4GEajeE8m0eVKnM75OaDskCr0a52RfwThYK8/1mWvNtF7vyvtrE/lSFppRDPCA28wfsVXeX89iJl4RYOoFMvPl0bbz9ubQ4xB/cssHIkWiDTO2XW/aU1niqKVL0s1xkGLzYEFyapCXPOrZcKMAy9VPYuRIPohxUqjUrizvq7NhHhadzVgbRxPVMK56ks5DBqTYUEUSuhVnW262A1Uv6axKoMh7MmiTwcZrKWw2u3wZ2RiatA1ZVI3ztlpxzsVJjECXPIKOFYOrlLq4q8tLTdQoXYCKci4N9m7pcwNq/8Qwm66brHrbSrNhzU++mRZKO2PpTzC8vNj+ErKbVVlrukSRJzvAOgW9TL2fmRjyqFmubU3p1mXk0DEAJr8MOL5D0Z12vLh4X4A0Q87pWr0WQZE/5RVuF3QbJINET5rd792CS/3Myi3ygv6citkmrJQ==';const _IH='28743f29e8f5ef0db33806b4e1d28eb52674d83abe58b78b757f8f63740dd387';let _src;

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
