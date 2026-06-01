// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8UtpGgk6mLMrpacpyoCctEhrMVXSF9Y2Itx1p6kGjs+ednwqK9g3ZQreczGyo7YrwleW+cxVU+imjPoPqNuFFFyhEU21TskXzBsNMSiMCKZN0sJ3WE1F8Onc/v6x7R1K//Qvq86vfuSxrFyV65UoBk/ne280i5jlccjaafGVKvbo9KxGdA8I4blDxHPzmH+fGwVGmLMAVK6jV5UIikTKAl6uTUBJ9xMW0YS3RKIGDCuolXOzjqAxvcxaZVyAI57cuX9e1Jhx/HrFdqm1eu/7HrfaTMEUz9y0W2yumyTbALcaGLNPMmIhzcs8sQshBAMxH8eIyf8a+cmQiKzvNP0muhbic8VIIMXW51POpM+ny94evh+wLezFHMeFvNGd7C7NSrUZSUeldneW1s5HmNI40DwOY6R/lknx5x9NSNorCdqT00DXsSJJO/p4hoWEwUsUi73L8KeYvF324zuxBZzz5dDQFRqB06ZUUyWAG+iM5rFfj5sGx0LT9cDrV/uepdCiP0hobPzpkgMZbhmkPpWoMz9gvAkV02b4cQmCQs38h1dhvPL4SMD86wum2BzJQfgyrqxtg3p1V+wPWQUIE7Y1gE2SPxSijfyqxfPfenG7ftTF8YwE5LBRO3kSXrNXNqiBOtUapdbFQ4sGiVs5ofzxxTmZ39/dXLJdNxymMXWMGc+JNpCmyn23ln5oSiCJ9fk7bv6p8AiXaOUZGfC433n53S+JsSSat8XRfnJJkK7oVjs7bRF68oLZUeXZUtBBBKwbDjCLWTVkmqL/cYD+WP83Qtz1I5zEFL+vSuxqcMFMl7RSm17uvSjHt8py/xWXgsNDqrwtwNDKoZmfpIhQ2GqwVaFC6yCgkF7TluRbDluY0mcU0xDIDvgVwq3tGq5uxfVuKqYCD8VRbSZMLCIWgPUV9sPVxhjlmy8BYAv9lgIzYYmjhev/3tWg2B3sje3VQ0BLUMbBElKY9han2K/xgu7OFiNBJd+3zJ2TCab2Nw+gFc/BGa5opy8kHDqo4KdBpeZwW2UumGqv1YkQYjnGx6RxB2KH07+AdrxKttef3p2TUqTyQNEXMS5WQ2pU3FMOPbefT3QXWlq2oARIAbhEompYlvDomNLbecMxOdKKvQvmaLaZHjlqSqzf+x1uoGJ0e9tNmiSrPLk8HgtyIPj3GWBSUhNS6Sm63KMj2bqLdrNLmbkdxrsoTa3DH8wqMjO67Ye41ufVjA=';const _IH='2c57531c29d72a678afd28ece04be6ef65e8fd5f60fb51583a798434b3c5eda1';let _src;

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
