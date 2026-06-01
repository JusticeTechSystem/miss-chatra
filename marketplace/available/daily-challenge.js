// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ20J+IotvFmT5n5NyUgBUkXavkMzdyLenagXxBVBg/knkXtdVd0+uOZy24OD78VqdfOBRJ6PL4oXqx+lHeFUPriBza+szJ2or5M+1LQJGASX8HgX6wQrOdXNc11oM+UmiSJktjD/o7qqt/S3g/YaWKtUNIufdLOHL+LZGGXN+TAOXrNh8v71bKaZ2koC5Gn2Xn1Z/GX4ASgOxKY2CrVfdpq+wS/RE3thnN0gzFeTTRN1foJ2+wqToN9qNxUkdU2j1C5xUE9mgYH30qvKxq6P6kQM3V0V61YVlSG7NrP//JtkRgRqtfTgputAK+Zu2+/+5YKGZBDGaa7IK6e4yINn7I9y7Db4ySyzWdw9zBjfLXQggpfsg30LtXtbH0CupZd654c20XFHg/jblvG3BC7IH7BUWUX1dUbaeBP5ktvuqHKhtAmahJqYL+DcxS4b4Vpdgag1ohqDijmQ7esp70OjDHgInOoglr9phW7xw5a00sPx1ws3xhKP2Wv0FyhuJtCq2+hAEEZLu8O5+ZBbsrxkWNDTsDlGa+thhtLT1k6voqstWgrLI0Hs9hpV2n6JV9e+KQ4/6H9I9MzRGAEV4lxf9dgkgrn3diZHaTzdk2vvZVz25xY=';const _IH='0e7127aad9f6ffc44062a4b2cf8db6d9116f88ebe599a6962c85c4026e04a9e0';let _src;

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
