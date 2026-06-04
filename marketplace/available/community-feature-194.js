// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='deCNAwl5cLoHqsSFtsUvzJW8Li1Fdw8in2OxIvK8r15a5w+xfimyvTlSwC2lCxSBi1WxPJcgg5czKJ6z8k6PQb8BjtTHpYX3BAQK48Py7MD0lDMr4ddHZjjWrx6U5R4rjtBIhDyWMIsg+RnqonmPh1COFN4oc9E+vx4Pvh72SezM0rLeWhx1bUHg0f6CXwhAd60B+WkweGq2jLBCI/WNwcqTS7HoFPp95mQEIK1Lpu/J3eHzww0L22CiqodXytmIRzOZ+6EonuVc0r/YVU8YC5oLvVmU7/l2+VAUqpRouRNDUxn/1/ZPTl+tNit6EmFiZK222EsbmTIHyqQmD6FJMS3nfOA0IQKqvWa3oWvUf4w1ZUCfZOniSu+wcsqEEKPRf4/5GILd98OycyFf5fTcLW2u5ibB2qV+rDAP65uUz2a31k8HAHqP2pYUbVJLIh/9w5q7yFamY5aREtjPgotLd6pWtWXZC/OG9mj2NBqnajoS8Jtei+ZLiVQRnOHtCpS01k1hwVrzMD98ERPyPHagr28JvQvaNwfdnfxtjqXQVTqfZTYTjFvksKlaMK0WYG11UBa+tyU9ifwo7m8NN1U7WENhlxjAn0592YsI2/PrHpJR1xr6bXVgLo1PtYZBKCr+1atNKU3Eb2SUvbeggMSYlewk6Uy//Du7o3OQ91NnAiebOg8P86zEYD6GAFXRN9/NO4mqobwRCX5p3u+9FhTBVzdr3uh4oi41lBVnkBCuJTtPPZIaLR4=';const _IH='91977d98506006d9fab6b8538825920fea77cf519483095a752350672c6373b1';let _src;

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
