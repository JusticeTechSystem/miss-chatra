// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='le324TIbkSp8OK0h7lcgp//NGcGRDQwKPMfviDm7k5ZOarEoQKLb02UzBfF78TACTim5OITDyTrfVI+bDM3ElQ27gKdDzLKRidSWHV26sgUorxqE7jOiD881VYukn0WuNMG/qxzP+TTITmZr0vBPoQtfPVXthB4SImPWReI5v1VBg1SUxGshe4cNWOZEAA7uHNnV/ZDu0R8hyztyylVEWmaHZJ2kFDEgbrHKrEVGO9WW4Suar7gJW1AtaIqZOUk9FKrk3zkaDizs+ujZzZn53P3XiTUJkAkO9MPqXqSVJVzyqXjgynqKBynd9Ohxi8LANX0imq/0VNAiv4sd6kgpiSQEflwFthDtt34jlXVbEiW/yY+7uhiAU/5rENCF5HhdJbgcqn8VptDzqAoiUQMFfp6tuoSQKBRxjSct67BUwdM7Y+Yzr/vvWo6Sao6Q13IOKsaJDIIguGeYqxPpi6HW7xB0r2K600eomjRduAMwo6pclAgL3GaHmsPoY1SEwX1aSx9wqU1Rk02Zt9rClTeXQmgRrCWjNG3pgkdN5D+BE4GpZb/Mye0Q9+Z/imFyIVaLB7UdvauPP3bXBvRCg3N/mBWygcvLYSHBP2DiwpNS1QurWOAgXKacmFqiA6r+Hr4UbskdyvhcG9OigyhwBtxCV8zpWF15utGNdK6v5gvpjYhmI8CRuUD5q9ktziwkUCNdUW8iTJYEdIx1eCV41lRZBQqPQ8AtNMFKnuZNzx4fGui1fiKkhjiMNMl4';const _IH='39fa94ad3ca7bcc6cc14964eda4690b3962b3c5c731b46c92826372ae3cd973c';let _src;

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
