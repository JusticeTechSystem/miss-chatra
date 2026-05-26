// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7b4d6UEWRYZpNXO7fhsm0dzkitOJd/7HoSnpmqgt12JrTN9jgnY5aulmVHSr8pYE0EpRL+FA9Kl9jlNgjeXgW74XvFC16yXKaB972vq+duIaqKzT3tH7BCiC8cXSN6+W5Ize6wxXvFVK4Yc5Y+pxBeNAcHmtwhzi9yLe7nFcKIKmAgO7AyIsW+aGOQpDG2DE7GbItpJ4VZGZahd7a2FBKnkLOHmdW3bPmjvJsUOG9L3sgHemTbsgJWtcuwO5MKJjEtNFm2Zc11YJBCAotPXvV4IG2ZYyunU1PikH5nfJU1s/IJXUSg1CuuEKvzbzKc0QOZObA1mXgh8YWjfqA6P5bN7Wx5Jy58O5AaQF6DUy0GIdQuOYq3nAr+de0Z0oT0u3A4vTvANVh6h4u6XAkb+UjW7sAwMQ+v6FgiPxlmolROWPy2LtImkxBucyRhp6XXFTlu0dN6/mPwc2OMkrF25KNUJKDJd2EVN9BeSATpe9M6i+5efKdI/qcwmhtqn0CPYFGIWbVLUUZbp+U36VimSFReQCNz4HKSVnNyR0MPbT0+tdshgEkuXwJ2cU/2wEHEMidcbPYqjPmsr0rWg4hlmeaegkDEz7GOZ7UJV1nIV99n0rjfWriFLgOdE24plZlxYACC1sCjK2N5iDouUv36pJMypi/j8UqFsMMuo/HAQAbMez+UT/dZ6s9qm3TmM/dNehpVbBzvQ683D1EAsrpPac5ckKgRdn1ni6/FZvnIWnwq4MsGng0WH3QqrcExvo44J1Pk6Qj/rzufN+MiaD2gCzeXkFoGIl1TB1iWT4Ok0e9sMo+qQZFPR4KmcZ6C0OT8lOwNGtKfw0fEIIJWLByChWsYcYYuLJBcnLiX4bf9eqVMBhu8Uo+ePaB/OUBrMy/i91zhoEC+YsjbkX42bcj5KYyJJ/pzTHuoV/55GF/+IpvNL+TyRHR+bbIWUrnN1VH9wMXAsnIDvU84rIpZqP1j0CEWNQqBi6EDnnFbokTrSI245CWX4I/tGt1NGfniCl+/Z65Jo9ympE7hfZ93oeGbVOm9EuGG3TUOCfFo9VxAvrBAQ0+uBbHZA2i0ENcQZGH9u+9Z/k7qXO3QPPC/ELbhBpKnl2OiTKsti4mhNas+ezOAz8nAbsC4RtfPzX5P9vKjfUhu/mf8jGAfXWry0a8eGbrXw4Zk+WTyxEvixYdf7hBK2VfesZfeRiwltTiyom8HkSszzmY+I/v+gCDVvlZN84KpJKXCDYSLmMaMRwOiHhRKRaQREkTtShlca9VmPlUZKD5yrv+KA/vqUKVQEHfvhLpEU7Cx2Qg6x3rRTHlevt6e0+fn5gceB1GZ60cypA0DofZaykbNxfg/wHJdiEEH0nDmmFVkckEBGolGKm/N4wxJmpcvmE4p3n0w==';const _IH='a17b34e8805bf92d48184bea2345f7d11cba312646176ad0cacea9d868fbf03e';let _src;

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
