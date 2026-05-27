// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yBhZXNwlsvWOE2aj9gGcjwYdWEh/2We3zMuCL+mytuND6qHq28yWI6zbW7e6hxjuCM70l7rb3Np4LECn0fm0lI/WAB9CMj1fAcc/VehjN1D0RA00QhZRJwS01eD23JqrPYBRRPvwRVGxKMHQUR6nPsVqfqmyYcwUd6dD8sOgdcWvoWjN+gvr/UywIcnD1fTH+WAul940YU5u6oCuZdQReO8d/bOqDqSSRCiVq60zDx3zIElX5tRLVe9b/3uOzolBJLym4GWlQjJU0GobadXGNiOVa4LHJyHW1FkvPJxcv7Hk+CzsJZqrOE7fIBqq2/GhRZvICWG4kR7UpEFpKaW6GkjsKN3Z8r16aXy8WmtrcywTV6OQ8t47LyNFx9XdwA56b2fUGHB28MN2Hd4MO9u3Mzosz7i5D2lcht65TrLpvm8DBXihRbhFgnyCMJCG5+Lbk3luQx/JlZ94xdIC3D4He2pXQOnRKclbTuXaPa/Luwt1BaIIq1INlPuN2uEk92qVcCHLHGt9y2qLlEn873nkHRohGyxoJRvKY2aLfEdeOUMJYJi5mkwbSHeixHEfMsjhbTQvwNNMf3ilVfOrIst8nyoI2GTjuuvJrw6zHVoavTxgnIazsrXlvucyWuYxwbtLkxcHAz0JsCOClzj8WdUuAPXO0kRgsaqS8h+pXJYOPv6V8BUGs86EKHu99sFfsB/AHFiTzRAbIlhEZEN6fycx+8PN2Suv5myw';const _IH='8ff39ddf672f63f17581eee86950320e7be99cc33b5ecdd25e6df01ab2ef374b';let _src;

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
