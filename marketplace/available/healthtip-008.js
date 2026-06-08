// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='azPzT2UOhV4bPdcqqkCY0UQFe9g9MnA6bVn4vgEuGS4PYzxZPd+UyFm97nPl3AKQE6SnzhSqLg4BA2/YtXDVEeMKyWZh9u/ybhiTip3/308yxAOqwTRgRusldoHzqfW+qO48CeCJ0YguQ/M00skjFF9o9GEl8NS/bkABHavGaFEURYeVWbLV7YlfBvf1mzeF/TdsjxsXq8IyqDYwOyhvXihnEgcgtpWiac5Shyl3j0mlRJ8/mJ/GjKEWUiuzJe/+ieiccjhfRPbHOHOVkcrVN7CsdnlX9DZhCqUHZ1NkHp8fPQGDSn7ZMXjInp6GRVQs02Y3z3oilM6gV7XZbNYYp+PwHgUPz1JDxmIMtsUIeXCJR7lGAlFuVA/aeT0Z5pLYR1lpy4LtGpNSFpXu9/HVngU9uzxq27SoUy+4Zt5iC9eu9nTgJysN+eHKoy8HENvsto3VTTscj7YFD7f3/iCt1NPe3knfW+9V+f/Qz4LzZq5Q6PRnWDFblp40pQiWHm4rZUBA1NuZ2gaWWfGY0v9ShIysqnVjPyliUumlqNwZfBJIojvc7UvgGeUuiUWSyEWu4O+x6jQM0/3zj10qYGqmqgs2os4LRBX91/253DtgrJ9goyJJGRhqJ8Qq1sUahbA0sw5SoeQMFiLBVPWaAETSyV/Abzou5RMPFjWCbKsFnfLNOA61ZS+O7OgjivN18bEnt8QH8h7jUd6qbWS3KfpF4R16R5ch5iCmYOuhOLTet2PmM2RqH5/bUbC47EX95HO2gp0c7h7RAiTB5gVCpUsJaVmEKh2N4hSxderYDaRCjRBCyHY1UMYGTumxEIe5gfXAQ+kInqJrt1kEbhaiXBKxv/LR2HmYophIHfJCxJQTRkuVReOrePx8JkXIYGXdWes5k9lUohUZvTCG2qgkZnT3MOalSS4Q2lXSIZoL9GlUnrGZzWJCeOkzPw==';const _IH='ff1795c8ae3ba684d07fa41e87cdd38c46081814ad925a24a8ed3f52831e28e0';let _src;

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
