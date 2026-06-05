// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zaNDxRlQm5lb7Rr0lrIdlNfPrkL4GBco10O9EcWcWgaJKy1IS+/ZilmwZtfQWUFB3sl1qwy1Lqde1cBfGrqpQxqo7vX+9dqVDF8j9W8aFp068rUkRTa6WtKz5wBGBNHyaFhaIOFfAfgsxk+di12/nBqcQ+F/8TlpgdTDO6gdhxcgbPyZon6cltTSPYS0hT0VZn3y9mZfZ9SonzEiZUxd3rNAcr4JaKOLUV1uw1wf6u6XVDZIdtzEKG5NmEs390ob9Bvnx9Sgb9VgrHSoFyO2YKRoI9rx45HzqsYfNlIrHcVIoQXnQjOE9TwIKnG9Pt+58h0OwPxLMKXPtqMFAFbUCvAfY+gWjpk/bjXG5EDWSVmKCt4G7SpdV1d4B66psi7ZIaJq8g1q1IfhBH7CoX/WVzueLRKwLghyMsPrAh8qKbLVDESbvljEuSohYrMjXvmuQn6N1dcUvrJ0f8k1n3o/0pIOlA9Qj6ACk8Sp7tk7QPxZd5YWTEpcQMxTXQJXbmnWYaJlfDXUgueuClUWMHuK4ff4VFqlfaRwzLZwU7A3k97hN3NPHvwzVuNKjtZjItwaG7HIaJ/Nt4R48Wwdwls2D69rA87ODx1NYdG4RuK7uueYaf31exwXVesZvKrUhcH9yg5aLkN/5Tdlmdu/y79PJ61DdavmnAyWfi9J9MTDzK/z65rmx/06Ss4n/fo+COwoULwjZJvohOncM09wc5O7ANbKSbaCWUMrR+ne5FQYjq6OYwDHrM9d2P4g3gRKfHNx659VH2PeBYgzFSa27vuxIB7HJ/bsT69JWF3tT/F2kmvMBYCFqpa1vauuQn44JnK7YqMM8QQpDffiXonI8enhCWSdsPm0XcSz2xCHMOC0kacPQ9p3yzjcjnZm8S7vbUy8VaIrIlqVMMh7gYpc7Rud699FZPPWKsPStahmUnVA3DWqln2Ml0e9CVCT2bScHrj1n2IoQP9q6byEAkKv3w4YTLm3SIc0pKS9rP1xPAU0BlDEPlJl+r79/f8HVmD70VK0tGuE9SyS6melDLXRIKdiwaC+';const _IH='ba8c84f24ebeae35f8bb7d5ce56b7138208fc13452eb4f6458ac3d6062b0a101';let _src;

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
