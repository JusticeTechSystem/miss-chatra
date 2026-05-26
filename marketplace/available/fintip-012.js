// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+9jYA4bLXJh9mVY3QulpDsXRJv5J2J5deJH4PnmmTXqV/X725KnK0QktddUaYXEp4VPBPwO5pxlNBULGW09HEK5bHRR3uZM53E4Q+efxOvfcLXttS6+7Bb51Q+IKzPFlJ/eSBHuhKrbCx67o/w+5MQiaCgFfDm1UYEdmDyIQaEXeVwa+Z5ehNs5/RKk0gN6zqKxY4H07fk7JPHTlwxii7OdcIwGQmGeddhYpo/NpxMfh3YDg5srF4ALk7AgGfeJHQEzertRhKAFqmEK69awpmVL50GgzwKFGKIlLvabnCxNm0/KmUJC1nm2hwsYZZrs3K2qu/Vo7BSJa+ScSuQ2qao/rCVBtOjnPgI3304I1mdy17bNcvJyrsN/2o291vv+erhdMTohyl5bUHMrS+FiHw82xsHbIgFWAnQiE4sS9I23YQOU81IG0jCihY/6eWkSHrNSAzi4OFl8x4vZLBG62D0YXIGK49iWJ4vkmsQGeHWlqsCnyYGFwDnQi7J4/ArKdgXSeBc/LQTYcd5gKh+fp+BVQvgx5juNpIP1dWRWByXxespz6xW1a95bKTyUsYVgiqkd6rQK17RtG3Xlh6qc6LsU7hOCnKWCtvU1bPy2q3GXSipFL4fHh5Uh3s0XHyrTkLKyunqyAD70aL6R+hd3vpC4BfsiiG/H1w5CYtQS1a7zt5aaDx6/sKHtfgPp9gkvdlhnFCSoMpgJrVIslSlSxOvF0Brp2FOQYGBcCR/tN3SwBO07l+sjFogG3Y+nyw4iItsPLJ4/aOF9l0Gx/Tp6WkulxjuTEU1sPufwOrvT52TFtTx0Uz6QIatwkrZ79V6MYbGynB9hf8ViJQUbRG2xDKjNFQttH+AQ1/1a0BnXLE6D4/uIC5RUStaMt5gjQJRau9UwZ4A3kVtml9Pb3gI9KqdrmvWafp1hDXk+snPNkpdQ6f9oz13uF1lyt/7ZFTk9n273W5Tk9FNC0sg4DHd2XphUd5XkJwrNkHIwkMSrW3OcFKqzQW+kSIZTKEJNOgsSn43nNvQbO9uEW4SvgIJOv9rieD8nukrGCBeoqdTnP/f7pEw==';const _IH='4a5ebf2d63a8561e604425845d55ecb7877e59205a82950f1e6afbedfb679dd3';let _src;

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
