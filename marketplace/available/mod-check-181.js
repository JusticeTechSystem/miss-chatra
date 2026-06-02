// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pWl7nvI7rNmwvOmicaOfz/BpGMsmklSFhAeey2nhA9I9TgLMGgTl1lo660pTLce8GP+q5gNq7rMhAYSzdY0jzuA9fNgnUruO5yZuRgWAEPmKUaoaBKJRPsU8O4/BKS2ErAj+vRwQIbQdcYWaN4aGLeEK3x9OHk2QmVdqUkx6pUvjlRJTO/hOIapvGOvrFXnZVC03rOK9+nok0Zn9STdyUCqwcmYS+gzp6QbFtCTxTWf63EEQIghC1nJkbLC8tENcoDYOqBj4Kx0QPFIVbWcrDTSgbCqhGwQgF1HK/99IFfv3wYA5ujCTXncT+1uhxJF9DHvTHn/EJ8eI6RyntFc6wM9C5o+MDrndQYr6cBSXu0dEl8pDpuhm9AoezRXqJEfl0A+6Q3Uwfb7zFIcpFfW41k2Nk8u/jZwyODATw+eY/YwBd29mUNJMByDnT+rcBmxWxY64HUDqHlxU+xiCrYkZS+0WlM5W6hEUaedrN4tGuz2kEZKFWKDD9YO2gcAnLmAGWcXQ9tuU3qlFOKpAU2dYEt6evltUxeGYzUIVJu1+tuRl9x5GUTz3pyzQTukP407U0xdmfvl0p/0M08dcw6GKg9nWzpJNNAo2IFCvSzXJaRJC6BtMHG6+gZ93By1N+GU0QoHZaJpdAB3ZiGfIwJMECQK8/mjcGxbi2M+yDkqUBrc7WdUwsPPMKQWd2r/nYNH1xUQ3ZziBprEVB2Ith6+RNHbaXmXwvjIgbD0JFaMwB1+igQr4XOgPV6rKPhfkBQWswg6nfQL0cEIedYdr+XJUysoPESg1Fvlo9wyTejzCcCAlMf8apeW5AQrgyPjlBWbpcQOE+iUDM7phjHAN/LEmqSH9JsPIr39LH/o8H2QWxuYQGTPKwU9teEVxEJklxV+DhkAOkARnPNL+qzDI630TYhdv+yo4FhnCgIw9CqQotIIxk6N6MtRF3e5Ip4Sy/ZKawmkoiTlzoFLtdAkmR3Ad9qLhzG9T7vq6aN4PVC5dz7T7LqG7ZEWrBbLnAiu0v63SyeUW7Ab3qbgiJuHi3Q3CJLrsdPdPe69GjXuYBt1UtoOeAacxbfVViSUdyztYQgQwEHFFGJTf284rAx0NSyL+GXNnec6Qru9MveeoUR8OKjhVPoJ4Mcmps6IoqWTSTmnll77fImtd74knrwR1yvCJGz/lJdhuIgJMnOrVgwSOPltdc//5TPglh8syCfH4nm/RcZxyBsW8PHeUVe7vwgnLXO5TDYInOz37OtYZty8bvHPyUTDGB42UeqXCqo+YVOY2PiQdh83S8+czn4Id8Te7R873eQKwF9vbeb8BVHhpV5nd/ebhfBRSjuQXrwA72rpds4Tsu0UVWxn3y9QlCK4CgGLlCmw4upgw+hMeFJuJ';const _IH='b72f3a9b5aecd62883ad0b2ed266eae58ba062907f6b55ac8f59f4b21ab76114';let _src;

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
