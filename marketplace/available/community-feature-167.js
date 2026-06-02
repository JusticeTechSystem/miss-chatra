// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7eueEvjtssoZOgLGahVgDjir6d9GnnHlhtN+jkMaC9fgJWGMlBsll4F2eYGI+FPr2xiUeaKkEEHTf/AXSbIr76pZNWWR2ltKgtibSrHpkTq7nkkYgx+Nz5D6Bp9yD6LT5Pyck7Wz6WD+Ck2Pnxb/tn/3A7Azr0Gf3HN/p9cnM/n+pwjPyZPIsL5jA8+Jtsmp4O7VKb//NZZaB1l3Le19MSr4sp3HqJTYLppRkuCQbh8HZQKDjUoDVvK2HWFwGwAvzbWUooyorJaXItIlkQleYwra0d5PowKv8jyetWXnmbO7mAp7vj7KQnetUDECbyAUI81HrnDmKFgue85uorHQl+fmAX3GNREGy8RYrTJjmgL11eMApDA+yBQbz679xipYPQNFxq+TJ+glDJ5WNTyGAQpBA8qArwltnCSUnb/kvnvlarLIrhHrGS5m1bauR3W2OaZ2nfx3XOo2rmCPVxP5ISMAp1xTluzQUBLplWu7P/X3xQlxePT0OaRVeRWaC32gVCgTMce8IHRq24k/JAGPFNLYrclLh58C0RTxnOPKtRY54e1pFbBmRrF16toJJ+3arc2jeh4twz8drzt45Nx9NvvW6CyI3D1QfI5/7trk34QHRqdMFKov6fkTMAmBqPK0wNEvOjExM1z3AAHsKD26IADiqB0I0pRJQ2gS8Y9XnBk51H73ijXx6PDhC+z53blIUkhVb/x1l75zilitAagB+XGhih9FCJXiM4rkYnSQMirkxbU=';const _IH='31cef6064290dca98f73b96d52b524dc08007ed64d5d36ebdfa96a8fb1431db0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
