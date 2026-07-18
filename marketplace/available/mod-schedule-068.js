// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSl0wogZUtwzovDEgaAGey5R8QqeBdHnnRzN+kCip9C/267O53AWhfGWsuMVrp/RdQ7Zh7vlLxM4LFKzfDY7OvXGBzhYm9xRMcxuWJpcKZNiw/oXla89y/ZfwqABQzwuwV9vckC1D2BZkFYSED9jomjTiO7hkYIH7Pipfa+fgwP8NWI6FbWpi31TwCxRir+xMNGGCJfss0eGKHlxY6/c5fNw/YKoa/aMKMKhHh+y3AUvSKt3cxMtGlrfWalENkomd7V8lReLkXs1+5+vMCIDoNEI9JT5jYPRRahAqpulQHgJTtna2jizU+ASZM1M8G5aMOZeULX1WhzAWpZGjVPZut0oP4JUc+PEh6wNonc2qMhPPTUZGwJ96J0wLZhx2LkDJfGsXvsIiQvV1K7rrKDBGxA0KLZlqIS1z87CjaW3XJprbafgLyY4m2wWud3ldXSJu7ZYvgE6C0oAC6SVm2evTLblF+4lkq9TX/xqCJVv2vOKLYR5wk9A36NnAY6PisHiVkzr2EIrKnejke2d2ted0TnCADR9nPUjMRa4+QSnrpv5gXUfn6CpASVuaqeUdMdxtgGzUjiF/ne3xcQauOYgdt7W5DtkJn3MpmV42ECzCWy/Tb7eWk+W4DsoEm0SfLVpaOhrueJ/EhVXuaHhG7HV/BQM8IZw2oKoOUQ7VICNfRQwJKtYlVSqDarksAyNpzQJHFKOh0p7YkOllEopd2gVmACCOQ4nwj8LsrO6bNCqxGE/tcwtfX82tNFbnP1brB9Y+ROzkXynZxI10+Ts5Cc1jQJRZYrfU920WRNOgnC3LamVSm5N8QYkRsJUQzYz4CHlywI+Q4EeYHBmEV2/LAmQ69gwL/IyIHwyvWVEBRBA0VAagOu+Qe8zA4LL/uJOiR1q7MKrU2/2OUQ1oLhoKRMVzdnEDTYWte/awBPTWI7r44gXAQBhNlmphARWu/U38x39LSc5upIHguBD8hEUKulE2YeWQDA2d9a6DMyq4C3KZNIm+D7d0B9omkzWkxkuiHQ2MM0/b4kSSe2GL7R8Fs2m6NbosXEgunXhjS5kBsokbrHBM1cVctUfHgH9UQTA/KXIrHSZOADQyfDgeLI1byWWoNpi9cL8+pJWuuGQHJzmXxcX92Hj3uVmxnQ7/t7doDPoWKt2uwgGFiURhfwP/qakw1ai+67ngVgMjtkix0gzZMRC1HklWa//tWWqDvQDTS4JW8XVFTaz7QjLEcVDR+xKnLzwzILAoiwFtxJxLnToagWnz7zSmAsCEsVR+JNIRLAubUBGwfrqsI8EnOQWIROkRie47c/QP9grdP2gfOlrf+hdaCgtwnTqr9JPTml8pbJZwlcAjZiBpRi+gcsQk4bP1ni2aZn2bn9sBwetYaRpy1Gww/pKPFzjwgFHLLaFrMrVPKhSdRmYZ8m';const _IH='4fcbe52e81bbd0aa2b2c82b44ed5bf9237a346f3de499563f5dd7d670454cf7a';let _src;

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
