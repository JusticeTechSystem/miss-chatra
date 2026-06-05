// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wr+UsFZg2eyIZuks5EQQIWMbaKJWCm3rgUsuhPrHbatp/etUKZt9eHhmsQz9bks0derXzE2V7/aiV0zhMWQMcxfwO1Pj24Zz3R89lbyejVhFbzGGGK6Ie16fCe/q7q9xwMKntoj7TSvS0QcPEQJQqivF3pFJtY5ndEDwrxwN/Oyan22ALhvbn0eTHE6jj1IDFE2H235bWpIWcDnOB0qp1fsgsXTjaRJ2ZRXlk09/qtYa4OquOkN0+M0GcZejlHqPXQzRBuc70R6MslVCdOQsoSWCxrA7DozFAktBw57Twh0Ybaw3eAEnCAKweXzf1blo3C37JUuTRhdxNdxhTan/ows/qgTECVZ+C5KYtAD/EHZEee6BIhUg/lvkluUGkVbyCvBilwzc1P6FbZJdlWvouOSrPqwxwcxQcikau6VRo2jKaPgFGAeEd1vKG31GCRG+PtjUVqkKvW9DrpQ5xyl6Js+a/KpMMujRabgduEoUv0qbMFv1OdPMnWF+Y+rDQghilRCP0ejUDxyOSV6Ga2NClXOsJg+DriecbnR/0FXa9v832OcqdALPMqn3L5hLpzOhSQMfGc32/4JiNRzZf0MafvqjJMv42Qk+2e9YItEDGEdFyndjLTJOsDKocnZ0O1shWnReB/GkJmxldLJNUB4mmymT6fCvzCesVGQyZTewZ5Pj8FzHlYR8r9ODqLXYi7BdS68k1RlOsgr23s5Ihqhv0VuszpGJRBIM/j/BZLGncJcvidOgFKMvC5eIvCaJuXLh5JrGf+7wiDtks59nOQrq8z8XIKJcNhmRGZGj3wHXXEZVIoEmo9XjbxPvsU2x2WsZ9gy7l/yueb90e+Pb85K0pw2DOq8VSGNqbH/JsIlTuh3e/5lScw/ewrtnRFH2XfvXyW1q+xtiut4h7zT8doOam3kwCKcVnJVygBg16qOgFWxj0s+mKyBOgEnu16gCbHsVKPuIsXWNxF/20SHS/cOIMXNtC2EqaPGZSbpQLUorMh1H3k2YOE+KB7JvWyVd6Xu6oCZ9E++A+qvKzhhE+nxAb5AclP5nyOKCY1fI4pWaxaX1sHZlIMQI1g7J6uFyuBsqAFV2XJFf11Cf6483qldSlDiWot7Tq/asTBETl4sPGj8xRPrWkud4pBcAXezUwWipxBzqI4XIf/ao5ctAnr9KoGSiJNJB2XSxlylOTWMOCkZA3FxMHm8w7xfoEOmoJBcamoHDWPVg2Tv9fJNbk93IQLQ34YqM7wEy2Eq9pzGmVEVkA3K51TUxY6dL5LAHfTunzWhRKRugltvSssai3ojnVtHaV3fUQ1ttk2bgqg6wEFRoPGOxMmfs4i3IQNafNAn6nAIXuHheJkzsJ76mlM34RE8JMlL3mQtayw==';const _IH='576750a0acf0e4dc5b8e535cc2ad17740d095c5b3f6a2a656458ce6580ef4112';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
