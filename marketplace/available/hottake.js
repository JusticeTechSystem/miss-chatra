// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hCuF1OH2h8str0l9ds8pxeqkNvg/bKporlmZRDnRG5mj1eE0jrcd6IYJ54bcvoSzC0v+bGe1MmcZURl7l/nEX/pfQa+v1iPlxuFZPWzgTCWP+BjxchLLju/dddaKN902fe+b6HtszpW5CWkv1UL436a5uVxTtvBT+N95XenxaLw5eUm15xV63K7f/8IqlgQpfHHhW/v/aoaDjoreI873+RHTJl4mM1ll4pG23wBSaVeaxtekeEQSq995EVEkCDb4Q7NVm3JVlUIG5Zq7nIK9UciR/pxk72pn+UiVQMvt9/vtOwSczdMKZ97Vm73HaZdhvIbodCnQiia9P4edzkKe1ORTA1x7gKb99uUg4wR4q5RDJOd3OH+ja02LIU1GBgVg1jbcXLNW6cVHnQcK3bNwHEHQ1A11mDaG7O4PkLgepXmeIaMmLp6dMJZJKGRN6g+3n37eNm52XU/h3chlEiLIcpJNGLdFHtn5gdZP86P1sntNHW4VvwBuCFgS2qmaq/ngtOyy+Rf4xU9HhhZV1a9jpdxRP5azCSljzrSxHNgZLIDqXSPZfjvBeW3WtBXOziw+nvL1hfs/CY9WPbfqlTLY4T9p06DjL3WZa8BIKV5RWG8xA5TkKCPw/VjQS3Pln7EZgo7vwSHRe5I0LvMnwr4uRowEO4Jsu7u0jnYn9pmRoOyk3J1lpG+0O0dO5v/ZS/ntBali+uyKROmlRV6o1TQYSDP611HwRgatGcMfZrfwzEwVmzomdBPs0eRc87jlYx+ceMpzgW5iMTsi0odMxdXGQCc8s8At4q4tarMHp9s8mjy2gCLBJw6/uQCn9ahbGNcpl6vVvXy5etnL0qB6PBc+Dq3Q/H346BUuzSPrOtyeTSn58XK6jggp7thkPxoBe1IAEQpW0TliP9f5Hca6Ud5sSryX/V4BEt0Jd4mWPz8fHfp1qDvODRrhulvPYR+7p4ZowTWYXnt1OSWAtlDmHsMSahZ2tMUqZtL4TkkdZB8iFtDor5zbqKwjapJMZRFYgG/3I4vobflcQcu7adv2IubtrlpLDDPLFZISpACBKj8mtRVIX9YN1lt5qHzXo1UP/vWHclqsGalKfRdM2vcb1rPy1Z+QuKIF9QwS/3i41AlokvrKgEwm82bpPOja0MlVUVrQpmQFDf9W0V7pxEOdWSIonfmxq1/QHSBcekEMoneXiwvaiX6+YYWm4IW9TK1BfAQmb3M=';const _IH='394ac6dde0e48d838dd3e7205de9dd46372e308803200e03133e3bdc220cf5d3';let _src;

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
