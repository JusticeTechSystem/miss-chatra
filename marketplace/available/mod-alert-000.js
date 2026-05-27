// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bfWK9iU0Mx7llNxm0XT5ZQ8IBn39cJgj3FYWnCNi1x9wxvTWZtkW/swSGn+aa4nrerc4Ma9DM9XctOSNLZdDdg/q6HQ8788E0KXk1eqD+Hiz6/HC7nOF7qXNEeBBNd8GJaaMbtNWBeV0pnE2ZmnJGdF7ALBe1dBG3CdfjXPPXPLccGJsJrQ3HrdXTg9ocJmnIqFrobYkZemcOLbRGFfczYWiJFWntVqnkkYnfr97cMGjTJ1gI8TUYPI0i1E8li56jOZ38A0htPZ/3m4UfgypRTshbckfKj0nYMFEaNbqsdCxbZKd37xsQ2urF8UM0PEgTXcbW4qVIigx+mdZi91lXJzRUEWSgT2M/QUwQCOc+sMgmApq55v0rAfGRkukXd7WcK2aUZCV0dp5Xj1T6I4slSUVJU/6gYVXhaULPXmgUB97eyEDUtv9YTFNwmZGTaqvUzFrhILrbCvuMJKMlQ2bjZ7rd2nJ3S1xDBRwAwKdFe90NyXyP0sw/9sf9ltGX1YnCfESKF95sBecGfP0PykaAlzifUNIBvvGsJYT/qbh1wo2d3nXrUslOFRylRF9PE+bAMgLRSzt4k2PDB3eoQ3R4fzqssdKB8PCyk7BkGbrJOStI7QHkFEGfbpz90ahtO3YIxIzaF5DtIKFr7lfPwR/KxL6t6S3i37cZPjARHHpRyRpJb2lq5k+bGOMdKhDOOnowAYCVoC3N1I4h43L3icv75ZCMl/7aAz5R1EOZRDH6PwtDMJVY95WFmU/DEeK8fbAB1Za8vnOFy1PRY5JSS4sywUgn3DFrLKzNFR6ZO9eBCRFiaVp0vCK7KNUXj0B/bbZjejIwTuIZGnV0qaeO9qqc5rQoUt8lf+uZeLP6ARx2PSr2k8eiLQ5cx9oUDzMXNftIjfdJDJIisFXEQe9DdXLCJo+FrC0OszGpHcRVKeYV99e31CBnr3DSNrnYdyI5Zouhmy/XjQRnIG0+2cOB4VHrz8zY9MgPzptPwnB3OLYAGTqSxucS/UsVhKfJCVBchvmOfrtZsM/eKLlIkOLH01ES2RgQZrdtigAphYze1z+3xUPtx/jbmSGHunokSEL42oRiy2IZoTZeCm0W4wk3F2ONDnYv6WX8GpZj73FkDmmPQ96KEFJGo9RtaQ/QqlF4D6SsmoDGQKIt+ULQzkpon+rfMapjLWR8xwWfMZlFvZR6RTymvsDOcowN/W8w1GcWkJKdgJrkrCSRJMY0er/sVbftWYYQVquXRXTZBHxiv4gHZvNhwWcjeGXnOrIPH1mxXKpzTBU9I61fLazEU46sZ/2uikHTonvGYDP6WZi/TELBtwYelxqfFLgWxGsyUHo3Jk8lbcf9tX2CN0o/vc5/ZkjRdoRpJs=';const _IH='daac12a93e89739cf7247e1a3b1b0292706196074f759d65092846a6d531c69d';let _src;

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
