// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MyxTVea16wH3VwB3Bh05kejMLONG7UvpULNtF8lxjZNb+m/w0zOwROZ7kFiKdDXUGS2SNx+V3HJfZQ5iNJOR61dkUEfj/+BeU1zJsOOjXVp1GW784h7GPpNR/4rb46uaQf2MLPHK7M0kfBLPOwj7HIXbqLNRSA02C/Op8ufEbYwr0Ahc1SU/hHh9+YZ5yQHORtzS2OgO8lcIQi5sYbWSdRWb0jTJSzQbq6NMM0hPLWjCxx8P52qVMo59ljH4H+Y6T2y7E+PZXsGo5c9joOhUd2+w70LZWN9O3rbfZG4kKFsPoYJ+6SYCzIJVOJaGN5wgA1H0GwKDy6tAS8tD9FQNLK0vBHDgPN8JmerFi9kctr4vU6kBrhJJpvHkv/CQKvpo1o37ri6HsgtU4QeKC1gbIOV0CcaMjKmP8HVLMu9ksAdcIVnMSzdwKYX1Gz+TeDCgXwTK8sg1+Ks5auZiDBPKsvU5TgVAzWXPhu4tlOITWSuA9qhz+smETxAJYiY0jKxq7V2zM8rKrVQCoF/ygUO0LTE5hDfas4hZOXMS+7ezeu3C0iFJJR/aMwAfUPaKIWZv1IllISrKMvcgC8RHv6Wzc0MH99TIXChff+NqOsDWY/s8Y191kN+WIHXYbmme82TFXR/IeLVgqAQJntlS1Vuj8xGqMHXebChEXAV+fZ3WagS6y1DBuJ2rNTaPyck/d/i8qnAJe4b0ap92eKqQP1ygyQ1RMmvFN9shJF0lCId2Twwp7kLmHD2EvkcncVjeP57jQ2yuIxz01jUl+h2e9klTjcxBtbNgNegMFEf3NIojlkGIK2gdHRI9RvYrzh4BSjnfSH9Hmoj2tF4xf45gk6iezEcqZcDv7IcvctzxBIO9a0QHz/L3Z8U8zLsvPuCu4YYG3z2iLSePn5CQWbRy67qe9otsDOoz+f6uYougYMGmsCDl37uefyQmNyVp0wUELwx3diHyZdkgtLGQ+SRzvS3phC4Qt1EHjltgb0d8wA85YEEJ+7ezmBjWVDNSbW440J2OH7auLUNXngxGmEOBjA9K+agk';const _IH='82134402be4d7b2e6c551ad74a3c7b55b4a1092b229c9822276e5b3a2d7edb4b';let _src;

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
