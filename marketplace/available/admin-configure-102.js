// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mnzjVZPYG4oTuXQFxRvZmKL6k+ULltqy+pDUdeAmP1KPtTcNy+r+g0uWrvUZigQhHbyK6eQFl3MLqP1iZ5c8MjCCenYJkV1Ehc+YB1F0PCCQSfuWacAB8X2PORcXZmxU099P/OJwXUVQYBDblU9ppalNUHCKTs4Q7yXYw+aSR5LmB4s6TCDrIwcimp8wjwY+9Oqndq1oCHN+69zOkmYu3IYZRKRV5C2QKQVlNrnZDpOiY/5NjDqAvdSmoA2+MjSczTj8tFt8PVOJHHM55b/ifi5EbWX5Z3zf2PRdOGC27CRQHWKPRWxYvfc3U4tVt21euDqtWTHw3Pbm54jz2y+nV5ZU5YnZIwP34OrcPFsejF+T/bKfgbb3PmhsArKbH894WoPrkUPDf/BPGcvrOnCMj3BfKHkka4bXCd/Q6hrqLUnjNiI861OainP99ofEE1Gs5YIpNunkXU5yw84hZwqB8ZAbO2u0Tqx8P6yDODRQo0znA75j3JKgYKxDEqzlDU9hJ6t31hzjeA8TYtdNgyp8jDJdDw4mUYGQqQT4pmQwRRXaswtgxhyyDUrXHx6qqUpFvJuAkgglnmnn665jZg8yBwu/5yCwBMJUO4/ouzr+HxrMzi0cxXE3cyTMcqz9+8IFDSlvX/LrUtNB1SWTTgxxhnz5pCVnJuySfLn0abX/hUgLFuW0V5JW6axSkNrJ6oyzb05ukZzxIJlleLlOQMvZjynMf7mQQXudVAs6vhW9R1whCendUxgGMH5Q1rsF0yj6QZgndw2fyxCwXnuJMNDYUoEE+KXK3eOxF0E6aT87eiQCE+1cTZMZcMlYBetEskhMrmw76pxvlvJhMTIrcFDxdatZxP86HZYg19YXSBpwcEHpwWdNJbemXDH6NhyHyQggrugfNd14ZgaYkmA1eiDybjb01/PEO3B9Yf8KMyOMrc++13QL+qwqk4gO0dpkQ9sAgOwpc0nmKBZaFxrQJKHYpBNoyONcXytNv3G3mncL02HfB0GEy0fa/3Yg82Mi99VnaTp8VomGGxnErI9YT3OUO3jtqjMaeA==';const _IH='7639a2bfffe9bb028c4d877d1e8af679b506e5bcd2c150eba104624a4ccd6ee8';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
