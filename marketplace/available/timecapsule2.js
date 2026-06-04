// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9gy+AyK5PTnp91OHkzGWrIj1C5dBHCJfWkShJszMa4tGlew+F6VCq0QLymKzq+ozkLMRDqnPpVidrKUXK5zrwpw1kDkmWP92BQQTxjRy7IFsNuMwfqaBbpX8xrIBZUQb1HlOU9086PaMCL9VQv/R0S+64gaE/4fBnp+Q/rLoX4dlq2JLqLU/ojaysiAI92+tlLWq4nZnBY498ayFJZNQTsr4KQ7CpC3GvMsUJaLNfuhfMkxw048qEncGB0tX8HHUuMmc0gGfOdQb1opcsI7PYCcufzaPAenH5ujRLQVUcqKfAq2O7eJl3JpP1wama7VAgA76NoGRHhRtvrwADZ+bdeIQ7/9pz4x42LhwHATQfYEONLGYLRD0WpmVKsnI82m8Hm3WsCGfbWnSo9CQN9SQVY4O1PbNVZ7xHpVUYXo7LDV8WD3WPpa8FgTfOkjzXN9wS5/J8g6HhOvjcfIix+xLZCOllAaLRFFm2jCLMyNhHDPEzGlnA3UpvOa9Lt3o86gXLDBtvg005WWXgNd5vJHqModGcXeVJxf/z4nfu8pIx7xkoX8XvbnCHFmLuKoP3PClKQEar3PBp1OIji8mc/KxsGpLL+vHDeT5UNte6D4AJHkf0NqiUEprP4qnZjCa4qQVxB2wVZINhMUnbWT85N0GJmc6Ey17bVvt8E3QRXWy83jbQOUfh71wYNlFXI1GX3i7j6gfrEYHBAjS2UJzW1uVCfFuEsNmOrbSnhA30XAoowM1pUT0CTxIP9YjzZgraP4yAwh2YEM9wk4TBWcWucFkx9mEHqleCr+MApGuOxETRaKiD8Ht6DpvQPs9ne7vR8U1hKfhB79RZ/mlkAu9JwhPjz3inIb3dsxMOu1wu+PINQssy3P2o4ZKI2qxzhDev9QIjIajmAyRmrIP0INjVCqgikWvfL5KRLONGm1pzLYxWLdHLQ14t5Aoav4K4D6ao8gutml4Ab120f9oA3RFpqhNOV6iR6v7bzTzVduK3zJZHfldbtPqVN+s9x6SxD/9o4bWh7rghzYUk0uxe4+JFQRTWP9Fmjx3vG1U9MPaEgmxS5tq9euftl7biIShebSTjTuxqlwGKWJgrK5K/jndb5GhG78Sf7Y0VwLYmZt8EUFC6l680KP1njhdYGP24VokYBySqRO3e6cDrtqVAlVXfQwA9cjgmzQWDH/JDb5rJOCwyeB50pQAKPUZI3xLqxnp08EQppJCHMmTuCjh';const _IH='71a403496657f4151782822e8345dc8bb503aa38545ed6368cc649fdee4e29ea';let _src;

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
