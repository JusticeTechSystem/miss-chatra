// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVMGAN//M1YNjX2xuwB8o7I4h/alksZs4zGElp85dFkUu9blQX/gZtV/E/CHvWzLuew1GrcRZp8UVyg2LeEhS7TLfEWJRQYDFuD1xniqr5o3EL8JcE0VnFUK+vHQuJpNEnJAlkryOINmpn6B/6zwiSwr1fh8JUV7ggJmO60YE/yyC4mWTdtsnGl5Hoir6xN4daYy1vAm249Y06Lg26CLzK9ycWow5XC38Fum4iA3doPxYEZ5T/pcWfDXBjCZnxnnpcnViDgJy01jmc300iK6efdEP6jEhXMGEXIpITubu66bjAfw8z7y/V7KPDtY5uw6C6HHRwvKZpw09L47Ll2Rv529w+74/mTio6+FxgEXVhS8+agBnmgflb8M6yG09PO3Uh8H1bfVYsf4aw5fshlgjFlcaKwenwbfo+bB30uVOIe6dIFHQrLc2TFpueGhfH4VkpbYtI1VH99Xa05PKoifJpJJ9vlPwQ7J3qZkIf/wuaYcsGIRVRZExhOvHZDIjESu91dYaStqkLTcgKoOUWrHIhdet+Z/9oyvGBYCgF/tTw8FGstCDhosmOIhrSO0TKsV1t2yxWjpNBksLxjPma/qx6c8QzOm8e5KeoTJIZ9bhpwMyBsjMST/uewiI9FbwOt7NLjPJuGCCu5uf3EVFqSxims+k+zQSGTDLdEyj7K2Ra8waeq1WZo73aBMlq2P3TBb4T0Re7/yposEUMPQPFBKAnusHbJyZIubh53nLvsvGw8s2osKlpy9ermZjm0vA+OEC3aGm/DKIXtofjFLRIqAkODTlfH9kPQFZKsDZ1VRa6rhRBeCrXuj6HkdPlPIqGqobrgzmeQUyVC46IyRgCHAYPYlr9uIf8KdiacjjyRVQE2CYYUtDmUk0eygqKg1YBEaJqBPWV/YLPmvRfdyqkAg4qHgroYRxYyhPSeABIRKnCUev6sruqZxtSfcuPRzzJVJD5qe0z0SMhbaF8h6T67EHHI/Z//kneSch68s8aF3hE';const _IH='835771d8a1f73487efead35bc571e5608c6b017b84460aab48d397ea6772fa0a';let _src;

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
