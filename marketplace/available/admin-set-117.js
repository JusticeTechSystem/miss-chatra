// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUt7Y0LfCnjoaprZUFCETf98jKHesqS/Ps3WN2kD6gJ3t3TO05K2U2QTYshRvA/nFI0+cPi9fZ6tDcgyRexsKpfqEHHXtHAPxE6kC7bxu09KDAP97qB2tHDSspOfRtuJ3YEl/yw8D2pcnyDipCogL/yg1nOB9cte7XYFnR4RriYtANySGXGbx+Z0nBMvAgTf13RvO05sC6lPVzz/ZnJacfaeTfqqXSOWTj3kpxVNOnd2EKguU/4Axa01DYAPH8damBXJtEbkfepVWEjf/IpAQb1HejvUzatos3WTInFlNpyNR75xkAmiGM5pXFlc3zck98KaggUCCrycWmtVWTFGkiEtY+8jvTTeLEyatA20GUkGikb7uxSHBrJPQkeJC3xGGVXFg3I/298Hk67nuQyYLbhNq2C1tNSJWgE5QaEO77mSNsk3XWgY8NOzTtAwO1QlwO0dpBrFqqDyaesoygnk9bKdS70ncWrNtXSD/iyo4s/ag8iUoxHCi/bZi2f7arbyX70xnbhW8D8z/6F3JhlmMue3wLoFa8mmKZ0BUpjPB6oeQBCVXixHRm5Bysd6B5ecI+Jdn6k/HISAbHZBcSbTl1SRuB6dFbGnjkmZhheyV+GPFQQqZ72orpr5Lf4V1ro4K9cwlGXa1/qWdTB4j1oUrhO1IOEXJzHIvdMKfdAQYImxYhzSS4LPNDOwbQCw/ojOyd5i4BBqBMns5jQNLlzBx8iMqLUIjT58yeANC1tmCFW8mJyb3Q+eKCIdVxKeYFCaZWmgmJkX0iZHqXvyUt/OZqRcH9JUD6nqAI3ocKjYPS/gFtUjdMlm6b57X97G+qQI8JtQRVs8WZnr6rN3OVSZT3jRYixSuO4feonWurPC5dvIOT/RJd46fGQlO9biTYFgJgyEgxnyVpnBBdsG8fEvikGgIt5AuGLjHP8Gmc3mbY60T/GjVPbcissasFhLJt9rSyDPGTGHR3CbdR8jAkdNHRpyfquBzq8U0CfIBy';const _IH='e74a73a74add3331c1c5480d7f96423628a468b97dea2b720e9ef8a2ac3963ac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
