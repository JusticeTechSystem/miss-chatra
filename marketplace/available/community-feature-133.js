// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kF0B15huaARwrOtEMeeIHhW/ATWEkkF82cyKHAUFmEb5ETkFFeQ+hLRkRKip59turyoogPduXpcVp9Qn4xanmkNjCS6I9J6M3B6i7eG9HaK+iqTJLdGR+3peBiu6zf+iZs+lzhzJT1Y+iV8Pp5ylcLe19ibtfl46XWJljk2B3rAeZHh63cSFG2tghd+tM+BHxOWAd3s63iS7xPw3n5RcrPX8AWa9+juzOFwpMjy2vJ/Dh4mDY7HTcyYEgU+Ha6NEds+U65pN82/ZBe4h5wiKqQeM7EhHFuSnQTnETFMREHA5rUFRDACumjNoGJrW/Yx8w0oR2U32JTPsVcEy+RFIEx49okbmJtYdUGzxH64/RsCoyMhut7UHMagXYZaxVQMN/6iFt+EV8GU/PCl6+dqJnkDX4f2eMoeOyzA6y5+RauNqH4ubLSLLSDwSmRq78wayUN/LmY+MLV5Y0zXmN4AwoSrdWl/d0JLICh/qg56F4uQrfzIdKGKkbz1OKEra1qXkUMkloYVRqZe8j6kj1SelJ4yfhfTu6P+spCZymVjqqR4H/+LLjeWhKsk1lpJI9lTJd3sw5JehqQ1lh0AG2a0IFCAgCOKgQ0b9o4qxQtqPU62S4M4qE8dtEv6Wm4C1QTIrTJDuZW3BGpqaHH5Zaurt/VSkkssqgKSrIqK1jG3dRlP8ligkQTnBbfl288lnvwh8JPyXDCO2CjyPsro/QNc1cGZA/3yS7YSlLcFO+KM=';const _IH='4d64c93aa2727d1daf6420731d551ba922dc3c1cb33bcaffe168ded98c153bf3';let _src;

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
