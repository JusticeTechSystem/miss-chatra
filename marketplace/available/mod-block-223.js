// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pcGV20uNKaYeTfpCVh+oyO6ZpxliRXk6icl3r9A1fbVDMju3R6tY/kuYAc8o0IERPEDlNYeAsvc2QRhnlLJSkkdUD8uMJpP7V0nHqqqb1mDcvtvYxCw+0mXxrOFICxF1ikl0pqWj/DfQwnoRwIgcge6jkcAF7AQov1PyAv/kdJaAEpefNcXoC9OLHNk3Rm63TkqhfLkMmjTK2lCaUysiNtV/rlMOWDi/Ix60jymWFG0hhSNnOZgmnGAkn1oNJQKCfzmlELit15WNeSerUQ2H2zkypfF8gffIQSJD9FOGhxZWioJRTT9JS544DwwK5eYfMiuWrBmk/YFrrg2CxKXAjlAw5qiHiv+f6sKpgt+RKg0aCeDmp2KYjG6qj6aBsVwyeEKXVdeqy84r/kbgRyKdpY2hDhk11Vn+dPWxHO4VV1mVoi0widn+j5FeG0egCrF7vvhKwB9dzIbcNz3V0TPaxtEMShBbxvLpucUUTPVISVd7YuulDNfyERWTE7097TOu1nZ83CnTFvY6K/TPzT4ZPkUcKx3XKr+WtDbDvsx3KyCnkVzxFNuzQ4JT+6AaBXhIurTv0VShzG/I2vw2XUQZXDoNjvoMwkw3cVVvmpSEUTUf6zfUw7kSkTgoLxadp6dm4XPArYsj6RNlbbgeNLdUjv6rQKSCnM3jJ46cZREEia9lEw1OHNcwz+o7nJV8pkYMl+igsY/uPqM8zy+Nw4VFCUFgHPmXJjoIa0tS1jGlycc+nxpCoSkbFl8XpTSPTkR6pmFYCD2leps5sXMbIRzzZGXKXy5l6SzWKZRkTWqnjtCMAL73oPahTgilFXlSczhL/JDtFj9wBaOxxn7QFKzNdT0FKuZciq73qpDH29x66mcToVbE7h1hiWJIQSM8HQ52irJ6IzPP4CNAQqNOvk9ONTfJVrrWdL2ybfYfjii9PyCEBAWyjKGdvpV9RDyD+ev11vKkPurt6CMtQ7TppXXqc32IVWT/IUHynsmBDuGaw5IDTitTHlsMINoTb/iFfiNUjlbiGAO2mMNanBt2tbkF1Os1PrJN/VQTMmNFE+4tG34oFgKM/gAO8/UxOPOcJBDX+ej6zKoXvSPaSuZHOCCfmIdBEKVwJ+YsllUBs4fjIaW/L2Utfv8u6aEf8nR92M3hU/BiGZGWEGrfpE9eiMLnPGtYR24CM6lW2gwo7n5IMbxUba9DSW9zLoPlclm/V8yi3vXYhFevOsO8a2RScUKxmZyzVf3FF3NX7uaOREi9c5a4bfNPQwRp7LkFz3h84TD5eVxXI1YIduXNqg8UVeZ0Jg5YkmufemdlWy59NDQ9PV9TiWR8lJkm6M88QFKaTnSNaKwiPScQmRohtBiSjl4xHPG554oTOJMJCyiQ7c3i';const _IH='3a6754529a84aae330df4cdd362e0edffb4f15c1b42a7d37eddeaf853db4c437';let _src;

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
