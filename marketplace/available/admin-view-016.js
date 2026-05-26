// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oXCA6xxrPmJ9aNVFhD0I+Whbh79rJyliixGpA7cnaAyeBuPe3QFHdIyXZ9RdRLSLBvYDkUjOye2hHQ7eOoOy9Nzyk9AAmvjul87fZHgp4wXtGHaVsDHpXNjtniI1nohUfZ7yT/Eitg1/Vf8lQIDffnqavAvJyNrgnhQ0lViI3J9zOoMYA2tmP67Kamx13RoNBM3lbXwPYlOyWqSy/RYOVlSAOaV2wgctxMYRjkq4QP1Ih4QUUZX5pyRi0r8B9U+ii2e+xS4BZjJjFOykDtoCiq1DR4ySxfMo8Y5nzyqNL3LMq2Ww+qv7Tos8TimQe4x6Dlfh7PL/qvSw8TgdkSnJZ5lqjgAm18Z4KfywZSswioDszirFL3GbJ48NUKCDTAxbwXYs2EJVsFo7IBwkdC3Qix7Y/fZWxiGtthJBvrL1RMG1vzxtvkAPfiXZvt42u0Otgslw/hil89J5meyJ5bUrUMVILokou+o7AdcEVkpIxXYK2TwqzxplWA0umoLhJg2TXgWgnW38Kg8qQrlW711kpVtEoieQZTXL5P2u69n9dZiJtG+8j1XUq3/XoyuW5Ur8g/0TS+Z8pM5SrTJ4iEkdvxbpfIvMYUgPBoofDp0ObD2u7J+X2Xf8IUoaHfzR6VeLaJnDvCj+cciWBwnM5P65/cszsxIVXLyDrjwO0cPHvSccwvuIJGmSjG6NS+X4i81uW1/SalGFgsCAknu4EbHkKG7FQW1PiTXPdSYx0MbiVDHSWbmSp33CJkBwpwCmaseMi4qSzGsJtDZnmik2ebPKF4A9GRDgnH0dwF8uTSmD3KIG8LTfTtrz53vRhc9A4qDzs/KFv4rFDcZolCsELPH5MtVyXOALAALIv+hXJf6+3VNXi+VP02DPbAf/aU9bInOenjgpH97BvNF/fiMSvsShd6ZYIXudAcVlM4ZOXAaN3GTb7PybxJRU+/sLE+4MFnXRvc8Bd65Qcl7DUZQEuFgB8XGDxAgykyekgZw/u+JhQA==';const _IH='8b2c5a8b4f4f237f947179a454802316ecbf9d5cf3dbf1d68d6b013d68b79426';let _src;

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
