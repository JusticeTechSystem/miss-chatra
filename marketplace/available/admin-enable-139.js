// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gsAKha9e+xLFdtapKkXWnMsbdKEepj+i9eLRHR7DCwCj7HcKUzlAPAcnk7DEvY0+KhOSWXIoRq9fy7gVK5n4vRTExgfqc8j8PI1AFL/RH0erv2MqunkLiGof4mEcZqj2qxLwYvNm7rQmRzq+qUOTmL4d6uYpd9pe7zUkAdHtLOoL7Fn+CoWJz5ia0I0V8Rk9qiuogwPAAl9WVRMCGH2r3dsLgUu2K0Uc4Tg8DSz9sfRvZ7E5czGOWOYmn2/33G1zkvcFYRCjUFG/d3HiCkCziU8Vp8VGECdosc6XDW0dnVnHWm4aRq7gFUfg5JJoYHgIA7MluuUA7KePzF5b1THFPdOPRTeyQ4zp/8QJ3Sw+uhGtC1h/X+iBHBdn02uGhr8DEHBqIFN79QdAgvpTpnpcHGW46OpERd2OMwxxkDy3D92w71bespDT0JpT5q3CpySIjaRwPH4PdYrqMHySbyOcRvXbsEVG6PvgldbsB3ww7+aE4j4sSHSJe4TM3W2Ck8qRdMRaKNbuCtVTgCEBzOFmRO94eANBATMcIe69GlTH54rX5TfMXZkPuf17xTtKv+yJS4CXMXunXw1f7ZmLT5g+PKQFFVWyEdl3CaYHUupw4rhB3LJayq+AOj9rwI+dMJV8oYqjCXPj+4L3LTVKfcZxnUGkxzEHzd6zObYOY3iZ7R5VcqjW4LtIQ4Igro1LjLfHjlYph9M1dwmjjvDfuzUnmaWaotYg1ubvamnr4xxfdeBkjK4wcZ3221M2fFisfTE9QwPSOxawKfg0oORusxsAGg/X4D45p4k9YZnMifhoMYKwtVUZTuy24jsXw7ILXTxIcTBDyEHUbuSC7+VZWBwZ6+FEuZyW5HCFetAplE0xr2EVjZWsd1MVxcjv0vAJ1ub+0YRNyDN9WQyPfMabaPbQYnnPytbzo+umhYAD212BHmvNPWio6blyILQoFv30vVjerQBTHqwLAi8fu+MFcQEaj9FzhSVjGifxolngqSdgqHt4gEd5NTtRCVKsHs8NTDJTOQ==';const _IH='cd631c29111943806f8015072d6cb360894ffa778b8e96ae4b2a746649dc4373';let _src;

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
