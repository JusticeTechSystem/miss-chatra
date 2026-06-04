// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nOIFdiAgf0s3wwwANAhsdLSuYfyv6zL0gUxAD9ZuYR6RbOre1jjEHAJEhPCeZHV9ZLuuMJfRtgWp8RH6qMgzMrm1Z/E99IZku3hB2q+adkR9g/MrpzhoMgLicJIj0uih81n1sRo4pdukLmIF6NTgmsehD5KT0BFvpQS8e9YMuYN3xHtc6lAHs7m549YpyfaEzynzXYthN+110lZ+lvS2xS8n6r+PYJsiEkIDRHoJBy9vC3fa8y2V4N0IeNJkV7NYkPbUkVTOqKkfo2Jl2tI9cfB0PSiGy55qPquoUT9cidA1gKs6ARGmhB3rZZA58JCZOHdT7Pn96HHn6v5qm4qdjntY8Z01mUjVmeLWbGCYFbnZFhNEDSvdmfn+UC07/KPYq/DCncTQl0v6ITMDjV+9eI9p9wMxrCmnQRUlx9meEB0o1TXhXZBg17d3mU33ZSAQ/no8LM+To8Li1eve3jZZmzH2rxguYYuwTY23PccrMtpWSrgX5Lh/2yIbdVsf2Ie05sCs/s0E9HMKAgRXDxzonnqJoXRNb+6q7BMN8T3SpZw7XfysOexG6bQwNZCHCqanfoEoLlKbP2FKwMuoPbZ7X7vd+DTWEf+1cr1gDWKOSrtwAIGaujyX39N3N2uaJjU7RCmLe+Rn7ekif5ioH6tDEMTTkgs4nYbjmtcxKJU1v8jwWleV0KXVX5k0tMxSUArMFQM4EfbxkdTfFadbjOZ9LKK0ehDyh9J6UGw9aDin8cRjDa77n0SLmvKWyyy8Uqt5ttPJNKV5QT5fFZ/iCrlpYp4EzWGU93VLZUAM7cRRRNr9kX4y03h2oIYmcBBO2tv7hKSu71zklQ+6qqNUNCW3Y699kSUH+OUdPcvzxXJ8Vt0PTvF3bf1nnN7FR5Y/qCDmi/uUSaAmaNHW9QPTavl5orV/A+QNKxNRvd5njXWLhqTBRkt1ftE0qyoxaF9KKok3i9YPGvNDYIKreQw9OQVebiYZF7i9wgbwO1AB7ztforrORsbdE+WkGdMSh1Lr3tCr8b4uZG4JdRVSCwT6LX5+/8+t4U+TwHpXokBHhAMBLR4jf5SwJoGb0gf708Vj4V37K9/9zwU1jG+p3k0Xb3XzfrP7+rSw/N49plVfAU4VNJINd1KUEGv9hm4cwwV/iZh2wsqp1z7i1+3ZaNHJqJF/cA9H3kOrbR7Cl3Dvql1JoYebBAKQjY/nL5vB02m8GEmfZeVwrDVW3zhdefu/1lUyEJrzKjXY32aFylY+7yMKSmSyywFekLYvvvu8U45hUF2/QFMgydc1NjZZ2UB3lA3BY79ORwP/0iuY5INxQc6Cetx42T7EZLQoQwTk31Rrnx0Anruc9ZEIf6edKAi4ClfOKYvJ+HbzNjadpw==';const _IH='f4516fd73a0cc85977982a2ac100fbc664d0a2d39894307fb88fc55454096e8d';let _src;

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
