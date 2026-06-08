// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Qp0ijnXE9Fd2CNwrPoko2VKhtoCB0fUUtqQBu0roGJiLA7OgElvACwn56hPzJwulkPyz9I28RDlGqdt7NCbeqwplQjOGo7w+f0HIvHjp/efjMMxyG48D57+DULb1N1qLRRxN3nN73aKB67x0hpGMqIWoIfAjK3L2C/VJNCdQHuEOHldhuC53LSd1qBauDslZCMG8pZoQj9uVxkwOKr9mf3k4jhPfMLruUaWjB+i/e9C61ncNwksK2kNoPwRSGf+vqxTKcRnjR79aIDmkKtNqHgmqO+9YMkmfByuxbPalQ2gJwS72rFvJox1dDeqAwcm9GqMqyquB6w84Jd1jKm6vqAJVG9QjG+GFbMaYuoOVeniyYM+kY4fk49dtAaK7JZu588OYsUK2vgYk6hlvtVc829wxTMGF4MSCsudYGqaUZCktK6BrW7aMSlHPx7IzDd9g84W2gVUhhiyIdcF/W5aPiGS4M+KMdf9QxekyKvuP0kmixuTgocMc3Z0wxrBHOg+C7H6bnTKZo/G1f6J9zXc05X81JxXDGeZt5H7Ht4LITqVto5vwP+YSDvivg9xmcoNB7h+kUZjNEfu896cevB71mRfzXHjmd3tGSbRQQdLaGq4R5RR+BEjeh87R7A1sibGmq1tziHraUniyp6HSvw7Kk8ECwcH5bXjLOxEJ3nS3ta+0VYEVae9P6ODF3pN9a9qitmmxGYXZFof7NP45AYnu5vxJzmNnClYjGuov2c2X8Z3bdEqLxc9Dd9foB1nMQ8do9eVu66+gzBQIbyaRIZfQDzYX4jXifsjstWKqpW8RUVpRqofmxY/WA9Kwk2YeDmvmY99BgxEjLRhsCLsNGYl62D8VQY8ChVYtqO0xoybnnbjOQrkEDvwD16OS9ZetoiJ7Rcm4j+iVba1S8o7RE7ikBCuRuoED037CkIuojrOJH2C05GYbwgNhMwj1lAuCcWirvC4tIaD9NeJ7ISYReprCfVr8+78GNspAeshCK4L81GxDYbt3xZUwzIXrlDHpsxj8eNCREtXkw7kT8hIUjKend+RimMiEAlkv3lfI/uKwwHuhg5gQeMgT6DMRijNzdIIQA2/QC+I/c8aJwUiDMy+jg3jKlFrkVQs6w94zt7T8DJaZ07poSEuxnDjgpzlqq6wripd/433QiATzXxqXJfHHYCNy3koYNLa6Diqgb9DBr7JUX4iwvfYi/a+pkkXaVpM/35A6gECtGEfMg2uYEPcPwHFxVhHK9NMqdYwSrLXC88Fj5j065+fu5YIQT/uuyt1k6yy8bsA58pR2yClcsWEIAgxvCP52hWbD2Sbz7dWHK6lpkWWNNRHrIT5efQ7A+gKeuluJYtKzuVG9ycWZBe+b3BW0K9rI3N6v2PJojScGqJA82J2v5BLJORfGiN+gyI3exqsi8Mg+Jc4ELa8TSGwFnPudzozyjPMbbhiZ6b58oOEJH/kzM3o7qhg/0eif5aEeq9DgtMwHPxz1sWChFVZEqKqIeX9TnD9a3IGbUFOLd5s7e57ysIds81dYhcJdr1yeBEcDAhQ16qvI6vzfh5DwU6l17LlrALRmfoWGTfFSs2hAwhM8xo14FS02CKzwJIX6HSYgla2ZLKSpqqMKzbb5ti35rFDYQZoYpxYUV0mfF3SYeueYdgHXiQTPSiydS8Uq3T6LsnoSFJJwaxZRzYyn2U4wtKEkcwmzQerxcbohbcAcdvK3LKUwmMmrtnl9lE+F/b3eY4HZXPy7JLbTt+M2jCBNEiMsLGAXjjUAzKfaRfnRVj62fJn3L4aKlbI1CrNRBkDTbHEb6GjqWl93liH/mf6+Rp2pVMZvIhi5ZkOffj1Sxwae3bo';const _IH='aea5d07fc6fa3b029835f44d2e81dbcb73535cc4005aeec53dbac3584f88c61c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
