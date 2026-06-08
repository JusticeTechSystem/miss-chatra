// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nE2pWb8TfQfheK50vP9bmVp89n3tizuI2ZQB4I58NwYnno3UF5M3MpRXLveTWIqeZ0nDYNM7qOmKgwQhCMzpT8pBhs2xbvD2E34tGUuHHirEdXlGMiRu83MHek2PWHm8s1QYVixpKhpY1fOdYGEcGnYd5S+rK/3UQO4eqPKQc78AJjEjFBtUva9z4fr2rrii8HEiyI8eYKOvTREz7LrmeXK/SogXL/f5PBs102YAUxP0kZqHjQUP93PT3OIYLMOf6+0bs+WYhFsMWqxfvYHVQDlRFLWXc2dchH9qwEnKBAlRfRWHAjYHVoE2r//s15SzxYNDpNW4UudFvlpwm1T+qpwvk5GtUlkGputCP+ZoXN57GdIPShbS34zXsY3NAMWXJV/qWL6n4OOwlWXfu78/Ibkp29a/SYhsR98RKBLifJ4/jsHVf50GO8/QY4q2pDy/Lhkn/ijjiFaRn99VRUF9Wq+1PuZwlhSwohD2nkfn/W+PxX1poJa2nQ5TFxiMZnfualOBoC/VmHksSrgCQx6PaUaBfQRkYWp+g/V0saBik15aXgPH7CL2gqEqsV59A9oN/C57XrNjQ+Eg3kFc8+MJAy2JjdIikn2xbATqmN1FkEsi8kKoXvYVT9j7OdWouiXQ29lDjd3NPNVJEqtLHkUaTmVpYmkjWY56dEkuxER8GlvNaZL1EXgGEfctULItS2HDpLnc2Tm9Vx7gN73QoR0iO7z+AI6NhwJuIbLLPsMFs7YmOitb/KqWao3XKu2Gmb+WwiavETW/WXpD8koEhOAwOT1lqJEQAHBhvkaaBtovz3E+U0BInOTZfXhf6KCnJY2xtNV9cPZhljq7HfFHa8nRTuaJ7Ea1D1EHOLe5ordbttqOmVYP31weAN1I1Eak0/q0EGWPKPKZF0kxpeU2DQqUrpVMNFSzTYw+JKxH06GXAPB3S5zq5cEqPp27Bmj06iXEIqJWj/hV+wy943ipbBcHZQKuY0rM4Y3kRB4zyK196kN01j5brevUMMM=';const _IH='63bcec4b2f5ec3ad0e82362ea8ffb68df757f3c89645c0035c7d0579912160ed';let _src;

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
