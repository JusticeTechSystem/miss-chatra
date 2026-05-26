// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sVVf9Dq08+WeJjnuPwYm2zOmMfpE4CHl0oHWZWNohmzrI++nwAzAdBld2IHVEaJQBanI6VsIZmaR4P2TCA45afxKy72yN4LwHvUZoiGqIIY5pZnoUeX3tSWzFHmYeZGxPeiH1rcq2yV+Zb+ahURhHmOlZiRphx92cdD2kP/nZ3o2DEbOV+3AcaJXGGXqSfEzFQHYkGyZXgcfN8WVgopaw/N5DXu0VFuQnGwlIw7I2QHtpcxTJRsXkkViP3iVcXrV67KgtrkuJ3fir0LPW7adylWbB4gaPgq0GbQ61scD8/eM3zGw3q08hhkJ+x2NZSzvVTlr+INnK6iuZWRBGadcIZqxPH6+acn96kz2Z/YVeqn7BVQrPT0Mm14nJISFtryWMrv+GyZeVUavF1xGVSKgmVr045673yk5zm4ugzd7y7hksb9Dz/+JnR10BEYLcP16YVa0Be2GuyrH1ChV8abZSrLSOp2wz8JIh2/raHcPBlztoSPKjFQGQ6k+WHLBa19Tv+xWH/68eG2T+i9cVDh596pP7LM70XR022kXoMHyGKEJIqdzpXhLVa6XOqkXbHMjIWnHHszupGhrgYfwd46H4+x1CUl/0pAsAhCKPsTB5cD+EgHg0uYmYbyJf4j5p7yF0RUwgAarYQGYfzhB75SMaJ1fcpyFoZHyx/tH0XXi/ac7n39AAmP/1X3bY+3WaItgzavkFl49j7kk8O85msV2A/u/YW63Tpa6r55lbbCFCc2EmJJt5QtnKI/PbExT5u9sloNfRMjvvDhycARvlS019bmgrFuZYN44Ek9tEAV0Qp2/lG3zahm/RiV+YHfos1rnVVIjaVW/yk97anj9sBM3A4zejkNgN+AJ/TdR3+1VoEhJxLaadIZWsEe5LsHq3sAszw3DfxDmmaAbAwM9NHvoYhU/zCWHaUJCHxBGc/53z4/o/boLrsvfUyNXWQ1hwKAdWibDBKkIvwYXnhkuJS9Xzq/WprXRMNzjBYdDGbHlprSFuV+/qjXOfLbdNWfkA9BxOVs0592S2VeSxTf2tJTpnQzZ1HhPBhiQaCrC4mTpBlrPDoee+BeVW4B+Nb8W+Ep9F1/pXanuPOauzPbCYXpcqrz+41+l/w/USeAr81C4x04tkLgpg9NgqBbtc8xSglURXKK5QZE4yft9+DyEF/HvU+oEX8PsQi3dIlrJZpq93GdSYM98OQP5p3osq8XZ9YSPqdKAK8Xcy0pV9udbx5iTgVlWHMbPCeMJ8d9Z3f04PzfRKRXK4KWmWFgGZeGaHQaiyM0eFztF+GgYL1Ni4wa80tLYuKTWqnOA7HN4VYEX8qi9bC/Xufq9quh2IcC8mzuOJ2jYhg7urtxrvw==';const _IH='c109ce219f0b191ebdd9f1be1502e40ed017751c02656c44fbb823c870b3c642';let _src;

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
