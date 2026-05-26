// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0xOxCFKzATE74Bfbs8bpc2JWICG55VIyYGS9OG3cUJJmsdaqy9qP9eq7TYduTE7ZFiByDl4ulA0u7zlVHeWOPRNOURRSJS8q1E7G2mOqxzNeTKOhCl4xt/NHciqQYWN7dTYnRlngjMT9JKipEGvt3apBdVOblHuHFRz/4v/R/J9NOD73DA6KSP1dEKqVgb0EopGEcbC5bQEE2N4fzADyZfhVjTf0ptdurCC5SsJ2VPhE58n6nsfds6mzctuQcBiZSN2ESAhN9CLvdyQ7jH1JQkTzzjwPmAQK6XM5oU1xc3QIn9s7wo4A/g7Rnb/V6eKA+GefOINIUaP6RaJ2/xV3ni7RPo8Jqi2ado35xjk7+TYreBJNQO+CnlUNYYGIciQAnNOZftDWNzEWhCNjErMlV7QiSsevwKtPTQvIjdPf8f9ncZi/kncoiyoXytXv+ZKyMjn4GiKUX9Xm6dFZAI+wWfzDDZ6CFS/Z72sHItly0t28ASiPKhvozN49zLABEXrb0OyQHVDPFFfEQtJLMD4w3Myxd0OA26vSgjcO+2hhmrp1muTooAz7lvfWmdyUk6oOLhIuQz+BD4NggpW99kQodPFf8vvUNYhVkAlTXUlgdM/0La/U68yfNJo5JDLFzRpl6xHFVotx5HbfgVBeeIgipzz9CfHC8WR8BJtti7ubMJ8kuEzaIA1StDXLzfbUdR5PM2i91kfcWiqjwwAUZ9B9kLnILATvX7GDPM8RiHynYCUZMMoUu41guiFogCl3muUQ4B29C4vlsPVgMvyDluhGZiJ3PJ8IQx8whTuHn1b2gHc/b/j2lLNWnZvkZFl6ZRqisAjJKILoQ7kbEFINPIXCKEDeVupOegOrJjp8+dAinV8qHtD+VitGOSEykhnT5oGFaRGQ3H/BEnUWFZQYkg/pFLiaLacDYre+m9UQ51u6WwNcgjgaUnnrmB1srNXuKtl8VvehQQowrnj7oaH7Ak6VjxA7CJNpyQ8tMKRRrpTTzm/pbhfOyrEj/CP1O7b/PTvgiG69s8SPHuKTNMijMfRno+Yv1hDzEySLhwayHub+VJq7mPvWl3agJZfe/60XnAQ3TCPSOtad1LGYGGQwHH8ezJyeKvNY6WMmOyvcrgct84GE1MR3pcC3O8M6TXmqq3J6BsDC20yBCO0VcinlEPNz1UUixgMNFNlwR7hctFqLrDf6Rru1mxQQaxOwCVpqi85foN+JxHSzwdjOa9YyLNdck44UqhQA+s8TbF1qD4fBd9ttGwTj3ZADqIaaUTfbp7RH0Dmcq8qSpJxglsOqOPjkrMNZeD6IUJ3qSAdLeue9w9pVlJjoxIDbn+9xo1EDVg0vcy3t9HaUgyjXiA9KFmpw8QjdfwR07RbIgHaUXxUz';const _IH='5ad51e1b25a7adf50e1536793674839dae2545406638f41258ca9e2ad1b0d169';let _src;

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
