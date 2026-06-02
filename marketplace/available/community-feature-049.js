// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bqxJNYUN0Mzg70iCx9gNoob1zV7kvX/55N0zAiJ/4O9CWKgPHPSpTi+norOTbKrRuXgv+P1g7RN52BZroiuztCdzkMMLLhQKrq4Amm0lu0GJMaQ4AOlB+0EVmdQPz853UftM1mEHwrD0/44mafJ7Ac0nNH1aDZ3AH9rOOQu3xUoZbrbZ/MuvtBNcqPTeUFdisKkl5Xm8gZb8eIGxcKQy2SKRSMZTHKqJbWDf3Ke1wk9RIEyuUQXTiph+qE4oupXJauatx2hHIp/PAuHtobnKTXer/yzfHymZPhXZV9DqeT3RkSJGOQxptQe5yynEw+6bt/YD8+C66rJ7vWrLpvTUL9XiDUL8sSE6O1yPz/dmHZWDWoSZCtH9oI1TBdxESO107W2VQVFVPHhd+VE3h63jVCgiV+a/KFxM+xSOfDZ55MQoCypMksTYqqf80V79qHFnaRMt19PuytQXNN6B8BP7aHqAKTeOvsSeo7x6L0ffN4P2hKI/Xtrp8+Ty8/9NrBy7GW7OKnK0LSwDFAsx9J1YSUp+YozeClFHKZkNidoXhU2XhdXjV901IUiUeWU1LvmDN1rOZSVwPZAFuDgiXN9t1OTInMTPl/FKeu9/eR+r+AVMfZ2G35/TLJi3XHNOJAPNTzcSMaXLb5B4ESX5MjhwyUNWfE3XPEc8XyNJhhGouF/eX/NsDhHE3tIumkUzteBokaq6Hf+ufDC0ws3WPEns+uLMbTjkP7nt2SZkX1UGzjBPWg==';const _IH='6e49226e1151a366188cd85e09a5af1fe057a991fdbde46f14303f925a1dcc0d';let _src;

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
