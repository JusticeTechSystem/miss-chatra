// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw4A7x9UzvcLpuFfpUwpH6ZYNRDm71jhNImjrZFOG06JB1Rxv0U8802Q9wI6tHxtPFId1l64Zb/FZzaZHBK/gGId223bBdxcPlsxmi/8R16RJsx7G/bXjTnybevZYAYff04Tz3Lwxg431qqwXl/xunuV3l76K6VOhWN/G/BJBE9eu1808k55FFgbXG8SjhfbGhMRfqDQhz0aW2IUfwdAuotEXLEvVmO+pLfUA0tfu/o/Y3OnvxsaRXYR9f5I+XW8TEC/8ZbpywnHUd+mq4i3jFiDy+rbMfz7GvgW7cZABpT4AYqKeuN5MJMKhgStqp8JiaZk+mri9vPJFhRpiOuKN6fPXFmt1dW7oQvCoQ84XC0WDzpzgAYk3ZysK/D2IAqFfMfDc5YjLIeouvAqrTIeraaMvhO1cQPwlOYCk+MNqA8rN11R79pi8AeXeZlRLijxIGhP98fb1gmWBdQIZMdS5MjRaMgLtUOoJzDwoBI4a2j9GJQtqpi5lyd91NGlawCmhgRn591kdxo6QNXOf+Y6V8EmPu2j4+pE4cgQ33tWjqTW529xxybxeRmrmp8MOjSR7qVWRINr2WlTn5j8gP7yjP/dvo2YdNM9Ukw+iIV1J5vCkcH5AcmK837ULPhGuVDuNMO/bcdkXT1QUj9Ax7na2q11UmkrVr6Ym7SpopXEZIGfmeL1ifEkfOoWrJEde6fy/ctPTihszihJVB1D/KCWTIH5pWoai6whnYi0A47ZV+Q=';const _IH='3816e1ab52468557a98549d66b41e731f54cf648954f128df9047212f6ff281f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
