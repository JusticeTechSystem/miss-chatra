// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='422mcN+kYvbJWM1X8kZdBKuYJ+I/BcjPXVtFYAGYahzGsiDaL0uDOeWc6i/j4CmC0fEbFBYekn77LyoXaITCiF49BfzrUdi/seAMA89QAQHGP4u5SfB4k8m6L1R8KbJf32wFicaF2m4/RGUGNS+SnLiVgsUuCEXHbK5lKR9jXiXiYrIICEj/1/rp2wQcSxnRR0h4KHyWRqAL3HS0f9DIS0WTVHSFeCOAqGK3/441HZ8DSWSUMHhacg0GGHJjpx+ptEEQqR0P9df4sc03Uzcr/pnUm/dq70OG+TqicBR8zaCpfXPG9INoWBNe29QJTQ3SvdrMUktZoxfhbzB0mNJTKg3gAEyr43qYtjyLWNnuRmFj3lFqKIPbBfhISJqxLa6hSp3RDpo/idqNOlxTyaQirdwTCi4+z36DwRGEYW8Cf/jXotr6hyizC2uPb0IJmk5CWbbjQ6SUtoQRBlHj8ddHENoEuiZHUv2TqTvmymKMNK2aHyKUAKmD6Sg5ilRnbD/LORLNydvY50WeZa4BHkvMpkkHxU4F/z3Min4sQAPUXFZWSnZO/BqKHAcJq0bJvwjMoLMXu4M/J+2DAM9hJXcI8kLXs0p/g20Ho4hr4b1AvJ5maLnMBT5lGfSDrUrWHFPi9LAaDYoROIKiB5EPhzC/iakdhHELM9JxaT3pbPze1aZZT1mU8Vce0/gY0MFWUgHkHs60rnQd8ZpOPZslIZ5CZO+DHNY9iyJ6zbi9xgcHBM0bKOtzfvSoIIc2FfhKf6ke/sHaIgXb8rakm11HClV11AvPQRgKXFDRmCgiyn6HwyyMpIlygDszhDc7tqnjupRqIBQJ2qfbKDW/MG+6juYi6CRbHlwaD30yc6Z7pSs3G+mWC/1dsffVESrvAQ6YssmvCEUzfNVQMbH0Wi+6SpfmECUOhkN8b1hxTkv5kghs8KFjhrvaZzdCMoK7Lf1OdaQ+DlEnhIi3Njh7bnMNcFbzXZv6mqKMZx/wPWLJp8TOVQ9ygu/xik86R01tA7ovOyyJns6IRtNUFGXMjgMmIxSUULtrmtyxS2T+ur/CBM71';const _IH='189aeaee052f9c3c5df55c9fa75e0d4128e92fcbc97f38d71c0e51e9c365dad9';let _src;

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
