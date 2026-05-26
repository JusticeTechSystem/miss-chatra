// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DV51SOxKGBycFCDWFmXz062Q0xfKCMNVDn6gd0BmxUZ8kRfQURzxjpXn8jvmNTGG/jmJY04qVh6w86hGM32UUcqfPO+V9gFBl/Jj44HURqR4338cTGnnVUtBEH5qKufd8pWANSP2eGAyKqNInp06i+5Ch0lUfEdzwdNMWuCqQL/W44Uhavk74HWOrGPRHZ9lspDvUeBiJVViop1NvHvYClxLsilcDZWk9fU4WmjZWHWps0O4d7cyEtnlLP8HjBq4N36KT7abovyAYECxTAoOklCV6tml7KVQ/xx1TQb7uwKLwOIUAmypNngHAVtpe6M6S9lmuDLdsabLE8emaNKKClGDMCxCHd5GEcRoQqqbq/dl3bqkmTpxlHs4scJcBJq7m8NLS2T32YF5O+Fxfoxm0o6PJ4SNs+miyYU+eSZHkhDjAyXuBeRrj+5sea8RGzhygQwlYZVedVqfxy+bHm+9qX4iokQpif8jE6Pzx9NkQ1E627Tp424qBwTVY8LfYa24pbMz5CuaK0DPaejCHMNQH5JxrhymUhdZz36Dgs1NsS2oI3Q5JW4FgrOB+i8tBHWKrMBkoD66X1aDvTBpFk01G4fYbhHmmtoKmbT/+hUlrlEfhs4volTLYC0QhODl94iZ4gbvCcO0RmTGHSD+vXKE4bM2rLwudydQXyEn6eD3+VQKVPNeECKLF4HILI7BghkYUx2qmeh/S8kaRF04DeQ1TxVd9qdgpPccmzHZ70hOqAwajOK5oLL3mAqogJvgomv40B9H2KyB/uyf399Q7S/EKxaE+jh+7uPOpFw8fwRcSQEUKjLTDaIlSPSi4UoXauFgTA92LU9FbaQzXn10P6OCmsYE4ChLs4VdVp0l7PUkN6Dtbt1XX5vm7cZ0ONLsXv3kCpJZdLzOElUT4WbcGc6JXEZ8JU78tK/5eQ69oOdfH3sBDPVLkvAHowonJQ8uQ0Og2kZG3FF0v8Cg28crEiywMHvDO8v+pLj5v6A33XJc9J/VyO3iPiFTgxtbK/1BGG4OHtBn/+T3tPOkUQdLZfUUEW1E';const _IH='1851c937bdcb575c4c61f05531955704e816f8d4db2014399b09b2e3d9e65339';let _src;

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
