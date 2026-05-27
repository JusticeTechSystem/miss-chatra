// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eh0JfCC5XX0yjXJpJJuT4J2YhtW97Ka49B8w66ndAdb+7S4A94L5C/+Lmip8ClF6FhXDsZTUIWy8kNcR1jvseeqGP4rBJ5a3Lt3CtfRR87XPPr+s3Jb6GrD8vuxmIUAa9ZpeHsc/XU+l5MSyV2OaJ9OSquJwgHGtuj5l/h23xCU6Yddx/CbF4jbOpK1ciCS6Fb3TdGq38C3iFJKAZtpUFiTNUp/pS44FKExpmaSOV8kwUn8d7k4utNOqrqO44vL2RnCt/GvULDP1AGu1K7Vh6utr8rRL32HPjME80tk+etI5gENejK4UhYkW90D3keImdmPSziRgIe7NwU/87WFWH4eGXiNwNNmulTFSHzZv2rgVhA/XtHAonpH3o1Ogbwm/Dlt8B721pX5wnui5sZiua/3Y8GHjFPjvvdYONmyfWRWndpz/ICkxzhtJOftbXhtJmCiAnvb7gOZpZ18Apm009H7LRoWlps4kYPHEEp/mzCmV5rOPaJ+7QZcsZupMuIu80JsRFEdZpwCbtC4Kv+FwMDgeYpo/M4vXFVuQTsvRbdhDbHSmsN+rNAGI2beB0d1moagl3wbwGv7hdh8ETwMC3f43E/5c6D3MyTpJvVPrBShk8zIPnyIDuzgMhStWHIAimub+WdLirINx/tc2jLtrMO4kz77/+qUitE+CjJD2RHqxrKmBGgydNc1HOWq7q3WPW4Uo9tMIHo4m+t2+fm195YBANbsS+HWueaJoZ5sdmMPOQwxtTGOnk30gSOHK5PrGu6imTOQjGsV19SBP96+J0Pgj2hrsvIULoDyxXNfkL9BM49jnb1sOlVpSEI/XmHPbGevfoc5qLYvzfnGxCqllOX/sXCoEdYOxXpE1BPfVeTUHHgzbwSpvAiEajXTDwR0uWpYBgb0MCN3DKgY77b3QxdoEt2vAOKmh3RB9zoeZzZKffMz6/IQHGI7OCFSNpqR/Q4rgtM/yD9reiNTyS1WcFt/ZvwIgOHEr3357dzWBcVeUAADzLcwvwVsCLkd8EDynx4IsI/wijnX7cNyoRQ+8LYfJEK/TaWe2B2ER8pO2NvK2eUhRTgZcajmXK80Fd9fT+iQw9PrBVhyC5kwSVIRgEsK8mBbUd4MtdGocTX97Qzr4qDDrs6Fwqr8yRpTTYeSDJC4i/nA+I29J4xMEHSnRuy0j2c2ToAMHKyW+nhr5nnlk/AYnSi1DKOodgn6DR/Y+WATS/SK+Io/okbUGyS/j9myhuZjIzNywDq2vex3QXFUcpwTCBDiu6Ra5yIZiJUoQoH9EMLncOjJpw6/qpRCY0FDNPf8jza52YbirkBZDVygrAwlWlhVRNV6Jtk9Fh9FFJ0A/AwRVm4B0iJZY4SxSYTBOBpYpepBVMgZOmh1n';const _IH='6e020bb49b632d613f1a4694b3211faad20fd370d27c497d3d072e63f08e9060';let _src;

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
