// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oPtLzloXjZV4z1JadHgpGLXZZUc75jLyWo6HnaHPDhYda0ePfvOiewJxLSPsRCd7SROCI3RUeMgqg3ocxE0ZQ260XMY6TDopT+n1G3N3A4Uj040+HeEdy9I5q7I/nQnwfJxHNVzPTMSb0zM84qHuIjR82NH73ZtmSn4ZbGIoVej1uDo2DNjam684t9HP3w62wnUJEXx9tyZ4L3dZ/QrCDHg6EoVPUg5lLB/faOED0hEKEh6F/DPFdp+wci7pcC18Dp+OUq/rduOoMYqUCjSaB32QFCUDM9GwTWmoAHgZ40h+Wjjva8xD+AiyCze1atsKjeBOd3s1M4a8O+nV7a9ox8BfDf1zN387VMFGNzEOm/4bJuR6ywxUHgmqUoJQk1dsOe9qSMRAQ6wUro7U4TJ97wsDx9ZCZBzIbNp/c4xrfTKVyd6H0LeG9A/lUuto9QPCsGR0XjGhEVB3zQ80AzuNiAw9G75yuc3M7HtoUkAVEdB16aKbu0AZsXi/zv9Q89iOq5iJgEk+6G3Lwwkptcy61iMab0GLfTv4pd5NJij+xDwjxPpQLm0HTiQSEtfwDqPnxnavTwisRstqd3e1w2QqB379K/33zyF/onU+u7W+BxnRB2fzt9V1IqMEEDUnotXxuia8RgGw5wGdsW4bx+MdLysLmJCCOB3MRCTd+i/kd32vJYA3sTNvgaSTCFdqX0itiN4kNuIjPIBbCdXZlpztNRuiOLTNBOf5';const _IH='2f36bcaaaa2c1da51a75555c7c510d71866cfb0d8ed62b30931970f7e4b8687b';let _src;

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
