// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2rDZC4sFSWseL1Y+NUZdN0LYBxzxE/uIR3oKotF8anNrvEtqvBFLdEhyIfOAqA+fIc4UU2rxNI6fxeKVa8ZI+EdVmM2OV4bJNOeXh8wqI6P5h6irZ4zudIGx94LIR6QQ/Db+nPB6Lc958XUZ53FNk6S05mM4La6q0S9MdsY+HWSPinad65hgRmTi8C40RuOLmQt/dTmiwd8ti24HL6h1ZLji79EwJDMNf5BDS3qSMiB7NWKhM24D/koSHYAW8H/5S73FOCDyYO+zkm2erxAQBfgFXkzi/CM2/HRIduxRMu5+SaNnAUfI3EnlWdDkq4y7U7eg51XrF5Yy51noPoePMclW/zEywGeQcrrvgXU4MgHG9gkxcHDxeYoKVLZIbV6nw/cAQ3y5BZ13nrfHLIODTVB7R+L5ZqAV3ZH2haJ7MJAjm8weV/uhajwsV8PQUTE8zFMCLMvhJ9rEH6NcBS4l4Cn7WzA/TEAbArWBkdhkRmCx6Ir3c6iHQGawMAaB3tBT8z0BX7X0Gti7W0nOxXD+Jb5xKldRS1IIzmYLrCRVSvLGAoTTg+FnvkR0WSdomPwvMUtUA+jgGZosalJ2jh5vDoSciTjT27SPtCG7LrdwrTHCjxhR+3UBhNrgmAcWZoivm/Vi/5BmdJlT9znV6/50MeIWnfKu46+UeuXaWEl0m+IgOIEm+SrJ6IOxnBF5G3lfhUuzzs/UwnpeWRwVnT+Sz+WQfp57/wvafxxo15hqzbdamFAqT7Ww2ccNTU5n37hKR7hrrW755tx3aVy0uLLQTCiLLneWN4kDIZxWabv7SxcahkVM0jC0fiNGUvdqKUNPIO1+yjHwCuLU1xvC8+oEMZZVCRTfLdUFYmIEj2wwjjmb6+l4KtqSMihR4kqg+IbUlWvx2AIfnwT8cjjAP4XV8+Fr6jB6E8Nzm3a0MXV6X+luIhCZkl7exABBog5aK4ZI/rarG+x58xNQtzXMlqxqcPGoXKs3VaekIZs9IM=';const _IH='018296f5826ed90da94d78bb1147d2be8f262ab467c681ee0671109bd4f34426';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
