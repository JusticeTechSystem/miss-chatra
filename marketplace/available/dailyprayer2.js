// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz25/83JD9wVUcDtgEfDxdqalzGKd91qBJ+Z28MOZbIKFDtPn9CMJsd6zgSowOZG2hOS6XW2RXYow/1E69r1TkIbHU0LRfvhHESL/We7q53s6ZWLTgQ8ZJ5HpXrb20uqlq9W4+406GHzOcDk9LpLDI/JeP17DmlUGxPcxXnOHyahP0V6CzHrnqxX0no/xh8k+4PTMgtaN6XRNazv7WPxG2+gomwfZu85UU4a897x1Iazg+u1HrFkP0Sq13zlsEmrHP+hbVi2WnxvB9oHqprz+o7DFc2PrP5zkEVhrhN9avP0rtLSBSvZMlvKhHd59fcN7Yc/YCoi0fxazycokkm7IC2KpUKPGW299bZ4VrzuHiGf0OSWRjQ3O2zmaAV65GGvEcvZAM/P8M95sb6wmZXYDvQaPCawPYOegdo65XwbVwVra+k4uNOUr4qPSheCadYyv2O9zcD3ltZhsaz3XF7rOI/RIJq8v75AK6e/CAu2S4Y+pdjbuDdWOlS1PLisFS76sixBuw61HhlHo8L2bCks3YZz5fgZREDBvKjU65g/b61TU+jx8LxcgFVdLNxhx0PbieH/dGqAdtKzGurvV7ix02j3p3++7j4nHwKtIN2CbYEsa4CG3r/jMk81WDFAQrCrhns60c4L9rP9nRzY1RMYj6ZEf3IMJuPZYGWNVTb4EQn5FwefucQ27SWRBa3y41hWY+4Rlyus4vTVQP2TumX87yiCAuq2bsv0jhiE0bIpehMZSPMSMW6HV1B3W1maL/03vyWPcYzEv9YoC78XBjzlG7hm7sWvpiz7Ahr1TeZM4mF2dst5/wriT+tsQNDeVA9sFQrut6XGmDKFzJTbQptZXZChcHrw8kmtqImIrS0PQCswsMQIAZCxelK5RMn2wX7Az+qlhDNaWNbWgigxqRqWGpyQLlzvkPwhPo8MscjJOUG31wxB+rRFu7zXmRoDh9J9edacUKqFMfCcVAHrHNUryuqGRKhD7rbIxR+qnK0RScKQaIPSOO0fZXEI4RzqIGlCDbOzdROXnXl8hXTOLjkytqaeeAIYVNlaxG8hMdv9lymVERUvWWOxSenxosXRieBN3EWiRwMEXiQJiRYisBBjoUt+HJ/7KpFKC5TnebtBhOdnFRvKKdO7ZjclB01TsVC4IZEDB1JDjSAD0ixLaejQa5ad0wGV8nNf67kV/TmWt1cXbw0eEXrBplYXPogMrPFcyDMa//g/fNSE';const _IH='b42d66a29a8382d94a98b7b47e360f5544c13faa65ebbf342f7ec3650e9bd821';let _src;

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
