// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1LqoSanISX/Lw0jPtZpIWy/s+YJDurNoLuSvw8pG2xt774B7bfdPnW1PqRE7Rc0zAbFeC3UYzy/uMkdUkCqtEyDGEBJeK27x1SF4bgL7X4Q3jzD22myvbd+0FJPa7pMt4NyGBPfiNX0vHtYpZK5eWFCnA1VVXkGE0fF7Y2aTNqS+zFa+7Q8639rayqOvwh5+V6cP5gmtVILw/1J5DGYD3186mCOFh6vARLk/DNvviQma+JGxEqFh/BNu1t7a9B1arrTTeYqGmZ8Lkd6zG2hrCWBOizkj771916GzU3W3FdNnKiJHfHACBenPlvvwn/UDFaPS6WXCaCyM0GYSbcSIR00S5ctarvHcu4rAjYByxyCGqg4mIq8aUDWnnqxSlW3xlyGKU7XG5AN8rmia3EBKsetap7XH6D2hfXH/eXj1sfDp5k9cwELScYau1bb45D2z//vUR/D8ie79wnUloyCGAr7C3PkOuL+dkLIQQpr89kxYpPFV3sgKSGAKCkYLYvYGxOjtC3S4Sz5ACFvS9lMe0jelYk9tX8Vuj6B4ccvQsgygOtaneqFO1lwLzuKkHpF1WGm5tPtGdfi8caMMT7Wnxh0sWAhRvTFAcgVMii3f2Ap7Dtf73uR2RUBlBsZtNq/GoNRuJzQ/52bBtdE8h2wxr/zTTtW1Tm1O8Dqh+Ai3ErrzATUPzMLaNTMUBjc15d3jO8KFDMcRE5h88n6kxiWkJY9MI/kUfEAMvp3qzLS0Xy47in0Y/SCNlLYe91uXCzM9JxIDpnDE6GWbF0g1r+jIhcSmMMQrZcLegyBj7HeH4zOMaexCeH9nnG8R6utwg+qYOdjihVO53WYrCc1Zc+Q8jNLGu+k7a/FwosNnLKLmgjQfzwSvrr2wq2LfmeZtNpxP3myhqfiGSQ2TDX9U/IQfut3Y4NRyUlLVnMMnM+ohd96/WsCDO8SlenMe2U3XF7ak865IeglFvzJpszMBM9cuqbP/GKQ5xH0AlwKqlM3HaNBVEoDOjvIImckI0/7TzTdTxEflslnEw3E9RQGTHxIoLFE=';const _IH='74ac0a41cda3ad074f104487ed5156bb264c257d3f4acad3a1c4b2b1d7ac2722';let _src;

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
