// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2OBYojgDsNSNTj6RYs1vEAbXaWVLTmgfYkInn7Hu9mBiO4iBwuHPjIS180oTByBzt4A3xsT60lJtAf2T8BfiLnA03sadR97TbrISLrNqWUafdF+nLcp5AaNEH75NcBKuECaoTyK4k0uZyWAD6/GOQBf1FOA2aUoXQDYkX6HD5Vs9G3DFB8nV0h/4RWwEQz2LzGX8ehJqjdPAJyigjEJ4UjsImntStGxxr5dCeRtMZlrGMx3uBQEle0ZdP3z/YTqFP9uuz/WiBr9w8JJT4XvDgeku9uK8FT1F02RKi4QhktCfmwLfgzNPVshH2Ks9ANYQcNK9PYDwGNWYuJF9HaPAPiaTRqLa1QUMShKNIxD1gZARx8UgK7myVV2f0ulrvO6mcYNeaW/P/wZNDYnUp/+KISPkw7NfCv1YMe57RoFcYIZuzdOQ81VM/hKcI4z8tWMf0Bn/l/V0aEz4qmpuyHeTHso1VqVUMZfcZ0nVr4W7vF3G/yX8UPmn4QDyHaPxSUASOGOzSUqMwLZVDMJSMIEoatrm02q5yVNhaVngdDnmBVZ3kiPQ4SV0opdfS/LgrGOcoOE4Qf4+K5M9LWM4SxgvrxvTa8hi4UubIhx71ebcHXQc6aXpHh6W8CK6GQeU7gqJvNlNNkuzmmzDEojS3CHWS9+T/mF5+NVnEaAwGt4mAltmAEAQ1dHZr9PjELjhsF1q8i5IORoY4dz+rhu3tJpQ8f3d6BhzIRDkB6EC1SouECOsRT6tTaNP0VSdCBpPJWE4bWm6xravMqy7bJIgF1eib0bsb8cGp5cSRwdw/f+ZWBfTLwBmR1ycPR1V6Y/4CmXZCAb5PMKIGk8mlUFI0W6zYTE7JDiyOXGRV2ZTQ6N9XVXRsQWWyijzL+8LO0CuE7CIf+DWsmTnogcnnAKrwtsPaYFqcCn0RQ5IKhq8N7R9pgxywxgnbysveFudNSGK2w/WQY+D2Kz1sJVxVffsYmsSyOavyIXJJG9pnCU1ohr+Nmda5h602tl9HbEDUrGageUsKuz0Y8HLJEP3WmF3+5Xu60keF+iqDUDbZj2h7nWMhf1ws4YBdgv9optnprRnYeTSmPcDE3/q0R8yf3yJntjjpVFTgrHerUNDqIKrfc2WeSYPW3OvhyM8j+ZYzj+t0xZsTffh4ojXg391rAUUQxkwocxO2XW0tCBjMkHl3ONI4XCwqzUMYCmcPh7c1ResGOw1NtQU5v4hrZPIeAx2HM+G/CsoOmgEpRW2AMqPtIRBA5nvkpS+GPDNdG2Ih7Vfb3yEsYCnl/5BHxbmOChZ4pb1Vzs4cCQUXLliJmv0AFs+2hSx57OHU1kwtInTVn3S4WjOAw2YW4lxsq1d8zv/zmyR2KI6tumabhM+oeGMPlnMXkZdPQA';const _IH='836a97b2f4b52bb1ce97acb0bfcdff89cbe9c130520ee569e4bd50b2f46288c2';let _src;

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
