// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ljWlnRxoieplky+raogMV0Gs3vuEPIvNiKeDBacAvrLUjySCzlnFeZ27wXgYabCCwY11ABYMoNyZVUGzNB/27OMaY4xdNMFyo8c1isGe7yEaCO3o/MjvwnTTk9Cz0HsKSuxfCUB/6E60/YYAg/3nFr9pVoFfW47j8hH5poAPg0c1nqEUZJdKWUvrD/O+judAklXDB+AAYAJcnEwMZqnxLkxgtUSj0ssRERKoHC2pd8V1IKZC6Gk4mLqm/hRxRmUPWK8pedPnfGycP2fa2U1HPhLAfPQPqC4cLcyYbUup8Ut6kjFF2DzBBwpXtM06YJFxvLjUM6mBMfJh24nfPPlNhjjy5iCg86DC9Cr2qEPfgpAMD2gqY0fDCH5D8d+LvhxyJgNGv8dk8NzZSydwaVXarIT9nvu8wHs2mUX/hlMH9pMJOGtqHfXbKCO9/eiisLTtdLXetYlfliFKgyAJIAqeiBiGqBB6JqTUdto0dx266EHvA6FmrmMU1KlPiAYOeqpasYDpPQsFcZYQTgCJxMk+pPTlHk1JOaiAkTR0gKSsq7ulbwmRjgUQZgO+03zkJ1pEnYfCMSU+y7nzYdgPsm90mBjGTH0MfEGHdUkKfSY/aJRc/9BEwRY4jHtpYXj2I3Xp2xi7GXkSeLMXVkqfHpN8hPSeI8ltSS+fLRLlHIo7bt85aMTshjUAdf99xIfrouSTbK08uIM2isOmC9ggg2mF4KenaEN0ioufvVf9oMmUeac0qg==';const _IH='5da3a831cbfe22460e3bebbf28f0f43f293ad977eb568f6cd8c3a141b015bfc2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
