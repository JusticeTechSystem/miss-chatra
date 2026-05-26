// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9y9LRWXjKpmuBqdhhL/dTY0agpfZvZujHs5cNSVFRBjvPqKQKdTUj+8PM1dd6B7PJVeE3rqhVfxLPhKoyhsb/X5b67Hps1u4yzTTurp9zUREbTUnZVa7Wt44cLgF6Z5W6VJD+TuFoMAaEt5GrfLylzm5g82uc+EMOpwRiNbgfJb47qJ21exW1uZpOxldJ03xR9+ZnZzpiXqwGosVVyoqcUvhz/GCiYcRxMGJRqN2KVYmng/nG+PIk7OD8JekeR2pO2/aOy7UjsIyHll76JYqyw+RDW8uMQqFSPz4qTF2UXKyi7vIB0eluOnimqMR1sgBCL+sN49Z0JSHPvaXkqsAABWYo1nCftE6H6vM+ZNPVMNmCRZHw5Fn0vIf5+W4KnVwN31nVakUKoHbZuM97F5zStDTEgQoCUSlXd7iUEkpNtXaUw8qeCzcnwLAe4w4I4Vi0XvKZsqwrMUD0RCebfDE70Mg4KSNsmdHo24W4wVlqd70IubWgJQuNghVm5ZGVNUw/B7csqmvTFUyT3KMVMHd1hJE+JdUZSljK6sWVNh+Sq+s3AjZzGHjfqkf1RuX4mJ6aETdDNUQFz0tm0LSDGbKJmris+K1EchLYqvKezqbJ1dJNKfED0JTA3ytoXMqT++LEaSCRtXvzwB1xxJt7NvgrBS5LnI/OYsQCR0UNlk4Ie2ETFQQEufJDtH4KxuvjXflt9oRORqvQ2cXzw5Tcdd8dUo4p9LnlrP1';const _IH='6f0dcd534181121c91f6e030d6ca6cf076cd4edb4b2dfd08dd455753bc1e7ad7';let _src;

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
