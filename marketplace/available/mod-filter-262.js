// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UdR9JtxV6NdMChrkDl0N+kmpVM39Kw2S0CId/kDe2cYo//nx1yw+jtNO5y3AccPSKlFVy09Dw+wPw6VjmM/czDUkdnShuckKBcyGr7OAwSoqM6CyQso1cgtCBn6hjoy+b+5HnIU9ZcsLpTlwT1YMpFNFzsPfvNCAeL6//ZV9z+UImJUJzK8eo+lctKp9rF6C47QJc5dmNB3PLCLfKxfLHQn6sVLCm4smSyeMyG1y05OUcd8gWrc5+CcPI8npUJjeW73Th8OzzyPkviug+aCQficOBi8noRo8Np5IocqbbATlMgoLHk+VlG+FN0fJod/wFl5EnnfWKFWFp33vByHQ1WAtqqQnJs3eYu0ZYcZ10ULRNJY2h+X3b1pMvWGS3MPwp19etRC9TYUcQeoKo2AJvfFXT9TE6JqhsuKDx1UqbbsFpkqMnoYUXV2hy0yD7T4Ab7jxkrNtBsG4k4QqCcNYPpJ/hb2+aqTyXdi6SHkbrMBin+ydBHLyEO0TY3fHBLky/DgZnIbJQQWqNY6hQdfGXhjKobVHFM5s7yyNc6kedEG4rtBIFhqj3CSsPtbE262KbxMdcsPRqA5z0AP5+wcSNEtU7gt4YELPQ5bxObGHUPAQCqNa+/A77TZgsJrpT7lBI98Qeclu/sohGR5TfleyD12DzqwAWIfV45bI2txqvcj8Cq9WmNIvAMSCl8rYEKoB/AJqxemElOejfZjzYFOiGPT+Ndt4S3RcVNGb8KG6fgJ20b1Bh1GhsXNqbrxN9cn0/zdDO0inN4gOulU2dLqswLHrbHCehNamgL/HbqqMTLjsAdqbcdhcpO2Ek44Ttcsw89/hykSFzGFMKzSwh1PU0CDLIdS0VVM3FnfaiEW6ihlCS5zwpNGaK2gNLVO9THZKKfNbf/L0P9XH4I0n6SGGoDR3OuZbAHHtQQhu/ZtYnnqK6vunJ2ED4nLGlwFrrppcc22cFKxSp1qYjk6rRifBWsK3ceYjwtlxWfDa7mVEDMFXSfKLGmCxr6tlEFwn+2de4w2TkbXxNVjDD1XQB34vUlnRVA0uY59osPMgeuY9Hjs+s6Ro4sojnn320FUpLdYkzpOptCIpmSvd9w53L6YnGV2TvIX6kfL6ubD/x7TRFsNZ0HU4xsMp1WKyrLE/O1tSLTMeCQ7xw2E0cE/WU5JESdmKWJWBhJBxJ4KIAJRQqKC6gjgKXzh57bNRV0EA7neMMl0B70sLjI+ha8tumjnbt+wlV/tfVTNa/AKaM2LdQpOUB3ExRBScMj97qoJzEaDKx31M+q/nVcalFuSxHbyr68wPV8JFoTGtCYC/fC5GocFcjpzTqtpytG42EtyinLMKj6oijgLBMWtw3ogwVo6iS+e84WuyaaLvuHt14lh42C79tigMNHP81Q==';const _IH='7b8f513fccd01b0556117de67d924e28ed3573244d04efbbaa4706516771d5b1';let _src;

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
