// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dUHiB5yfX8rRE/Tc89FsZ/l9hK6CkAw6AS4f1Wg3E9AYLudLCdJQSjYpMyS+rEzI8gao7Db+lwachwGkTSnDDk8MIneEisJqkkuXKXH0hEARJQgGpwZWL6r7ai40/Ue7PVwPOVnV9tQd4qLphsdG/sjfYpdU70Z2oqAUIH3gKpSMVpq23INm/CsZr34hdgQHNVOtFKZPzmitsIUbdb8Of5MysqJ/TsEjkjoE0QanX7TCvEth5Qa8saWM9SIlW9H5MzGn+3MQKIClJsuVlpK98AQyXPw/fKqZ9eCM0ucBcsjvTeXnhQFFc4y5IADn7Q7D0lPWd/qH1zdUyGumSjwML2POZOAYUJG45YhSUh46UI6i8JoB3X8G9GJCO7SSqIv1zwnzsaASot9KWSEewIYuEPliI0HOLQpmhgt92hvZC6NOyQRLSLcPPO3VsL4UQFuBvX8h8JWVfR+6RnSxLaf5x2Tu7pXqtfRWWEdQnk0tYdb0sZsFdO+goXdI3npNSKHIpRVTu4+EN047NANBcFWoGFvAKlnMAs7OkuxlOQ1j0T9Ld0X8koZwpY34oZyDxNtgotay/ViEQZKl';const _IH='85a0309dcb884940d5c591a89c5b63548f13e302aef0e53e7712effbaa50e52a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
