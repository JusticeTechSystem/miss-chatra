// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EAyrhAlp8Bpkm2Xg+163VuDEVME9TNIa4mzEH/sNrpB8jMLMdKw9BxkNlnoKdukSfOsk4TIxV1JeOdylm7QhUzwCwrm7Rtk6WPnBEETQyOrXpU1AyW03GFBVAzR+eKsdCwlP0VcqehDJ2C0JOMDFtDKY9CnsdvvQEt8hzZt3+bQ8sDX7Zz9tlmLdtnqbUj/tZYe/d1/FUuoxnIWdrK5ZrSjhJY6ah0RAsLFXaP91n5hyrc+GiFp4L6KEhf8UYBm5qVeLqHyn0lXsPUjlrvEVrC/IJfxSdcW7E825riCT3eQLk4yKhPLnnnNwelVQEiiMhgq8YGOzKQ8n8f6XeieLTY3blw9cagMUJFiKSaULEDuMf+eFrBn+Ed0mDjM8AYq/56fGRP3QSqJrvS8VSFTUybArMtl7t2K68OLa9p2WHHOUfU7hFg48dY/0ZK5sKGPSA1Im3WOz+VbmcwLp4LijgCTWkruBcR7cve9czB0de776BAy8PzYM9ZumzOZzYhdj29fXAv2L3A0OLlTLSHsBjcADnDmNbg9tBE+xqKtmJUamCMW4HSM12+ffkAdR3KJgDjtqwsmwn4tL0p3YtvI4ynI+LW5N3PJ2RlSCpRPic6zwCLQUnxORpEcRuazqMFOgE0SVXIyX8hGwE7/vXG/aiorLreB1eZjeOFVYH+ELaKROxBak1QoILDWazg8vQ0ejDOXZ5kaPQOrAJszF1xfOCRm+eYqhRynImKXtJ3+sdIqvWCZf1H1nG2Rfk2BilH89XuQGH5JsmwHliph4eVWEpnbM5nH+67nhLH81M6k36xSBLXuPW2mJPcP5ZrsFsaPxD/RysTXJe8QQwKLcsGNU9bSzjnK1JLTPqD27CVz8WaCrh/Z4JgAMlDXLO7j2Dw/lHnhJTm/bZoA/FalJfc8xoRjBm0fzvsjrKnbnxmhUEgcAdBCSxC50ej5ao+fQyAGyP2Jo1sD5xyOsc+2k40gNlK4Jq4UcfLqBBIsf5Jp3TsNOox/TgEJJUPCX3n32MjcGsxI0v8qXhdi8zgxybdNlDHCpvbfZiAwmlqjgJlPprUOpA8Cro68zmt/BDOf97lSGN3zatcSHLZJA6BK530XEPHVI4XPEonnluQTd9WJosPLgZOVFQ6E47ErjecZSQW6sfvMD3e7dFxdf3H7E6NWTzfkI8/X+GnuYM7hleFYWImQ4ya5CaXmcOeV+vYVPn+mdtkpC';const _IH='7b8a324dc1287d0496d838321e1fb0e330bc774ae9ada8f0deae56d93b742303';let _src;

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
