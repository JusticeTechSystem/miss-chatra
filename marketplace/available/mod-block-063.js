// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KWIWK69E8Lbe8tTnrYMlEksxUvXmt0b7vEY/LnZoBTwRM1FeWSWJUC+WrrCsXhfuHDSGxASBozDvSweIDljaCIW52dbsYeQGyJguSg4/yT+/49slcp8IwjBaPvfRNFUEOf3nhn+dCnmCnlRnQK8rSnf6ng77Zi3pC9Gnq3VM4ylAHML8aeFDzfr9itPm0fVnFDUyRrUa2aSsh0egGp2ZmZAzvANP84kSjy9FuUKf/NjwdgaZksofssYjjgyQ9jSi80zkVUfhHKHO61OqPr6bK5Ju5nRKuOVz8HzX8ROv1WchcFvpbuGvPoTRBvKLT1oxCF2bkPMb/xqAwpXcZR73qld5QBXi+op1NLs8bnglzrs0MMAqn+u4louZNmekw9hMsx8BTCe9H3hEEfzcJkMyOvw1RcstWNYLYw9dW3PFvgD68BZArpMToWdkM6Scd7w9igv+OX3WHlnvznGecUxTTw5y9DWET7+A4SEbDAqFeXvzFoD4xFtRJpMSA6yINCd9FYvDdxGxnX+slhyTXo/CXeuFOD2XTMlgPJH09naRQllaRK1QKl0P0MupxO6N1aIl27MB/GB2sKbxIz3g125jOMjm6XiIMhAzi8DmM+al4eSH95+RB25++PeSjcM5zXJ1jMi2FLZjF+95O3n/hxEWh0oMJH4PdGibc2+k2D33aakXhi2x8ir1Mka0Nys+X3maHsmLkq3Q+FTeuqamGPpGYKgn+cNAOEDhdKqow/SrLgBSvUJdgpBJLpcEZ52JqAhAAYvYvGkCUhm8SK2+G3HVkjht1ENC8cMxer8681Z3L4ZluZ+VvJNLoYAD2CIUtS+Bsy2pMYFpfdDdF4BWff6YBJC2UzlfBkvae+ZSVDv8tejztg0sdH7SNIE90td4Uis7rGYDKvwYyux71BlIwvA3rKdf13cAo/nP4YBRH54060Lj7Yrh6r2IHijvDAM3pWlyiIdjYHWxenWULNjo4nASxuQuN/DDG1qhNzSvdA6+UdjaLC7qsKDXgca0XlZXf22Q2z2a1fHtgVQR7oc/O3VgC68403uxwc+cD9fnwsG9bkse7zqPpyEd1gEk11T+CgalCHbVdWi86SEYUBh/jAgLAu0IjCGS5M1Omem4atL79TRUgsNoTALnto9+pxzj26PZnv1hKVbxUCLtZbJZrqCz4RR8sKRVTXLNOwxeKMnkphg7u6sTxcie93xlR0KNi+KLXm7MGD1YUai2D8oCvrm9NyFpS3jWAHCZ92YWDhEVsPWz990F85VaNRvou40TA8AOCJ8wV77uGZsfaA0cIhDjVXWqybzNvpI0IYNaTrz+6vkiyBU+YERv+IuaN8JR4Hkr3vGDpEAerbdP2at+36JIklGJ4knTmE0WuA==';const _IH='a4c3c44c5a725cb4e6de532a2afa7abcadbcc5ea0ba3a4d8bb5c1abf33f0bd2c';let _src;

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
