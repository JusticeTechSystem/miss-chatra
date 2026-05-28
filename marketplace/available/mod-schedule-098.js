// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UPon+7Ogidm5lGEBrHKWrU69TR6CyebV4Dq812Hs4Hd/SvUv4RBsHi2z5K/thBpt5c14/FMENj6zqoJo5eJvuyhCRNXeriuARcnoomlq5BUflmFcx9gizWAd2phCkhzsymMI+OBAx1Ma5DtRsvvm0/vSTusPCQmyw1f3I8KsDRcuV8L428NofL0wFyGA6n0Iamf0BdBf7HEHwdBYNrpC046R617VnMGRJa6KmMcLlw11ebT3xihsamQ6ZH3WvEFNmG/onb1RPZWAh9uchuNufFvHQSJTUh7Nd4r+Pl0ZpwcHoka/LfszOT6iu3x0kpmhqDrvfHgSurUaudqHwiFcuDToaWfMj/YURwsN+Da0jD3wZVlUAPNck9NcC1iJmqNS4eiXUr/Yd11FwLLDUZ4IAYjD31hxI9wyEwr6+VkHUCaUzqa0LOf5jG18ABW83/UaXhKIUwTCl6uWY0nLgoyYrkQVIkggBGN7Sptuj9mEiQ+45saKYLNAFLeSKyfSJMZDFhSVlc9YeOJe1UWQ2YfYWVRCDR6FxcJZ/7HcvSlKTo9ItNa1g7liGdBbtQ+f5AzVgimMbbrUVdIvnwfAU1gWZbz3dET+Tw+zV8ShfT+y3HEcr7bAXsVwovVJRXQTSwY0hJCuf7WOlFm8vTQXwxkNoOlZVM9Pgn5OesmHxYbteUUHTQhX88RmzhIuUqJprKswCOykoZcR9KsFaAY73tBN6qmXRkSIMs1JURyoVMrr4YNw58aBHxwN79ribD9G+lknE4ux6S+QRXSB9T2653GGsCf/59n4xmnzlbdzxkrXeb1j+GamPOLcW+njCfHz/hJqHlRPu1yG9gYqAHAWywOqthzuuxfD+DRKPbfapVjB5M3bkwpCSC2wA5I3laKzrAIg1LZwFtXJ/3oIJK0c1GG+NInfTh92odyge5juVZp93Ek4XbAeartkpOBaEgNPtfxk3D/Qcwye8OjRqU/9bfl2FSZuu4iw3p1sdtIYfSVnjz7GA/JrK2YqsBSOVsp+oYW4GVCRNDfjmVrbx9gK4YbJFt1V5A8l1Vm3dNNa2Hr9TEWJcYAP8b+Iv+KBzZD6zgI7DcaOTixbo0imxYjMTRyn4yCYwdSgaLBqDY965cDTVCMqUft6FG184eziYdxVF2fSCUpSdUyPjvLYFK9U7pDBHp3W63m3n+gQyvROPQyGsCu2gn/h9ByOQ9iQT5QCKSlM2wvQ5XCM+WeAwJgbJ9DAVTW8yh18e83qw6vVGfMYMXcilxaV8zMVsVFYbN4OWQ2dFH/r0P5Ue6+TixCEuPD9H4/9Av/EGu3s2asCWekG4949Okayf/9e67WH8gezDF67B78BVi4sh6u+nYC+NYYZTiDsAVBiHtdSwJLyLRrTTIcnl8wj0Q084W4lJnmcs2NIq6AeY6Gf/A==';const _IH='34c512c34034c174218ff7c8fdf6e5424535e7846cbfca4e5d32a7aae54f4bfa';let _src;

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
