// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yq94RX6Jahus4tMAkTo82nX0+An6HwEnQBfn1JaXKN3dohVC8LW0f2shLPFiP9RAQr/CCkqhbT4sM8Lb3ZR1QDJXwpJugd7K8TS5uf1L67WpsQBWUv+8OsO56awsqBASY3ZypCLyjwpxyloxnFy0bXVjqptZhoTXJoCdmZRo0VVRQGUWn6D1l0P2Em1WFrflIFvxuDg/3+El6Y6o/v6/vBv+naenFekmWH6sOfBBnW1+AciEn4+P5+ZOJm0o0nW/J5jDrti53XPAxKBAb7bekKFqGIjwARKrEDuHb/3NE5Bc/Nt3yn9yNGM/mD/xHB14sd6jg7l16Z+uizSH1zl/ja6STrlpArOsycL/Se5IT5N0XKBSX5MmdaNl6ZTxCynDSHtR1x/Kg9ebFkTBWnDEouHSJcZSbL+oPtj7X6AJiud4wYzzP+rYK5adcMy4RlzqVtSgJKwieUXjvjpoTUtuL5X4XZrA3G65RZDSjyQ3o8F/qAtGqM1wceVyNiBtrpwsX8IPgxU/YY0HoVFHZ7KCTrBD+QMOGt8R+Fr0IkHpK5M/YTmTSeN/eGjImAeJiYvnxOpk2jZZXCYaPeJ0UQtggs1C+PpDe0XtefreO81mms1QVvXS5uy+OADkOuxdi8cZweYpdZbW/Q71HeZBTGFHZzM7rR1afudQp62U3etn4nNl5AhxwdC2MQslJ3mUfbgFaVo6CdJPTLyMJ7qEZZ2YaKl3kNi3tXlchPq/TpGih/FhbFDlAYSPA0cUOTuuqcW4myeRxZCR0De372uCcLrLc6+1J8Fo1aG1Hznsnm1Ef8vzqW9JZ8Sp3y+IxNbMqLT116ysHGuaIMCkU/mq9WKUmA3YDAksFDsvtsEy0dT48RN9+bNZILmeviC/bYaPTqDaEbYD5677tBDuckpDQIsb3r+j+QjXWiVfZwV0VEE4/g8g2w8RlHFIpGPYpVw90rRUwqBKvU/4GqHedg2fOVMz2rSBTos/OXs+pEFIexLbuhSsIhlUhJLHRON0/ECI';const _IH='41c4ba3378906ed1f1329527b5686ec31d058b33897bd590b8dee082591e8d9c';let _src;

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
