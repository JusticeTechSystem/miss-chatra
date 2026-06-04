// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Xm9qxrsGqG8ikNRFBLCG37MSEJ4QZUSsUThb8GqQk+08sduUQFWjEjDj/tfy/aHgVA1zZ8xxBsMcqjiif3HmE+hpghHBCfyToQFqAIvxI6e+KR7pJFAY8iKetFzyEoQh7qBbYrUZx+lKaTNrLhvzzFqv+qBRqMxOzX1ttrYZ1Yrf9/zWidQQwdlF/oCf6/cIDCwRd/cRHp9nAkSMvHL8Gr0lHxKT0DOxGDxnylG/QdI/gjzqpjxEOogsGHE8i63nt6L25lyMzAOcZ7bnH7P4NRsJlUcITvh+DSTjr/xdkHseOw/tRmTXKl8GVS8UDnpgQdGsCrpFOvaqc/0SIy9RxiucVZdXYFqF+eJ1G0fd4nfMVQUjTf2Jflh7zyhpUVrfAHz7RteYaMK7DW1LcLJSBiyqHFOUGIxSRa7c0cA44PgHCvMjb87u468NpVg0bpSvsmfGwW2DZpTW8bfWAfw2MEsJeZbbgqCANLQ0XJPIdb9ecMxmFZnRIxYlxHLpRrupIVqIlY/+nByNKdfrmUte7WIX0FPFbHELeazUK1PanMOD0Qo3M9U0kOW3wflZpJYDTGA2yCTbjseg8EZQFrv3I6d0wqbJnWvImb0nHDyVjaFNSYzjVXiiPcOdTh6tmZkGT6gojYyCgK92IYBjDI03XtG76r+8d9KEjksixF3jf2RakqLyMjTf1eyl7YCdhUoDraoGGkVI6/6yCKcseIdunFMMKoFb0PKhMzMRlpaTvD+Y8TECiGFDWd9HE137mEzLWnSoUUQ/smXwV3SvihnzAYvi8TKncJJc4vMvuubBu1aTOXyq7yG3ZZYSeL+8DUhENQy62DORigQs8aOXXgUOviYFEjeWXY+xFw2CKW7QgcIoEgZPEuIL5WpEvYw5whIxDOX5Gxngpw1box9F7IsyaEecrVhDadq0HNS00jwARSrWfDnFradRg43V/CC+ts8LoqmLEdLm8xEZnjZ/wPqy6DtiCdu1jNH7aNTT06CPmH2JKkMJ3Vv/w0M2JqFjngCfD2yd0okQZeoWRf57ibWMam2JWmaDIHlK7C6GHxXhH3ZQ9O96fLM8zjXdQE/S8kAEglmuTmh/BmzZA2cfMeW7p2r28GMpuHJw+RH5g31dnePAdiHb2p7gPizDK7mP3Ymz1WvxCz1ify1XfphDWsGgew1h27jmImQYMDMetP0K+h63i3R477R3POq6jttZi4tBNNgtcWC6InY6QP5dYKu0StoBIoIBR8Xk+Bn9+sOk8sujPRo1Uox9kmsU9ByAxJddzJjsT0zaKxMaLt2k8Gz8SeYs/ExFzJoOhzJG5+8YgAjjADCCYQndKWJLCaMbZPvdztTZQ18UZ+YWIGcghU/h6u7TOgkovf7SbZOMOss4EcDJDhFPQheIOIlxxWyV/p2l0xSwvjXc0ZpE6Ui';const _IH='155346bc8cd51e573385500cdf9ed0b71a1f14ae46afe9eb7a906abe3ad1492b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
