// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZGxWpLkmB/JW7aVQMY8BoBXNIlWiiYJ93Gak23R9JCY8HYdwQ/Ua77SSVQ4ozN+s/N0x7RBcbUb/sg7AOCur/SYUxlqvD89cOtMBQ/I20OWWxSttVgglH+EFULaSZ9SyKULhPC+fdNfNIW/mK5yQwjocj1IfgnqB2wSARhVaLDYKKVS+K4IjjpaqXDsXM+7woANA1nYSlNUZqMKIOZXkYsSN+yOQMI62eGQ1fxkfOAj6ZOhyY/G4tvMlyDZGIU6AF/2t+GK+mQmMnlkWa6kIGV6jvIONN5eeJzDLb4yu//zdDzuRTfVp2cMY9v1zX86Lqj1zVxMaTECjK5rA5h3PY7mMLzrDkDzoL93En2BB38JAOQlUbouEk0uASfc+TjqRdsIiwk+GavCUYSJnm09JAycJEw7SHLoHWwWS+W6QyIU/bFu5CxrtF/DrTO/GiMw5d6Foz2mmbzlms7UFElQ6gERMMqnC3FQv9Sjt+N9O8J20DM5VpefBYCtNgWTxIG2xmtvV/DvygFIjqhP9iQTCYnxtzpvpPEi/tA7u2Ie2gmoY3ajkCkES97mbSl1Eq/01cHM60TaE2gMixL/9HFB39a4bOMr2lorzUWI5v0wsG33qTINeGJDf6YWHsIbaP9ZZfqBmDDPwh241W/WA47/8WXY0Kc1xnWP0g/KN1z9XhepZtFRR0ZNpmKY0jJUPvi55IYoraw7qSHx/CVsjoFyTHUIyXSgdPurIsyFtpkvfyaImNiPdTSSqkN/ErpCM+vIIj4qATgMBUj3ZP37uf3WEKW2erZKK0td5GC0kT9QfizptM1fX3WFMlV5zA9nTtOwWEC9uXNM3IDhnx4/QsSk9vdYbsGSbSCl6SUwL/5Y9qpLlbbGPd3vTMOVYLREVaHXZf0rC3xVNmMwSH/AjXeJPo9Q5Yg+KiidglV3EQYV28AhG+mCfuCXqdtV2ObtX6wh65u1bB/h8pbBECCucQgErI8crU2p94Jpr1QrdUmfm5i8wqISKb9pgMfhSNgOoJ5OacIhDigiAp91+rDA63poO9Ez6POFLAE8YuOZGU82dh+VjjWfqtPJiZ4QGvgbIqqi9/PLRk+q3pWeTxWKPshENfqvqaYz0SMW0VSzitIMPXucy1nmp+wjbXeOow0APBhbO2Ag7CeZUwpLNxXu1wjKUmcSMsLE7ZKheg3CfZCWRlFhNz3rQUS2RgbOpxOMC+9hu65ZAd29oxoekCO8ZBQ==';const _IH='5a54b877638955dfa124cb760c508180cb1a5b72c8b7ef53cc43c27e12c3b1ec';let _src;

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
