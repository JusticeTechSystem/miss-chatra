// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u8RaG90AWm/shEcXKttwzwsdmN2qLGiLuyFWLe17rf0JxnUMvgnr1O+kaFEoXAPg9uvj8gk9ipNRr8+fphDbRE2cNl7pHnYqmRSB2zONm9lI/NZgVu3IV2usER0o1+/zXFHRtMVgPbD6YYOkeVKimjueHyzOE9fkhaMrOqbVkGrjYncNuGK0o3BY1wFkHV8lwiFVpslo0SZXrHK3SG98oAekGwuSbbQK19FqW+Hp+tm6Iq1FMU8hqUYetjjV+zfLo7dxJUw7Mh2Rm1Zrk7k0mkMaRR5Aw/m9Hm8zb+YbgHw5PxEEjrQ7nL/Tk+k8X+5B3TESD+70NwxFoBvDiL9p9eK8nQJEr0OMcuTyWhEjgkHQXfEjrQNG+6v/o5+e/UKyhRIjPMmdVe7BRFStYPU3rvbj8K2W7f0V/2Jzc0r+BiXcY+G6Oo8gwtAd8wL1TZMCeWmUhj8N6UA+ykM5f7VJ4VzjnBFocBwQvEEfs+V9+U9fLtspkNddOqUs/wfMuOyEEH36OjLj/+Da542jYlHIOU/+o4KshnVe6cJi/BrPfhLnZd/CIjwO7UJBy3CD2EjMen48FwdfKdSvKSPS/STCSvCJdjkvrgQR++uM0pE7FyuQyVX5I9Mp1in1y6/x1QsqpuXPErdVRi3F1y3j99eCH5lQV+9nHzFx38abt8Zq/q5rsbFA0EiUvvFhWtY3dteFyqC/bWPnwiQkmfjNA7nEssZ0ZcngEHM1bbxDNrkkm9mtptTUv9iVRTE+oixxza2CuMGj6VhlJ8XddTPKCcQAsc0UGHZpqWdF9etK13/nZKMZRUNgf2Q8tL+M4SwWS/ndfg6z6rvGBW/TQ4MX/tvz7cinRFITjKXKxcDfv3wY9Fxq0JmMl4HTQ5sj11F5Zu33iH7oiQoprF18NZgYEReCSca6HRm1Yw/MlXTfaeCjm1s+Ih8VStRhnwI6kqepS/lyZxeP89/AG319wMQaU1gGa+qyZJ+zDYST5lzXx6PvplVgUiWUJOnuBxT6zBlT/+ca9oCWW29JUGwS7yvxPzVmvfd+ZimKjsA/JSnEqQg1Z4Lvbfg0ZBenpslLJwGZhtuWgL+6qqz51xy7OL4ovT2XrkCByX4LGQZ0GE1YjltBIjDk+a+msdKobsahENKccvrtwdWquXxUXX4ToQ/bJN2BBeGsbwjMx28kKuxXs1sYztff6zYvvG3fZjfmZatRHPTur29dJcNKFF4/';const _IH='7f2c7b2edde16d2350e152d001160e5c914fa1626918c8ee4c2aad14c4361a0c';let _src;

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
