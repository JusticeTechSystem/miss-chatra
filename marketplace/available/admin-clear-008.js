// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MF0+nUhNeuCapbLVPY0fRuxr47c4gJwuWN77BV1PPPjSQVGA6BsoL+KxvhsPfmrd0Y6jhe0NwWd2kjLoD04XNa/01exPWx07964pJX09IGFUY6ePPicC047Jxakw+TRMNSCyuLipquoG/DRVJC5omotFewuv+Fqj9J2H9bZ4qRvOtq4tvqFqqsJnmtz1OouZPjJ8D5VqRRL+1/evfN2nuEERCBgHeDgLISX2aNPtBYqd2JGBkXBQ7lFR2joDZYKtVPSG+v7ns7BRPttAMmc8dNNhOtVomXfo4YOsWcfFKUkIjOSI9OUg0TddBzEyiabpYtyC24RfJYHAk7beouoUw3W5uIvbDLraiY7h6zyv8uiWkOsPs9XBZ56yi2rtDT/eoDGP6+Ekf2WU5YQBlInBjZi6OKbNNrueJLweJHKJQijtKan5VrTgZrkOuNNxcYfkkTb48hQcSbt1ZtpEymgag8qgMB44tUvyWgE3AEZEKja6hjWnQbTROnRwx2tmhmWqpBW3exKdgh6NaeiCoeqtXuCDHgakqQCnkC2I6M2IcMvgcdLJBNIHjk6+2hxQUYCwsUnrGcmmF0OlqJ3Dt3VXeJUrcna+2QFISd43azktkgXEqouUTRfyf4MHz9xUsBJEC5UUOdj3jPzBFlQGNnU6R6HtxLPxW5siAlpqCeVFg7jaevby3Upn+QPLpBVe/zDdsSwK6abnoqZi1cv4FzLuUzxgRp4m9JAfvrAZ1sGJ4g3TcgtSv2iHAqyYEH4LE4N3HewOMGYZkaJqSN4bQnF/CiApQ8iLeODYI97O6Ldd+n/wWigkk9A7DckbXcSKa15omy1/qrXU728fIUn9gy23DQKwMeQSgIrPeH9N/em2oeNxHp8MdBL+rjd74f4OLYqGHIQguhRSyaln+rJz88xohSTXGuLiUqm+y0XI3I8eLIrtdttkpHxWufFQ3e+jvb3odwlpOlD7EQqLFimRMzOZeVHO240pb8rIpVoAeSi2t8a9mw==';const _IH='0b6684a0626a9df1c4856327263730a5fca2dd6f86b25405a33248ffa61c17eb';let _src;

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
