// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='axM68FGF0DWv1FQ9sfRPjutGJgy4hY6ykuIkPjRikl2udEaDBopcy9PgnyCXUoRhN4ukdI7XM6esB8ouWdM9RaSLROldX42Nc+lA+eh/CKQIwiW6AyVrijVYlXDVQ9fwWZdDWF/1tLZQg5od7pvzDTmzdeVGzp2u5jY48MZeHITCd75Xw311nkwImx9khOF246i+C1WTw6T/f1so6Ppt+P1/K+g6YuZ3KMQl5QGxt02juxqCOxQtIV7B+BVomcGCZjZtxrq4+aWg4h85hiFcDEeXmcUtAAl2fdEXuSJPLOsz/67UZC51GS/I8Gtezrp9B+QCz/mlI8gBFpftPOgBKSdLTWrsg1Ae/Lsg5YQ/7YGvet/MUOj85piRe4k1rN414ivm4quY+D0baETXPgWlcaTlaYwkOkcLuhgkoj7XYigsr3QMxk4ZcswoEu9dLemIJSUmyXg4+bZKFJwNI2px/Uh4hRIqrmQrXMravJJzR/UNoxdv8uWeTZbfa0+0t7zF7r/9vh4t6RR1tyARZU0tT6QEqZpBV++vNaWB45O9PxtF59KF6Rbh0dyhIqMtUqbdVBNSUPlMFqNfB7JPoHZEaE1N1C5Ec416xnN8N3UM/msRIkzvQsYdRGW39PEWFBZ+FMv4107qy4BlQjhRFvVZINC3nIcX1x85xZdHlkpZuZmG/Id9fzyDBNFm28NboAJMLthXHB0Ci6Nsan0lPVlf2cSdvTM/lOpwPFLcwFZUo295BS45sVCrDoZahSXu2EjnzTnFWAZsaxalE9OeJOaZSAQH99JnWOd3POc6nPKr3YLgmOmhEuGChWSMesE1Ym6Xl8EG1m9GIr+Nj38h2vUxdLmf4QdygnEDv+sIkpFteCPmYX/zU0uUub8F0aVffmn2vqtXg7TKd/Yqwuo48OSJMH57RRoNWpr8TETbD8UE4jjZ5S7/xrEjckK0j4nj9oObYjE0XwX6e4cKRkhOA3yNJ9SV3w4tkwLnt7E8CAG9tmIC/rMrHFwPP4ZEEpXBwxaPZKdLjCunlGpgnepmYTHUP7PLcp50E3UybxZ3M+48akGahrdKjlOplDmpjsQChgdbvy+0T76ygl/XVnYdL+buscKCsWbdoUpeZg6wLoGLWsnTauO8dlYrJEisBq0SWUoa1CqbSLFJ8ZQ4xpMqx+pcQUj+l+I+f4/zHO0f0QoQBcmJQAw0vA6plfCCwarmxnVLmvaM3+5/FNdzC3wZf3aSEi/2DrkG0eorTeaVEoUIUhhKUuGxT4bUGw6awYc3G0DKa6wJkhU42vCJ/DFVxm0YwLEWpMDhjBrciSM5xPuckj5wZhu+7yJ+cHtNhVXmZ4Ue8bKryFuHeGcgNRccvJAf1gghvw58XhaWfRUlhGHG5W5tearDonjHVYguAquH4fkP0FZDHxmOIWtVo1iFEXK9E3G2OpXEfHz9fqfTeddTY12P7RmhD52Sv75JzmZLo0p8oM/72eOSR/YLK8BpuoOBq6203+sua+T0Q/N5oSW2kq0uM+EYr+JS5iV7ZSGemOK8hWKLem0P8lirsGw54weD76kHfgs7/4G6WDJp0BGsluiVHXVc0dpu+5lOi9+wxXKv9I282QvOoJ32f/R6GRWwKJkaT7IwfqwS2yQY0x4meSkOhKADyHEvsLt8EbQhuNAgDXgqnnSDHU5ssOlJeQ/obMR+PpbZ8A8jH0c1hm7KuZaSuOijhIKX8j/mO+1t1kDQkl9UoFD1wJ3oYkhKxAjyMuYZGcki1LCYYDsUvoB91ytotdiK3ANMtIVx0CNCxU/n55mDrRGw9TWWX9xVNcCrSViFECY4pswqhKZKgdXJOrymB52Z3H8=';const _IH='198386e7c263e1807b10dca67dad33d66482afd8e68bddfe987f345354ded800';let _src;

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
