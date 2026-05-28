// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XjA1g6OMxwhcewTGRls3xXGJvwYh0aXALa5CifaweBpE0w2abV7puRGu5fjhogD14UlDyiGg4Hq2pUB9ZQZO36m/X4kxv/j21GS5BkdnchpvkuFX5y2QhLrUUruKBk4QAFI3EIjnFcJ6A0vE99RK8P0q3VLSunwkIGcRRWH60Q9W2kmdggTFzPqh0dfFKmq32TX/yj9gqZxFTYu80dcgYOXusnX5s0oCgdRzEyoaFkBPZb0gOZaXeuXtpiehdl2gIc2479ZTVMHe0QKk8zIcrgnXqakoolU9SopxV2QW0whSia4oxQlFILaZtLzQAT6J0Vkkueok9DRw8rQgFkoM7QUl+iK98PSDj6AnT+kVj6O3PLLTs2Pp8wrrEuhxK3g+NqoS1bK3ysLp4k1aktnREV4jnTDHYg3lskoepgN8fTJ3p7flwZwJxTVGZu5sROAvgG9cI7XS4+qyM3ND8J9t5vbh1ahYmrBrGf+8VWZ+aLXyoliJ0ZQ1CRNfQLRZfOTaX3epu9qT9iKxH3fMc563SSC/EKmnJf3+yf1ie26I3mhOOIu1AxqjVRsDyvkKpq4MJN9s8iWeA69UK2yBFkfevoO5kJz3lcCfeL5+gPAG5wdmmXp/lCEY6/DSvSU4HzjpLjqfurkuDwHOQ6FZhf58kQdW/C72Q4WQaSctNBpOWfzmPlOev1iJzf/BGNZGgwA061JrTzNGDvofmMfdmoA9vqRVF+JBcNF8KgbeCT9KE+ZyPzt3C2imQlKkGtb08Z0/bWRPJfObYdB/UonYEdi0VuS1qbKE78Fwy7dWD7BuIKtmQf5mywKE3jvrKc6dBaj82K3nVB7VfWSJL6QKLQPUePAjpxrIXSLSK2eqjVI0HqN8e8w7GY8wfjdSuecH+/B0Ly0dL/2TTsgKWoR0GGy+V/+zXSs7Yo0VdSuqFP9XCSgSpmy2xwWWVkSL8px/pi44fHeZxBaBFdmBPLQQkzNvnuWHYbJ/pxOJi+i7cqpI570Jg4fSby+yVdZfXvnSF7yJHbopxvthaYpnJofFpTvhi8Mx';const _IH='c65d0fa0e5fa3b8b95202ead4f3450d9e2e0385843cf2e369054279f9cf5f46a';let _src;

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
