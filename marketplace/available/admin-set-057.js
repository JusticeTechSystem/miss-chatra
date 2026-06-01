// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/v5h6Dd8Mm6X1FALwAt8hka+iIoGxZ/VXTBZ/JoTA8KFZiLoECVKPhGGkl1rjQ+sSXgsyOjne0RpsyVIExtaDZUwb6uU+8CNOXrSeqUuzJoCbfLdbWteRPsoJys08e6WAYdhiaZmPb+zZHw6MeRzafR60m87X1wO3xooX1Sd6LNcWFS0res5UR2MYtYN3q+m1QE7bHL5YoUNhB1h6iAsmjFxxyKx7MAwGUcWtz56sOZT1ZPNvk5psd1hBakHs6D3ix92BBQUEG+E35yuJLsBphvqPGI5hM3DAWhAVRYDAtGCox3RmZLWZHRvSa4XmPXbJO7LGUqrHzvtu1U5THWRXI2G5Zxqa/4L4w4y86JuyWIf4v+ZoDDOBEGeEzrNnyj4Z6kExLJcfOkqDzvsSVqSkr8JXIOAa3XVJ9Xi2/2O+qwPlnmPpfmD7kXhnEq5p/o7r1kA5tTRBknHzq1aFSMZWzo9z9PpgtTlDym54jjfeE7SHBQ6m0qPIMZoPdAsuvUPJC8lxwwz9XAq+22rsjpo55NBu1cOizqoD096D4f4DMu2UobCNtqSKQ/nqRR8JnDrZ4V9zgN+syF95UanlyqzdlEd7Lap2hwk1sYE+8IQ+yCTLH5J6ndfK5JgaiC84gXZTfjVYCTaa1NQmZlN58eBXy/OCXLKC5yyPMuyBL1MenLDMr8NaSsddcu+q3rVt/wAWWzN5JG8o8znjxZE3Fm20I44goL9KiLVlCJe8GgaHBHaNPjYaolf8pJcVzixsH4AIDy2PEjvw0CzrEYlgovXKVb9mJiEawsdJTPdmaToSKy2YJaXfYCXqo5FWZ3ivYokxcK6Kj7YPZLo+1S3l7m6kxCNQXDbBPh/c6fu6ru861Ihqxa29Lv6uFgzQ89Xk8ECSpOSM1pi04KGNZPE2MBm5a+b9OMy6C5TA7LdB+FnIa92IeJQDpNr4fwqYXLQcwuHXHJQ+9MmDJ5waORSZdqzkGwH9C4zNUcAg==';const _IH='02329104527ffba417a1eb5066a9370bbc460bef0f84f66d8bcf8146c0de1cfb';let _src;

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
