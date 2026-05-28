// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vX8xUmsU9sBYJX/mugtoHHPIgv8EsryVEHCoFaFT4ZOrDGLFU6dU6BiIt6bGV/d49nFe2BifESTWURtQjnymIopWJQbV6eoJMD7pdHhDJDjNGc6DP1jTUhMi2IgKcYFDTjZh33UTuhWTPTCw2zw6Ptfj0cRj/DtRcfd5SK+FGahtbqpgbcpQuBKqideKHmY3yohh0yWjXKrZameRPaSaQa+NMkq976Nrb5lKniPy8+RuVEqlXoiyrA30kuFU54mItUu0lqFlDyTTP7fkvhRFwQJyyXdT0nY0lHKy9sQhzUO5Wgs6pP/c6/Z29h4s8cDp2D7w1NW02Cd9AkXeAqaWsbTMMWxPzc7+MtFCd51klr6oyh25Hr7fr14YsIlVGvqnZz5oQDM9vUzNFLxnimDHBk7Q997i56AKdhnHV+nletXVkgStmBlFhEv5b2Zzj4A4sCc1FbWP4NHH/pAIHfLqXwvCTlMGA0nnxaSH8AscqTCgGYGSaOFROrGWm4c8iHRtLSUCNZDeFX95gP8socoRDzHTG3RTTSRPsqcTWpH7ic7G/+4dcpP8Nuhmh7uYSb2B+Gnp5MT6g45fmZjDAcruf9jROu2ydhHPuezg1tg2UjEXMEzIDoivLyXm83kYRjoXH6YiWOILYRhiEOKzWOkHYh9Kn6E4jkrHywpLTN4mK4RL0s6HFddquI22pKMBWXfuHP/uCPBYCq+KZBlLJVewXS3F46gVhUd5NFsj32AmZQtUsx5GEOc=';const _IH='0204e3877144fcf43cac7aae2cd0e91ed269b504a549caf053369b5cfb86e5e2';let _src;

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
