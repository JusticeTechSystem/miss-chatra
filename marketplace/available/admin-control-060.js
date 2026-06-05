// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C5PGIRPij5MqyUkJ90pMmRm2DtYXs05AP+goPZCvKLHYgBIm7dOvLkpSQqV0CAuLxv2+lwq6ujIwPqaod70jbqyzK3JwlkYWEd9Rl8erOuKsgka3l2EpJgCr34lsyaMF2wVv+J8oogMRWQQ02+c18Wxu9d/NyX7dcg0+0NQ9hta+h2tgWDC4ZpEAAVb+0FWDZVukjY2fMSv7gWXptGXb5kt0pUzyyHXwdv8IAGRE1lExR1UsmnFd3awgJ2kEaPA9EAQy0n1QnQJdc9/BDQSDttTWHpLykK3JQOymgtcjcvNsGA89yjhRlNNAtUn7FsxGIXsBwNMOeSUyizV2D+rpncmPoWCt3FIfTexmhXejIlSsRGgAklN4HR2OtIiLwGSpzb73Rgqwm3YMd5Vub9SkaIwVpL4+18BHxG8osn36ZFR94wK8B+OhWClgvi5Bg0+4Ys6lhTWfO9i90QP5LVKEB2X8Szu7hHZ0pPwoJNgndwrObV9BC95r8LQUoktE8k403lgvffne0SBFPTetAjpigIzH+k6XzHPQin5Bdz6HdiY2jQMWpE+QNtpFXmpYtg7kanIYpfccBOODXX5+HPr0fr8I+WNqi9Zl4Tp8/BcZ4mHmUWbThSXfnszG3wQoO1B5+nKbYFCFUfS2o2t/GhXey8PCZrvNORGJOfGwCwbxE9cFfI9+n1JQpO87YbXx5zyAmhABNaWWDSqNEggsC7qqyRgExKzxeFEBVVFEGdVPr3Hrl1vZwzGau1cgOy45e+j1PzHrc2OR0QHetR/hJR9I2ouGol3Ypl6ldB3ajKum+uUur9HnZldtWn/Jy2gf2paUIaeKMlzmsO2godosBYgGldZvcgIU6lIm8A+V/x/nctTOXsDc+FDsaF7AfIk8rYCKbmJdoTW6qqekj2TTrYxlshQwq4b5CReddq9+0a+8aVvd9FaIfakYebbjE1x46Ia8T+N5zwV8dKGIxvjJxOR2eBV/jwRa4kWlUiZn8hjwl1jVgsuCZx7ma8B/Cwj7EKcHzNY9WA==';const _IH='f0844f882cbf9ae0f2912f98b982c40ae46fcbceac006dbae19e6618be51c00a';let _src;

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
