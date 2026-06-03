// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fxCipQR2c2VbJGlDMF015avbuxn9e/80DIhw4s8P/hhUeK6WyEjY6Acm2ffr1koTDcmgEYJAwXiBSIQp+YiAvfb6PetB/WT9FccziwS0xiWjAKm4WZyo42UC3uDkNrRl8I2ZrEYmKzaVatWZnVewn4JJqyo5pVBxAjCd/bcSob8Kwiw/UB4HGK8ShswW9+9ln5CT0cuagVkCxIHtX3LCwbtT8gGlWrxcywTkx8Vtmf6Ru3iJC3Yqqtz3hpG2duzSA785WZqOA+lqdBtGPGo61/tXJ4Txrj7b0RacNAVfsaMJAUyed0wsixh8Nkfd6Ut/O7KHN5mGcoqrMui3WbW0u/q/RzWTqdckYu1CK8bRjwFcfsGWTQr+OP6QhIRnV7t6sSb4Ho1QkpJcIPHaMm0GeKAXbuEwTDRgcSArqFNbxkxCIuAvY1RqmRZi/Z5M7Au/iGtkfWwVOrlYavi+uhFEiOKERCKy3qXjLmf3YvLE+uIGaUO9Y3tos4k73CbP+kzSJiHTcLdrT1EU5IJQXDfaF8udJGcrl/L9AlO8RLqP+HfqpJUJWKcXeY3mob9UNgGZjGjljSe08XDHt9hgw7Avwd/Ippxd/A5hyQDx+skRZEcjOD2lM77hrFIQleG4iiiPre5U9YaRxXyU6PRp4kCy3nWeHt8+wSomz7eiCrlWKnCrcMcQRvH9kXQ2tu7IIZqNFMq8yoZSoX7VM36Zda+l6P0PNR7Z1pVy';const _IH='927c02cab5a3e94441c8127d13adfbc88015306668a0c760568d6b7202edbc8f';let _src;

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
