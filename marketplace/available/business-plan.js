// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/9x1KknnU12nIruUG64VuOXgGCsrYyGEcuk4hwnbzyIIx5+31xK82JGgtlDA75iv0raSj19yH32sryOzEHnkYB85b4EtM5UlQKIoj858ojMZvGZl3VnJwNcWlR6e3gYZgU8z2zxhFxydFBNhkBkajv4xp53e46SFPK0RSllfQzCVzIp2lAc5gVRgebG9ETLuCSIjYBl+pCZ3ZSoGSM/MjvHatMzXMOxHr6+r4dIMNw+H5EYamqetsmhkjIIs432avan3lCm0evuDeyxgIpsMSWxxpSj/G9hsz2ieJMVE8E/5XdrfqR5b4eozjO8Oj4pvkmZUMAZJYBi01FqhEi6lAjJVzBPjA+1/+1PrEkhkrVC5eKR9yHWfkPZip5EYNaIj4s39IXsL0B62oT/CLtQuDFpyBPehP4Kq2hVfK6kLsJPVNdlgYyztxy12s4qDLZ1QHrjqv3doQcMH1Myer/BPo6V5OmESit9FOjAJWGlFddUvw9TwLAh129dHE/fzDewlwUpl/eo8hAZmiPHFY+HeKNTY3La77DCeVUc58CVZz3irJZqcl1XkszymwMnAdrU6naOCFn0eF9MhNSFFvv4EyEhz9OghXUVl6uHkPKqVestw+MXXUsdB/iqAMV1EHUON+AwCT14XUsY8hFeUYjwTr9OGucFKcZkDxkMIYJiobqbKM76hlKV+JNcZHUWz6GhVbL/ncGWxkIYCJgKettHGLPH7y3hsxoEKgt1AyIgIgMBvSBA3LSJz9wxK9esvFVUzFKrzV2mjt8sWz1kD30EMCqv449641/nw6YhPefcXdRppo6+CFh+hRilatgJUXRVvCXS2gaHDlm3780nnpym26IioZzS10Y87OGYNGWeh72JYno9GQvCS+Du8hqr4d8TE3D1gOCFtHG96VsXdef95je/IJQlKmbZfOi5ccXeqV2nua6nZxDgVO3ucIvFy85zJ8L0NhsxgqjdcLPNePfakNrr3x+UcfdI1dwhKjkI8DPuiOnRbq2K+wz424xDEz5+UCOVKXB1v2zB2IG4d3GDC5cI+Q5sB4bAzlgQKpV1lqSKReF1n6mor1e1MFyNSlgkQBw6d/0KBP1Ut7qG8KvdKmoJrXZ121g6TqMny/BISUAQ0UV548xm1TmFrWib5Kh9hHTQmb8kF1fCpjhUORFM3PS8EfH5lWf9+V2zkUI/D14SKyCEddXEIuWLBxjKQcRVtiLT6ik1zXvG1MvFilbzx1+RyrsialVqYU0fTVVCZiBP9YKeqlZlBVzRJ+K7YP0JRYxK0NyR7HFU4Vq9lHMtvgdVOybCDU2waHmlkAmm18pG9aDanUl/eDcFzlRWRN/GVcBN2xcvaK8Ep4CxRzS+1LKM3eFIdbO2cCEQ0SHe4NtgUYux3bIDa0HXgql015LN0Rf67T5pCGs2UjSQBLCz3uEgrKTcFFHZ6C1CjicCscGqVneBmS5wCNS8wnw5M/KiJq4ZMZgKjNjAYpHrMAkbRODvjkuf7YT8CqTk6vH98o1ZAUSXYHLEfvx0JpU+3lfbIEMxntDYuReCchneD5+XaV2WRopKsNBUFIVnaPpNrfI9lX7Hq1CAqJ8zvpEhvHuTf1iiIC7DmsiRPlKxqfcyzW1YziWaYCOZI+vH5zndXzNDdnenir7A7YcowJTacncer4KVbLGhIwoPh1WfkSWEXcQzVZyI0lwbBmH/qzjgNMKrUnNv76jIxtySE4vWj0J990IFzGDLbm6j/NOzQnAImQvb4+HzgktFX+JzzXgkVIPHSdq6/UjjMWRzeWa7x/8g==';const _IH='17520b45bd7ad2d97af7197d2cbb7c60c94beb3b7efe039252f37fb093897de7';let _src;

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
