// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ54YyJ0VyME0XeIpGZrmKmrP86Vlc1H9RLAPCUi/dzl+89KJU9rgdlVSIvBBbvwjYNgkOga7Dm0yreJQXrKcSY8W092hU6cO3YX8WFAOXOS4KF+IWmDFd8rJIAd1eeZeIg/TKCHdn+EfTVMv64r7HS14pzAZPsrNYxW/07LLa8SbpjtMcPYPJEMVPoMxoEvB9JPgyI8t6qkQ77xNWYQwUzUUlFc5+hb9j5JLJ4nFuck0YzLYC7e5uLPhC7ubURaXmHISWtgCavyBDFGjQVpvP6n+a7AIdxUMeNbV2V8PK5o4RbqVIXtXPKzAKxRwX5QvfY7cMwMXVDoGLAzlNhE7uYgk7bHnudq6dSAeJSTtaD7ccdkht9kS97+/CkDhjBmqSbU6qKR+DwV061BRpyPM/4nNlX9T02iFxvmX7XYES0Oy2QnziZO0VLPZ1ElaIqdgcom9XDoa2Sy0DI4E+XIfw35tIdPicmRbfX0hshdQDEaxApHUdG7GEnWu3e6Fu03rYHEMlTu8u2dkT9LwJDhDoxeDrC8/6Jaz1qJ0GMq6MvIDpANwwd9eeYzKd2QAprQ+rD+wmsuEtij+HgSRy6+A7hDu77NcdlLD+uwUgmS3aq+t0r7KXPn06WudEirtcdy3UJ9MwFnit9DWvGIpPM02HDqcyDD807ohoz86uDQI24HZH/yi859vz2oRPvbXzsueTx1wETnM/P2szK9y777vdi6CWc80adSW3b25ZYVzLr27E72IZtZBkY2Rs+UkSJMwiiiRvMav4vWDRabfpsUYJVaWKae7zroW58/gHCx+z+4Ky7xbKqVXG8f2jDLdbVqSZZOimFD82XKhGvKTrGhMUehy0jO+twIR73mQ/z5MdBC/WsErCthiJfbGGhgX81FQvhGQ8PdlwHuPXljc6RGTlIbypWZE/YUbhMA/OwGzHokSGH9P1MTEeeZKEDdHROH52PRLN72EXIIuT0clpkRMRjmSaHAC9LlFXROkz7IAz0ZEF7xrxuTm1w+3hAwONUFbKLBJV5tnqgXW8p7HPzLPbNp2+k+utMk=';const _IH='f19523e4e034ea6688b414d70b2fb739339dc59dce7879a8a664d193b88d7976';let _src;

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
