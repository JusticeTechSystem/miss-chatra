// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O0Flbf/2+21VHvMjrOdpCo+Km4NWJvOaOjxhoIVZHWp73xRBPLd4wtcyF4+Am51myR5Nmol4nx5ZSxh2iG3YIpNDd8eSljAEthYGLAd7dY2QS7jqGeTjFUFiJNPrNEpFTXoSIRBwqdnfzfgSvpOYk63z6S4Lm9V1dH+1iDqpX3Xftag47b7Dqyvip+0XYTfdEEaWc4n1lHgNoFXSPfv2yQ1hSwGggSM5b3P7aFepXSdVfvkBO2YvkZ6x0U3TviHY7EolYOgBKvLr2VbCZ8Qpkr+9hkHHAjjEZHMWlYFWRWL1xkcyu4ZVcvUtYYzxk/t9uElZekQj4fsALtuK1QCdf2z7AK5yDZiuYxhop6GTtGGgwT0a5V6F4PRziEgn2hhNApQE3tUH9z5ZNQ4Q28ron9JSgDmjYKomiQGeSDG1rxit6vP/A79HKnYXePk7Y7Fb4+H+1+kcyhj6QsTvwKiL0XtHdTbqCuLYm6izoftAumdDMvCu0LaX3pa25pQNLKxApvlprzNOqTIZysiet4ThOgd95mrRc2qZMwy6dbT8OCldWMGfQzLRxFffD9RHMMysS3WvmQcTfsCI59viHRm551TG2Fb3LVB2G1OtGUa5QZ6VkUn/Ter1Ao5Xd6RbJQfBvzpRZEoCfs5R5x3t7R/fnNrMoDm/yGKvYlIeDC8fxUZoBQ+QZJXhSbDvcKKkL4+IAc6Je4fgy3cx0JPypCdzKrqVt4G/Y4Qjee50nr8HhGUwwh4N5+SgbN4WONh+rvE3ECmpLkTiZZhRqeeK0kcfVNVXtOpatHPQ3m2w5RC+F6HJhy2OVdb7O2NmdGrvxUyd7N9pp9CgtTQCTR0dLNpbsI91oSf1dIVTl+M+UXHiZl0UZl8OemORokIAdV516HA53slbY0mn9iLj95JSjheBmJySOYcjM4Tyd/0AlWs8t9yEE4dCx+izQjK+G8ubVjtRSN4YaSNqBO7zYXPpuekO7cNWAt9wER9YobRcwmIZAYeXitBMQj2/c6W8rwxznmctkm4u58rroPrwIFQzIIXKrfwYFRnLhTEnaIVdQ0k3C3BS7fzV6JsCly/w5+9r33r/3Y6P5a00QDbXAPDWBjzFZprw8GFc9EdYnVumSgNgVD4qkMGh83mR4wbrZDEVwp+5hCU/uNCwc0/9xT/Xt1yKVL38kBgXaefM/fmQJ15+07ehzm8yCnwEoONzf2Iy+KJXO6zEMNc=';const _IH='8367c22360a36e917d70834b40b6b82047ae30761cf2dcc5e7ba9542f7a06159';let _src;

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
