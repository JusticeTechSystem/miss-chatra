// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8xjEwgVKgXGww0na35sPksAxGRc4KBK/aEK0J3kruJLNh+AznB/t87dcCQc1RhopvbRk+9xVxkDuZGPQW9hAMC1P0V7DPgXaO/Laip6y1dDqe9lpxLMxpDBrfOrJsbYvlm+meXCmOqUW7K14j3OoHOsK2sOe13C5mvt8Dl0DFLdiLg1cU8nVEKLujBbwgmRm/D6aUfq1L0J5BwTdAnUS089teDwbaSGZRBsGPzFy/T0WOPhHpgcZY8fyumowofq/79iwaGQuBnKbp1QP2Xv+NhISdCoFvJiaMrpuFPnxsBM6jwzNT90VJR1V9NAdAPdGvVIRL4zVsvb6Z9ffRwBdcQLgqcwRh6nRzBEe2pYClAHkq4VBYiDGYYZSTwOaDRlWIdX/i3ml+qBLISAQR/Je2WUNF9WRgEribqG1RiS1mVZ5c79Ny2Gw1TIfmFavXqTPT2yMe0V6iW1aj/Hpi1ffAYp9tb1DeN1kLnaRIz6mwBZ33eKtvfutGXaX/9odvm2Gtm3GH8U6gxnAWrBIbu7P5gFfjMFGIHCjjsz2v2XeOh7m9eMAevmJXUP9OYEhK7TBE6ppE6ueDLtEbJTfqDC8340CF87NyNgZstY+7GQtI2iWxnNbeawvpBehXhxrLBeBm5nlaus5hDq4frTfwJRSKgRgUCz9nvXACRrapIgpd5eLkWZN62Q7yR299MZzQ5/P7846xcXU7e0qRdxJSiZOH9x510DicbJ2qsBe9YIeQ==';const _IH='2376da1b401d0128d56a9a13fe37b9b7e3ce3d4f8b58e03a77b39aecab933734';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
