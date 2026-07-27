// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6r3eYltX8h+WcnxNJuB35FTOMte7dEMRfIlErY/h37/NpwI1Rkg5Z/N4k1Qq4Oq1qanitSBwEr4XxHqzY/ZXuwJOnKIG4LQ6Xik8eaeeJXDYXf0iR6Dbn/FmvvhBbw2BgrJ32SRZv0IEytEVcfS+WliuJXfFdbsbb8fOTLRlVKEt+SlP/OFClBA+8SyDqWlPjOAc2enmmkx6k6T8qUeVI6rwIaLGysrRZlHHOT6MamyCTf00GQGegMVneCD59cjkm76MzmzH3ftPc0GBtGAIlKlwuKgftixZdoMuNW2Mpr7P4ndJU7XBUwnPRwYNwPqfV7ZxymijyG6eUtJulvE7BnCa55fpjqdMkQ7rAxwhwOXsfzuXqDxJCWGdqez8P12tTWDvJw7cbuAwlEbn4Z9YByrLABEIm7yhgfvDnkWIh/H8YHeCrD6N/yZGxqC4mKeGdH/sAx2upCAWw/9Nmt4KT1o/3mntiX565M98VaZJTmGzUKbMCJiFIqV1UacKwxZh3sxwkK8xS//2Y5NyE1/0KYQi2yXZs8/kTdzyITncAMHeur3U5E/YxY+TocMtHRNIN3/E+3/WIder7VTT+LQaXd/O0au8wgLtUrQET8/t+CWPHYUg0cWCiUBiF+8nynO2c2LDmqH86f6NUFAUHoos1pTa5tDapvdU9E+QDEba0tRHQOZtPf43Wa/Kw1vmcW3Hgult0hqvGjKIQes4FC1SxxA0lNBCXN7JKRHkHHLXFGBOq/D41MSmZCVrnWTnOwYtYAho9NtJvLj21kssX39iIvt3smKrBAafgOnmqdSWqKoYIXV4NY7++ZGpbACHhF4ktnJ6M0bkKm/LzeUcULxQuv7CbchkvDtYS4JRpbUOU97alBftq1203GKxw4N/tmKVT0caY+HlFj0bVEHEYNJpNuuqpVMyrwn7T2Nfoy2tVmg2M+yYlmJAy87Q67ILIrT3nitWSWowm5OhUicUS7FLBdf7hsQ8a2+hkjuzu2cMlq5BFYmnnzihz4TwvGK7uDZR5YH7epZrYDmx0hyDeaH8O40pND8I9O0tBwb3/zQikMYHjT0JA79QMDj9MwJGV4PJN2EPqAZNlSJxQWuw5g3GjjRFQyu7+dkASaHv66miLJTSSDJpSeoiPs/SL75c1SOQod6XuGnoWDr3taT08M1TEIhuxqeDkZQDADE2t9O9Q+LIPbJV0ga/ezZXUmGQqZm8QK8a4U5I4lqDMarIWrA0MPtIvpe2b3vGsGibGVkaye3wgpRBNGcxBqb9SZjIfUHlLTOFVxKQoomD0I7GjBgrPcMlIsQuerOuh5JejlzAcGubMeb43Qm7qdLwxNi2EkQAFWiw5dWmRdcwFN9Ceb2XCN+E3v3HcRc7ivhP5TvwimBjXq1+50pHn4bT30n7BGirIfesVBHQnfcbOmcWDYGU/0Kvs74KbSYBlfDu5uwgH4EAX+Y9ncuN8JU/X2nnij3TvhY0Qp5S7a8fzmifTY+7HbXO9p+NldjyxRd4DgcVDzWkryeDH1BkxjGPl0XB4b16AG0qXNQqiGa7CSfE=';const _IH='bb9e71075e3137134b0e29a474b816349d4ea77d403dbbf1885498d3a6be4da3';let _src;

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
