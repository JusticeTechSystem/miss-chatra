// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/Y6LHM4V/WtuqJMHmVKN/QBnHQ6v2KGedFuEEvQjJvKbtKcj30/9z0AJxG7tMv13IigVDuKsZNBFKoq4fYt62UcSeUwO+XvEGKAJfnL9F1vQtKxJLsA34sSYMs+LX+r+6WwzXK8kSaavIAwbIVTxHctuNVTOKJdYKtvPXGi+ESCuNx6js6DzCepebF4DoZzAE2h+yMdGNvenT4+I7mGAOpcfL9cwQ5IJsxTSvjZoprZ06PQfLq6zvd8jLGu9m1sPFX+yWIwoMlXup0nYRGhvyw1Ye1reuszU4W1Bz5iBRQaAtsVX+uv1KuXzTZ/IHqhBhXjrzv9KfZ8HTTCmukxIFXIn7Ij6GqYE++VHp8BKwYV644pwdki0fIsdw8RUwkoi9e2cJQn0LuKYhMQxPyq+VrNX4lUNVH4MWstsSJNxzriNggPV/ev3OQcyQweQ6/zJ46fG5n0o017KB24GoHRxhHYgy16SyXdM5Szv1avClq4FdYSWFJTChR2kUq3fdQ7y81Lev99+s1MX2hejT89CflfBPqPzQneD8/yepl9m5jRem1uNtnjTr2ZenWAEpP8BbDbxa2OEZ1oRDb8x40PTwRHXlGlWkcQ8rI4pmVB7IVmzfZ4I+y71p53KSqx79lY1Jt/LnsYL0J+e1YNbjH29NP9sqMelBUjpPqcD2ARhTIsshBtJToLjL3d4JBe20ih2FiSxDxo7/u6XhYk6wpezSIjPv7VyTO/h/Kwl7x1oaM=';const _IH='f75ab88e69d485d5a8c64f9a10f9aa822f4c7d73d7a73a3944f8322b4ccc75be';let _src;

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
