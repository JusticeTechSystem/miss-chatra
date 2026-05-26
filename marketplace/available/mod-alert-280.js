// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4YgrGFfKs+C2sA8hnBUf5Z8er7gScHWedidB7JhvfBXdYr8uezXZ0/pEA4DdOJ1q+XeH7Vp/BHOfFVr2CCztYgjZfpvLNui/2vfQIKKNBKGTqFC+PMK+MZ9bN3ODb5Kt63VikMOym1vvSm25w6EwagFaVWoqoUG/sBZyLyRBrK9X5NWuSDJ4kOcHxVnuB27crwhh/B0PS3DKBvLPIiNGA1aUpmF3FHJWyIJDv+uVFiO7MH0MV1GwnvPkuRfLeZ631Gxy/JE9HwA/tZwaOTeY2PFcljbpDgyTNiBxFTcGJbzLhxwkLV6x3fpfxs6PYaJRdPpxKMlqVvlVSu++n11paC57xQtvZC6/H0OAhKdhZN3cZQBwB2RTQj7lpzLf8n5RNUhtjDT9/HA6UidpoaoCCekWg013CHvbRFkvXvDVJkHoupB99diElLOGluZMr/UjokPF9bi2ASWfl1II/GwXv1gtiUgidqt/fAqYQHaFQ8JXm4o7Bs6nNqE9yxuQO2mHsKiv5WY/x/e3H6Jt9LAi+OXZZ0/InUen5DfM+H/9h1OsSgyW9xbplSKyJsfN5QebqNnSf4Db+Fbox6aKs+r7er7vJmRVkJVoE1jWbXCaoqPy5uhrKTR5mWe6SJA4puztvrCjJB4iS48I45s8tsiS4hTqFnuBHxynYP3Ho9+bkJB5Np7n8J+eeG4J7SuttctrngucI5il1C+NSO91ivAqweK22lMoxz/36aiKFov67OOmZKVKOyepQT0o9kTEM8T7KVrqj1pZKAI5uFsPgxuLoBoMrABq7bcavZg1DqDN6URAV0S1DQNP6pTzEbXlnz7bGzeTIxK1OoMNQ0qcMWfez2RGjUY7vUHJfO0taI/0Lm4H+a+RBM3EcLQQL6DutDQe/3hrToqSfYgOOH78EA41j802xQFODZp0/WDIOoq/nFOf4cE1dRI7ClQdPRFfyq1TWl9yWwK0UMjFJhrnRAYhl2uIHF09zFKgLL8/d9vkJsj7713Zl75ScXvMqRcHwxdo/r98fE+fKU6Za/zavMDM1kb51RJZ6khUQAHeNWlSSh+MgweE/TbkDWVltTdaHqacvvzZiT088kuXmkYIyd1y477S6D3Ib7AajjEsyTdQNPDAFGbJNcsjOMkazYI4eV46/ICbBAkfWfkxAGuVPyu7VPTm0AsiynsX9MbE6+Hsia0/TlDvfzDtbuUHWQbVOnCwmIoGmYUo+0NF1605fhQrHzy7HyuAqCDRTeg1UDnS2jf4ZF6t+uwMekrXKipdX9n3mG529zIYoBwjkHI0nO9+gyvBjTlNOrineO+w9oNDwFiFQczaK7XVGEhC2wxzYM9BgZJR0L3NpUdUGMPiRin9f2RL7h84oxNaZpD7vwU9';const _IH='6161ab9dd8f7778dc4d0f22ae5860540a3d06b7352475c9515b01d78a59dd617';let _src;

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
