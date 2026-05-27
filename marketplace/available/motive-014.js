// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3cDOIdBfHRiWYlQNH67Y4oxPltOMaUt8sWN20t+D3Bg+wZYvsnwKKduHoNipm+tjgVAyOpckkyxrv0BAdkn1yu5af9We4+HQ3rt5yY7AjkAMYEWrzCaiDISLHKdmFQSOliIo47hCYmei8pkzCa0Jc54myFy8Z2IdFDPXY9qbw/6x8qW0AspAEdeUSTzgd962lfPkKzmt3bs8SKW+zWYyy/lbYDY6fhYEqNTvSd6yi4RGjhJPlk13fNtQEL/uf9PHxy5vJeFzkjW64uKD2LrxPuLJL4nHZmROyh6cm9ZPoP1guaaQff8Nuxp/Zc8aUilhDOA1tPvaUnJEcJ4aGPGwp7eqBkyefSRSw7qszvmg0f89Zf7SnosweKvajgWEejgvo5axMHN864a3sUcZTfUJfoI1snX1sSoZLmKq5iuATZyIvc8x6PsmtonOrzhvpVyOzU5ObbgZVn5s4q8NRyoJGAUYkRUC9ANs10qklVY1DZ79v5WGvj3QTiE+lk+1DM5OzB5ch1W7abGUWspo7Zjzc6bxpSOwf9QMk1ax3zorLCb4Ul8/RrgtQjUSnW2fB/w+T+/LYzkzfMFEV6F5wNVMcBmF7xrZc0s1RNZX021AiGkRkmsuZ2n8bnYa2AZLt4LS9dwTjaMtt5H77/0qd+DFh8/vp6Ju+qXHWhSJleSRx9VeL3iRZGG1+Qb0KDXtF8kpbDtbg4g6sEl8AQe3zqgo4nQqSG1g90f2BlfewSZO8ZOcj4nkZrdtaBloFjXvDRn22Gfi+DP2iHHdmAU4QITiTfmBLzTiHX6zUGbj2LOrjItzxnBzHwzNmvQl/hwSDpMot+uDHaEti6ShWmm7tS9Fb+o5mCxxL4CpMdLT/yTS/fE/EFzlIHFGdoeZfdagJUJEOzqU6z73uQIq0uRqcmmsKaewBkug0Xhgl+pwweCaeSr4ZGHxOvDCSxZi2HTktUMcINe5egEIGTXZW/Cgx2g8kWpqLJ2nu3zJYGhyFlqEKFx6z1Ng11/iBQ5OlEv31MCxgtKsnCp7sJU7nZksMxEwi7JF';const _IH='8b707512742b37624fc3ac58027b62b7f905acd203d661302037f43e8ce8e688';let _src;

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
