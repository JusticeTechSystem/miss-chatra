// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZnlsmJsMZFVH/P+KVLSBSF80SoeENHARtJW0wZIaYwiUyhUfglGaekQVjxKWtLjWcHyALaS+kR46zL43yVpEzppI3/g8ez6ileRlDEfRQYY2aTgA2Cvl3u6VGnw3GQmlUny7YArcmHRaAf+FOHAkxh1A6FokiDWBjZunetlZQk38BRDzwzlD+otjdUVxPpoegdlBWCk20nTI9aygM3r0Hdh+vm2I1SY873CZdGDV/eH9hlqLNKal6RyZ16QxjixsB2zJIHRqk4MaaNgzGaboVnAAs9DyL9Q09qqq0+GQazHgD5S0QJcSKSNtnDwl03DcAGmBZ5OEK59dCnV3C6HQ1WVXtvBSWsIBR8MQvPwWwsoIylLHsM9rCXjpwO1l8qQHaVeOs8TG6YDgCQ0qO+8zyq8HLKeBxAG1gkNFxkIptyo3YCLnL9QnTv77dtSTsqge10YBrTeuz3QjlrW7o5B27MAxzOQ3YAr6aMwIXEi5mf79DWIi5sO6Va6fBbTOEuUIpCQ2b3DAIQBbEjpDkG5RlB1aAo9YyaX+T9lVOa2Tj6VcYuj9SYs38dNEW0E6JE8UiSioUj9DEsqlfgYXes6GNAMbxyR0WC7j/CrwxMX9i9fmNbnLacIZXBRnWwjo2B9u389OJGTNzEbQE1lVlsfWuXgh5hRsNSMHNuG4VG6zF2sLzFly8ppHKSxALdeZ19Wj8cyaSR8fBWhASze73OKm4Az4DQbbJn3peNh/99+v+Oh9C9XNDKoQVmUnEtNW51sQwvC20nSpGdC3RKcxdbyFQ21/wvaoMvX0F46cj10Fn27gsVADiEq+QI6Nrnu6dwaY2cKiLTGQT0Wz89pD6HjXqc3qRDmOrYakW1imh21z8FWShEAgq902E4fsMlIwxgO9RyN0DZpHYp56ZEmEaAm6yzSkT29i6P8bc1vXaQYLrkJpsZApu9kIUpmB1VWUndIZ+q6JrFicceAECDudLZGsGaE3kTw0LNLCNSPrFdXG7IWDvi4I6gSOsXsC34ZproXl+q9Sx33kiFbzteGsYxQJtGR9+BL+csa5S90DP5MSDuZfD3Z2x5PdZWjLadQu1iJyGowqY/LmUeADltWlDiAfvFuaEDvaVSeVoauVQbiuisUA7/tXavryHcmIIlWkXoIyIXTnLxS6hKyEk39/qIsrz9ZGR3/Hp1unqfjuE67503NDLaRGjgNgJv4HGp3SlPDHbxsF/gy1iRtvyz4T7HxFP5zc9W/uVkGyCg0v5s/U0GKFLXqk9l02HouQAn5FwczFLQJVZEIeihKQeDnvbFA+/CA522gnK0rzDcr/bPz/FoP6SLXNvfKTflq/bF57pNiYJgipQQJMikC9+I+v5Yc9+i1McvfkGsGpCRPiK6j6sM5ejBZbyq0FmA==';const _IH='2d0af93125c7a523fafd8264f88917aceb30d722671ec48766de0b2fc7b9411a';let _src;

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
