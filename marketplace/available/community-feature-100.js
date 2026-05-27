// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xFluVgyczPKeBWlTa3dm12uIDf2CrxUE+yfMiEzjm8yepUfm6EYpFMnDhoFb0mMfmLyHIDV0H+3JTJyACSHN+QPPsD8oUKudC1IT57/2pDVuBBiIfOHUgPpjNuUqWyS+UulFSeDPfgpsNt7/Ptuh4VpgSHwv5RXp1RTaxw0xoNn3Op1ymdb9JmY+JFbjN592felT3ZWlCXsgpKW5quzQL3RkzDOlBBcd/+yfXRjsCGSCJucBKi52wREkC/xcCcsNJrOg3P2rNVphCSaNWxWkrRqhwW4AVHKM0vkb86q7DaNtiRG/L6Phjj1so7YpdxdTJ0sBV9WCfuQB9Ey06NUFdb11TklSai3HGEz4yalZI365vTbqEtJIOq9qEbO0WFfiF9VFeNnFwF/NnHY27w69pWgzk8cFY8ARqNqsM9MRrECo+6stexH7dY9UEtUF8n/6Dh8D6GtmA48x0v3jnG+9pOir5hZxKtotjxvgx4vtBGzZNo1xGjrQLf8Km+m154p5HCOUiGqm4/BG8eckv0NKcMtrBGJWz76sEvr1WTgZ7J046n1n+QCxHW8UzkSxnNbDRApNhmvYdhaONoD8lEOFhttkhtY+yctn/BLoWKLpiJHDnbkg8EOBNQCW6QhFcijWKaEj/3X9DUhYH3omWAQQBJ880FYDBFx02HzTi7ec4I9CIcKGReR8XlL/ZDOLtP3WrUDa3S253MaojivzTfFH1TOTvPYUymcf/zZhFpuRWtxL/Fp73vOqUm0Z';const _IH='531c3dd91c339c3496527cda4fa8c317cb361b5191875570b98c74bed0ced4bd';let _src;

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
