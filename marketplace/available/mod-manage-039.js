// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dmr74JXZJTIlg2+Qlym62ybfBXbO5exwt5UPEO69LBjMqGrxUf8ufCgacRUuD6C1lJWyB5+EyghLv82tDCLFVP/hfcsO9HtuSaaJoGsMSqmQvmnjn9yRha1KylAimaV5Dif5yZL0pf6+sDKVvw1620CPyH/SCr2btJWRqEcX5OG9K9kKw1+O5ZZaqiXM+iyWsEJxJfw5hMn/voNPEYj4iCvuEaE9LSmOvbEt1fPrfKdnrzSE6290cyC6aQM8V1X7zWoI2sh8EnA96H5kbTMrYbk/AjIglBzM0Y4OlKWZe52NwPPsTsW6JNZxrq9Hih8EUjunuKc/7/9Go9hx1Tw6SwifJaXqN8lwr1RGlrzA+3whjlOVz6QQ4oXqvqENaXjnqkrKJPejx35KylQPl0KqhOmsKSozPGy18poOd8yCx23p57SYENYI057d+Lc/lQMPt5pgBmZG/UnIMmYUc7jd+pFgq8FE7Qi2YPaWsWR7mce6uJQWg1yaNaLb9oN8QdDvcggECzWFSWkkgvTZ0o2TB2KnemCSLW98JIhJxBX8/hPq2mJQc/77O06PmjNCJ70PMV1r4VvewGC+tjvpRZwzcqmmHd6RdqDlwpozovevjczCeqoURki2XQTsJPGvZrWovKEBLiTtA4v2IE7XeB1bxU/chEzYVE84k1hTqkUJssq7fokhipj5BGj4Mosjf+dlB+r6Qx3zndhZV+Gw05H7tfhSRiZqVmdRp97upG2OyPcTjCzHUuydEMSFG2Ukqlw/3O763nJ4tNJcjxkUPe5dsggK8vx37XzAeWx5jtkza1f7MzuT1nsRokGCcnL2UhiYTxV7eIy8zr5mrbeJrn9BUbA/ouDzIbUdrcZdrvXBXp4d0AqoJN3jR3E2/it+qG/rPCsRRj5umoIm4i30jRrLsS+OaaFnceeZPstRMMZkU/drxZh3yyP+5Lsjzm5rIIBNYXifkaDVLfniA47C+dvLw9CRiDaAxGqOc9qDRwBsGtpW+i0PTYd+7Fq1g4rWbEq+d1leqzZ5NkAqXsjYSZMLj8sg/HiwRsaAQSz3BP5gsHtG1VCezF5ROCw3pD6KCUphhz7dBTySHLFtWpRezxJjD8mN7264x5/eR8iuSGSBlCqiXwQHUyQvRfY2IkR85f1re0Fk9ynuJPbUSkHKbnv/i9eHEN7VrpXLBFb4CtblNlryAZhAppVcpviQMaPJPkdZL2Zh5LauLCdJcJ+Wvr3OPZ2vaP+CUSOURKCoaZ/J4DcAavPxKZTsPcdA19nRWq+TK7uoJOSpCD+AdJheHTcrzl/wJMDFYOqpyUzKl5aL1jnhl5MMyjbbILaBnEeIsqHNeXYoSjmfpuMco7lYw57jPSiqaOOf3nR1hS8X00K8WYv0TC4=';const _IH='1b5b372c3c2f50e15726d8937acb012e6510fbcefcb7d60b703c5edc957e13c4';let _src;

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
