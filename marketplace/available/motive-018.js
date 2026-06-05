// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0oLIvk/jOveWcUIu0GLOCnFYYdcbHjLsDnxw53mInKGBwylImMPGOhwfKmpWwjjMcUQfa7P5lMcOy2i8gi5SUXgEhJdQQLCrDiTe69dKY2S5oI47+cV5OV9zqOhXW/YGqcFWyW/mbj9VIKgXq+UDW1nIhWdvJLfyWGPhpx5KGbOMu3MbkVrVBZTLwwTxJnhKIcNGcABBrkuE3V+v4hNOyMiB7Y02WeP6F7GbNA1RP1UyvDPib2ih4vJC3xndLXQ56JgfhPmje2wNnlQvdOt00TBjXho+x1gVSDjZrAeUPqKK82Ohx563JiSeIGVbFXaRoyVpmJbgYDs74X3Ic04gf3ZT2AiScZp+fbhJjyJFmQeol1jqKWrtRB1gfJ1Img4ihPAl7Tekb83sUyNjSQF5/vGe783salL8EW53gt/wMTQuX9VlErtOC0b8SOuEsBvQ/0prwJjx/rYhHHYmuBvtAKhsATjLyrOeV7rNauaZ1YThcv+EeYilPFc1/AsiCeE+ExtSoHDaxpgzLauN8sFa7O6Wf0NqwjHrlpPKH7EGOcbBZJwTvT0tEBVnIhZQOexhQ0p4clwVvLDcE2ToDNsN+fo2+NE1zGa4ETstsSGCM2O6IQea/tePzfBlks85W8FtgStUWVPXJBPwhT+YvXsExHBp/pqvZvCQhB75UXxoCGqn/tN06OmzsDrXGRWmE1DebiRY3yVywsAmxmLPAeyN39TZUyP57+3vu6GTOs2JB6HtJ2SBu8GBVX0/Od+uco7Xg39nVeCK1Wk6mZlDO4oaNBFFnyz2E0vIQLOKIagPUMhnUlk8mH5MTJJ/smyxBDWcwk8MUkGrOf1eSoiSX19v3Gh48cPMYV3F30KEOsG348ptohQgYHmIb1hrkQq8WQKuNi2QJs8IkxhgjJ0bWNV1U74QGYB50iyabprHCjAx/od5NB0LXNURNXpfMAYpOgPiewxPUj6Jma4tHTTBAMHJRp6ZgKrhYyYIfaPqWkLPk8S1Gtpx8OoLLLrooXJI/S90v5jngXLKOh4b98ilgDIs1AZX';const _IH='3a3381bfbce59b7090265d0a51c0f189f21582c31421a377dd52876c0c7b2f8d';let _src;

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
