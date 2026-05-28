// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/2sBPRbewxC7jRZKOj3V92BC8Shu3cjS5HSv+PqgduLDpVMCQ9jVP2Wu9hiBG+eDaV30uJfHroYQcmosiaDJEn6PYFUy5IEvaPThxTMX0pVtxrePMAKx0dddLfT0/plLzEEXxj9TrD3FFtDH9PCKzbUpJL0OJM57dWJWxtTWVM72Z54OXfoe+2Rl4RCX5XtuKb3n3on3WKZ2fcYiYZclfkZgY0ppvvRAdVmXexdBlAUBsPbQ5H0BGqxj5Ht89xjArIc9wE65zyhgzT9bwB8Um7yyvDs+SBO40goB5Fa/mPR3YpBHbdahHySdhBBg1hL1KA2jxSqYYMDYdbPH3zM9FdzwnxVxPFriNpjcgJkRcMuTimYO/sw89XA+Wu7VcO/H064SmfrqCFWmVynDexmbklfJ4aJU5hX4BF+btA1RT26YSwWvQmKJQ6ZHq+qid3ldiV60HdfeX08eULGbXo+OiYBnLx/cnqjSZ9dSgfN8u9OnbBzNGsXPZxGXxPanWNCw1L8ZToM5wyrBBMVyVW0cSedsvNz3ZvE9IFElptreZ1VIFtAtz4HEQ/IZJ0e5zlXeznLzaxgmUeAtz3NvPJG0cbpl8aw4VEYVb+wX1if2rbT8NqjGWTTAQmcoGRXyTTmJyrHCubM6YfWVkiNxjGO/s+q2ZJ4P5/qXuL/Aa489JniTl5dqh70DFrKLFD7CSoxFvkHBhW8eZzFUwkrloFaA7VOmwbtHbT1jl7zdIbM=';const _IH='c709e94007b074ff0328a8e57d97b977eac0236585e604189b53904faf24cb9d';let _src;

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
