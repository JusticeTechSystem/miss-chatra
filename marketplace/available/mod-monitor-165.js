// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/+yOe2K1w4ASDE3+m9TZk0CdrDp6GfkTrjeAb4gUVxktcBn8ffnzpKZW4S9lm92G81qkmEQ/+NuYqwjWdy+8aQXsKSObNHdceffSLMdhnswX3NX8VJTMuzT6P+KL1AmZcZpl/HWv50b9t2mRwvROlEFcG18b7bGFHMuvcDn8GtJdGeX89bOQ4xHD15BxPD7oyNv2DDAbJqBr4IE3TSR1jdr09+mzK9tn+AQ76J+EGahdfdvgg8RgvUYyJV5pRIzcoI5xkO9pgIqHAGqGj6mOGwI4g0fwkXgLd7MJ5Uogl1708efVbUm8d9nT8v0k4WyYZHIZL6nL/fbJJpOvPmZ1uJV7lz4me/KycQSaTcrz97aqdVCnj/KsUrqDLHVNtOg/W/riuDTmKwg4Dv0JqN8iJKCi9OIVKUnlLATikJRWVWMeNoLxowQkMhiMEICndWG2NeEvi6pH+HTku5n4OptB/uHpM2MChw/OxS3YbDszb2rj6f1Ceh9Dr29O1g/pnOImLa1b62rR+Ze2Wk9mclgr8U6V/biV2b9H0prytUqQztkrvZwX/hC5exM8EA295oIss/rYF3YUXnaiJtmovpbn94j8+ol01yOMPp3hvswcgL5gTXW7F9Gh/PlPfY7PFahkYm05JjVxhnYAQuZ1Gr4kQYwaLGVlVrXAzUz+5Gn7CMDTCtrP+dAzhPuYdiVJAPWexQn2aQ+os3hKFRht8C7g+kD0v5dtYlCRkRX4tASMXVZlINqKw7knR+l3uannlp0TA+y9ooSmKytaO+0W3qBO0mODlxYG0zVN05tKAHKERxoTnxqshjPvS5Jx8ssHWBOhLBm5RvnSNTIjKtWY3Uy+nrOFdWiNAOPgqdUqS+GgH0BXF5LsYnbPIxRM/4HveHFlqBvtB+y07MyE7qtFBMbqGywKdygOWjAK5vL2oQzGTHiRObVQj0KQ0J/HBKch7NW2umaSXgmLr1EsUnRP1fZFtx/1PXYS4zk0SrMzK3YiCtjVzjNPhBXVKojpMtqbaAvAzArQlmEGlPJ0bY7atCUXzkkZmtZ3lCf+or44YC5bJn4CwCz1Zl7iA3f/Fwh2cu6E7ZAqMwLCEwJ1Q4CuElmfmNuD+eghx+lQp13UqTKSPWm1dNaJ3RvZ4x1LAJ/5ko7emhaTpLGZFU4SKiGLiL65BIiECC9+4Es4Ss6dwW0KiZxSnIBk47TmNqg02aev5i0jRymWeW3qaHDH6/njnHOQ1Ln0P8gJ1/N0ZSUhLji6fklPVXRV6/WJR0gTDlhGhED7Hsb8QE0BMy/rdhVu86+RMvXGEwZrPJFGIk33Q9ADvcEh1CrksK2eIXHLo/AYhR5UPTZ+J6Pvy8uD6EAwnoUYSInq18X05dFz5NeD5CZcF5585qA60xdJOQSP7SBrbb8cTCA==';const _IH='edd219690811ba1cd75795d0cadff86fec3504860914b6c5a7510fe97020af86';let _src;

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
