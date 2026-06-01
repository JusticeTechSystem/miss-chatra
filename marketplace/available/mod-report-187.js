// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4EnOL+t86s3RZg+L7gZBROe/snUzcpiQeqD+wzF/o1bZAc8EXj6rzrSc8o9VOWmvOku2iVODM6rjRiWHoU8tNsoyZwYExhxHOruos9U79yrIn9wzp0RGx7KQ6CiyaDZTwSg4Sk9hJB44I2Qt+ffXfLjph7LA5N4SAzB1s2kUMjS+OTR/hBq6jq33W2v8YqXq1AGYrgt1Jb6fEhpJdDw+0n4jPcebkg+uvAfbj3xQ6GeiSTk1bj2GciUILglU4eO66aLOpfEI5fSCfv9Zbu7QYhJVM1xQL910XxDHnYiL4D4aM9DNZw/zZpPoE4m/Y7KGVNgm5gcQgQ1uJSOXv87Lfmmw/KHah4w6UYlQk69Vpner6xi03S61U+y72qU1f1fmXSaK8MX73XF7GYxDaTdl13/Z+iKtQFoUn66nNdAYIfZ1iivOAuP+Q3xY90HcMqrVDeiusuR0hFSrD3Ks4BtqqmU2fQmM10kNOomw0stCyri8ndInMPKTBsgui7SFcbetBcSJbqV1ZCH9lOKKhCrEmlrxt0FSvhq/TFK58w25uLzMg5L6smkKNqgKNKaV/Pjl4u8zdIWM/A2XmkRaHYXQkCz6BUwlJ9Jt/rrPd3G2DwYx3rhnM2J6UTrej2pXWDerP3zjp6FKoVeqPV8Dcn+5mkYEmf5jvKSu2FqLQgj0L676sYF0xVNlJL6lfkHBGQEhrymVjYc+P/RqttoWjCh8O0wTKfRjpPgKx9IaODGQ5vU3tKC1z6MWIM7Vfqcj+ibeXqvuHaAlzKTXwqwcs0wo4fPJfOcV0yhhFfUBqaznwSD1LsWcWmf5VQUa8nHJEH6bXMmqTUB8ZSDJ8aaLEwXmnMDlhc540OUApyLusXRH3LcKY2SXyNpLQh7qR2LSfUkFitcLv2i9w5S6bIBtwR52+7PxRiUCVX3WTBNmeXZgD2CKLEQ+N0jH/JNIf/ebqUcc7HQK2tyX0X4ez3U0Bko+4fS1v3i6wDnlod880anvAa76jYqfBEAzP3AHCHwHUk3Ibq0YHDO90EKoFjKFuznMZfnsmHcoZ/x7iCPOyJHPtB8JXr9Y/O8hLBOecjZlR2oL75TbdTJTeUAQWz4vwwdTtTkKioJBqZ++QXoxG+e+xoePwu5QIZGM3e9z+Avg709Xb9pt2fTbByxBS9GAfod5ODmECHi0jijfIUbSu02q/ndpJq1rMWhhS8kUD8q9rkHZDtFZAmjUf3buJEGy8neCZCW8CA+d8dly1p/Luq7y26GU3t25cvAGOG16ehMJDYnC3LC3STipjPp1XICmT4NzYpzAGfpdlvJ1wfL7aLoJR4qVKebcSySjHI6aWmTP8EN+pxHrSthwLXShpgDLkkyUk7Ax9gFW/96Sk8DtPyMnL9mET9JSjy/ENY=';const _IH='81092fa944e2706f6f49795dea1e519c0e53ee00bcedf803cbab253f1e17be90';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
