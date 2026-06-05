// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hvLv1XAGks//YQ09kQLtXlGHNzobDGceU/7oBvMD4lSey7VMn2bHq16JkaK1MPquYdMlqbf/d6B8KuAxZy8JXFAhRlzPRHqNISkc0eh/X6Pf+mY1huZvKoaeVoAleDSmRiZvEhPr0tBds9GFJcwuBhDkV+UI++j/ZLJRjF+2Lp4UkmNqqs3fWzQFoZNONksyq0EpoQkwMgY/8p/kaldjo//6yvfkTma47S3c0TwkCsJiDSvfG8wAHdR073qrPYHvZagFB13Q6bwEfyODtoYCzR4/g8wTLSkQBcCsp7dZB7D3q5fAaElu9oXGtfob1iS6YEyeZNLpDOSqklJlbchLmwptwKqRpwZ3O2bYdQnQAQrYIBbF1JP7I4PwXPkqaGqIRSFu1rYfBGG68+sBEhrqUvv47XK7AATuPQW5dnKYw/VVmiz3j5USIALruVqks8UWAgITjvTdywjvgLjJNJsqCTBJh2jkAZTg4JHnPnVmjMuV5EMRZKtdGdhrT/ruLbiLb4g79roGKt0jYLAg15PdbkjqwgZJc2537JRkDcngawUiegDaFOgvyGy8IJW0CTZ50wZtgcLifB6BKvo06zH963kLUDgSl/eOe+hdsOfC+9gVX73zWjezGCNhgtLuH8KEfwadxK23vR27PKU0aIAN8S+sFSZkmFS3ju5uz5LexvGpC4ZiT3L7d1w/jaQGYdGZqM3HU8d54upDbPR1RwzZrhoSXsc7NuqJA+ZVR00Q3rnJdlh7ntOZ2VasOqt7KOIid9nNtXeKf2tq55uDEF4GGb1DeF3CjTxOiq8Sd05a18sMfhA5KNG5Db72I4VcicliiHqscpgO7EHJn2pHGYnR5er2zh7W3VBKZM4ZSZ0CWsjz/xLK23GRH4t4+tjz0dJsY58mkdLTlDB47TC1kn75oPXt2rBRNRYZtLTO+Qj067QKSczksjNZ1gg5EdFF5OuHv1HKuIRaAZ3iEqtnwjBYK9QuXzMpkiMueAQ7nZfu0Jg/wgxcaChWxOq5yhCh2vpmxRvtXjOG/eB9tCrko/iycaak4fyQRBMJfiORoVlVE1NL8a/5hLKeLCNdd8kw80s6yM5vLHbpDnrKgdbqUaylwWERBZGD6lyBZZS+8U/vW0mqDylyp5m1QDOU1bv9Scq8wDEL2XRsaNvL3jrtJJbtPq9zGC2q5IiW9hVBDfpl2nsRCMuu9C8xMqCMpoDJlTEHx9XHgaM9eTKuQNyVYXOjV8LCS0561P7lpR2CzB5L6SEHE/Y8mm5RFMhLmaNnN7GXlJsEaH1nme3ucFr9Vk8uzDJLWrDmjLzsG+lwDKnvyORnUUNcuZtrmg8AuQ07cK462aQiFwqzxAJ+41cDyCJGZd0n3WpPmvNpnsjZ8qtA';const _IH='b153d6bfd5a750e794b23c3ca0e890a7c9668b0cc47e219996bcec9680f3b19a';let _src;

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
