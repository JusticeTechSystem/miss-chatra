// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MMv++2iDxMQ2CTKJErnRZ7bV9yTvCsobBtoFS+EUyoVXURzkvAw8LXwfalVtNKfwreVUvmkrAv8jEAsGPiyf/91dSJ4s3nx0EWGm66d0/0Svme9WZSXla8HHa9a4xsQ2fZkn6th/tMiOrU5iRu5MHOVZB+pkG2IZKi5jEb7YXA/rhQXamdNHDvNqF5j6uyUzbU6fWHCgGOdGYNgsqW0BkGADTO9YmrQr5yUUyFOD6Gb+8xPFQU02JTleh/YH8Dzzetu1iqPWy2pmFaZ1kIuF6tC2E83IUuH86mrgVjIhv2tjqx/qIwfKoLD5rPJahkzy8ke+m74ESu40qM3APb6Vv8VK4O1IykjPh98+nIDlVy3vMDhqpt8eFYweeRdz7PCpT4nz3QZ5jtgtkpEHYPdzBhqUVkJF6lGaxJaFKbTwFzvllAiKVSq7zwU3VpuajA+6E/DUWqK2rcCut+K41Zc6wCuBkaz08QsTBmGGO7LSK46ve7DO5IvmZ0SRI5v6vHNs/o+YQUe+16HLSBd1yjpfXhxwPtTQSchku/rWfVcLR6qqI6UOubvsfDGaOBsbbnUQ8jdYnnk0Hclbw/WBN9GQQk1idrHJp1gQcoabaxgk/RjbqjaC1H2/z5XY7y141oCFkiAzTJufpwQkT3LAPKP2DkrfD35TyjO9pZcbGrLpoeozvaoEc1q2WCCZEuQpWcSoRr9jgYaRXbRb7B82olwFE7LZ6/uCADKs5fOiz4Jj22uyV/GwtrHwWDvw04jAGRwfLX7seucr0MwS49lCdjKIS8XxN5yUQdjcMSaNPtSvUhPKA/Dcx0aSvHbJO3jIeH7OkwVgEhfInSXJ5tBLPP4Aw6NS1lDg0keze06kBI/o8MGCv86nldBvuYDSWY5/Ln2o9SU3DPDs8x5M2XWzhZDWf4rDa8V7m6Y0AyMReYPcsFYHjnUHHco20IYc4XAdptoLbYx9eaz14m22y08K78IJe0OTsPYb8vUA6KSJLm7MD/mXwL1gpT54sPAfObauMzEujdTBPw==';const _IH='5d3fca18f4a8b2e3e06113606f41ff01d840e38dfa01c19eef8ec8cf98244cac';let _src;

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
