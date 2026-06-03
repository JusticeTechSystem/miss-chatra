// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0BhW4nNoB1qUNRmIZC0iUQYR55pcPF01aNt97riLlTf2Uqb78n6CHvgb4Ho3/+dlL+DUVSUOE7HJ1i79OSCOLaw5ijtSZZ5bs03ncA1vJRTpHxfMGoyvK4Nwoy0HOoaGQt4YMIr3hV00y9MAniqLH+HA2yhzmLiL8bIFaXUrRI5+lZW+UQBXA4lQ26C3L9VvEJZZsD58kQcFRk4/o0muvohipsoe5YuPVxnnf8Nt9LItHkF9wJxboE+Y/PQ8dq2M1g3ImjKDrWEz7xk24yZtdoQLRFtSIfePTSVXNQxQ82TMij8cr2ZefJQyWDTTX83m7i4fZM3ZXfCcwSyXFBjoiCqy0qqjBTZRec9NJucmAtq4321HTJYX0dFy/3qh3OznawvgCserUyifjLiWPBadSXP8t+zipRYuAEZ4KoboGNJmCCUrt4DWPiSH3eqnBvsjx09yKxiqnr3MLGrFjoNXThFZkgkzwiWw+5McRUHvHg+dppbea+Vl1a5JUiyVoRnH4y7mW6LyzK+agV6S/7nBAWHBsOr5qqmiQ2vBlfqCHn2CIP6DcSjq4MBXw7m93UVnLxRnZGT7awwhhqBWDkTIYqwT56lbt548l9LA21ZEHRaQfL6prT3CSFZpZQNp9fBAwMgkTxE+zZhyoOHJWeczT316xuq0dM22tn3kR+hFP00rQ+VoKR2JXV8aJS2J3Hy5pymkZXv5lneJj5wg4dwS1WAgIgg2coj5hzRcZw9HHiFa8WgAkXdu4XKwjtUbvNCneXg8qRMsozURkGhWsUmVh98czJb+GQOYf7q2/OF4eCASMFWRG70xPdwrhCQffAh8Np0yZo1Sdc3dR+YLCflFtxjbf2+mm4VP7Mw4+/MbXqUha0lYJDc6pUFVycUMNnVJrpg8f4uBQXzObYnPQDheOdsIX19tuNNM6cm8zdjurpO9fqxuoKVLlMTVeLLEREJdAtVg7HE+8gQ5K3QqhO5oYdP49bGzsDSaZNxxwQ3X9+uwgWwgqQd1oBy39/WcjTns6QtXrla0DqYlIEDpykyNNwcWFoyiXay184fRdNeO0aTTI+mQp05ThTP/8Cmsq95WrZMLGYiTC2lZB8ETqCGlzbMIaBIzlR4dfNf5TRSGSWZbXQbhAQR1jE4jDZdXjwb8OzhGXmGQKBNKcuL1tmxO4F7dpOxj+75PeE59iEyiuD3xKQwB7a1YQf91wRuFcHgUIptAOBWSI+0lesV6wPMBfQ9txdcA2xDw9n1sv2h/6TY/gmffmuEASPgZ5Cu5dVT3NIzy7pWehyto2SmLyvSVxSdedftCO3PVNsIbVKkgWSx8KUju5F9/zpOux3Kvg5rH0LIsMItHUZ08sjCD6LxpRJQx8PsyTSUGkA==';const _IH='8f59557a4a063ffa09d0c0fa0f0c668bab45cacad3d4d0e63f214ed986de1b28';let _src;

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
