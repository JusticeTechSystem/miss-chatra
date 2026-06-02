// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vJNh9fyzGn714mVILYupV6AVJaMML97vF6YYhSurPLIAdIwwid9K9VQX/mXdLqwDjtYeUNvSbmTJsiFZCTNe13l31ggTAr0/xZEOg9QCGoW4hMgRb/qBY1jl9CuEQXvd5HkaOdTmhe3WTYpx1IqoJzCj5wvpoTDRL+/Q1BpeWamP55yrIhSM1eomxb9kd6oiz45xH6kOo/T8ZAGMV366YpZ4BEHugSf8iG1sRiIhHme49e1fNvJnUeNs0Q1mJJeOt8m8J9LchThxdixXwcOBQD7fFSoCI8HNTuF3VmnupR0itViZO9VtBxbJM/il8LaNosn9PBaPMjUord2UR8ACZG1mU5iiwHJnirwME4Zbc+6aiBzNKT9kpSnYKbNaIqBZzlTEYu6EXF1X2dFamdrHcfXWeogKgj45rC8JGsqqcqsGCUbQmFm8TGUNXBZM9k2vZ3UM6ZAcH/rQC4QddHoyO5Q2whsBcX+afeJFcYvtw0I7S9cEY2PA8lLd1T8KjR3iaXuWgG3qwKlYVop4bQNxseGkrlsGnjbPauB1QxNjD6r2/qfXZ9NlttGxw1Cs44Y+r/mvX8V1aam8dv7HYy3lSNpvpgcxZVwtIv9TY1R4j/1DTQWUVSToLEwL55jtdDm+vc4Tjsj/H9ROrt09fdHRqGY6T+lvLQPQUad8+Ofr70BTOZgF5o2EovEMWsEhfGdk/CYB2LP4R9U22W4TsX8W3UxO3V0/0e9Zfs33gVIByfy0T5QpsfMAnf3XO5afz/i1yPI/kpgKfYNoVHYovz3apFTCBlyIQqwSaNCpIXrCMMI1QAla0Ze+GuzaY48sKR9ShWJK7jzSc8ot9ln7+4tsioV88H9lOizdl4M84uooQaxgZwvkd41AYJK3JyJ/4UX0+09YRsBrDIV5sRRQPFbhYA9fWJGyJ1AjCFVNI5lyFLAsm8GJ8cBWQbJ7q90mmx3UE9KEy9WmRkjjv1j4PZxnge9mec8CWESbDJ0LLKzVjssdjbZLp59GOkHdkpi7ucvlEPz67kJXn9jlGSU9viD43OIutL8mLa47z+aZ7KxfRbBc7EHQ6QP4qd8fsKK+5oYcWgh9TATRaOROn0BRH+OEPodmYbQG9ITMkVYlm1hWQeKUgIkf5PY6/IsjjSvB01M5N4WN5+Vv4aBWrbpvzZa4HgLTS+DowX72A+WTDhlDezfAZS8PpfHz2DzUjWlP2plGB1JcidbAs8uKW61AT+QKaRC57gMmjcm7pxiHl0VNGKO/9KeFF7IOMFgOvvTpQnPaLqLd3Fp9nKgK14tUBGHLBMSAQrZkLXR4OUEWGZtowIBCVz8i8YhbpBk97ORMgOETxTVKdIqjmXBB4K1prIxSg0wfEcQ/T3iUxuXwOJovjL8oOsUDuAbSqw==';const _IH='cc133e55c6a33997a1433c11d550f66a2407c6239e0ed4f1b9eb045a63741573';let _src;

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
