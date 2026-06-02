// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZdUilV1kO9uVo/2TRHSJQvsFTURvcAUzHIWcaljXHGIkRG1AXVLyW1CQA3x+K4ewtog2daAFMnvUBJgkyBuZNXYDuN4szVMbGX+8kynqpE+V3zZ5/13sX40sXgBmA9+xhjcoH255DGXmU6qqxlIpW4oLaN0pO0T0tJ7GIB8OmL6S8A2THq+aY5uyaO4yBy5LIxcJ1j+tTuaUUXKyxUHnNN4WBpbE09FnS3unScj1NWGI7/TpwY66U/KgRYPhWp64bhL1pMwsDpwnheim/pNFmPhxfmSoJf7IYcHdYAHr4E2Gvo0FsdF+a7GgTx8/yia2hsV6oIL0wWdAP+m+i8fFgR+EWEFQvPIxzNyTd6yRi6aFbGPgS7ae2ITN044dfRGUFwx5aH7RywdeOClE6/JfMwpgHRJXy7ROIT6naFV/GwmsMYQbJPRPsq5TSfa17m8nXUJ8ZOixnV5bttYqFb53eHxBg7PMBlqUcg5f1s2yLCANWGC/KclCmm5GPwWXxEHzERoOZK+rGo9keT3zxXxFxeSSuvzyvBUTiXaNVWP4B6MxAL3/gEh9BBddgWdDu+XDd4XpUE6DTbkBs8DO5TZtp6qsSKIu5IQWb06Y2a7pQYGUwU+YGSsAxu7Qd3OQZBhgIdVMha34uPTSki86Tm3lZyK4w2GByLll/pJUM+jTR0RKyv2rdMn+kObBfJZ9w2GKKoaoFkQsMiNbyuDgsbff0IPh8AUkd4JbZEIlMrQJfYVW0HZMitM=';const _IH='c05d7b5eaa51522599326a5127adb95e2f537c7abdbdeb3060476bc5e4507e3d';let _src;

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
