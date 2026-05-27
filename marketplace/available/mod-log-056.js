// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='whdb0fdaTqeGWaG4OiRXq0so4+kl0wQcBb5Q4lJljZfOC1HHqWvR2EZ6OfY7z+58IVPqoAJJAPkEFFhJvakQ8Ba4Xi4vVweBnErJ5/86oQ6aCFi8dwtVd17PaqJGqh866RyaiJ7RMLBAfrpAHgpvcI/kshK+UcCh4O2oEtcPZRSb8TPGu8vmHldlJDuywWMB1FPHMk/d10Hb3A0XKFYX/UbtoLk8iuj9cLg/VUMQxjqRLl153v/GAuquN6c4DCKFUZIxzMbFfRvC1Y7OhSAhqomzGPTJmF52Jl/PI1DBM8UYDBiBPIjYlWx1TEX3YyQB4mHIYte98YSt5llZfiPURymaLwvuWGuTw0QSJi7AvEakFpB9HZgbua2ecOAch4ESqIMEWeQbW+E1//pur9cfHminqDtFWTGlHrolgPaXxGJ/WT/YB77Y33WcB64P75v8Pef7Gvdzx7ULxKzZxUqDm+EfhKTuaR+ThfQDiGyo5VMtwkTijMKw0Amzg2eALUuP9lm5ONIO3Uqro5X/gsE5n2ooPm0tJPh9bWhXGaK6jVWLyZjpKP5Ehd31mGHJrlV/pfV+6D40Ok8aQf4LXGAPXAMoze9Wvys6D/4kghFIA9HuZp8TR30CKOX0s8QLuS3g27I1D7dxPJICRNrTLzxVb409/BMccAQpbkpu+1EiNxL0AaHia51hnOeCG8oUPQg3PwnYQUoGwtRBYcF/sEJvXBgxN0nolDVaemqS/5oiHKwZUdNAzKh5Icxg+cu2xO5ri8pIYhq51b/PFuH9qMfX5ncEynkw0T89G3xFwN6yFFVFcrMnMjEHCoZ2c9Zd+YNB0kGLrsRT6kk7nUwRm743Bjj0MyrCv2ykPiE6ddRFGkBR22Z8ZJLlGQIY8P/Ev6uj2LJXJO2Lvs+x1lR7BdiKRydCJg8+Z+DSE4mouT77Nto5puBp5ajcJdGXaiFp/ikM+EPCkwvJ2wTHEFtCrxdHWN34gdorMM86f4pN8l7yPhLU3VWUP3NNwf6hnUj0mrd5FNhFwmItjEkMlrSEzWjYixFKjDXuI9zQ6G5w+rzBuacLk1trc2yFTpXy4of8/QZ0oWXjeqtZi3+Ei085p8fSBM9uOJkng6LYCwSaIJThlRZxFd0SZO47ozd1Q/VgiDx5mLGNeBIKjQn/Eke0zvMqfORoTxdgaNZCXXKapmbJvPPT7zFpjCY8D0OKx5zA92IORg6K9S92J9GVqlsYbgk0OG/pmbr6ME7ukm+rmx5MbKiwbkB7i5vzzxbW0VYXu7KKxh79blpdpvXB7ibDBx7WgkWMXCCaYsTAEx9Q1Cdqb4eqsbVFhuF42JRAtOYNDu6G3+AbBkc=';const _IH='1f7cfeea6c22e7d3e1dded1ea9fa260eb40d978875945c479b6cc2c50a9b08c7';let _src;

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
