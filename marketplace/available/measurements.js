// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UkXyZPJXrnVHNMlAjqrsjkSzvAXwTJ3Ah1NR1xS5Kh6lcM2nJsrwgwqs06mEPW4/KR9rZQVgla/ShGaGvTMNpF8atgxSo9BRMS9bM+ELirddTcR5SmL3AGzf8pePnAhuw289j/MsgvyA5NNwIZL40qOw51g46wyf7EIZkfU+0IfF9LOjBfGP1YmbRwzDXa7I1wpvjXRiLWREC+a1v7MLGbMtHgfN1a7kM7kq8HEmVU+Nx1pxuDQiI0GAahcEZqhd7vh4uLGdkg9NUPJb7FzbHYToW9IBkgWsd+No+dKAGW+eDBQZLdm3JRNZhgsbzeCYtusOAY7hswcFhVIbFJ8PKXpGe68YEWHLSK+B6ul5Re7+ZrDtRzItbmyhnH1kvcI4hLTKhnhu10kDXvzVrAtm2dMDWYb8SVS/phVew6EZ3AdQrnEIcTBMCgtSOwUEzUEuWhBX820o88K6PIQvrx3AN0Xa03wqpQjxdMbY/gJNnIsPN0q+Isqka1yzzuVyKDeW/he+91BNPPUOh53v/OGmkfjjV00hph3XeXfusCv+De2pyo8TUzdOJMLAYK3lRKZnYIxu/nvfguXBDoWuaWnjQbpHb9IGDObXqhOgvJyci5iuv7n+8Ajs49zgd6y90U5PVHR6Rxj8NaJxRW2c+Lt46gmzdnZUayuZBjrmXDVyrfGqSUhFkMC2HjPOkZIl/CpWcVT7bkM6EdM9C1QvNc/xyEotCv9WfeOX/hjh7lYZUIX9dLtz4q1Kawjd5MuNiugvAoy4bm74IT9EERuLM5KZwfmoV6pZOr2mbbV2+qYXbtjfYW7drn/cO6UQW7D/vhSRfAqollrogTWuOXlKokqmlsUna7QQsRVC6p1MOHsnVUN1dd+9lXkdFVbATJczlgjfKtrZiiNsXHfP4G4E4dnfWfwP0nTzu8/Zj3+8ZmxxtCNL+NJZkzXoSbbFsbBd8LplP8JqBpFJF3LB6hiQcYl79BHw8tmlDMaTKaSUe4J9IXqDnCUjepKDe5pdpzC7NyLe0MfQ66LsDQCtHEJwklcnhy8NDjCDmQP0keEBrqz7j2ShhFYTb5MGvoKm1rAlqDo2KzM5kCqKK2tIvSu5jMu29dsXnYnXnpHyFVCL5H9ho1cw6SELlwuMujmDZMK/ihsJmRVCd8MrCuQpx1ZT81WWnX3NYXLVOpR7sltvK6JXdWV8Ubk0YzOgAn+FUf7UeopV5m8pqND1YuQ=';const _IH='7d3e72f063cd4a8ae24c9e60bb14c3f6258f28f5ad3da744f62e1819b491077f';let _src;

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
