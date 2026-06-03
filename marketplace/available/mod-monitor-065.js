// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XjJNxOl5sNm5TcBHREYLfv0BgHdOxVYsyietngFaaLtrLCJlCpQdwYdLmErkfhxPXrUWecgfqb29HijnzqF9v6Ul6RDzDAX8o3BxGWf0XZjsMWrlhhq9YFNjqkPMsQLnEJIf12bKKxJdf6L56KmxjXsT5ByXPFew2ejLm2p6U7fe53BCtrDlETolErShILEVyPQGTQUjefOQxmWJwyGQ0i9Tj9qagKuaXbZp8elDqadkpPXi5wiY50H27hQK7poNSJYo5Hb9ByY/BciLl/H7HkDLCETYSMWbkXhmCyszGZssRmjjkXt44+uUNKpEIAXquRrknTopD2k92Uc7yhpgsjY55F4jiZVCyP2Rd/F+Ib8oribCfnABOqzoXuet4I/CvOeKatUqY0KpQDG83C3WbgBFLskOCJm0tOekDRa9iezvypwnO1IqlkO2lWrCv9ME1GwbYXYrgzRXUdPGO9s4UXQ5dzATiG3QOq9ZSNyHX5mldCtNkegUAJY+kbxyforuB8AID5gDgn6XNj2OHZQ3OM+rupOClqubZARitVgub3/AkmCAuv0oG/sFF3SjSsBPPz3BHe7U6HF4NdhLE6vlN461TZB761PdNwhWqlCf3NbOql6U7+jS6ZodB27kFvwrKvNKxaDHf5auwW+GNnAKxWWQn9mx9jRD5gHdT6pSDLyjnAc9gj/72x2ce1aA+4oCDWrPiTQL763PzgH4wQOOIBbDKlZMAtH+n1DHtgtBV0ldpwInxpQ4RlBsOMfqin5cxk33DtTYmwhhvh2sb+x3jGsU4NtJKbayD830f22PJJ8LN9BW3GV1/JpdfjeWIFAg/KQiglxv36zJWyLtCndqPRsBIFU3NxxClA2U14eFOPotb9WF4O965RJJtJ81cUuo76BbU2KHvQ25pB4eu/1SpLcM40vWGkbyHPFRUQTDEMNHsbPpUT7aPVdYCYpmUIHwfUovBKFYs59QNzCgKuUEGD1YARwDsAgJaKSnIvRAEIbJ0l+MYtpl9nMywTBVSZCrA7Tm5yV2bUxAL8KuFUCvStHfzALI2qpTQv9LirP4Be6PqWiVOdp5wX5QCl23rueb7nDlMzIi0Uv6FfsiQo76pZjrANOKF4Xz1+ecUaeKpIq0A6r0OyCOU9A+CMIWhyxyUrNPattGV2a3BEVeUka5m+3EEcZ4rjH7jEyU93W9tG1OkYDhBVJO1glKlESlNU8yi9LZWeXPqIv1yzM69Ta2Mu4EIgqrNKFZOOL0NPmqSmhmR8pZbQObCCeF1vy2+w8JjccVCm2WHbZYnqgMAia/Z77PkNMGxR6aZGjtkd2MXihmTtKEj3jpVSe8wPhdFc8Mz87Wy2a6Jw7ZZpf3+l/SaDRFmeu5YWl5kkLEbe65Yyqvwcigk9bGwCdkWh11';const _IH='d9cf8bce664c78e4ecf7330c9b7fdd5d65b6c5db5555a7ba5f8b1449d2c0b75e';let _src;

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
