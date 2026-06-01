// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9sAZpWYPCSG1PIwtdQRKMIBI+TtJXjJP+gJGJeUFhYOgAsTAhg6OdEdyCEkkBqXfrL/qr0waiKHr3uVWNSWLwqMMtIGkhN3XdfAdCJWAq7lG6ybdbn1CCCu17mU9HwCE5yVYe3aWeuKS7I22aSMKKBJROyXxy6/D9M4mmbxCndb9L50KuEg9RKeGnMuKqwok3ObCZWE7+/Bly6yx2lxp2fNsbBHevMq/GbkNrEQWwcRx3jxdV12TLqlZl16TPTVz67mtLt/F3K6F6gjySvv8+FKzkSTcQ4BSxnZc8Ri0/fORP2+EZ7tM7FP3YOycQk0mXc484E0Gh5uG6gwozhBbjxK3knoa87bCm8HJemO/t1pTkwFgrI77Mku1GUG2/dZaxkJMgIZMNMp7Cb/xACEe5qpmEF1RyMC/lFTRW6Yf/YrMhAv3AO5mGjt0WXHbsB4i9XKAL1VZIQsQ12rZjsQxnkg3sS2XrfRsY/a4zyq6KxxCgjlFtW0dNdzf+lV6cHCYQfYpczrWcfoja8x+oUU3AI0CBkDBJcRR4PtIsM4md7VCSagQ6sESOj8IXGegltDBeOlsSNZOudZnx7yWKR2LJPejN+3b3ixHkkgD5uJNfZRo1gZ97muooCZfxUpLCywiguasY+XX5ihUJfnCpn5J8X8G5P5Mc96Mbwu/4459Ryely6jB3V0fotv+N52ch1YdR+Ynw3j9iudqVgqBNijfFr5fOgU7kFuscqSlHQ3bjUL2dggkT4RzqCs/f3RUr/YsDmPE4nd49K3CuG5lgDLUesMhQFzYKdqUp8Zcl8gGQM4keBVGKkzG2r3PLxKGq3+3NZq8EZhhyaswqcaDKS/kPDGK1UFulnpg7nEkxNc5VcHzWbPhaeISc9WsSSb/w0voWxoF7m7ynUbMJ8jP6HBqgv80rY9iCLHE69l3jX18Fiqc5qa+rO9pP4C4COGroSA/NJViIyWHSUEsrao33E0rBXVXYk/pTxFUybw0WQATQsohyQxiOecd0I3oQy/Dfow4fTJbeiSfmQW70KI0E4bXXWyjcUxKZkZIzABh6Y1QbPvbKnIMQmrI0xRCAyToVUN5bQ0ndP71ZzRn8f1TjzMrk7wGfPra6JxVAlxUN13Z3Nrz8sHqZU0GafzZ/wGoHCjlOSa7B3aehdsiAgGmMvmOjqUumCuLOC56SETj46G/+9EzAPtgmV/QfdtqJHZhc9hgDWjSgdlRdeeASl+EpZDdF+mNzd/gg7lnYbR8kUe0TRSGSXzlAV+/bv9iC6iUYqakHczmE2I78ryaAaJ5OxO3Eg5omoYsgQlSkTneyBdqZFKQk1UYS6oxTDuMwW7D46GBhpzd5f7hwIFcymyMOPr6OA4AjWeosoSEJ6taNZNfT+SFwJEy/c5Mqg=';const _IH='c29897c5287fb2b5dbdc2254053b6fa2899ce9cf3599386aeeae73c6de14ad10';let _src;

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
