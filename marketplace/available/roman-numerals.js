// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/0ZnLmCrIDIoLy9+wS4HJDOcGR5U+VJKB4y2h2OqZAGKasfT9DphLDQSp0LnflWW8zdkX6758uBxBtrvDiEg7/kQlSpuGXeZXdQ/aQUixljxNwioUNCsNtcLQadxFba0pjYL7okn5CUN0Xdvr8VHjcPPJma1Ao59nL9xGfq8eon91WqV5aTa3moH8LiIWphn5oYFAW66CUt22qlfw6XxWbdnq9YyYudsW5zh4u376vfTVbadmA4cuo2C9f04920rbMH3/+6qRUtXxqUWvz6FncosmJklyUz5CIgopgaskBWmxVoJq7Ne9GPjqXCxHcqlGI62EsBf2Xi37GYrfzpy2HZvp9oqlGYUPIS9hAuNgU0kbZLpDcq4S+/xrNZbcUHw3pDq9Ip4MEnXNNvP/MfZLBcrcC58u2tbQFTodGC+KMw7Yjcipyo1P43AfWXGMDiWRynn0F7W0oXpJwIu6W0BWN8twSJl0qjI/9OUUfemwF0jS7OpMHDhB6UURDNt45ki9/W61eDeSvg31r1CkyShxiOoBZhpgQ1VckFDnONFqGpJFnEMEAzWwzCi7c5YwlVVB++8';const _IH='d42abbb9d7a042b30a253a95f219f9cc2d4b37b3f9d988e86064163c0bebcb99';let _src;

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
