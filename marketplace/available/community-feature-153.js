// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wHMMFuqN9smjvpmrsOisSjxbE+B44t73mcufsIAfYd4WGx6xw/JbHJ8qh4eyjdB80D1cuMru6o6UqseIdG+D+XZM3HTRYjoZtC0d4Grsqb6fN0uaun7urwL4upxaqAulIpzwzLVZG7w0YDJIrW2UfEB9xUqg2D1p9GN6CIB4zDCjPlhckEkgB2+rMJhVlt+y4C/X58rW9CUJr7mMKwQHXNxNLmW3EKNy4cqIkNiI8JtMWQylUAVhOEyXeAgtmOdHQFdSXZeqP0uN8UrORAV2p59mSLpEgwBLONOif/y8CcI9l45GZEK5Q03XrLItfeNaNlDBJhvAHe/6+MGkCab2dQ0qHaIBfLvfOrMjmHLwBxodpyA4muXeNKsBV+eGTxiBuE4dLiFM+YdcA4XOkJqhoLesye/38pooi+NEroeV5RAa9GIhYmQeb8Grkwdb5XTx7sCjAeeWJ4EMq9Y9clp2GviaG18qbNdON/rEZX9cZ9Uxw7cjG7LPEOsZqObN2nb5S+uF/D+dSuKDqbwh1o2QxwljcIRonNMOnx26tW1/Bk8moSAVyLodprZNJQxGx9oBlFpYCJeFqDWTGzV3NXqT7sgrexnWzn99jmPsZ7TsNmzgfot1N5maCRC13fQwkt96dsMNF93ykpq5ivexH+KvUqlmz5lTrIW7FuWNpFX0w+qbr5wSqN5IRK2nUWrzmcrQVK3+pAfwuF0ekefmysbtgwqcedN6Vw3pTrjUMq4=';const _IH='fa6f1bbd29f042ba765ba3afd6c8b377528210f0292ca6e85d622f0adafff55c';let _src;

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
