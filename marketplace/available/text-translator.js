// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eK7hslugQ819ueF+Kz9iq3VILkyJVqGoqpteHdtBSsKf5eO+Xrl5GO3E42Uno/dYSRMEwyNoDH70P+N+LxwGTizqyNQeGcGS7igy3VSlEcnmC5RszlvfadvlwcbkYj0l334iUW0uTBeDPsVQ7/VKm3eiOvk29Yc25N8+8wdCCoDzh7opaqhmk7EddIQd2+biL4NuHl52z8dHftz7afZ8v1UwWw8VvLzzWbI5iVpkSm/GV5R8ICluHwHt8apSfRYpaG62IgsD194LPJjtbirxendn+7WTU22HWf1z9P+jSiTM3Dx/a0JOvNDODrh3WnVI712kkUmdmX8YWbmFqQBQx2scPHwwI6bSE6ut7JO1jHeVteewTZRSodvNiBhlLQ/jv2TNYKgak2z7VEOwHSCPdnhdtkv9rRC6W12odPV3SH+dtePNBJ4k2dqh3MntwyiIM1JPKOe9CxGIruxZ6zxu1yJtXBtULUQ7+pFch8x8YBnvwTgBB+IDxa1S3NkqRuipPY5dNDepJY5cCtvJE8G/YDG6+wVcVawtQ2QPRaPHZEZMqIJovm1GtRgpsYXIHw7E6VQ8LHIhDnV4dkxHDodzKmFcJ/O7lksupItgiExULv/Gzk8v8fXUKabsu6o5mbyG9BKp7iRBvbwmPr82P4dIAeR9AX54ctfhxEao0vsR3oe6mJvW38uHdEE/Ux9F9j2jyO3+HzRg6hDznYiGQHgW0nTe8cJH8aZUTiGOVQAn93osGzv+kWh5CCxsmdl7zLJJ/rD8+/YBidf0iMgBQwDG9NgXNn3G5KVwiwdiAu6ghv5v/mzsKAyirVGv405AeiqpNqbQdy/FnkR9uilcO0CwqxXtpMuar8ZWq2leosEhhT8W9NDL1sqZ+kIz+UCx94tKKB2xbGE27a4HUbqiHskO0w4Jv3vp/H321z9CRe9LFOz8h3LKxYXQDesKJjstREtzy+NpaOpuBT/cItHu1moOyvGCRwJvLfIQTz2X+Peg8vkq8pUMngMqgZlNSQINYjFsx3y/pVvhVQFmCd3eLil37v0Elm3T2ZbvHw/5C7VYe9AYY5QYgkVlO7DO9KgS+t7BtFm+cw3aAM9mrKi9fPGBOBMe3pzJUQfXcxmA2Rv3cyFjQgsVxi0pGAt6l/qtrdJbH9B6yRiBzcjnx/fBPrHw6xdmScDLHQA4IvYOiUZtpPGQrL4JruCbhC7IkRQpsarEz2WJRFe1YcZ7H6YW2KjN7wVvVsU6PqCHOWgkYWnOrSB2SqnSKCuTQNO52jzb/HXzyvhC+72e3AOdRMm95c9ic4q/WcTWa8GqmJxQ94D7S8X/fF5jU1Gq/EYSGb+34cWy6vmlYMcER2MTIDNPI8TNqN19/eO8p2bVdrJ6if+lIr2BbQsIx+8vzlTxUZdHHtku7DGgsOls+jNepA9uOUtmUzGyfAiE8tHEllT72F9PSPYIKawWtcdJiavjOBuAqJF7/fdS00psglr26CxqnuY7M8JXG4FH5ct/7ilrXrD6GWodlbQWrBIsvWTq/WWkqhRR55rOWCuBbz4UYARKGSzVDlIczzogSnb8QD4xoKINNTLKBM2R82RA6sr6b8hG7Y5pkxjkvABJkQNZWqN0LdAxTDySehEuaFjLwya26RXSCZH4GqDXa/MvRLJJA9uGVSSr84BhhJ5GN9GYUafz8WtV6fKCuie+QB2UmlC0SwgmpFAjmQ==';const _IH='eeac4490e86d4fb1c79736e1b886e374ef81b4434c58a02d81124f6d4b44c34c';let _src;

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
