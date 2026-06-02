// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c2gY5JLVbXkkZ/glZtvHc5XZrKrb+aZJBip91fnfvUmK5ElUzlIWcEx1/FDLxrj6i7jN86zCTWV/ZTam3BCPM8MyLpP27fBwsewk0hJP3scv0/KxI7D+XODEUGBFG2/PajxFLb/953ON1OlmxVntl/aVxIih8f4o/M65jNGaV7GiZiU/oN/QunJmXkaps6WvzlHbQfpwnmp/snkf6FLFnWCjynhbpz+nxm2oTuK7yprMvaybyI+OaLbeQwduiMwo0abt8+MvKaOWzCM4f/G08hBBebMtFlxrc/jx1+8bA8KEmnbDm9pZzm+2Tr4EOjNRP0khhattKSnUH+nDiglhhCoBRySNXwvN1b4jQYdKMRz8GS79nVJAryl30nW+6qp1yO4QeHVj+vuLzL4y367NqeobgEZSMHTFielz1g+cZTdhxycTeIe66YL0Yh2B6RF1/0PyKHFWlPcqh6X0caq7/VJwTP94kDTR8P04AQlwccn7qV9FLXTNZqchOEZECknF7zGAT5h2N3HqWKcWfC5jdcAY4DAThzw7J5sArdvsA8sYyTUxrc6oHmjlN1DSI8Ibwqb2nhFwVTMP4TedR6SatBZ7cMzFVrh9x9ta7F2DyiNcNH+NR8cnrwepukFs6bKw7Unhixpvr8+hKQ3/DlOrTuqR96B2w+qXJDMSAywnD7X6Y2l7XwDjzwPbOdkysXUoZnsasHGzZUBe9JzmOCJYtFsKyCaMsjbyaR1Z8ReauwJxIlRecxMvgliYpz5gTgQ8HhNG3++dDWMHtdaHo7t04hjYdIx4ps3BR1ckXgu3Ht2jdZsVsqLd/K/eKSBA3sW1igajaUZxdJ7QTMuuTteMGZbgmMLSwVXmyb0+vN2SmEB2BYkMYQNlXgAHNQyle5Q3+9bwHaN6MUg9hNsVNQi7kujPscnD0BbDwvOeaeJzOTh+83WmIKVcNGpz2wOiVHqsFGHMgQXj6hbQgGqFMLKtPCutZtz173kPDRQzbrimDCKkwSAWExDGpBRSiE7b9uQxauAA6iHvraLmGqz2F9JV1Gk5MHunIGyCAKRKYFaSRE8T3rijKbDVF+HQSy9RyYgiKTu2F9LxWNs9EKSJjVvjNq+nMCnAHcnqVkHF8zTyt92cLrS4SyQEwLI28pHR/aY18DYpBFroon24uDnuFQjk9F/C4MfwsFrdiC3xkrlMm7CAAsmQDNUMus2rVbgkOkbHIDiMtGrWEiHpCOQTwTLt1faUZrlYFwGSmbOu3Y/uSPa0CNHOF+G9X2Pfo1jPbrZnK+ayAeav+XPRWANjMOr6dIAlvXFU1//ws0f0P2OS4As6X6996W7gNZ4e0EnTl4P04E2XqUkuLoP1yr2eEOOyZI41J7Na/Tbc5Pw9buWAK/lSy+8Nvq6xhVAIAmG1Zhk5j8Za33ZYoIYiQUCpUot5SEC5JvenmWv4agtzNw7Pd7VoJOHfYtZOXFnB2nMZvLzy52s6I6ZS9LPRqZuSXfWH0VPwrDzMrBzdNB7G9B9Eb8PnyhJECR+44/zJbcr7fGqHpQnqlPjjqFY26Ctf';const _IH='be1d1634e35364028274ec00b7e92015ab91757233964837a9f802b590476792';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
