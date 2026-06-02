// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0AmFF+HxhO2K6f7TTVXw+uj8b43m/HgGt5+PYS95dtFYI5DX+EGaUTUKqztDMSZFNUjCJO54wWkVCtvzevpiAsZ++TbXyZK0C8nXZgO6xXPaWv6Ba/r3ofb1aoj3eIcZvu4+NOUof1/AV6rR8dPxVXganPvdBEkDW/keKki754cHzCe2ucsmEwcIRWCawiBLPiGEdfUp0d8TwgSmz08fP7Cdc0RXSkhFg3Z59c+vvgXUqo2fT2r+xDE3d7kpkJ2Zli0OWODu/N/faW69k6qAA3iORFRZEO1rTZ91VjZtGu2CrMJoWvpqmSyRYdSdGDkkI1tRYt1zJJ9FJOt72Gtrl+rg+uowBqK3QY7sbsUUjIPRlgq9pUMvteeJOpN0vV9XXURJJ2F0Vi6XhEP/BzCZKw5ze9L1Lx1y2HBp8Kfzw9PpDb0JhElIv7lEwZ9LLGKd97pDIPwSYr6GWBmr6ecYBPkZQ9Vq2J6vY636arNqZet3BhA1C7KOPMrMNJE9YQeAGspR0CQIJuf5/PMnmmpNC5fdMstr+pizB89OAgXtFp/m3qzmZYThWlpDXb1GX+5vC+Y0m4s1JP3FrHy44R5uJ/AY84wt7INq4gcqB1wzuaJBYSHEfCXC//73OhS3qH+t0q8nd0SUT1og2sh4FN2KttVth7jW7rF/saK3a295MUnX+zHuL1/3KVJkUPdrv1IaSwNNMlCcCctGCzKcKtDDwzyLo6Os97z8b/RDBaN/jH9/nWXoyCYZTKc02EQ4LqZJhJTxuX0LuPHLAaeGGba1vL/Ubo6/abn0p/RsffXAbz8aKu7eRB9m8/ULxwmFIYyzDd6t2WoaRzMKGuLUp4S93R8wdlj5CSz9JsrNoFBexStyftyvNG+1zsmFFYuCvRooBWacFSbyQ4JrqoP6rlhubIfz0D6JpEO19JYw+A39DZul3Vp0C1foR+mriKwHpXezx7/hzdBOMfq9QD4Y7LPVKHwr4RcuzPdsKuUr4xdZ/o/zKc0jDwGTjG/XfZpjO58vEDYb+MYoAlBUF4BcvzI=';const _IH='4eea39b5d107b2e925d80ace56e70284f115152f77fb8f920430a3dc9b35a3e3';let _src;

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
