// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s5vAzNq41XsBaM4l/l68W+hS6p6PT2ZUp7BOhXw23oqcDfDS/3YRgX0L95A9gJVslPD2mveZ/MvbFIqpneWiES+KZUFHnPS7timta2yWEw9IpRAncSazxSVfj3DmBIfRP6mM7P7Y1EEql2sGJYbLL7BoCJ5ILRjfLXvWK5h8Au5Dpk0d/hKkmLxCwKL2NqT9HI2riC2pw5K4MPIAb1Re9Ad/fk1rijV4Q46YXkp59OEpjg5AYGr8J1UyWPhaBDNv5O0OzBu/48KynOglt5FU/0G/E16G8TQlYGPquflsXZ3ebTusjBxoqLhFOxHcCGhzIyJqfP3KSr8tsRNDk+J8zs0QiRNFZIch6SjQzN9QPePSz1NSXXspe2DEsguacUq5vBZQ45WSL2ADgnnIbXNpY5IO3myc6Fi2WA8SNVR6nQN7Sn5njmeT8AygZonYmFXvkPEjFQJiPtu1DK/zdAJQkL9b/WOz/GcQbA63V5RkwYTLWe6ZlJsHPJanClzy/U3La84j9TCFasIz2cODOgUafF41KW4erH0I4XtP4CvpH7m3c92ovGu9+kF3P0wLQaz/UT7TF3XvFyM5V9R/2HHPxYWce/ys2i2GAciA3Q0eap6a8tqlDdYJU6dvMOhKQ0AWySSCePNweXxWC8vjYF7s3Rj0JazLAvxFkatpbhRM8kXE1eXDn8cd3vmFVDSV5rfa6C4OTwwh+/jcBUE56nUpKxZUK7hJwklg2ZMftJXSUEPrtNezrndaSIRX';const _IH='7c0f67f9dab976ddd8623b2ff42e9838e4f5bf72ee368328623f3d5800790b77';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
