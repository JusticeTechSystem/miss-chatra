// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XmhoenEUkrO+u1dyzehPiP4/LlPexovMiJ7hAszsPGm/NB/U7nJ3wS5xmD95qFCI5FK3SS6Xbwn5zSu5gSLlWaGuT6PGlZtRBoXZBjOYCOpugLIdaRuIMFMJmOmaOI4BNXdSqNZCOO5L40NUyHUWT0mjiZUl7Xoc7ccJqZ2jw/+/LuN3npRZL08feTZ8fFYCyI5lDgRveyez8/47ocduGqzbJzUizvTPZTYgtrJLvSfiosMXTwoEtXiLFR7aM4LBBnTmCVWBvoAs/hwV5hNtuRVufk46M4UWAonddBjjoYZOelV1CQlMBMb32L95WySpxpMp9Gij+xk4VQTZCajcI0Etr80DHzSPVepUP1IUTSrZJBMZTIUik5w8gHI8bjDaT1p79KtYfno4Yloi6WE26b6FwRbicVuUqCCanVWRuH+so2bkiwjUysaEXVNtic7eracx/ELwd3AGxwkBE0psA9tTiDt74JYIksTwpGjGhBBt7ZH1sg79LZOIL6fYwOOV5bujBOZEhKSyGtoZHJhYFHbcw3D4LImPovwEEVQZZtzE/tNawqSbcwrDecb7MALyavxFCCArCAmOuwZPWybTEP8B4VG2sOEfzF8pRVVbMT/GF0t1x1nSgGDZuBr9holaTd1XjL+YP2i0dbDmrCazAsRUKHgW6Wy8gFFmW13uP6I4ThjYmAGjHlIv5pDQfjbqAbmXESZBz4JqU4B5GYaus2xAIZNGyhSrw+cQWqGgsUhQjh/oovO17KndWb8nKJhuVu45GArrlv/nFJEoK+OVxU7fBIC+Y19h2qBSVnS/bfjga9yE21ki07Qk+u3O3pocCc0AjDK0FbuvGiPAWqUXpsZ2vAFF7cEG+27r5sLMfXq5xu+WeMazGZJUY3zWKJF4UL0L+wik+ewYdFkMdZH9dz3spKTywHTobfZ7qt4P/pxpH5IotU3Sy1UPBBPgxvVUJS/IrIUwsWkYkqSRDuKu+4tnohYBII9LV8cXGUU6itSKWoIsX+KlG8IhgD1GC5UC8QDtwQ/PZTLLlwwUvafVRmH/xJfnzBvNtAlmAWqNaTERy8eInJtOJwOnMl6t0MszeO5SJ7Fbgk0YSms=';const _IH='608fd7f5106da086d3d7d2a279b496f08c0390ac0c2147505a59ea66f75a2c10';let _src;

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
