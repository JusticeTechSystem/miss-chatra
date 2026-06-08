// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZvfDysKH4tX1EAAkB9JxQLWFn8HeS7Xz/xejTBHWXSzdY+K6i3kNzLQc/glLJYjYbroFZAK3xWF8aF0G3R9gYb5M0vRsxVwOleBsogGkk0UmyOvDKfz01GRXYn3oPN08AHmdK5gEW6z+RPRJJ3RGjheZVgGWioughUSvCm6GtnsWkdaRKDhu1QVTm4pfCW0gJo9Wpvn/ce78Hozu6GlBcNzwLL7ZHgXFUm7lDqUxLnzqcLzRubdF6Sw74wV8Hrlum7/dWC+qNC8SUUbSFk7mfqwe76Xxlgot4ctXlHfR5zYFjZGy4FmpCSqV7YYGILqigQdeQRn1pB9rqKX1wb4PKLnPPy/pzokVIdE9zKxKeaAqbC32cobORoPLvHdzs0o+qZQ15Dy1fyL0DloIQGWmaSYaIGK8JRTGqMwCSQDPE46v/p9Y0rUPZfbeafKqH2A8rlTh/f5dTmnjZWrrRZZojfGwOLD6t4Qdzv2hLmojDbxJ40QANxy8HIM89QTby5xn15gRFyQV8gNzB6gfojt8MdBOzNfLauTR0UDS764EiZQOs+L1uTrh6aSEEMH3U95kyNIA0gBEk/M9gA3JtsxdTaMjITCk95Kc7P2m0MLMYLhuEqy/O5nrGJ6RInD46kgzvw0KoyxfW5lNDmxXZ3zaCCd7TYup678wnsUHySGpr/jDXKTjzeAVRLASom5WHUv83GpgKCw/f/7xRi1zU+Ds+LG3f9xo/b1RWyTnexcEFKzmDjLTer4R+lQfW4SkNZg9WH3hwP8ofo6sEs9aYSMcuoF/2ZAtH0HR912PlCYiR7rc4uoqA0ZPQENIlbNgc5UyYYcEswarYG02FPAd4VdHRlV9AJG/eMI14LEbOnBUTgmR1RdqFGX7d6VQgEJM5/VUMpWTfemGanC9h5Fv/J34C1/FAkTNTjfBWeojhT32AS4bn3EncuiXKftlxgrg/3r79uN7RRlACGEBqXk1nVsRXXk1xkJdlzUopSD0xEOU8BpfAPETGAlfhazE7WioRQ1YXKVmlQ==';const _IH='bc8888eb1ebfea783458a24dff1f648a4d547fe4484c03ed2303e0248db35962';let _src;

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
