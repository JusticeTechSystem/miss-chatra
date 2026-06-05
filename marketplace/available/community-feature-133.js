// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oot5dxO5bTv6Xjwwj3YakFCY07xc/4T24MPPjSU603pyhZ1SelhivAip1wzqC3IVJ3/MuZG9nIp+Q+JJ56kS2gwUmYjEbjiqUqypzN6WVxNgzfFvQgrTMC7Oub9hTWrBz+/o2hDewgZDu0zO6aJpajcVa1agGsl82L2K9sKshSv5PUAFKrbz3YowBtYXkhAWEMIbLtfkPZC0q24tB9WhtzhhgOrPDQS0+jiMzrg6WlH9DEEObwMyf66zZdxRY11X2yD3Lz02aKl3VFjptiMHi22pokjxg7lp7kuKclzP4Nu5icH875710HgGi48lMyLa2kLyufIpICDQZUblXiAvOPwQ7Pu9j8/cGWD5asMV5ITvxQDNBWAHzFHfey4uOzUwTmrfX5uEhvF6cSqdirTlt8FaZwNSLRWsvWHn6xYTCC4YGEeWSjQekqzhLZp97RI4HvJW4SRDRR6osxdKCGHxrrxJotN73byda6/xrnC2LTZG6BQIZt0BVyU4+iGxpu4LUsDk10mQ8jOuxWg8mw26ZOlPPgGj84x8yBmlPdle7K0/I8U5ZMlR13TM6y9n+hhZUtRYz4tb0V6ZJjAkXpPeNtOoCejvluqKE7uIukl9ALr8FrrTJMCop8kycDyBVAK5tqOTgaQMOR9bp1rTEaTBhejT1UGMJNjIETgxljcyy4mmVng9DgygGF3rHU3YKEMN/xrofyFPQrzDDN7iJe/PKKip+yhXWI3My6k2q00=';const _IH='977a0dfec86dc50d6e3217c945a059abb873612b789beaa762852cbf37311afa';let _src;

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
