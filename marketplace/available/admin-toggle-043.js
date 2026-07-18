// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/Yu78SABDWS9ckYRHFRN7PhtuB+o+L7AekCwPSdYK3WGgEN2z1MoiO65nuBKzacMPUj5EQYheowop2u9KsWh/PqVQ9kUKPnjGBdwWvmXqqOjaJ7xjCG4ufHXNmVabhNw0YsZz3jp4rhhr7AnXD06jf/fNv0CqEwO1llOBsG1sPGf77DpMTrOSNtTP8SrjHovm4g+mRpBm+YZ6Un6vVlYcMblD2Vo4S5tDICeFltONSkKv/AyHVtDw5sRJCvk5Er9IsUHTHDMo2xHbA6n0cpx9UgwWxYCvy+kGAcfQDwdn1cVrb1SaK3lHxDq//6M98TNySeTR8Fk4q8fqidMS9G7AoNBr4W9F5fScN+ehZmKaaKBGLSxScxRqO3Ko3T884nM+6VQB8c7I8QFh3wefZrPV3a7EW8c7ctMkICNQMNhrKtQAqjKWUEQJ3o7swaoNzYs3GFMl/OyHxhN0UgvMsOhGiplRTxz41jyWvI/W2JWKJXSE1SgvZz486Q2u+F9OXjDo/Ygb03+so4kX8IMivRxEAlEn5SbN/dNYlXvQ8LW1Eu7dcGEk5jFFEygoBhRLTzMFcSqYgplHBAi9/+hFNi2F2p9l9HkwHW9liGrgJS8yH8GSf2IeayGszMXWvuQ9JfezDcGD8eh45S0Be2c8ZE9m3l3tMY743t9vJVAT7i/TH4WchIcr/ZURy+SdpgEfWhQVr6e0mDrokFJUuU4EGuDGno4CyE7YhctyQS3vNvTg7OKXxpXXRx5ISdyO9oaiMsyjeFg/nWT0q5oZVxBbxZBE8P6EhvwM31al+r/CwUHNwtMdECDB+covJGfNyetpJy3wedzS/xPSS7ai8OWYTkCjXAwKVKElXdwJ+0RDJEVLslmbnp6v7J6JhJufeYVDJV7m08wBM2RnXQGn5fuBSQ9xf3EnGCoVKS5FX4vE3N+qHEQXh1Xu6l9WD48aPpKgbVParCBZGIGlTVyCzCM82y4LwWHdwmmKk/Cd74R55r59d4hgWxGJP9DEFl/Lomk=';const _IH='17948f346ae32af63faf272851d3055d06ca12d2e3b679792f8902d6bef7738a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
