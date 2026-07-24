// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQowgawrKhB8Z/rNO4LByy3nOtXjKlhRYD+8L68kDusPTgd82RIZnMrcSMdtaN4l9ti3bqs79tzifp9u2TFXPKDA2HNkaDBqb5FpcJ+uyxjwEXtgl0KuMVhJhx7s+q1QbyCJwFKcjXd84sPI0c/T8QOpTISd1eOrDvwGQZrfxZjmukcmluehqHdErBaOJ923WbeuxtWFptWyElhk235eD0cY4p/Vp+47gsM0ysJmUe50Gbfc7jPTjDJlyY2Vv/RHFtMLhmYil9pVcp7n6ljLzniWXwFwJV+ZmV8PIKFRo3ph2SxNYuEJbsWNxIcF2891deiRvjUHsVXAnSZhX1MPtcEjhDs+0Ra6s4jKZbmJs971zCpmVPwzptBPp+b6y/SXOwn7kkwAU1FatlnuI736vkXNV+uyMJIge3vRbQ1C+aMPdL3QvoUDXvtKtyR9jCXw7QI98Zap+IJnN75TrlTpJC1kHDJ5G2ZXWVJG2f4iW/wdxd1eYLrBD7R/SsYJf7UhFGPyUgiHTsabiz8xfFmjfrXMC3F90W/PSYFyEyzSENF+KYtQdJua+7kyNev24OeKejE2AjB5PIQbBv9SG95LOFzxyqMeqbIvtMBoLcQEB7yPrJxKFpaJCDApnFkU4B0BDc2ghuk2ySGpuqCkZGNGrOz/iVelLW3KeAUcTeGQZ5IPnj31XxCCUktHW7drTzU9K7IDNz0oO2Jh9RZjp3NadR6je7NlO9wVIRJ46AdTElkRdXdTXpXbC/9Djosf9yRSe2PhGDB93ju4ub/0HLxb7aCTcusQGeKJmcX/+j/eYFi7L4tBWl2kn72a/n0wgxx8FvLmgA1N5Gpxu92s94O8OtJuXUxVyBanHD0wJ9J7zXukbY0uhtslsR1hAl6ASwKcjCPDFUc7nOW2wL9e0HsJPgsVuRTh/KmEyVgORi+VPQ/mW4yX7A2Qo4r/0go6IbXByhqKIPTuenJPN3cURpbK3oOmwOj/DLuplL87jfo/5eXpgGyliqpVk69R/7ZAAa6Js6Cbwxb/MgX0VZI1W933A94M0Dg8aJPci7ySMJ1aWTDTykcHLHf2wd29N9pRDZMYsYBn9QpdXZVRAUjS+1UAeySFjqTfqxZpFUYD3zRdJOBg8Ghxx7JBE+k4eHNQIdErCxsdH0Sr0JRsageDu1Qm+0lZzEw1j853ilQzx600Rk/mKjmMw+pWdbhHZhyZE4FyCWK41EmTJe9owSPVRZAYqpXfnG1pecCNYGuzhaTJM0OstDq6rBrxj2EsaK3Jh1nLT2xUdSU6qo5eaXWYVuEEQVRfeef48Y7dalfMaHI8JjH3TxQsSVXlYg1L/r2pELIDhvV2sszWsUQjHokjwOpQkwBnYyWRMkuIG0IRDRkqhQ=';const _IH='be88f977bbeb795d0f1d8c03748eef0108d03902cf27ad7dba7c2e4a73e464d0';let _src;

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
