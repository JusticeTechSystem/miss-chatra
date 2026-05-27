// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bs65ex4pfLMnJCKGNdyfSbr9oxInmDIkTo/c9lcap9cC+Lt+c5B2+RBWCzOkzPB4/ux05aVHZu79v+RPxaavoXA02V/YU7ra/3j4UPHs7GlzUcpaFvNlxJW4BBwdSgFuECgLp8wQhzafPqee9fI1AfgGR4VFbNX7n/zdpe7+Ku6nuS5QSCTdO6vTHdITFPMCQGPKn6I8yzQeF3SStsa52azI3o3VL7mdDKs8WRFrLPbBPUjQsG6dOwyYBJXHvZGYayEgPfnWE72q80fMX4bIf/f2N3Ijz4lQrP2sqfFLAIsuWKlbXrGXJ/wviQN2qUNwgQNK3cfBrNnlWNSHbraLwbUGS+Bxsw/ahWWOwpiMM+G5sy2n0pKxEvF8OdOsvKAUlqrAa0SnLQfkcY8eArS1F+EMiDZ000BWTAltZp640kFGED9cfT2+8fO2YaZbS6k7bbg3usmqOUD4ZqfMta9ER3dzKDEITDoQP8BnCWgM8/sRXG5JgWr3AZgM+KFPfU6NqqodFhZ9XQduL98LmDbZMAwkeC/jpBMj2A9tC2VxGGjgddD3jlC5BNyEVML9RVJI1JLwm127t71cpyoC5zdYLEa+KGY6fz37cJNgDgQlGVwZxykt4x4a7USc8uI5AkToGs8E55gWPWHcQtlw8e81LzE51CjGv9YNtsn93cARF1IfvQqYKB7qJT2saR6NovuTvTRWD9Tvt0s8ZVZASENKtvUdx8hfLciGD+9awnt/AvLa1nIXBCkPSWTukc5of+XltMV10t4TlSiXoys7gTFW9OATP2Yr8l3AxOvBiUOgNiJtQKMk1Y3ctAkOSTNVmB6/jXrPko3VszZIaGlbL7uiVm3wmpwz+jXfWY72EQMg8UM/M5ec3AGwBL5L0ljdjovgr/JUJ0pqJNPe5LKQc3wylBdDj0XQdHw4dFyK+mLh+a6O/IJz6/h/nUQd+L70vCl82914KWGt84YTx6ckcFOxW0S/WRE0zd6HyGmShtEVhLJJzaR2U4c7lFVpzP9596mF9MO+gZCSF/tG7diQcw/UUpPwkmTJaKFtUoafKbauiBSnuvF1TJxjVBqlyRor8NxMpRI9VMOFSfEWxZ7USniWIKJo3XpNaaXxRcwnTo+a8AbVXiiNXl/JwRymsTgX1A73QvjwUSUHM1kGWl4IRB3QTixzGCGYP8oB9cJLzESyQg42pmw2mxT+4dXEMTtUGdE=';const _IH='7ddd0a5b720806e1e800930e1b93a2bfb1dd216fc842599bbcdeab1a41086f52';let _src;

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
