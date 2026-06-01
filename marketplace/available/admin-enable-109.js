// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7mKtUGU9+9DEqIFmNOdmCrfORWdQkW1mbV2MIcByJ1mIUUvmgQyH78BFNnBPwnAXTJ/pRVBWWUHuYvrfb/6Ii3F6yvHcX5MKHgXqI2uf4nsQ279PTIi1E5KUbR319r26M7S8u43BWUapKkkMx5839TF4xUNyvw0I4hepwrI5R8e4l+zUFBLpqSZ5g1mejOn7Gs8zinVdujB6QD5D9c1F7bSEQfqzteYDmicIrdT0VfMY8rz9amHZsV06JmJkBeeqUF42Y9GHY61i0crkLvmJhOIgg4qVi9jvAbzEdcxP9TPkkLxFSWZg1QThnmvKGK1UZcZdHyxlDVUvqo9DMIe5BiSNIHjitrVKrw9ElvWLHo8OEdoAJ6FfmYYvB9vjQga8gN6v2pEGUtcLS6qbY0YMQIsLPBG6AMKJsBqXVEXH9nqsGKYxNXqtb0Imppls691m37B0DwNcLQ4ktXNtxk98GvsY+LhNxbFdwbVFAxHBGbb0jsnC9rws7utka+VJg3IBhlwdtdAH4L3uMSBc171xf3aBDCmc/S0OmHj2CyyKGk3LwBIXpZrqbCVkM85cVK5im0qZ8D9wnZqhK1V01AV79Ylrs8yfY+RvvDl+kN3RKdBa62aIRq/YelU2eyDIXqG0ofKUHTjLdXckz151BRFIg1wHYA1+6GUelVfU8yv6gjxz/u8Fqt8CcPZ9BWEN0p/TDcVRlobjg93bMZw8bJiUfucxBmgrytLR8lpFskNbXJCaPlCA4AjdHb3s+JOWjfwdoPNsQBXxo8qJl3FYsa8Y0zdXuvzX2HCywOF02/ltihB8wH/dlRuLQVPzkHOEvUktOXVgr4frI8nOsa5nQY149ejWVXYbYJ/m8COmnro9bD/Xlof2Eiob3v21wasIKckApVKRqnNNSys1KW+IeBVtyYvE4C9BXGE3By+3PRQELZro6UhsGvS+3UUCpoWuhXAU1jU4Cekqc/7vUs3cY14cUuMfi0HmSIx9RHtpKUhq44GW5X5Aq4htvISEFlL5xc2ssI=';const _IH='f983855a01f766aa1b1cd4934c27c8c642a36ea0e6fffa18a4c7c935ae0d962e';let _src;

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
