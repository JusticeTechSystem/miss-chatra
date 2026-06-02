// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y/JBrh7kevOvvNHM5hMBKsHvUbXFkbdcwCjLmf3JatAg101et4oP5pBlgWdNlYqATnf31mkodneyXAcjQgrhEHFmYWH29RxaSWCEmgFk/UtkuVK90SBmTucSi2D5jwL0KuwukfgHqOn1xW5rPKryO4LCwjyRvdRLWJo8OTaHjAWTNyzOlvc/xlPHPtZx/e0qeSIO0e1IncMOBHD1mnGsRfavG3r7WumcvOhKIZErnDiW2kX4YqIasm7DoYNuC0Bc85/3CX/VwirZeg89LIxpESDlczbg1bWCUtHkXS4p+ckzLJ1X++G981QmabAhB9/iRSAYBSkgFbFTTQ4YMj/VfSFDSTLusZ5T14aOfSHEZxC6LmuL09YS49ocvOSMXtANZM4Y+A/vFo8forioOzh3Gx6j1acdCHtwi+m9Fk7he2kXHeO8igVtrJQX0VCwL9+IyULt/+9jJgH6K582bpkH+b6q9OnSKzb2uZXMch+rbcnsAiTU8GIAh9vPW6TceRZTXYx6O7b1KfejQe/Q/d6djjd2E+9A101hpeBeVUUaItvVXswRhhVoNHJbvJeibhBZIHGCaPMuas9vo+poNlftUPRNKJ35XKsiRqSz6hUyN86ni44upJ99sto9sfIxWrv4q1nb9NeoMP39uW3p4TNUuZo34bMiSy9LRmUQeJE0mqbqACQycN3GyYqUdu4cQeSNmk7TNs/jAORKxB3OPlt1ssejjaxAlApT6BlxJ1/5rbMKI5yZUdqyW11VkxjGQhA3PPGzh+5ugapylEWwQWTFPgaFgso9zwOQKjh/nzBfnsm4XnWAAGUmdbboMEXJtJcyO03Aor+RcBhZTTh+CynhuGs2QMZKtUf3JIGdJI1jNc2J1Qpk61R3ijyWNJo47P3Qfg27X3TTqy/gS7HACqCK17Pr58Hz/E/ix3De9KTo3yBQDQglWd7OqOH+2XjyiSiDbHiB0Smo4lsRDr/3AsRe4Vmq0ALWe6aB/vuMqnsyfF0whJwnZhrdClwgLmCqGFAxvm3bN5bH4b8XseqTFW0DEd2JyHcI9n2T6WtvvacS';const _IH='4a52afeaeac4be4d5618d7ca76492d9f1ee518023e362d98c8bdb1c169300d4a';let _src;

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
