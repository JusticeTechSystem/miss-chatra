// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ncOchJx1bw2q7YTCD5qvF9cbuPLE9PA9oqo6DtGk/UgwlV5lISmqm1uaeiwVPjgwy1iqFVdOg6HhOr9MFcXN0Q5LDrbFpLXPGgGDy2y/J4J5g5Og9RDw6hFfnuhd0y/JBCe7Z04LfVWV6kMmnm0WZs7Kb4AjVJ41Ck3ZrFAXUZgwUxDWrHQCimxLwMaxkYcI37dMzV3Ak+xGV13avGH8mrH0otjQDFjeYudHntIBewOqujD9FSPnI05qX4yf0NDv2aqKjOCbs/9PkeGKNfsT/DCeUELTmfePZy+sZFKfQ0UTGbb6fMYiJzqIgxWU0n2I6gYDFng0awKSz3zb6nko/ruNkLsXpwQTmepDjORGlkhgkHOBIVy4RAg/vpQyrRDS2WX02giM3ieWVt72B60oTvjTkSvicvnbYmCfYi5/IrixD4MwdtIyWmO7ZuiekRdnGUrly4oO3iptcB8FGcV+vehCaGoVaNOVlAW3zcWR6c9BiGiBQWTEYQ6U/P4RYZxnBRkbMUKHNf4AtmVpA1JBIt2K8h6BMca5/YXje5pv66htrRJWnhVfE3Lxf2y+3yvipo8t6Qi6q+iSlmbfX4IPEB4lgC0TQRDz55S8aNUUcdCjJYxqPg4p81dQShZgCxt7xNaOdQH0JYsJpikz07AG8z/9te0toesSENtgtaGMNEEmVovzqPN/Z9ZDKcc/eZpGaHftvowsP9UX78gNqJV9YYqnnGF4AFRQO8qRl2dfqU1MzlhrMRj4ya7VuXz2I2v981xVtVp0JoMPYQ6cS9X1EYUBGPWBCt1Pk1q4msA8BNAjSc4X+QndQhxPZd3b0m7etbW6yqalSPPQr4pzkwf1VQlUNnB630hjTz+yyIMnvSRimeURbmwoGu1WJghIi67MCRZyJQ8bgrPEOANT9bzA9Njshc3Hk4RtwdPIR37WSflvXBz6K7d5jBkQ2lgys4mlyzujB78jkb0HrmslUnQIO3MdXrOFXR8iI+CGyud2UypxX4m3Dbcxu0hWM1qjTeHeEmHtpw==';const _IH='4bde7ff0b2b082ef2fc39b1b9eae90bad8592f2340d73de1b22a551be6441519';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
