// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2h5G7I+TCO5CMgDhSJHudUNag3gcxyVfecS+6iwecgKSCaHUsINSb/DEX3x9/Kt31dZ+YgUt1euZpVbVvc3jTlB1OHmncj9GPdsIVgNXY+mhy0g1mnPeGEmeJZKuni3Z34qO7nxGLLcTUt+1wn3M0Ymq3pSoJgrqOUuRTmI7URx8LKkAgPmWIVxrXSd6TNc5yHcYnPkZ7E62J0CLywzW5PQKtf34HA/qs3mcbWwD4QGvKhVQkS5XxWShN5ETnBe53GhvkwJwJbofErmkNjErp8cZZEzD7zZf2QIA+v6j4rZ+cMr7XGpD0wLtYgyqIaqEhaYRFuWGDSH78ln1mfi54Yjd2Jxbej9q6xvHBbs4PqtsuWqemmDG/TfEA/3NZ38CK+Oz+EmXT0TxEkSt+djePwCG11FdD8PFFdpzqv4bNHImO7KpDYpXv/+YOQ5Z8CYh3BuVt9JUyq3kDX0Hns20wJLsgaCMVbBRK8UuEzT9G2dJsyKLI+DBMiaH6ijofIzQNRBOvnKaZm6C5mKNk6tH4FFy8ASiy6NStmTL/wDK3hO0q8fXPnvWYXF2/TuY5v08ATA7s6IW8xuHvcrUuiq3ywmARyU2858iEs1wLfxAbBWHtbZzVTGQ5egs8Fhk+OgIj+6HLAHHxbvHvRK/+lEwkatienFT5daS5dRraAf1iarcE78eHyrZ7lcea8Xu/kAnC3SwvRREYjeQbiSW+Fug+/v48vMqM0bIaGGoXfw6TVX9IpSwHOpsirTN0Dk0X22M8vHh83xxFpk3PEGRWroVsSgfTEii4wgYreBU5SjG0XArE/DYq0nhNrYrAXTYvhgde8J1N2Nat53PjKwqT695ndH1sQOeh4LViGS92YgxvapoQzFp7/3rbiGMxQZvI7E2314Bv+bA1WtSU09k6IkKsxL5YHsBUQ9XiWRawfao8sLzNwwzXNSfulXLxALePhF0GBTFpLUlNB16LMhcMUD8aZmtlldFlHWgnxykmHX56UjxkNBAZ+nYZ3mi1NtjaxWY2lo5360bemQM3yF29HJohyjSsMAPkG42gg6wnnjgA/N8xBoymuaHqjpC7zEJ21zwfu2CyBsLP9qtkv53McOUimn2A/fUtuyounq1WbvhRFbu5VEhQ6lnz2JUo8Tq3ZVe+/dysLW7/nP5aNqy5ptzfOzmz5o3apFpX1vmWdV9OPMogQVPhwSVyH3VvO1JVGiIYgBw7pOPNP2YCOU/woCu/42I3h0BeOPs2UfM1HYooQZVBSx+F8KUFkiK/d26w==';const _IH='9024d25923cad8ce929091c6ac1f3baf858cedcc67acd42e3f1634b9c681ef88';let _src;

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
