// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D0XCRGcgoDosdbEzXSiI4Rbf1ckO3Tv3rp2ueWibhc7XRy5msqPX+1l4HcEhJYjTdq0FFZyETbY1gWdveGXoVOT40Qa3+giF7VzVnO6fNZg0hdyeuxxDzyrAmD7olqvAwDu4qpJnkIqeJ6fpd2T7Qn2IUTQSu9dCs7ahLMTpdyw48swnWZOcosvIwkL5SnERxjtYTHUHLp+3O+iTFyM2/TLPBGcgiB2D9v6hT9jsFu2LfXYt0TY5Iuwzq1E7SERT+cTbRGd7YtTo/m34/VoOOw47cT+jg+/qSD8Y1sQW/ofiXmmY9Orz/U1kYiGkHMgTwrk5NwAODBIOz3eIvxCER0umsRJmbyj2IEy7oc9WdcLr5ThkO6AYgoJXQWLyH/oVYOslUIqUoZAGCWBYnjmO+Hzq2SR4U905CxdO/CRPPUKkHZbOOAtlhaUNpH/wHsLQr9lHzcgqVvfWxXOaB/uqPgzGrO6fd9bn+LGFhsVKXJk/axt4uS/9qnumKFNsny/N+hH7GuPUVtB4+2KwqijTYNyUxp7wvxe7134n+pE2VYuG7ZYJDdri+tpbGs8pkSVHcF1bcwQ95QYjvE9x8nXjmS4d9dM878vdzc0eznGqlFFEYCLoQjitdV6hK9mPGcX6zf8=';const _IH='ed9f90cbdf6322d5f0d93f6070dbea436f30c5d42c656a073719d4a39ff1d7d8';let _src;

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
