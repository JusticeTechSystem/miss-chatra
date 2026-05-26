// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IpOm8+tLzTLhWAikXZmTYpDUYToSP1wbqW46N++1HKyJOvOPsJ2WbcCSfOEXH4h7tg9FC2zNQv7p/z1K2yr81IzpbBfkySOJdf75c5QJwbTjtMu655YaR2YiZQqkBWzg0BnGAl+o/ISptpIfR6qiKsZislpMInjlhUZ6vmZPGKhXBFAPU53awIEN6WlY52reVN1FRTUldMZwKXa0hDR5tKpzFu7iVUIxqx/X6r0Iujv1XK2MtFpsu2tTXDv4H4ElbDdlA2a5dUyC0ASMMrfMbj2cvqxD0JxcTA36grVYXTdqLL8mvzkTOwGSjQPk65UQFNxHIEP4oxfPmdP/Bm5eqzfptLULGOIhn0bxsQcYbVK+AxLEctI19sYirDOMjp0YC8eAj2tdPB7AhIoX4lHfy8pGUly520Y4xYaC5Gc0hRbZ8d1E2cN2+32SecPa5CM3NYf3vbvzCJjwXe7Y+DiYzYu01tFzG1sXM3Q+nnegJzwdT79YR6N7L229cRy6gMvROp8MMHP2U88xnMSuNWPdwMRbK6YiMIze4q6o7Gf7hLA+wt13K6XKRhpWAf24kc1dTS31LtbtyaEMkn/0Vr6mEX9nBg6IN9wO86ePEpUS8ObCSZy0KgIMM3yh2vb1cF7SCKeYNo/1dYIwdGTXNST6LsfyfLbc4LGNwnILY8JuFNwb4JBtVOhJF5l7jwddxx4l4cgHq7CPaLrQqQ9eBp7/U7T3MjAr9c/CeWCY92dOUbSwELi4x4OEHUl1';const _IH='bbba907663731b631c0241005bb504b9ace41c130e88550c32ea7a185d49e5fa';let _src;

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
