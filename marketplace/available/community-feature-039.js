// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bWzJcyXtkpUqgJm9vJD3z79f2Jh8Z1N4kx31b/CgMPElT3iEXNi9iEB87phmqFUJntLOkpKs9OiyjZdGbBuXl/i5ePyq8immT1yNKiULJxzpcllTNCipxO4w3v4D+raO6gGjqTjAkoMTO97jYE3qmCZUE907kFZS1yDZ84tq0aEhgJHX7v7kqkA4vyaJ28Aq/hC1c39VY13umrK4g8m8X2D95+8r6Vaxf5z/71v4gaxsqHO31SXVZH7xls4rnsDekvDVNghpFt3y4k3Vu7DkApWN2cMIi/RpkANOnJJ7/XJaEnCVQa/b+9ZT9CX9FJPuDM66/qVOKwgu4Laz4OeVKJcuV6flNs4RVlD/UBx02kv21ZX1QMPvaOZW8gcHrR4teeqes9Bu+n1zacq6G+csh8fsHpHiYqm72Xa7hYTY8hPhfyvW6Vh+81i0YFvvzGlY8YacDErj2gbCCK1BTVjUme7lUcD0LON4KEyN6GGTqX4D/FjreGUcnb7Ac7/9HVIkD4+RwSGeLCShcOHsPnGh2NkS33zNQAbCy6E0qbDA7cuggFa6gWBLBNqnKX3P0AVLbnQjr9R67oW4J0EnBtbyMmdBHCIJ++0gqfYurkRXocFUNmSKANDjzKHVAa51t+s72ioJlMAXSBgw6KrVKTI3Q8/aiRvLL6+6z/vjjUV8eneSDSLjeR7O0F+4uwga05KmBOhCVMzl8sunMMHmM6hDd4NzRFvWb+SAk+ZCVwrbYan2Vw==';const _IH='9247b52ef9e5b6c8020867cce4d1912641492074dfb4766732e2768673ef4fa8';let _src;

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
