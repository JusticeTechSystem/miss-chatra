// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2y48K5CabkMko9Nroe9KFiSEccWP5gQynZ/Ws0P97GzADZ/dDMyjpgOjimOl6MUSO2irdjJQTecsIADqmkgZFq1ze8NQTRDhvye8Vc3IISifLHSa/uV7PbcYFiENarIwbFjMFswTn1jIdQHwalWobBJcLubWz14K/uverPsSR8rFj05m5qDfIWlr1WXUQqzS5zXlmGWGlghPVfrU9tMfndJEDCAHthLbz10hGntG2LKr8GJr16Z+RcA1Vmw0ZeAkllX8gqh8UacuiI0PxTzbH7QS5pzr+/z4lHMWO3DFNXAa5Cf/wFABpv1lUxtSf3t/5jeX+IcbBe56XrvaZpAuQneNR+Usa82SAHMwlXQWVEba6Fh75vVIyzQV+udFfux772m10CWwrAeYtQD3dph4QKSrJ3g7JfD9r4MPMDdiW1A8cHcSoYTaILoTOZZwNDosxQ7ss5RTvoCffWsYGjKqgI71tgwnSInbSq2lVykGrLFEupin/Sz7hDvhCkOa7rDSKcjG49f1bMxoAWYKRfD7xE7iCz3P5xzOaORgmmPWMBfL6ECE5r1LNjwsipuOPQh+dCOUakOh9GxNxwrRTQXzBPhAGG8c85/wu4rr9CwDYNIgLqkty7q4cTK11pJgM9h/Hwc0l6ngwPa2FZfqwvl0PM/pZm46B+tigCwNthETk2AI2EXS27FTJ2JBv2MJkOix3O3T29BeYFCZ5750RL2RAR4ONY7eRsXc1BobiuQtcguUXGyPTK9zCyWBb1zgattXvRVN1vYM5NPnE5bNobzIy7Fg997s01PXUtu7vtO0cQKN2CW5JBGx4QirAQyxfCAJJuRlYmd5axA44uXvuIbnGQdDF+l+LUljGIArH04UPrcWXhF0N+KjsnV/xQgzcsuT7a/yXfq3SAWKVFNnuj30G2hS+BQVOGj10rs22470kjzLiSOJ67zH679LcmXzBKnkypSnuYGmH2n/2e54w/MOSlNZMh4alri2WOU+LAPsVBKr8QCFWU9d+KGZ';const _IH='2865a0f185799ee3c8744baa4834a53e8c1207e3e331a2669385be22e216af85';let _src;

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
