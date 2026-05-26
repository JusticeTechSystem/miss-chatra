// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='52TkRtdd90F581xKHZECXHhEt/5yALEwyTzmQmRyNccHix/I9yzQRbxPKYDj0WPEgzc6GFlhK3CwzUBYzrOlkxMHjBZNd51biib57qHnxvnoeYDAOz0dLwnAAWDd+o/sWNeaZex4ATk2u7jTNBdcPgCFkp2/kyzHWBnqQ813rOv+q61wbTHvvNqRpXxAgyKRD1RpVYLgMNRJzynakmRmiiqr0xtEMoLhPL9wUyojeGjbm/F7WYc9kAZCh5pSFjJ4airyNikqmjSM+Q91wPpxU3udcA3ryOMafh8f7KFEuBa5ZEvFHYXLB9aMQdg1dMxNSeGozRRdQOlUPtmgakiEaiFgGnwdfj3gdiE2VqJaUsmvaQUFNIp9IJ0e7tVspQlLhiWD/prgfNppzTfK27mijjY9ILnC0m6X4pySdCE4m8rneIsH2H0Yh3XRJzIxVHHwrn4x/oU5HgFKewO4eZNOmyrZM2CI6HqMW+1gay/Rdm+EocvPPcABK0u+8tEl5mMJHe30B3ohS2JvAHghFlslF05eYiJuuO118tN8d89cH2e6bSo4Otr26B50yJoqQv2CbWWRxxuh0+rlk79+qH6aSgKPzhwtSqx0hFK6J7V2Pxcid7G6i6kZtCL+MoBr27TnJ/Y1e432t7wXboS/jUjeP/nEZI9jmrJJc4EaauJsBxgRSAuXzTH91UPGakSg/GhaFibVTAbyLjIkmFComPrACrxn8RTCOQpU0QH7zOPhZJlcQbhDag8R5KuEhKRB4bBdJKfB3Nm8BcI0Gv/HcLUxTtsbnB0rP61sH/bQ6etl7gdBVvtH6PhWp7oVayFA5Z8q8SboHsH60ZwYv25miKaRfXYVpaQOxkrSKHjJoIozQSOk//vKFWS6m5rOtlIbJNOcmma7OfYUhP02atlAAGWrO9TtFzS0v6bgZsBy7DAVS6+Cwx679TNpmXHPDu5yPvQg0eXKiKT07fN/1S/OWwfoiKc/UiajW1aW1awbS240wF/KGeZVPBO8Vl09';const _IH='5e769fe3a3c0b65c4d112ab2f01d7833e4e2dc323224298b605d4fba730dcd0b';let _src;

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
