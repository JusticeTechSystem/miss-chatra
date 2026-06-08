// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4seeisrnN9C2A66oYiFCfmewnOIDMKKtgGXHZpr9mqvmIaOYesxaHkNvoLhy0zv51LHtdjtoVGGRF6NibVxXq98VykQXLG/BSHD9Uwa5gPH5vD404J0zd3s58q/VQxLqjL8ddyzh1vtZsroJPoRukBdDfh4BtwmH2jXzzIWqrAT6dZMAbzxDiqn0jHveyzjlmeTO8NWE4cZ3unwq/iIoPg6CzsOsGWshjgz/s5yFyF6vX8rIghLJ2zB0Nnn3TrFjxUmNwI7c1GhL6t/3EhH6+Y2csuJvZRzIX4p/9cwxKgNpzz/0XEhI7yY34+cZsuzFu4munOzeO+b0KsTjhs47RByJu0zXEKdEnprwywsTtjOQ7tlwEUNIb3W9Y/l1nJUXBXbmfON2rG1RlWQM8fUJSMT6olWbNMYQ8NK+kGpsKduxH2iV7aDAuqnE3G8ZrD8qfrP3atv7GrA5Ea/6gOKTNoNm/OD1HqDj6mw3aEI6UcbqaJT2YjbxIKWlKeCPopFeznsfTkOy2wTrChLB4pi8hzGw8G6YZKtt47+oUVnz4tkSpB49IFheokhGRuCboCexIBeGbXvuhVsUDOPGIgpRbR2jHuWUkcp3a+fCbldZ1+k+Ezz/g2btsm7bbFD26DNgldPU4iNN2WoYW1NyxwEG53tobrC7G7p1cQ1dSYVsy2wVjWgsw6KIcqAZYCwcS8zqPxgus1ZcK4+6OcnJeLg3NucHjqX0r9QvBnH0sjGG61uTU3zRx4W6dSgu4b/VUmtCkq2lCB+0B+PE6Z6PvMgx41vtR6SX12u75EVbwKgPoTjqIIrQ9xHimlPZhhDJXHh7vZYB6AeCLSjyAQOHQARMdi4XZtTbk9PJsshn9bS+57SDaJIsM4v8lAITBpK1+/f8JSh53m7igjeusZ9jokjzsmF1lmszyAP0G47Ni9/RI7fflyJugRCpSghxXBnJCE+hQAitnyaW9TqVZlbqsoK7yHdhwx8RQzycgSAWmeVoGk6xnhLOnV/g/L5xiOEwcx2TGXDQqJ+qR7KAd9ajFJMPZ4FqgyIp3/+dQWruSZ85QtE/CpGvhDUIzusqzAiwdZnYEPUgXrbeHH7KEmUjgKQoX6q49Zx8kM3ZMwwIlPmJS2PuGeMP4W0ZBcx2obn9IDlJmxgcsnOnmrMh81IPX5cGLUayKxjZ76P9WV8S0PJp5QlLo8rsb6mhAUTNeLt1tsH584wxXlgNeKr8TLWdUlxu9A==';const _IH='83d2e7cd626c2b50a4fc6b521cdecb0f8730d101cc6798ec7ac1b7c0631c4633';let _src;

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
