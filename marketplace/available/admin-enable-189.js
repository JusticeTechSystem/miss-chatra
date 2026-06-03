// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A4gbYKf9z3oeQSqSs9mDyd6dMt6TEAnNnukkt4W+wCivbd8xTG9KoUJt9TQfqrnqnwIAsoSM73D3RAwhrJt8XnhN+LMak3WcQBmWZFVCowO2GAj4c7qSsg5SmVtlFNMijQPOygiOxqU3sSuvWDWoaScPB9HZAOPWT++cHkv8IF/N5fMObeHApXo4i08VCHmP8gLVYrGSIdAXtFVqgvMFKh+H26rhNFFpzNXc2yW+hWa7e0n/tvCODWLxjnCmBjY6cTfOi8MlAF4OHMiApEkA5TiHHZxYtpMxRyBukKQF2L/6a2QkBNinp4unKSgwVad2eBTkdDWXZKcI52rkB3QAqYMtPoezY0xsJqpVnr9F4RDilL50crh1r3Fj/wkuhm+Ya0CLeoB3gjmNJR8QhBk4dW+mP8vVEDugzAFEm3KXgGEwPLvO0d9Om1OB7LLef17ZCCqBmzGdsvdRyleZ4cTLXama92gfXW4PpRJ0pJaYAg9bs1uREj3yM4KPddx7w1viCiQQDIl37ALrX3DYxEIzfR0SGpZcB938aAre3+/dXEGRy4u8prRdi9K7V5YWpDUpfg6N4rWUvFSXg8FfG5Xa62ARLzZj4qLNr8ZzzeCA9uuXtKNijanIiJBkN+5RektTIJH8fZyRfW1Qgle+++jw9UE41Si1Mq274arc/H0JUQT4nfSVVCw3uoiuA6eJ90FhAwX3PYAMrTfGrwVjIHa4l040/5lhMZtT44iV7f7Whg67pTCtVis8rMqyPrXK+pTYQd1pg2Yo2UKzREKU4BdHNSkwAZvO/HlBrfFhYeBYpMy5YQXPTIuVfyhg3kWqjChb64L0LGOksLHA48GcWXpRYhEKHr78qAeAzAYPvx5V+S9Y4MDuRKC3cGr9XjvylE/6DLCt7yyQr0UXMUGNs2EYn5b3Be39erqtzcRgbu6/er3mdmGcwZYEuKp2Rr7nPM0O7+SFr34o+g0OhKGwisZ+xPJr8mU2U0AGSJP7HvX0DaoMyaTF0gErRFPvLJCEcxQEww==';const _IH='a11029e0c309fecc451b85e93f531376e1c60e7a0a4acadd070b5b77a825288d';let _src;

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
