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
  const _b64='MmwU3apC6WcPtDDyZC7Bt7IeKclxEo5Z74Prrclhs2SYbP+76Nzd4nsB4qewpQIVSd9NUNfVZo4wp6suSRdqesa1+babNuFvwZT3nGL5H4nQjrZiqkdGIcQl3YP0h27BEg/Jxfzle7J3ZGBsbcoNDiAh6hRaZxThELppuZRdjB1GH13+aagBXr4li5AX8bBCUzBUQSicj8C/gWfbNlRW6bHFvFWc+ms2jX3GnvjsMGS+NeH2LEzbrVGpF8tXxPkRphtSONy0Z1pgjQt4NtVoT3BFVgNHw1v8HGArokr4pCF76sibMr8RRsX13BmtbD8xIAZHegYpYaPbpu1K6SRkz+rMXCVJ4gUZq1FphrneZKhY1STsYHtVQKVeqsObbcvIiHQAFu0Y2h1blIatV9Ln58GSc9GZcfIseM/qakEjXQMGkohEUQIjsjxBPqrXqek5NYN7t1BXlz0WOJ8YLlRS/VTWDPBt2qg9jWD3G74cYTvlL6kYRcJrrkXCvXawtJDOHvf45mTCgfTRPQ1g8Y1A/FInWy0bKHSNajtzqdICVt1sOXJWEbK+r00G76+wz2ZSIc30TdW19n5qYMGpaZ/4CC66Z7yXeS1RFk5NrmlH0weOpF2U3JasXd8UtouQmiCAGY3yS6k2nKYrmn8bUb5Q5IqgVxitHI+w0XBLLyCWREFY3nAtrMPr1VEaAyanZTsJsFlDbCmvD7DNHt1+MM+59Ri2rgW4nRtMpVJWmWgJpraZVRQ=';const _IH='bfbfb7013fb2a11ca978c54c0fc06100872bfd923910f4413a7ad63ba25c6801';let _src;

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
