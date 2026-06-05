// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l3p7rsljg1MLsVekqU94w+fxEkugs0jOJrx0qxdMaGxA37k8SbCqvB/P89tVOvH0YMf4Vngz7NpuaJe3NG+Gvb4WUKQPSmv36CSZDtMMCf/n2Yq9uVLS5RXV0WHekVZWDRL/KfM7Auf4D3ZwYynGU1gNvF5+Y+DqhpqX6tif/pIPwnu1WGiHQEsTJVeqGUBsC3aGHP+ZEk8gDyCPUhNwbDEdOzI7J5i0MqTQdZG7SKPXvzXzOB7Qm1QreWJvH+EVbsCFGv9rNn1V06joCFxHeDerXVpEJN1M6MTduUSEUmKo8ahYJWATTtDi2PTuqqvqfP5MrhhyUXewpUoPn/QPGzp0WQtaQRpbmUOtSCfEE+C8hrtEw9mJ1d3iXu1ZLpT9186XaaHrrR11ajaf2oUCe8tNxq9lt4t5E2aghUUFiil0R8rXOrtyYPwO1xzDxdoZ94T8u4YJg7zsRnnh+EHJXh5L6p1Ff1EJYqflU5ACMgFEr9yqmPR8UCCb6RrazfFG+lwKkwAAsK044OP2c1M0yyoyvKHRO6+9hVnhntFSHwLQHhzpdRauWwSjuOcOQ/7+Fu+o3yeMgf2McKj1MoFwOc22KBc06xk2GJa9660mziZHGEnKaCYyu5FmEqUGSNBe5Y8N7ufd5j4zqBqm0aG/wrwSeaDxSsSR6csqSKR8OKFc7YrA1xs1D/bX4KZvju412k7ynlMBpVOJ4mE5cf+DyPUYU4Y0Xra72bdsaLqhim1ijOgI7ExEfUHQxBWGKM69ExB0uJvecWuP7/AGUxrxOc+FsGn4zNGxNNPbGUc7jM+2nAE7AotwIAm0fOxS+Ybp1GKvIOd1qjs+Eo+etLIefqYU9A0n3VKayoTlSob8VAwCYS1A9kPSsrF0aMuKVrHQNlPiR4Zo2zJ9pv4onfxH64aExVV9Q93UHOx3xLMztpZnLl8Gk4IozT+nxu42vI4KfV+evsEzehe/xKVrfLnFXrwjshiZL1C963JsnF/2imizKGlMkAV8/VwNfE5jDonXNpozpxToLJUAhMiBp2nyPeaDe6GdZyl/262lS47+yL43vIunA9pG7/Oa3+LgkQ60KRdBoMPFgxWRW6qOsogNJ1QsaZCU0bbBOfkrdEVdVSy5FooRsvv/fY+4yHBoXN0B2r2UHP1wuZlS1tWneJ31K4o7xXndcXhXhKlVOvINUsMeLgTRwQCG9MCLCHCt8X0QqXpgR47J1ab/k7qBH60cJxK0uz6VVVhlAg4FaNmau1UIy5NqHmoQc58PKLaRMiaMlXgRzv8WzCEX3O3IRHverUlzqsSIBy9kPUzHt+c1uIliJBHXi8Me4FCXeMWd+A9zdqt7lgFz+qFjhMWSj4+nvMsQVJI538z+a9akT0DLtGAOrxiKg1DmnA==';const _IH='e2f882149736c2fe5000eaad03e0d09ffc593dc2cea23a0efff732913f0d2d8a';let _src;

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
