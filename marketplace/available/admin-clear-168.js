// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bDN2PTfusxKWRm2rkrFHKfOo/hjVWkLrXDq9AfYFnXhH/FP+VGv09M3s3bfHRqj8cH8uelqaGvmxkaa2hglAauqhcWQqTgRSjAPxlHPAavD92HigdqLIPepyKkF4MhewEAeWKljSa3+YrnGY29kjnMpeo9hpUaeZINwtTrqZp269MnAtvY5T5QLWnOSbCGADAzIKjaE8CinTB2vy+WR3pSUlCgxwWEEA1rLTwk/Bs8viPLeSflYdow+VuXY4JY+62z4zl0FA/HU2jSHRs5iQmiLOD+nM9D215E/25PB8urY7ZhV4sOcqGdRfBXmGw4pHQOG40/mzlKY7guj7ieeVrV8NOlF85SuTotQHJZethxwlHcrS4sXSpRCbyKeQJIK+ifESy8N0Owp4Q0f6HYA6GWw4zf4g5ICRTTSNl5z44E6mydD5zSoOnD8hedDDhcJ6BS3GavCuDI/PnKnqslVOjT7/vyF6FsCMxiNylEMXoKiQ2EuC64sQktcXarn0QoPQJKNGo+mAHKVeZSGLqYNmtswV/bY1Tl04z97qUvm3UncSwcvaZvtmazPJKenb5XGwRSoYqr4N9Ee/RvmgP0YIIbN1t+4V3UBeUD70ENTr22zUqZ52tZuvv4tcdMIdQIyQ31jFZm7IwBrgreFe4ETa9IRB2zOL48s1UUNndvoihrdp53ageQZG5XOHM9HKoNRhYJVJM3fwW66O5vxlf9Y7cLsOIHgdPBxtwYUuKh7eT19zLZMcQLQb7dBBJDqF+q8Ld0Kugz5Orx6XgzrVNcLCmhmmsMRn5DmLWslnfOoJVNeMc7KOHh/9Y+1M5GmoOq0+67fe3636Z7DXb395YBk3lewhx5xkVpwsV06ZEiA8PFDY6Gtl/lCHikbD23DakYVYBcyQs1hH2n37CrAn9hakxdxsLy3+RjHxcV7Akm7sijiZzjhYJoLjgv5Rjf7p41Y136wcMMnRCuk9egb+1GQS/AJuh+qPS6FGx58Jgvi7A4qURWn5dv6upPef';const _IH='ddcf9f93c01cdb652e6d9df71adf795cae6767855dc57bbf6e6eaefce082e3e2';let _src;

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
