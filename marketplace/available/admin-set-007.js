// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w5WGVMTEhFpYlNH4gcT8SCWZzlvG3g7PM6LS4FmR33ZjiZ5bdSd6zcdHfcPRtAWAt4efqo4MGiLBn3/ixnZLPQc0/NAJ97t+1OZBk3xGSyzMy7/vqr7n2dhcpDZ00cXLfTm2xHWYI0WRf6nfzhr4IK9JyCziZUX7+hAhNQ+HTF4TL4LwDmvmsfPQlOoiUtJMRTkQxp5KLtNh0Ma9/T6ji8Mn/3A+LgMmi0n9NgBmfz5hiV7efMc6HUdGc2VoRWuwlw7Kx8bBIz9855W8i+EvDKSi9/GqDYgfRbdnj0KwwhOe0/PwP8yXxquIr6VgK+Ho7bI8o1VzgPkDYalQWvjRRioTfQkOj5uA1DXdZQ2FoGYFmk+XCpqRgXS7f8owdIoytdufxFaLbGZGQTOsIKkayb8clpWtrt+ICeexanfe5MnfA3mVaEOrQd0uUq3SiXuOoygoQmEUOfzWEwevB9PZpQFABLChL2rSUIAGfa49KJyg4w4Xdh6zIRqzHYAL0dBge0VCaL4KycN+UeeZIYt12rByAWnUh6dVd/SfeC6g0V9uxK4QoaPF/QBBruuzx02g+Owc9pLYBQEhcQ0ulGZlV/oj0S0wK/xfaO6rV9uVG4SeQhemw/I4n7mk16zbfGZLKYvp+m8u39VHrR7J6WAjXe7/FWt+T/1zXR1OjAfm6UXwQKmbpteyVANc9TSMWewE1Bovk+og8SZnVP+edetW09eKM/bcc8r3MvgEMp13g0G6cIeeuHA6JEhCaNfun76m5CzsW1EBfdh8LQxi3SQoC8/d14jhbFOk82tzcTWE40/i6qWBGZOQkTOPunayXIp4Ng4U8fm95QxkKXC7Avzl2KeLLPS+SqIyLA22+9xvTVWd5MqKHDMo8aViAoIz7gJrDaiMSTOVMarpxwkD8inUm1VFsfTm+CYV2yHmnbv0U8QUJX71tNQpmpZb+Vai8vxlfPm2Vw6g76N/r3pT5MSKdXnZ6WM=';const _IH='5b4f52b0c9d8f23e0fdaf0fb854b4b90909b3b8f98d9c8414b122727bf5d8c38';let _src;

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
