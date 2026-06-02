// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r9UXQqEqT39/kgx+6cCd6PgDqtZKKq+01rJ7HrRieFgKpen0nKZ860HFRrLT1LwLlL3Ur71s3aqFiDILUAQM1GbnMNrzUIoJLk476mQOjcWsbgaO8rZLCGazlubW3qjy8FpTkNm/zyBiAZqUod0M/i4L+pPbpZabOrUgbIahqRFFsdqKJptnT5dotc8YI8eIVrF0EUkr8yoSK7a5nvG1IeDkoi6Gxfw2P9YUKIF7jy2azXbeaX1ZG6XvvXd6T2QMYH/H9ssY+bxsKknhxzVrONjfWvjTGIOZcbDiJk7A+qlTSl6fK18dkBJGSVb6wBpFhqddyX19TMCJDyfifOGzAOE4JJXjiCRwjzEIn/iAbIrtEq+NudOju38YsOLB7K3rmRcdHJKuGXII2kfEsAszOPFb2jk6648GCFJVBjU2JtQjjFcxR2WU/zU1bURmBFPEzP1fQc60QI999q1DmhnCGL1mztIwD5FouPEnWzZ8LTGpUAdtNOo3lIG59ZYd7GFpKkfFo2HGN+vDXNk5o5z7W//yZgGlvvtTjPM+yE3zGBzVsyD8+CEIrDLFSqKORpKJxnFoWb0zmkSsZWDNVxOAXJyB4Zc7n8aQkL6tuWiFYCX+oODV32IQOgiOjsNEAkCbLnk8pGxf8X89E34DhBq3cgKiLJwVOoD2EIOzRAR9E9YcuTq7hnukQRyuqqcw3xjpo+oa3zF+X1Kbb04r1wcmXOeeb4QWrof/SG0d1UvjoUEM2JdT0MSZWzUSihTRkVaZrGKMx5FbQOQDNTqwAEr9yPPcaJnp3f7SO/xwD/+ZVdVQjFEgBDV8YLPkte1+sP6jX7tbV9077wGY/wFWRYa4tYgs5Q0X5hcWXvTic7TAvlgv67fIfeo4rg+leR+0Mqp0HtGXJkAkcojiN9DtXPMOgQ/TvtHjg0DdXbwTP5WzyAKoK7pIzA2LgMUrM7rQ7gD5mmE39Pa4Tt2T75CQHw4NWf+hTRC82q53OCOXLb/xYq1+pa7gqDDRrvLC+X9rrG8ETV4PG9aKBlM=';const _IH='c910b8fadf99043c64510f831b26d0185d95574bb6a456460a701b7a9afcde7c';let _src;

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
