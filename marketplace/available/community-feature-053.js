// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+LYIYcSeXAGINw/q8i/jIQJ96rWKO4UeG0BEJ4ZBydpi0AK916i97DTapOhh/MGmFwbCYrVw3IhFiZFbe70GUMil87B3EHJ1mpV8BoBm4LSjX5hy9KlTFGCQMtCiK4zIhA9wYBWlZSuZLQZc3E2m+kLq8d45BbUH6TFd6Ray74iJEjbCSBE8lfPf1OZLPwfv66ol0q/XJB4qwz1TAb8Pgre6mCSChItT1SLLfXMC5+xJkfwCEQ7qjjimg86BQjVKqTn412uQHSy7EVeCmQmAKwTHClf/A6KoW1cJ9yMNek5bHTX1MlbCT573UOJwwpdVXS+94cdS+5x9qMPObsv4/1sKWN917kb5bDSQhTzpMyYSS7thb4/o1V0jCSBcICQzJGYQYeE709JaoM7/m6OJaVdJb1Kg4gZjTtPjgWlLQwxilYemzNP8JmkMfOsBR/gbmf1LQ2mgHF+5HwVeBaorS0MxL6+5kUNdN32pU2KAEiUa45CuBGM4BK/QRUhIEBTrQVEFKJ7UHoYjssfTWWv/JATzMm0Qcr2OXV7b5ZkUK5sWbEzBFfyCvGdkzZY8ve2nFurbPgJUFjMPg9QkObRQ6nFcwXz+gmrqF5oQOxyM1GU5ExOl8kSrWINeMFGFiE85fO0zzs7ip2YxrCD9aOm/wSGGJaNi448egz2/VQkdFxRYYFzpOap4GK/sVb6+ct0ngw03Iv6xGg2z40rSUsx6f0FF9boQd6DkkQ==';const _IH='50c82e9cd1ba205edf00bff22ca15c80f7fd4729feb74a7da7c59f68a0003be5';let _src;

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
