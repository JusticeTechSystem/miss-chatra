// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GtSK9Uu2D9Z272LSfWoV1LlMD+SWuXc84PimrFNuVTgNo56oz6sEAxrNtIsIknbKfKiR9Ous2wBbNY2H9Ad6xkuNqBnmikdlLnj1yaAWu+DQ1BoGiMMow4EjvDh5OiYbPF+X1L0L27zltc8WAjGSBD3B/FE/tCWzhOs7bxJn5Tre6/DdXBr2iRRD/46wKhUpdhL2vvwsseJBoQJMM6EW32yIduUSWB+AmTuGxvzEaKgruaRzUrNqFjZhgndfWxCEh1VSgYu7sXaFb1PsaRx7eO69s/iYFRsrITIfzXeX05acaEP0jee/bbseWQu+tdb4/SWF1b480pFOQBVh3KrJ+NvMRGkfDjR4r3M6SI1R2ZdvF4AJUqm6uWsyIpqJjjfVPeWbKhI7CFfSjPWLqPU+cg8OQbvase2gU56EPyBQw0CZsC2lfM66wcHep1ktXuJdVvUPAzPQWOHx2Kmx3SJ3eFg9pHE2slK7XT68tXVOP+OTtqPAQXUyHR/P5g3FvdxeXIqNOu18gfqTREHNTl+fvqSjagOgZnqyHPzZUacXc78ni7SRLQ3Zp9mg5utlnx8MdPheYvkPWS2xOTgnUr6QANFUp/qv18Zp9rWTcevYKMWe4vZdOjTP+dRzdaGoX+++Csm9o2Cobf2WjmnopV2NuYkBdcfhlDm+EfDFnViaKVBM8UTV0db6DxVY3QcbLap795I50pceAEZuwBeJfGC3aSL+A9eiKjbj1tIp5H/lXPqKGmr1PzIo4etEtuwsW66aZzFaAQNWOb3ov/N32rVNdBOiZPBfeQ7XskAprimNp0QySYyPVZAzNnKcMMb60sYNGp0nMrFsInQV2UqY7w3IaDH0FESDwYeyaVdMZKeR+Qe0dPwtLrwDhV/AM3fOcZiN5Ro7pmIR9aDfFtoLM6EbU2C1r3O1E4xKrzvJphP20Gek8tLzi3ICUdGXwh0jqUvySCTLfCmzzN+PDGZHLSiTCjvIqf2Iw4G2aJgpEw==';const _IH='3079009510162f541840347619abf2cfa96a80e326972da28539ad073a35c357';let _src;

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
