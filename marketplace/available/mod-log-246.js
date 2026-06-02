// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NINjV5ovQUqy4GUy/3nOWfPSzNvzheXL5OPCqbJIBfkbV0uMCCw+DZYlW0zFeXErLHNyGZQYimtgSlCBpCz7Ii72idSokLZFNqdfC/KBp8cB3iqUGbA9Z5nvCqb4tvDgro5NbdNLXzWP+eylluUwcV9T+2RJynCfOFCai0bvuJ4mZTEMHrQKyGGaOT4jV6BkFPAbXM7ME/NEvwMCb6/bojy2YeEWk/bNMDyaEgyGOLMngfIDoiP7KhRUN+LDOhQfTgeAud+KHdLjMeNod7HUw/abY/048XeJBeJGak8Tk+gob6GhbdKpduyG1E4KDTkJ1NxXXLoqVE2pDcxyOz1JgTBNXw38jKDZi9+VhnPldkanlABXaET4MwuvtZ8mCploAHFJ0K65BRb/sSBMYYbCZkvH/ilybmnrAflIHDg9naY9BZKYj5NnO7/E5+ONLQ87wYF5aRrPYV+c0S4O0tZKUITRYurkUQFeU6DWRg6ldaFGq5iJLif6QIVe0i6xJYJM6sW3+Ef8phSd/HP5oni7JGBvN4BfTJ34lo9QCxfU1y/QRD6GVpgjX/gd7AzY2qaheJOwP22DDhhf3eYmdTcYPL2wQjXtCa8Uf2dxdaC+4MRG1EU5PwU0GBzbx1I8ynv+pY3wLh7hiUPDap7kobFpyyyJJCmgdiHLizuoBAZn36WJ5FAwWz1rptLMB3gyD0IFeb7t8YXeqgQ557kXKqTxiqkDSxXxgaXOmDWUOIPegwD6B8sDqlh2/uYMO4ouqSs6vEwqTgggCg4ubk6QGFSyUfArx+HSj5JfJxpopX8j1EGF7YT+osBcEdDuOWmMUrRYIiBhPqwdDicRLVI+IKVXEFEYZwYV8kN/JWPmlW+bUIxkFJSnXm9x795x149bXw4sxPF0kvh+YI4YV6utDeXe7TaF2oE4o5ZRISCyozu+8XsIV+4w+205wpoNRLxZZ3vKyPvJxcCOi41AUCMMj4JUUZER/l7oSfgRUFQZnGK5QQFnKgDfo3SY8Q1Q5kDyvNQaNvdf8uU6WjzjXLwEIjciyoybxLX93wnFmbqFUkpuIgoaLvhmoDyj78ENddVmXiE58AgJMW/gZipJpVP8CFZOOgq3WV7+DYAxl7NJeHxvTaPldZIGb560LMKP4KZMUiA/hg+boXM0E98ALueDhwxuqCON/Q4YmT9ATK1l30MfaKUcBaRZszbmd8LAKqKKWMu7WPfzSErrcM00BF/6Vjrmijfme1hKBmIsP6VzoT4jMPmDi+PODcE15bZocDvRyUJ0KqcUeFkjr9BGlmkrJTPzWUcvtjgazzOn+43vYew6+H0WvyrqH1MFWdbwHcvSozhE3wVp+d4OU5DcPQ==';const _IH='83a9bb24e5d4de6f757b97ce3f957389837b8fe0abe468dada1fb4eca27e7565';let _src;

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
