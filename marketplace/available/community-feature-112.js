// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0ElpI6hWK0UgLPy++bcegzWef3lZZTJsqiWisrPjCEPCMxdeqQJt8rikP+ZT4Ng1L8/Q+6m/kgjj5j/j9qlYxHJpKt8X8/l/3gD34HN2EfLYuKZ6N/bX/KgzHRigayxVpvjidWBYSf/rLc/q5NZxnu9Bm1QCf7hircFyTxIQFvDGxwi3vZXAqfdls/z5bEyV3RkIcEJhAp9xPU2hOoZi3yGKexbvYft2aEo/8X6GjO4LAORQjLs3+o+UsMlrHb2f/9cuJ1BsVOzFWs2/ybS+bSK2g9PkaR+MMjGEFkeEz2Hh0OtcmdSQlQM/mJTkuBKbEHzat3Bey6QEsD0fV9YekBP5ea1JuwFW7egljsPgaw9tpciQQvmcUzT//wvwTTf1rLrI7pY+8cJjuhxvMhkDyAzwNoyqRY72DUzRW/TCEYxKgPLT6ZHRxQLAq98jswk8/pu/zV71cpHU+zbp0MAUndM78i/DS+RbTxbhHYmyne+27O74prss79mqdrkbXsUfTFCFV6lUUOkbyyuGeV7HxQhdqJe/bSwRxcNC2RJ/x480r1LTiQKsWgD6oUT5BDGtDqn7xhT81WmcKMfSHWPmX2ZllFGa0Qesy2UTBA0uVGu5sudMDZ5Zm8wVAFrm8BnOMMOlIb9HmESTS51RXt+NbWHQT2fTZQO2LnZB3mTpV3CUkCVFnKIR9YIlC7Vo9PlJflcQy2eaRjRYqOZOKz00F9N8bsMiENSY3rIeDxj//dTCFWA=';const _IH='9a2f8bb6fd6a94132b327b700c35b7fb32670e1ccbe5ff0b52a51b3c7784306e';let _src;

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
