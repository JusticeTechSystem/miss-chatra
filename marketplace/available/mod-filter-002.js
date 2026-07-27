// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSD4B0nsca37BPs27kZ58FJG+yMtcIvoBKftF6C/lCukpAWjmoFXZi746LUQDKx0cQpmRPSYb5rFYqK6YsNu2BhZTiP8QP0B9o4PPZQPsAFyoW25E436wFuD/Bi+NCb+Nd4OjThoROS2bwopXKaA8oyRHFIMmf4Yu9N1WgOv7ic4FI5MTu1gxZCZNxRryCVqthxlG9UmnEqXGdwTjatDZWOdsmsLNM8ClIRnUPYVZSzUh+4yonUxdAeCEBd5N1vBCpsZeZY+kFPXu5eBM7C9heO8dI1h5x8rn5ZvTT2lLU58TzpyKGYqG4U+BLnABgfgVqmhvZ8hqAajArOG+okNqfnfd4eXRLpbzoIvCdzB+3K9VZhgyT/xjwfymCL4N05ywXFte1rIXkJztwV2bC0oB82rfhYMuezOeWsGk9yGVuWX5rX3uH6LeLQ8Gmrzqs3wHpnssChgR2YGfIlsN4HfBmniPrrpySLpUlny5xaI6mOrX03SfR9VNY0NV+SXZ5Y6NrCdZGJvv3Ub8VpSeL88kehwZqDhxOCpWq0OkzsgJZRgKAhTnZ6sA37viiPBd0F5L2brn39/ODGu1CjAdedpc3g6DW02k6iEmKYYbxXKbwzwu9uo8UGlQzAxoU4+83DAQsMso+Sew9DajMeHoVZNvDiH277WTs/ZzOZ2ETdsfinUTN4DQz5xk9J4PNfFRB6HTp33uxybSCIAJ4QyT636B0Tccc0lX6Mvy2O1GV7eZhMlBktdnaW+0dcI+ILBxGr3v7qteObnNHtxy51t9HQpaJS6/4VjmADrRBuupOJYMkGWFdr2fg6tpIqBysUQfOOivwkJXfWWmf9zfFUcipH8iokwJaJoKR/0krnPUoD2MPPXloEN5mofmGVfH6QwWPszlRj64pxEq0tV6L44TaCce0KT7Y6cWvzpEW43oxuNs0Uw+sg1uZDh85I8aVG2Hafz5BT/KfLIiNWGo1hJbqkZRV0FUHXc4KCnxz8Fi1daM+oKM2OOclwBuaV+cRZLPVWY6OhvAR3+J2Z3vdYgvFjCvfBOq5A53sHODy5VU0oqw5QErlcJ5klz8qV3C6snkqyebAwQQI5kTaJMeVbFXNoJRfOl6IdevthdNZFXpS46xA9Fug2CwzX7KlzCJAht8RrI8FknHIRsBI3xoTV2VdTrlg3W3rV2m6bpfAaACQxOGLX8l3YuZU0fzcYX6lKQWV3/Qdx1u2ssq62dhvod1EnGqeHYvlmwmLMEp7ligokwLGMNwRPk1k9+n8LmYjt9PqQWF5fxEkR1Ns9lj0LodvYrH1idFNKP9kA0Etan7IVOzL2Z6Ue3LBaXtqS0vFt3yv+goROcP7z8t8aPlZDMKTcdRNZwk9dEwGifaUNzV6u0LY=';const _IH='f74ff249b3e1a5a32aa1b416d9115e765f1b9825c92dda187cc552d25d3d82c7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
