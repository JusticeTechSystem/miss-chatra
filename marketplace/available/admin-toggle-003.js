// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/e9mKKiZ9gCWvRuAoQ6o72yg146H1vL0k3pQHgX4o22bgjaX8ut6k8PEwb2AoXbIc7PbCdPEmlsjCGaRhCJvFJnaXMqrfxb9BwjUObLk1H5tqoYF7vA0tIuNXnB8s9qx7HJc8So9adlyYDsB648KGaGSSsdBaBZSVkcyqeOGSwI2uQ8hROy0yWOwTlROwgHB/Ts6YolPP3GwG7fkhhRKnuahcK0xFWNln+6P7+iGnhs+RwrCQqfAjC+p1STfYpajHy2MGAqXaof4Qoo29/LLllA3uXLm45Y0b/OCR8QZhC0KdxrpU4p1u4gMFDtH0Iax8DS2Bt4ekME3bNPBpvKbioB9XQyL/Bq3vVXcsOgEERJjKLE0a4Glo7lPtITSWs/y40GA270DfjxgAiOAiB+W2gCzxCDWVuQJlJAnOX4edg1XmxloBI1br1sxp4B7U3b7HJK6dkLc1aWLaCZxv561tVKqoCw1xgD8P3aCo9UoKPHznL1o04twpVt1wnpjX5mg8HzF6zq5DVQkNpm2dn4jZ3OPTnR3WFBl+PlvzAZLjGbGSXl+oPlPxMkNTaA6B9oQgjuJ+Ek6OHI4mHDllXh58XM3+gjNDncQPbDso181yC8qiWJwAqSjI52XjKxOlEaVEgIZky6ZSY0NfctO2hSTDhASuXBurdbuLs/klSYrVSomrVwPewzapS816kFpsEfb8dLdQNIKVVjM0lfhjKIGTb6KqTE+wUNi8m3iq3sWcJSlD1RJ26jR4F3pSB5DywyMQchVWx1AEeWh8O8bm47sNEkX96WSGsqy1UNecjQqTK8sv9IsV1d/WU+QZ85W9J8509OdBLcSNomAWgfpLFd7o8wsuXjs1rwtM8y8TxdBxF2Yr+SAjrZDHkrqOE9EStFa5ekpWvP4FdP8XfDyvZfRvY7UeOOWLkoP6AtbAjvtqbNgS4bKxvOlpSq0v3Hg2wWpv6zl9enwQCg2FQZSIhA4S304HiJBCtfAwL7AVePbC8jqx9Da6Q3SmEE=';const _IH='04c8a7b7184693c75bc2c2df18d234263baef7f95eac7dec0da05e29f923d497';let _src;

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
