// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8O8Uwrbf1JAdxAxeOP8Bz1TrlozXl8nljuBLWw6L2AYdbL1+9vaKN87hxBrZJ/kMs810fkgPYrVrj3mgZRUc/L/gpJ8oAkkh9M34Le0cD+BAdoPQjEyuTZ55/CgcnhKYrcYg0HnJ7+SFRCTddp00kvvwB54HRvopqafNis6fxr8yNL+BHIRfIMhmBeElcIfx6Lzcr/WTpdP4AOovJAmGbt08265yAGYDnqREtJ3FuZ5h4HNqImu9xd35wFy7IOkQ0e6IFIrnfRc7wNxDQ5sde3Etj4JBlrmiGULzactVnPMnWm6lMQ+kQJIJTmUy4rJGEhK+30VRZl5ErbNBYAb/1xMIrf3eIuD2HLIMweeOE/O1diR4hPKWesCulguikjXlHcw1B6dtoMJ3Yi2ukO3ekXPGbLTa5HzHNxFfulhwKsU5tEUercb6kLuvXomOMnQ6AIzcSYWHax1GpX2iQn9Gfj79pKWelbg5VeFOjcfMmFoSQihjPjFuOEJTFi47931ZGml8PJ+ZnSC2kh/gYiU71f5A40H6Dkp/fLHz4VEbQMaX8f5cNyq901yZU/cMu7PCq6A3PHCNa2tdeVx3NUS1eNgLwsolaqqnmF3Mx6O72yPMAiC/b6xmOvYK/Ej5RD1bYSR9w8lEe9ClFy/Lr57x90sNN89XMfQDDNYozYk8JGymLkjc4jrlmJ1q7PLUL1ZD3tVCqZoFh1vgIhP/FbDf+mE7SD60A6sfvOEU92O+3k5s4VVsIpQAJ+WYtBh41rCtGXDgbq6yZPzHDIV2zeQNv6AgU3eTf22TfnEMFgBWxWCzE3YkcV6cPfKtJw/J5w5dZZHN5brkd0tKsKeVYjc151GIJck9obAkGvpTaJ6YLQiBGGZOpUm6vhyVKjRCsCQXiPYoxIUqxXZYsRjcOpG+Khfw/8+W1hduQ+LZNjdKX4Ys8DSz2Gl3RndjBk+5C6cIRUyAIrkLje6yVgJa8DeHgbqit1+3F7YQGgjrVNuyDvRKH8xwRcRXMkp1hH2ysuEpVg==';const _IH='d75032549f34ed88a0d25eb24216c192b715d59a0a435d5de5c1b9e19813b79d';let _src;

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
