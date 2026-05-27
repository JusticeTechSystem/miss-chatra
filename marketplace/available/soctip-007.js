// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KGyUSxW1q0ro8cmUGhHclVJB+5wcmJXqSwc4j45kq2I/NFhb14IcDoVvb4jXe1xnKdIO3twaxnu6+cDrA6JIgWkDHCfXtH6dxM4JL1YCmiMGI3OkHgLmn+O7GoLhth9Co1sGew5NdlAqElwxY/Ei5Of89Hs0AHGLchgwwMjF2Qhf+okvUvEugsPNVMHu7yU4nSw4aZPL++QFuzFOpqWlyuwJwfx9sNYSVvmYGcsFM9ZkZvi4ufWYNF/z8NvL00gt4d7u4AFAmjvGdnZvePkHuywOQsijkIGg1oV2H4hrqL5UoAIhoxU3EV0pYFVwHAGQnIPPAf9ASrUcgE+EtDoH9ztX196rezuX5B5/BR1cQwreh4nBbqsAnuyzQXMFo1MLOahHG008pwaxytM9hZAcLgs1LV71MWbhmhoOce3KEKe8Qw/JvevCx6H3YHQk5eXz3zccrHmKgRcx8IgqAlcVTPtOWX8/ZcrhyM0+AYHb4KMtbwuaRZpiFw5z3Cy1JHREw2ML5V0TYBBWEDA3ysV9DULMoX1N1vjO4tVrcZbnpOGgeWd2VzLGyGbDSOsTncgo4laQQxxvr7Qo2SLwQhYrZOvDWRsaZtKk6ev1S3/zPDVDWTEEBdbk9SdHoxiy6anUVxjY+7LIYAEYmbu42LdIkuTMeySTchd+A8ecBhLcvvX4m8zmtP5nOKRQBXjJ98lZK/UvG7uKDP8P+T2OdV3H6MekEdbhpzIbHlQ/3rVvHLptEdmnk47fJifev9ECUconRkwQv0tozpswDor9Ri4IU44XjrCCDXUftjSL5sl0JPdrvK74dZF+h79BLX31pWs3sKZBEmnYM/cmVxyR+drwT9yUVy+cJk9dhgfjBJCQBpBp+1B0jTuxtl0Nck/a00VIxAReBJpFnGeR+BSCFDXasEZ4U9ftkB/fk+UH7+mjQfOoZ+SBb4GmLs6vutNaE3R3mvpM32w3hkpxb4jBs7PT//c2zAG8qhIw57h9vfn+H0utECx7xX4pEjcqSZTJj10mJZ1e8GBgdEMXbIhRZs6rZdpu6EbfgZr64O3iwXPsX1l9lX9+h8RZrKuz8ZY+DEcjFJqdFeKOFp+Z1mU=';const _IH='34e5aa1b0b44b322ad3779ed094d40ead75ef720ceb52b7fbb1538db0abf7860';let _src;

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
