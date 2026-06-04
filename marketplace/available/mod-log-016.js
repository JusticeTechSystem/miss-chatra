// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DhOWU/ZK+lnoC8TEDeE5mc9bPijkWSp5hKuQBsdnuZunMc1iUFKY+hPRgB0agNsXOY4CvzeSsWlq3mwZpJtuuSQ75Hf7L+Gocima6Eas1Aph6GIzfRhpGLGzW+CI9fKxcxs5gFO4Y3zz7K5jfPfyZEQvJoF/+9D5hpkFCiXr+6/pro+eFf/fAFCcfy5iaXlExezfX1SHjvQFp4AK2ZvvUzZhABVJnl0M/J+nQRdrJiY8bn27v6+bawFJQJfXcdcTVUby4DpH1gesrtzxWxMzdvt5uxUagOnCX/l9SdZhs8OmjedJQplYLJfjQbLf6s7L+IO0Aj+3lQUflHJbohVQHjngW21QxiJjRyN6fJ89FBqj2SSbxa9Lpq5WTeq6d3xydqIj5dYZC9I3SwqSi1QqOKvoJHbpCjTpgDOQrDT8KIma/sMJQnk5E+RHb0BiC9C+t7rixuNwDOtZemB8TjpLeCpg7e38nXoQsKuTPknXOdQg24t9kO3m6FNazEpPDp9cI6sLO2sG57iu4GdYqbBG6QiLtoqElhEN6z1XpGPSy8/oqUuPkELhmcW3IQSryFGOWEqXr1gefCWliUtVxJQxj6uRODdiJSe32gWHOytLdKPaz2GM8P1oqzte6XW+1mVve/C8ARDtYFUXFj/owM4FDT6d13t8goSlL0ClXtURMbc0Y45Or922KjcrhylSN2lmnnv0zyJRHbW6dW1tN8ONK7C7Etmcoq1eXBHv0QUsVMmFo2jpsZ1ApggzlrOJjCcJ8ox8zfddUs5TfbDrg0R2XW6wIGZjkmxnvWJe64JYSU2HX+UcBhWJ7pzIpec4jxUD4JGSGfh6ih4P+SqN+c4ANcP27nBdbDzAOSzokoQERwUVCQPDE5TSazuYEimSr7czWeBSOxeP7+fRHtPEvk36lok3bPFNtpxZTYtt0qAyAyHyR4/AZqY+8zyJYe0B4J0pdtgbzZNoCp/xyvr5oyc3BBSV1WT01VmzHsK0QKP26qK1GfMTxHH0UGcu04mddBfW6jmc37IECh89xLWTHkaM4NhgUxKe9Nq7sV7vhwWxSvvaB348zPZEyDlT/4ep1RV6DTRWf5eeezmw1yzfyXzZ6FWjf9UpGEWR8FCQwqLehCVt1BH74FVNQuloAeYbr638jsbN3Wipz/SwHMqlSfbHMruVKfx3e/VAydh5jKUPjqUnOpcT05q6E2EWYdIBfzlTO42gMtOjufvc1qAvNLPFzDeQHIMSoHZLPdcGfcBkMOItHKxBWTSisI75hLvnEQTbg+S0YIHViz/LdxMiBQyXa83qcZfHI6g98GLy6sEGLnxutTZu2mUo20lRBp8mFw5pFO4aM6E=';const _IH='b8575e3a062d31ba00548179e652b68be0e55b3223b33a1d3caef202c161fc4d';let _src;

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
