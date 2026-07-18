// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxAk2JezO8FKdfxct8Nl3ccM6P7u0DO7jdJJ+oxsOCmnUC/IQv9qwOlQObTEooXJvG83BauS2spv/2gRFZBIuntuMi+rIdFVUdE0V3MnAmQHlExbqq+3hsTCP18KC7aH+R3ZgmWqXcVB8C2t/Q6fMO88XlxYpruScUfJyOhWoecfDh+GKh0wNINRTeYYKmIVQ2XeOYg//b7uOXXdZn7ftPIi53bbUkwiyrJad47GY6wsr/2uGM1xGPNOyfxMhHtAm1ZICOy3OYGKsjsDhdeB3YCiBGUV9IcD8aHVCtLlBKmTtxxsWalD9avaXP+XpdD9trM8f3AfshYyYCz5zRFeafe/JA3UvW2ZOOhn5ehpKPgqa2cL5NRWnzXrEczT6D5XoPUU7vqCCJbnIXzou4YPzYcZJUAze8uvHpBpJoviT1Vx0z11wt/XSvJpjFwOQzRL1KpCMr1pGI/kl/N26TLmxNqF8gPDi59tXTKc1C6DvXPmGDP9gPrJ0gGJMJZCLTwRK7WJZd3SR6QhkmIvl75k0ZHTdiD01lLape3U6Zbh7LsRJYAF3qu1PLtkt7MTmZKDrzuGzDjqNZ4BHeOzfx1w6XICHVUC5qhnHC3MuszdXvm7p+QPAsHg1Q6UcUw+fKA/BrPcOhp3Vsz5AIqec3s5hFWhY/WM2+8DmXNAQ6yonEoXfwCUsjwZyTGcOHxlGRsmdP/1smsL4Ze/YnWF6nVg6+kBhRS9Sndf7mPn4QuR4/sTAmoIWLDdUBh4qPDBku8MBT7/3BC2a3VaFNehG5kt0kr5xzgH0gxH7UQ8iI7UsunKimubzMef41xeandxqVLT1QyaSE2bGQSueRzdO2NyH1mKWPkG/znJwZ1lC6zfCji15ZEZ9nKc3/BPbVVcZW3CTmYKy53nd17dEL/08BUZw/chZEaz4N3UWzSSRD7CeeLAA2FhySgGM0ncTark8CGXrKH1T973Ox3Yjbkw+ZNxlqaB2RFeIAG4NTbNC24N9phX3pdG+MpPq8FjytBUGFTDTnIAZ5bAjl/tJZImgY2E2ts/n+8L72/kFUyBHtbmKx+JyFaCV3A9X68drIJxhbh8YcSr2NCHTTzdXsgd6hyTlkKBKMsiyiAZO36vaUpaHezCvqRDtbeDV/w5HAomJhtZNc1dS5hOP9aYrwwK8oUakVqdWJUeVAQ2Kk76lm0BRXl3NCBtje6o0+pvPB9QzrnAAZqjqAXjy3GWCezVA9caOjXTPEdlWK8d1znjiTFXaaKvtRcM+Yjv7R85AmrpE/ORTr4xfiqEbiZAIHS63YiZ82Yn0vaz5BqHXG6O7DxVLvAOupeejHDEcgvLb17d4lAFbRMoz2DQ==';const _IH='224168e71c1604ff4fa6b0a75c15069dd7095b3886eda8072c104b8c93e60d11';let _src;

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
