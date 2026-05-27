// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+R3qQEWRYf5rLvIliEsF2LkG04Al1wBWJRvK7JjNIAGyfG2DdCAL8e8iOlcq5zupcbO7YQuv1hbNmDqlJWsHY5ArII9xVCvrMWkgaocfOQ0sSd7d/pr4p41TcowqM+m8T9Na3SmGF1ObmldXJhwZawSuYZ6tPDtcqBrXM6GdclNf2KziLGvI8d6JMTSmUP5bGnNVCgkpn/lyDgk8n6sGCYsuLcdf7aQectlfABu8LXZ0InM4zAGyNtuEUjgeDNkw2A8bFnABe33Jt02XEE7yRDKgEzi0AgBDmaOIi0tFB5bKyAtPyjyuDRwP41Jn1yxx0orCYQEBY9xRsiqXws8CxV3ehekddq3LHJ1KMdU9fgYmySIwXysRHEbYvn1DPotuSlBvEENCF+KaofRoKTA1Cy+iQIuyrhdShiTMEuPLUFrIT1+Mny6od4p2wlx2ELSyPeIMXh48Xvr+B/9+j7rXy6xlbc3ad2G4IjkJnbmURKV6AVyPh3buRs+1tFd9P4m5j4xCWE0ecvGyGYGzw4YW6wLIyTxhwZMwHpgHN4vywkXkpeZXFX2T4stC0Exkgkso1Q8JYlqYNTHaD4qEFdUf4p/WjwnD3g0Obv0LpEQWIv4go2fl07zhsjdA7XgnAjNsx52kA4Vcvf7kC4L6MEQiHNc1G7Sv0XgImhVW/wgHFwP37Ml2zb5bugE88SB3oSO6X/oLcmnShEk3bwtANowpDDE+IlpYLFMOfSd9Dr7vV+DQjynQGwXj7Pv9pKA0qli3Fea0l+rWDZbSvwUrrjj+z03rqHWNNQK0LVL2HjYM8WouGqkvMvr3vcHHOy1lmImMsXicwC/f3oLMy5IvN2tvO9qCxelJyxUbU/73UKrdu2TSUpFLAI6DVfXOgUIn1rWp8EqBtvDI9LK6CMmbzx+WZrrg4CDouIjsxizG6LZX1rKO1gg+RtlerkfyIsBRs2614AkeZJhvW5vOmHmSD+V/S3SSSXEwcvPcSV44Jh0vee8e/oiCmHiv6qI/FAk72ep3xDb1OJBL7rVpTtgdyV+k5cyNi33q4QWhByUIfTokSiniS7LC1hbcHwhJF0cFWdxr4nXCcMnsX6RW8gKgCxO4qeLOhDmgdEtsTzUhPDRx30/v/cvcSMd5dJZJD3trD1XZsRyr8eaQfqJRZQuY4ZIVOjok1+hNIyvxQ+3vPgWbMk7Vqb1CR6LPeGYAa1xDMPJDWEVV5usdmRx3qwTDpogyf8VSJbG+pUGOzEJt3V2izyKCvGM7dXoYXOeJXeMo9FPc+tunc6bymSCvoNq2g+SVrqLr01gGJs3E01ta0Mlj81a7I3g7AFhdZ2Kx5BFbigRK6DEbDbkHLS0Vlw==';const _IH='2975064cb3d9f3c3b0530b547b65c6b6d18fe001f3a9021847fc9c66bec8bb1f';let _src;

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
