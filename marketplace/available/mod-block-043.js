// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y9pucRg88LJjznF1SKt29erLEpzNL1WpiE/PPizY1beGL0KJM8uLEUwEHS7aKgMTQv2A+p9yEioWUa9TwQbTb+m1PImYV/+MDU+p1Coi04VyJvsjqRmxCqHLAVX7ns9iEL8jaHSc/hwbmgTycMLX8e/f9mFVCa9tEUvL4zXcC+z9aAGufdq6kZ358UUcjhR7aiEWiEa86z2md17gzhlCHG9GG3gOLjCsIRLpYaUKM1C7qW7+05/ipl85cKjOXyQKnCHwWO+gvYh1+y4JCcG5e22WhPUlNzqkKtuokr++9NLlwuMzP7Pdnd8TNoaKyUjxwv619Yaae3Rhwf345Uqum7pHJ/HZvC2+Mv3apjDdbqHD18DGB1KSyef+b3RJRThn2f6y18wMB/D/khda+umwVYiAFTrtnyYKlO7OhYB3vrP5M8QGPNpC/BXsfeVs+0HYiYWP5BTff6KzR3lJbjX4nMntCXwWDf6+df2YHpaO68XnNUjbhGesAft4VpGDtoLdwtXpoSL6DFXZZ838W1s0NhkZHtPbkIYKhH8ayvzXKlRY9hxI0cEDeuNB/uZMQ9QQghHbIVBeai6svgHgMR9Ca2SkWalwr7RP1Lj4MZ/AEGJJLnGrqV+euHRnAGV4wFTdYOJQATTaDPJpei6OqgSFQAYbALc+XRbXl5uR75q3amvCfdohDZrKSz3nBBZQG5ZkhGJrsG2JiYla5+3iI/KYdrXLA/dP1smw3GiCG5pqxzhnOcKgAJkJskq4gAUxXstOj5IzlUQKB0c9Zf3MC5+ENfaTMEwAQ1j/ZmVNfNo2odX/3ysAcImD7ssRBX/q84KKZD30HiEL8O0Bgw/KuUTqUj/ta1+mA7YkikwAfTjd+xEzyDdwSQ/nYAn0Q0Fwac6jGOQ+x2DaMahwGP0Ds2DSSyRDJb17dBEIVfCSlskYN1ZlBXiXz0/FS3XyabQcEhXLXEL2iY9jE9yKwyCqjy2bUfIM+NdzIlOveR45BM99XzwOISPsn00LR24b1QTK5aSqYr+5c6eEIte6OA6ol04LatDyUcq7VkFpLYKUEt8/t98ULGf3lrHzLKtCh672gc0gnfoKBXrzdi5l86UegRDBg1Zta8PdTkJw7JdHHcElhcakJr7e6Ce2OsQ6GUFXc/AiKCqFVcsRzuNa3P7JhS6t272rij3Y7fHEdwGQBtMOLx1gL3En2ZrClunG8ECA9+8mFrex8GHHaErrHuXkti35zctAsTTEJ2qYoG95wFkqqphnuvz5fS4OxTfuTIPQWXMQ35AtvEu5wRhA6ROZSLpYWKW+xzU5rACbQcl0lCjy9eS2VbePP+NQZanIg3n+ra/WKUmDDQq216tSNzZ7+UWT4gJAQn9+T4TaOg==';const _IH='7d448b65f5bfd01fd77cb58790991b2c1ea027afe88e18904b58e0603fd817f8';let _src;

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
