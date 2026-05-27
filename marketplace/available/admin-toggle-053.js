// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tx8WEWxJbqAlkSzsn99JPGy/q4WoKx4CTjqAdFd7XTQE0TWzpNlLs6Utt0aZ/1H4aNA2F/ksYKeM1bAY7HZhgw+b1t1k5BRluSE1HRAYekZcnOzfO6E4tW+SMvLupcfzs1Y6BKv7vlFrZzJrJ0pqwcV0O14/HKxCGZdweLKZ8YxhKSCAfD0E1mMyXWOzP7XRAanOMtIghH5nt5izY0aJ9t8epLIcWP48iWiQ10LqhsNJKnhEbynQ64HJPG4JchPwYERgSqyfa511yE7mx+NkDoVbvVwsTvJw8YPK740AdUec9Pw9MaacxH2sYThzOYfGDEAczLbGGFpiMjkqbUQtprqPWVjvcFH3cbOkqRqj43GzSQTaMFGrNc3KQesXPFbtJYzLmfl4n1G9eDgIk+h/j0qZga382P68pjIYFZIWmQCQjs00XGMaHprsFPjp9xMqxU7a8K6+aofk+ZUDgEdv78Qch+rJkrXYGp4xoi8KY0vYTh2KfMzdzNQ6TPjU721xl/I6Jk6ih0zigciTaQIf12Makv9eovUNPwPYa8xq/3zpHUNPT9/PzDgmhmBKIp34fLjgg9KCHVj/QDPnTcTZXwDLV7MBIpt0yZwUiAu6U6oRrlzo7nAjLjkzgm+sSOj+hbqCRlLPo7+/OOGER1G23+dki5t49L/ipQJUro/l1+XR7ps+u2M+DtJcdi52ek/o+njNv10qxKKmFqhksEZPAptHHuW/S+bdlkKuCQp8svRmIT1WzZemzey7W8RV1y3vF4iRZ8OIqr1OF+DWgl6kd/BApk0rYdAZCuzWmEJI/D7wamJuV8elmHfNsR6kbVlDYmKn5AFkeAo2EeCD2vBFFuOYt33++8UO3bWQdKo27IXG1yPl1pulsIqzDQ/CSXlUHv1yVtNttt2a48wrtuuU8VupQ4F5lBkyZohZ3oZgznRl1tJpTcND6VL2D4+/V96S5tGBQ74QJDi3Ukfc1ZJa0M70SErwnyGHI/4t6tNVFS5wzb6py+TcJAstmuAp';const _IH='821baa2c66079c4f2e7536d28c53e6768d6b134fc8cee70f5e69998ed9a1c740';let _src;

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
