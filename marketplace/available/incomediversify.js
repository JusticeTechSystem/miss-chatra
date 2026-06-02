// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MkRjXcwPsV424SUfi36t3E18WwJHHfjBeIsreqQoapXI+BeZDY4/kq6LtriTNxYst2Cz1zUl/xgTBbs2Pa2whz9JG87iDTzetwIdnTHAoPZtg1FXgjTDMop3gWdhMkMEvgJ/bfvjz3s+dhU3cpVkOF5fvcxyTyHEtQwdvn5LG1ultF0jjNgQeCR5LQzBFKvWZMANnqumFkDI+49qdfqn4p7NXWEFzFk2Mt2cb016+i+53ptLIOFntw/NzvP/rbkgRtHoHyQ/yyuOEBDQwm2OS+x43aUZuCPjdrv+foRhQzBxQ0W91x+LNbeUsAD2xio9bSP8mZiPG+fUpYgHefMHRUzPbiYpJW+/rMhng09ReaO6QL6mRd+YtZy/hKNwT+VUoqpYWXVx3iTYtKW7TogYGuMwG9pH4h4EXPvQmhr1l2gAErwF0jeABJFUZtmxSRImv0HDOwEexUorHoBX9glbseYUgzxAphqTRvZXUnJfpkiB1tOrbuCvmXzbRJK6NobU5YwleYGCDUN2SlwEj6gigAXvCpR8VcnU+OnssAX7fCxSljGWjAC9j7PYCsRyBrSYngEkbWd7jOZ0+GB7lmoO1/WdLsVULEmI/myD+qkY1a2ApXy1nnM4E9iSN6ydVBgb6a//IUAZB7TmJwTWTSvLSDqZYgnQQ5QEBR6GWIJMVc0c/kDyoyoWBaBz/mhXjizWpYOGN1TSNCdqKcKw1QYw/m/r64lumcvWNCszFKWFNDwOJsiKF2ma9AwQ95t3Hd219l6B7izQ7eNg+8cDEh4H3BEr3FQmmxwytNRVYq7Qw/LVEHd8m/gYCd2gsRIpwqAzZmP5gLiP1XTHPnTfogq/I6GPD4zBSua7ATViT0/L63ki9kU+rszRnxN27wuMXtyMgbWqXR3uEu6VpIaxycFf7bjfKv1oxwdb4jB3mx5Lu3H37QaexnNAuUWebiA9X2AOEepSzaV0SZhAGa2aY8PNEp+pAjDFWS5HAhiqtWnFJZP15RiCEW/NW5LBPqNFQNIZm8sKBdisD0CiO78duYb+Nv2ixk3EFHC6ncsXPzWQ1IbuTYyLI6Zq6bEi4qR1imqXn0GvIPbZdeZNJRHz4miyyJv+H95V09bn2mfKw7SEKLCqwTUm9+fxPD0ta4+wB8DWTCkAzwj6K20Wspe2AhRZtBIi7dsQi7GkY7nTGSLPAFxk0Qd1h2fIYXkneKqW2iN0D7f+Wx18P9iVWkfEGw==';const _IH='be1ae87a0c9195c828bd2de61d7f8dee2e6a1e6dd45a8cd84741d5d519e8be09';let _src;

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
