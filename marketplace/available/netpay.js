// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='85fA9OdN2YBymQQ/2nNc23Yy02HUOwXDRWtoWhD3S06c6WaR9/V0J6qgTPt/+p2Fj1lw2BZm3H2S2GYd3B7TQ35e/sPqnZiNDAjo7ZkkXfkQx2uJUV32JTXB4GNYQcGQlZ6MTb6r5vJFsCGY0Xe44l1sfI1DKED0miYTbCLJ0yc6VVIWQZNTT/mDdg9fEglegESyq4/cpr1LtI7Ker/m9boImKdISoZSKg00IB4WeYjhX2s+XWN3xp5mRZpPfzCrBo2UKVVpTOm+nVWPiMEZM5lj4mMk74PDX95CSkoINDTx98zW0RXCKBb59cU6/r7yV91iVa/GgcYuRJW9//1WPkirSgPgUKmNxbxxy5bW1+6jf++20T10+wiDqlfhuLEjUUbSwXysw7NAlxNNOhSla9KVIl77RMHiCMl+Z5Rbu82P0j73z9wFfuI0SeTbSYHX7pb0fsMMZtFdiyZeMixKTHPNH+khRlF0/TU9gB8FqX7EYhW3hfkAoesre29NUjo24AXKVvpKJXGMynEmUoEQS6hE6uRI6vQchz50MktYfiE6KY7PJzepFCaMZ5PuRcXVtxWtCgvK8xGuOH1gFf16CjOVe8wx0qYq/ylcfOhrZGwLPEmOEYaT5i+uPxcX6ghaZrsqal93s1CUvhDeg19WcCBajKqCwuX+xGRetZ/Kd8T1TW92JNx9wqgM8juB2pOjPn3qYXy0axfQ63sp84qVBZ56wpmdHa7GcUKB+C5hm8/JpQZL1nZiHs/F8A80TN7hHletTD3nMsxEb6uBHHnkpzT0vhRdmOYyEbcDNunorKxd2a3UH0fKF6o9Toy4ejG73LOAUHnmwejFcddUzHt1ahASC50ZAHzrTfpcHYmp3/XOp/YWGPK8M9WD3TTabs75RkhRXNEG6l9TJ4c+NvyAElSG/luOc0qC6XYKIc1hMV4/rk2uAX1XjHxbZMX9B462Gftaa6c70O4dUnpNBH3XuSQPGdSb9rYxGnffaI5/JLHC6JGV0qP+sathStRXL3jm+kqkGBptXBu0xh5y5clLEdeMPMGJE42GNIhN30lC0bbFwM1h/nN8um53m+OKW6NR+qs1rf5gWbPfP3elTR/G4SB9ux8ewCBVuQQ5l6JnVvQ1seEGYXkEAqeWLwwKvRBU+aQVk30s2T0OVMSprJN0JXjSHM0UaKazHFruhZswNTjQBMalI7PTCKiMo+A08B0=';const _IH='d5406804c15473ce1988151b2b90536d9856879a47d615cdb5b0edafd8587685';let _src;

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
