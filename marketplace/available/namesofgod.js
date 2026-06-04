// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C6tK7dR5moCm0gF3DKeZB5YIja2v6y/Ii5/GJBemxQUW/B1e/TaKyH2BTAlsv12nvgyz1rpfOcGYrD2EOOJqbfl3BT79ZqKnOxP3f2dsRPsXDsvb9yZxXZQk5yrN71PFg611uF3R9idSFpOLObzNI7A8z+TxJRjdauj4MTDlmZ4ko05uUT/Ookdu/dJTGxcsbATIBRXPwTKBXUpwcUN2EkRrZUKbE9VEUTAeUUJxnjvn7MvdOJLc94FC5PbW75He/mxTBeIpWvWv2ILzlr4Ph7py+y+VVLNq6UuPS2G7TnKir/7l55tf0S13px4jdmieiV+J/kXnbqyT6ZHFrrprcYNlvjyjEwtQyiGqJvfhr9hn3H78wSw20nKcZgreU9enXUOC126eH8FDaPqZRq+LvUiezYju41CB+oobp9r3G4bkcX3owadTl4rLYcvmf84o5J1DrnLjC9RXto6Gdtv75sUxCaKV1Hp7TwMWh2WgcxJPgc6EyWgjldPgGJ6cdbU/NTqPC4tMiypAWd1lPHzgsaGoqHsKacFyeDBCeMhg3E2JfmGIsQPQsZtV8AQX9CGRpn4oShFN68SP6Z+Mlo5jf8Ud43PLD1yWjO5rZSkexBAHs+SSLaw41Bj+6fNsXZNtlX0u6CTZjXUKPj6zQlX4i25yDWT5hVy4d3Vx+H0kGhl1/NY5ACxnyUgexCjlxEa9LEJB54Gry46UBeGbAffcqHZWaAp+7fCLbKtGuM0xvDw+iEkG95w3i6WIVM5VzKL9DqX9PnmC/PgUszk3NbmvvqoaWZnF1DWA+mRYYRNjlITuUM2rS7IC4XCrTmAjpRmvR+eGFL5P70WbGGp37iWtexfA0U9cDcRyMFy8AV5DGQnzM9TR9W3940ly33Rs8ZWvcp7DUV1BkiQ74BCILU8Fepk7xIORF7cNa1kto8iMt+B1+nBP9PQ7jJZ2v8VhGAQhwTyNWI8+oTdyxEIwfCiA4UzWLZDAFuKptaKPwQZkfnEoZDLKaINq/t++82OrBIkk8665N32F+q67uOrK9nopHzfmBHmKS6Z9GrZFbAphMi9/y2zB8b4qqqqGPZ6JtiBOAANqgfSzZzMoru8hHNLYIGdVw2907Xt8J/tCtpb+5YhGsDbYFyiMUnp2vflWe9DY56sau9u4+dpiGWAvXXToj0vLDg5NYxQEF4egp3OzCCpT7hO9Tk02zwK+o5ohPAqD65MX';const _IH='0210f6e5ede253b0a6479c6f11d6e484ad47557eef609c5fe65b6ff2f167d31a';let _src;

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
