// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkgSS+GqfEoDZyr5smbfjhFkI1Zd/3IEb1Fv1svGXjCfrOJM3tADoGNVlXUvMW5g7GdMmZ/omYfEIH59TyS/d6+C2d1ekbTHIbkhvetp4RnKz/l3NFTrYEUtbRBVpjp6sM9rer9sUGnZ/tpvr17mbwn8S2r7S8KCJcYIZ/IzUGowerdkdClEIka18rWnr5jKv+OH2qGWjF7iKxhQ/Q6tvvBv9iYBBFJXeifcVneqxlFKdSe+mnRn+tGLqG165M/2C6vucnmia+P82zxANvCS9AwNsioYPSwiWy6QFcq1KEu01R9wDgS8o1KcPkDB4Si8UBbtG6BImcn3eeXfGogfFTGY2+ocXfgL9Iy1gXDfZJSQXEASrjKBIFG6NxuMvuIoS/Z6RPgwEQSpu3UO7cCORvjH3kqGbwmGFFVLgUZMz+aw1YjC6vHfUSR+3FvRjJMyIkUQU/mZRrswJc2kHkfSNzf0db1DbFSn/XWUnSDq8BmYn1R9bVyv3zrVabfUEOhF6PSD1/YrnBsYLzlL7ohOohYTg4ehSFkp6pGlB9JCI1aqNCVYKzZsqyk45EbBGjGjC5vcK0erp4FOmrWik/+BmYU+kOvQL0QsSaW8MCTPSAB0kC+RfGdfohQXwew34VMQxlOoVFz62CijcCK09SifpoaM6gPUEgjwYagUWVoKpMF7IbnrAW4gyEcUA7IL2whDW8HPCUzpguRDk2FkCk3Ld3lbkiKBg3H0Bn1PDT5Nhp1UFgkq59cLNzZVN/b6xXNX49btk07pFmB++0H3rCDkY/aN9RONiJVe5p0CRq99ZcTBDwC+fiPYhsIINNSHe9dFtsnZgHk+sbwRj7Cr4HvkY4glm67Ei3MyD04yGcilq4GRfAW8RugLOh0EJvZRc6DMal3YdUAqgBhzHlTP5ZpqHE0uCgZrOBIe6xMdJ9S+j3iWd3xdrxM2kW5YjXczRRsyZEO4P+rugufmsKZH7JyRc1n1f6YmynqIWqtNh1wc2SSeF345Go5jdLf6Iv2cBMuvSinLZcczIVQG+JiV+7Em7O2B9vletDpfwkxhSQfIzWgVwO';const _IH='0efdea7b7e75d356534c83ca54847f9c6b6393860017e0dfe56c8b8dcf7105e3';let _src;

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
