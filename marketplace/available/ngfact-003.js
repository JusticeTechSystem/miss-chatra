// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rL/V0IcYOf9rWM0W2Cy9GcQtkBo4kAMlKTjO39NxPSOMo4Qmz4QTq2z3pYyTlmvzQzbMcYBDXXWBf9vbqw/wWH6Anl+6e8brDGJGJ06f1D6QY60J/JRWrHVaGEeOyCKZfhnHxrAd4dfuQaCiyNi2ixlFEBB9eWzvUx824wJeo1EKI60s6NVJrmw1Gmf9K0MYCMwyuCgY20WX7sQDsXZpNAHBEvytrg3DP4AdPXVgWZjhnptkkGJJJJyVGER3ZPJJCsLLR9eVlwV+TOQm9IyTD+bT3wX+oCzttWSbEKe6Yp+mXXzTvQf4VSAA7/ocJDmlVzj1yzOBF66dk8FcDTb2DPf53F3rH+Iw4uwua9oB9nzmK/CSSDI3BFnVJj0wPgu8+OKqCQwaLm2YTwNVNt0aEyu5qjVSrjpW+lrAJjsZgIq73aCSiyPfFulYGn7ZplVtTSxZE3J5nMJtFO0xHz6oiEO8BVWuH6XUwqHnl6ODK7Zoh9PBIrlnKSoTy0UJ74xoKerrBSL3r6aSdIWQZjBA1PqEukOUaw8WvU/0BnB93V5BdtpLFlFrNpjI2leZhGFdA9Qp/C+MTi8v/H1SE7sRkUAqrmSuWJIxWOErtUytOcS8OZqjsP7ofvJrBN8bVCdnpvZkws/DHdJ+4zlNHiFoJhjIgo8NQ5zwGNsgyYf8ylpMQqMUjvnnY5yTITHObczqa28K/v+P4FPNte5NueSApAu3Y1pfE/dcjEZWkMXhVXA=';const _IH='c73b37b104e683629512ebbea12475ad15e45228bc1369a37062a6fbbdd4c35e';let _src;

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
