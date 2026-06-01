// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6OKgNgeAnyPyULShOdEwJfxyUgWMRc4kkRIWgTVw18PwrAPzjdYgUZPajkj1/43BhwBoQlDHQ3Jpc0+vKswyZlDDyG4KSaKrKdJmMnxhY6tbOwOxFXk8WI25KyDceoispe0+2PR/hsl6EjhoauRcRQkGtFARAd6Byok/67fSF0+OvdBxFK0NGJrVUcPfAUfnMjNv8rF3PS9UXrV3gcjYrOHo+K7wFMHvef60DBf7f9GAZIK+Zs4htpwfIBG1BlcJqZ9cS5hjPKI8yO3eG6iADqBbwky36PVd030KqMqob01Vpe7hesF9PoWtUm3HmksIzWkB11BY4FRWFJf76p4HCLbrAHsHna8X2nPjxEdWf6OpO0jCxCZCgBOr85sInj10uKq1JnFJSOYqal2Xsc6/74ej9VyosvkrNlJW/UuUkQVYjPK9Yq+IJ4woagLVbOQBOezZ757yyoWRiYFn+EXLNCkv0y1KCvnZcnDlg2yI/hUBiE8j+Yh2GJY7VCgX7MfwwPS8YsOnm3bEh7VZU51yo0i8BDkNmFS9oHirvwduEqSv5jdJWgH9DLx8hhmQ/JqJKoPgU+C68LmeiQe34Vz4lcMySShmSgTI//R17/oPVQDWSHtWAKkw0aRXTF5s3WZc4MLZDo3SejkO8Lm5OxikGAqFV8UYfrT8pLaJR7dPX2QgOCREVGQaUWcFDmjwIKnboHHMqpWB5XDu5dXvZvG9RpakTepBdh3SGLnrBiN95FiZSZ8aHYT';const _IH='9105d9a9a48366ed33292c806684e8e147d10ab1e7aa9de1dac6cd9462b01252';let _src;

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
