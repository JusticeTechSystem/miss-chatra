// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Hgwi6sAumdGqS98UDkGJk+6RUWdO59/aPZP2kCPptVarCjlT5yk4q2RARTOrqpcTZwHz7yR0+A21ab9MLSk+Ko8Qv9Lp9djgtAoTLxG9XSQ/6KGBL4xMybg93XAAna3n3ie4ViUKsKC3iXkmEZ4cH8zzlogSVn9V/MuNFJ/Rw5dTpgTw/4c5JD4aYivAWeoaRAWHMZVYhYMhYwSsdkKu50bSdQ7dAI1Pz312RxXr+VlJaEjrtnpcIBcRq7TyfyCrPAG+L1gxmXBUKFnaOkYrNnZsLU70Hj/o0CjoxgTvpUkDJGAYmo2sFPvCHtDoSsdOWK2P7g18ycWlGDwHbVJz35ECsLgobvVkQs/Xi2yqaClU4HamMBuPcam68uHeK64uCwTiNGTvSgKRl8w76SaR+59TpDB/iI6/WJHH7fPwKYLOgvBIYluRaugHOzlA2JrCBo3IjrQCxwWt5f6E1BiU6YTmOK1rE/M3mv0hEyAkD0OP0FcUv0GvDUWiA70UdCS+8UY/D/cr2YDBNr2qIlmlFJPElvzNwhDl25J+k3fu4UH7iyZSTP8wMgq7P3ZdvonigniMQxB+AN4ima5UFEx9DZEYl74C7DSYivH2kF7RMLB1mRUsN1LYeSOMDTkLCN/99KRqN0JGisytePBH9gO3yAj3DMDOQG1n+7FN2boethYJgheHSYqBlGFjaeG0JQiIrl/lxzTLJg7tuZxawczaH19Va6d9QTHdzS7S+jEY4sa5MKJ55cnjJeWEYytjYqfaRXqbiHcLKpOkMD8oYtbSJ8ckIK/BYsJvVsdi8enJqJPSZ19cmjMpZ5fV1HRDc/awZeo3cXdNG0vZiO3k81ynA/eDQbUQk9BhnTlO7f71s3ruLbWOcW0RmlCykmMTpv9C+6MX00TE/1MKN1C+KKpA4qJXO3t7NJ6BIayvkLt41qEnL8ZX/lYKwT747dwpsU3kVEco4Z0PYONeKFMPWpBf8MN5mRnIFE+Lf5n7eQ7EugaagbBB2NNFOLvdTllCQdIlcyuVkgnReTRvjeIsaNkoAX72wbY40fdUL4XT0TyQ2uT6n/2YIlLvdrMBjfkUJ7u+By4qfC6k7Oi+cV8XdRh1ZYMEApEybf8ZLRQLSVC/DUNwNmfHMDS+VuaxRp5+WPuEXemotoKbk+2oAXYDN/r9skseOByJWEpFHtIuTTbuQEJs2xcOCYH3cw=';const _IH='3d21eb03d5ff307bb0a590bbd277412d50e0f6084786c507cc28828dbcd3923a';let _src;

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
