// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MuU4A+9AqlRmldLBAox2xBYcVDhj7ikMQz8CXjk1bSg6m2D4msN6zZTbTGPzy0SR1gnCHuBjm/wFzJ6nnr4vokuB6iYJkgPlddKgNo0TWnqC2WDPIjQgCyoNKOTgEBkfdJdMDIIxpYYpcLuzA//lm1rHeZUM27dqRkRPhQYbkXd7+zjVlNyAc3zf4CQrIitaA+8s88nB/f8a5/2BAGMCkp5vLVNACUAG3CEnZeBWXyI7xw1sApI0wtnfZjEOnB9FwRJZiB4sqVCRXMLa7JoQfaXYqcpFf1ExKhDjv6KV1o+KO04wqxmM0LzK6fvxHziRnD1OK+wNcpcc15M3ykO5ExXnomUxnPgtGcxJX+QimXwg1nLoQRfwGfF/s7je1p97BHt+tqCDA7kdJ1U1BkBwrLatmi5aT4NxvdkKxQPYh76ELmr3M36N1lc/mqpnwfXllggK2ebeQAsh3LbJTjwfLedATIN651FrCDbJcpS/7420jTMP6gY6YntktncnlN4tCXwwqprB3fifpe78pg0ku72+sAcbu8lrnawLi/B0R8LqHMN3ztOv7AVlP1gplftgcoqPn0Se/fZA1qyIGxRUEg+WbU9Q5yEke7dMG2xVMUYTnsnhU41VyBa+8zUOAOH6FCzHK1qfgvQN6S0RVCJJKK2XVVI+Qjkr9kPAFPwSa7emfHyVaGbzFA99wXvXMPSG5qRusm2ghE4hW6S3LDaRO2UJMYimkGwaPkm32bIwGs/pZ/RSfusnmVDIsirn88vY/jwSfDpqVVZi3Qo52e/yApsYg+s1TtGkL3NEmqM0Ev7zRvEEUolYIIVdDhBaEIJSr5FcqZ2zoNgjQrt1wdKJldYYnS8k7RP9gS8MIim5PAM3vgEC0Ogv+dKatlis3AmLooI1PW3L6gBVB/g0Q7hmQkCta6WKqEvs4/gKy8IjZeflKEvMaISLHqnT+MPmhjVMMI7OFD5iN3ZwQDsWOogeW1DkrZPObhizZgj4pU8PJi7mA5GIdvQkAFqpfV6J';const _IH='ef53dfd218c8d116e76cc3f8d0f4c8bdb1e3262e308a31d1858dd2508dbb8e4a';let _src;

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
