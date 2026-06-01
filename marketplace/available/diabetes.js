// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+/v2bkFWq18RfLSFZ5v7bAOSxjWm8mq69yGdkfLI2qou8NZkPdYvyAS7TUbifrOfy0esb/83NDs24iJTZt18j5Aud0ruEUG8oxrZLmrV8vgsMFM4mrAymR2zwSuT2XRkYaFtmkXfSQt1ueZc1B5zrzwOo3vXmiCjTBQvXyfbNVDQFk42c5XSiNU/PKr+EiSvLavKJvtzyUN5OHWkdnh8KVAhmMbzc7tmNEl5IRfQfisQKjAxuSCvk5Drc5RSVnvWQ2W2BcFQDzhFw/LN5efAcWNdv6sfchCWuJMg4wobBJQ12dD+sNbn5dfyVfpQOVfZTeUgpEGM39sXjKZAgdtSgKtxN/X1+g7p7vc5NTbx5gS0P1w3+XqhNiOSMzaOhReplCcrvAoCEEI6bK3sJGUvefnznQrbxVDkK9Zn2udgzM3QpYqgzBRv3L5oM6rpM7iFJlol8zOFTCDAlwFUXbG4HTMEbXinYvwV0fQ3h4x4XvyM1u6Loej8ctUVrVXouq0rfx6ZVh4hFXmFB0KZi+sWJCoXNAIkuaGlQQ2dymN2HavIKdaZlxOd3DzrlbeaxoaYe5tUEDQX9HX3IL8Z/y/oLtnAdY0un99Cwp8uIr+zm1j4evWTmWXCiEuG0o9Jx4Fsr7wkH4MT/noYDJYLcWtZ6e35YBRRsn4TOs3P6u2SCbbW26N7Bk99jFDncOvXBv9yPuI1gwCj00ZvXizcYTb51N/cUq5+wZGBW92Vx8nYCqScPJ2pegm83qlszbpll4Ntx4tIol0ePs1F7I0uRav+v1O6LsiSI9Fqpfk6aTyvmrE1OOsNpubM65oFY9R7cOjHq2Q0iHSbZ+HS30u7QrRmU2BXOp1webnrhkMVTRlSJKmUwCjs8KffWY4wBwbOKoV2ntFVtUHGtPQEpX33QyqGEJplzQDSm7IubQQ/z7mmamqsWgPb6JOevhR32Aa+o/kKXOq/zF8fjHygllihVb5Gys3q0gj0tKXu2KUTMGYALfH61exJxHDciPGkxKDqV1ReH7D+m4monfH5jqsRhNE6/eRN9injFEJwA939t3ENqiNU9ilAvU5oLYZKWxRa4Crlrg0V1Xj9YMI1wN/htJRQkm73X72B00KTciLRnmKVPypL5vBxoE/mIbImEHiMLXeuKSJHO20AZQ7xKz0kb/+1tjPlxS4TChZ9IyvskGYr1Nb8my5jPOaYhw053NKvfLnmGBJ';const _IH='2517aad6cac610b66280c98899ce75f56962156edf0a013aa74addcd062c7240';let _src;

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
