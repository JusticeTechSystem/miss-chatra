// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9qLuqeKMS4DkO74FMAtHbJzsuGUXHNTb5MlBNaU3N8YnUStsqO1ubX5Kny+7eC6Yh7mMa0AAWGCKT/ifLsuck0XenKtCZpaNS3GH4EoXPB1z/HZAQD+q1f0O9qgwPGbQtoqZFN+20WOEi5I6on407UQGtgz4G9nMNaKpEo206WDYf8MBrdDbuR89G2FS04FDcdaMTN2D/4wgbpGvxBWYgLSAQtZy7tlJIpVa+DQQH9ahpxdpEt7IfqAyyXNKr23l8gwIIMOZjrPjsUEY5kEl/bRVzqJO9Cu6a35hwFssoDFYurIl6fF8Fu90hdKCNjMxEaO6zFovnt31d36b9MdbB2uPCLhu6FR3CcdJAmdaATVBbYrHHsefO1DX1xmvQp679BngMhm9gMMmlhIlRJcCkgnsU03aBIjzBd0SnSD7+1l4B2D7LFIPWqbcgVr4Ubv055/TsqdavGvXvJ7bQSbNdXSMdWQ9RfRGQ+rkbwy1qMvEZVUuXF42Fkx0DkJG5OhJ6Ovx1nEQCLO+xLD0MYACP3oZiH4/Fu2kxcElRc1G93UhwEYC6/0g4S58ht2eBLer/tYBIzMd0Ax+jkhpNCPzqfjVzMjgEz0P713A8uQaBuL0Xgumk6Q7qa26C9ba2PLS4kBe0SfxYAsXQWN/Zf6Fr7chvI3uzl0WLgZLAcXvWXPjy8LS3NnCOtt30r4NN2vS7JSv89EXlWhHwwOqeWlVKNl9+tLxZKW9LQ2H6HoI2iaEZIFYEGUcw31pBVsFiAMS46shtYzyGp5Ee0XC+e0qqK+U/y51z/yAVyRfq2khJbhD0Bvmc9lMyMi6yNKDdwbFxurKjJQVfmzTfq4NG/2IMzRfm/gleMlrlQS06kmifMzNNaaR2mBVFi8+GlBr12l9kRKynaBP6A6u66XSP9+4BUd1z0Xk+lgYWRfKY+zTcxFhsFw26vXnm3gqh1oLsgXoUtWBI+HVHrbohr+2XuFerkHkDp6+iuTtMlEO2Bw9M+CxKsNv4tZ7Lt86m9Fz3o0oZVu+QIqPuOC4kn05RYmYpp5pi2cOjpK1LBZq2bLeNQlPKc4maua6oc7BRSWw+qPwt2WwqLSN2BmcKLhPFyP+Z5JegsJ/e1rB0Sg+HkMm0xguFj39/zwOu1mKUGadn4obKiL1mv0Gi2ZgvoYkPlPN2MrKoIh9pq07Ufg8seX7vTROuhzorRQlk97MyIRP2/q2EdVeZNow6RU=';const _IH='1614e1e5a4ea90de6ff989edebc0e38159859f3dc635798bad734b7214e31161';let _src;

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
