// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HOM8VYuYS6xAejSTvy44hJvyHhj496Th4dg5v7+Vwo6BjqQ0rxhSvSV3WJmrdJbMPDLozGYZcoCezK3FqrxcQRdRulGoOsxXQ+TfAFnRP/M7/y/6Ojjd575zi8UurT6KhK9WDfQAPq5aPZBI72YNvUr9kHjPTsXE/hTvyUM2jzaNy+Y5tjEj+7bbu9ieKIwOFR/LUndDHDhdMnEgAA+tHgQnPiot8Wq4nrqHP5izMSGjTxfXgP/9FA9bJ0NUqTmc2r1DxU06vVuvcUVuxJ/CDfDXs6NBx5WZ7KPLTIOPkGM+tHKTlggB8tFpZvFWfQ64G33gnRsSv0qp+6qid5/VKo7F/TFpS5GC8DsSZHIpJR0K7Zy05ctPgBK3DOGsDbug4AS66RAzX7BqN/CDn+0ysXebDU1PuERcMjvBnsm4O8XBl6kjtogj6P/wg4Tz4E++fNGjKBMPezYY4Yj4VZGPhk15lt1yhVYn+MXP5Jq20sef/yyhomGVKLcn1gJV1/fGt+W8sm9E+XnO97hwFO9xPnEbbeqcQ0u3wbqHGN0fStcvNSS6LCALhqBwMVjqJNZd60+7qbLm18rEFHWFYarNm00JnT4QLtLSkG9eOA1850UMHPH+aFucoFdTT2O0zYV49fv04SBel2yZQm2wUAgvU+hOAMOg1dOn79LA0j0ckm1wOc/kpOQLNAeJGbdkTIkzn3Li+kJXCjQRe1GNF4HniJ/Y/logKB2d/QLhEqAQB3J06/fgFjMJL26/b2ASr+SIIgVhAHHW+C+J7w0HJvMV7a3fa4dgqbKzLtrnlsYxWt/wEg5n2SlOn9UX0BooFcGFDMPwv8pO2b8tC+VoYpIqPlEFM+euIBWYIBb1P2RTmv4/NE4tK2JxT5L/X2p+ECXoxP2iTxnuRKP7sFZAjjTwdqUtMWKD3HsX7GfQmmps4NKtImVNE6Vq29StIFqy9SIPy/xN+7y+qFzt8/lqqzCExlYIMiPxdOzO4iLvVFabxx7fQl6HuHyk3Bp/2XtRjGOivnnnL6ynaP4+nNZApSggWPS5dcvxw5J+/Qw1zdcw7z1b89Mj1To5g99kQ3zLI6+Bvqa6c2CThr69DB00m2rPQdWMwBVVSYVPE4QNWqdu3vC7B2YKYFDxj6/9xcl9ayon4liwJD6bvix/JAkUhFUedHHfktJhGC7nDNMKYRe+9YXsRoV5r3a3j6EuIMW4irBRGvQ2QmXh39w=';const _IH='a2f858fbab4441be9b386b2dfafadb1d1b0fe5ba0d8b7152e541e91f6bae69f6';let _src;

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
