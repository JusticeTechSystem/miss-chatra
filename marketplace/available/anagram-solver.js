// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0ss+FZzZu2bp/Hyf66Vv74kOv5+G5DHK2TmwX5vMfFu7v548IbUX5sz07hCePWr0pQ5Na4sWiba2UmQHzNv51/hcuxVZeMJRe/moP3/h71WWvlMNUcu99X6GdHhfwfAxuJt02/JauTPI8er1G/rsBmm4OuKt5eMF73T1qvyIaCTzi+5NnE4VC9q/4WLp9RN+MpF2tK25aOa+GJB22jwi3vFdb7dld3IakUq+baOfC9e6CJHS54/FO0iFr6S/7oRjFreu/R93p0vJA2gwMLxEfW541+Tj+jWwiy8WGymI3AWwCZG7eTaHUjlRZlHlAV/KoNna9x397tNL0FpFpS55oXMWWik7EaGpf4RO0UKy/4huV8YqMaKcaNPYSWuO7NC+Qo2O4g3DqmA/oYnFapQB1cqG3eK/cjyEe3CgqA8fRa0ODYGvcjX+TK4YY/Cb0LJwdETRaPf0OIGsKOTIYCBWg3ztHaksYVlSe/o07RBjeE5EXUsG74rmsJPjzsCaWtFtSF77+3+81uPvZZ6a3HEnDn9K+A0NI25fafySi4mTZ2VwwtYdIhwAQ5z3/9EEg7VSOANocdQMNZcVP7xJodQINZEOxlZYB3OsAyvHkHkxwOhY+lCUSiJcCCfJDdUUB2aj0dAg65Zv2zYHdScRIcJ7MwTRy0558diiRBTmNXTXwvRHZBb5m2OcAMFdMpbs0Y7FZJcAviRfJqjKbG09EH9PTBcRt9WGYkgU2Ht+wugrsw0Tr4UTcZ8JgOhRsGe3vZ9MXBmchONCyEpLsiRpfrBnxFWMo2IwGFGEvyKBWBLnRfW6Gq3WvVCegDAj9Xc4lP9oMvv02DiRnQ5JX7iBO93waPbG56qc93UwfO1DsAWoCxOgx0KFoZ92B9mPiI2+TPWOGYH2QeOF1F+TerySFJzzsCYcVZt1DaLo4yHR3jKTPvABs/Q6ggD3z2wzoz6a4mXHfnhhANyiCgcuFxiZ9hYLsodKkWMDKy/oPK9SQiG+';const _IH='cff9e74226c9084ab9578809e19d48085d20d17e88697009dbd8e9b516f19f6e';let _src;

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
