// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyl65/6VIlIlLui812qn05pPJICh6PMGvA3vSQv3rYZ6Xc6dxx6ZcAA2vpVw35b+FbM39mF93NehWrwee1wTHYyGSC+PFnqrKa+e6hRV/Ar0ksDGyKWz2mp6VFkFReZJLOYz3IBJWyXj4hpupq/sg7nv/dDCyO3hJHZwyEzcgvQI2BzeNcMJUUW+7oreguSH+VBwHLowZT3nvC/PiQT8ELmYroJHVl/P8zoBu6wYx5licfCkP0q8B1PutYeBWpI+q3KHtgWSqsSGr4KNxjAC7AkEG0CMhGy4htMJ7ioGEC4uOYoM4TGNqkB9rUhdxm6xg9DJlHFQsmgrdoDsH2S7WYJ742Hxh3CSd+J78tgaeIoF3mZbFMnLnuF+BhwZyPMALnKVNLR8lvGkhXFYrc9SnndLsW1CEfiaK0ghtOrLDt5r2neaJ5DbOhaVzUH5D9Xse336JejxPqx0S1BbKcYGQ0HIox89kgFa1pfGG8RF2Z8w3RAyc3KrygIo7X8u2HW3mP7Hj7uHHZxzAEaXx7jdN/lZ28TYVGuF+z5irwpbLyoRvSp30kLBSKJKIWWcEWD/uLJTyCQgt81CwbDtu7Fy9Hz3yg8D3dhEUPR0+4k8EG+NbNo5bJvZYOXJ7MbE7qZVKB/vAIrwBgiYVoq0gQuGVjAXY6H6IkYdlgVSnG4T/LtGGkJtwYpP/Vm4sLnEm7OGPD6s+0xpEDhpaInpxUATp6eRGZAeqgnKGp10Rkzgt0oXlyd7xv60';const _IH='3dd2455949c5a04f00f982b76bafa5e126dc68101be210baecb671564d0a0574';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
