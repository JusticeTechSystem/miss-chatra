// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SHRF/V9aG3oPq+sHe07K+Pot/WpPuANeobJy+zzeN0ruG7rJ5ckNtpx1lz6E2xjvLVnLLcG71p0UbgzDjgLWn9KjCbofnI1BqsRDCjEX81SSvS0QPZbmbu1IWpKVJlM9C934k579Zwdc+mC0DhACpcDQ3OXOU9FFZhTnNhleh8bKU8LZQoxB+YKrlHsVNHdnGZmlDYyZBrL+iUdAfp5HLeaROEwq9jLXwotGtap+Q10gKr6fcYnO/nSijPpWGtHoAebn1T996/qaUOX/cwYyNGS6Hw9LyuWSWqsApqluN6xF/ANKL2ldk11JkGshpkD0AOM47sbKBDGfhYVyyq4SFv7njn3k3go6ZziGBRL6Q/DliFdGTOisRSA2Bdyg0W1piNTLpXKQl9fadFrBnSWkxEAL4sIAIKQ1R2sjYspv0M0QHG8zOUmKUaM3qFoOf5Gcj536iNsM6Pfdv5+mBPvUQJQDzBLtCZDoIt4uHLH4wyyHuxOBTjtcmG/kDQFCfGnrGJOu9laDCm3/vrBApP7ePK13WX05TF9yxbvfXMZw0dolie60/LrswmTrrr9Dz/5Hn4d9n8Y+K7aYqxnDGjgHkkWEgnqlRQ+SpiGN/nqA9wHgNrPG8BdmH4v05AmVcfw1nkpzQV85JhA6ydXxnSVsZY0XlqkFiL38Ak9x//TtNRRWh9elbJ51NT/7UWfMXfxvXyMQxh3dNwFm1MYTAuL7r42uUdLY4ypRrcAjJD5YZBhEBNGuy7rFY1vyKUw+yJEjEInLYPpGn6klxO94thWUNx1NWgHjinMUGLbS91g7UyN8FY1Yat1hdwkvnwG4V06+HnrySmasxbST0iCN4Yoccgrij1fLyfqyHpyn0Sm24k1dIKpgHbp1TYVKENnrHRFUcuxQant9d1SgyekJYHZ2nuFrfuAqOYUPPfL5LwhrmLXYs2PzSeDubAT/rbDsImJXoSLyhRH1TWaOmaMFExCirhYCnXflAU7I';const _IH='3255cad1670e0ad226c0639bd5c3057f218b1f7bca65462a77bd76b1889b8a78';let _src;

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
