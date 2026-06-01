// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0LFl/asLZP2TGgbaAzr3WRPxyxyihvgAMylF3YDPm6GBnJJDYt/pTLeDfwlbJKfm9Ej5ATt0xIIJBT3P+ycIX/TJYh3SJLHEegVis6Q3RtyoWt7cKTweNHSaW728LUe2yKlZ6TtU1O7bX3XwGY+5SfoTJcPPjeEtRqeGfQD7rJOGOZ4tArfUOGRzYQSpC+ZC+er0v3q9LR9c+l/kxFs6k12Bp5VN/baz+1RMbfZvXj/AbYtPLaW7RlyqrHYAvg/MUVOQkZfDm3NgF1RjhjeZWgZIDqiEuUJo1Xg7MzeTYUWKol5V1M3BFjvO8TkKEwyDeB8VM2mNaaL50VUzVcNGNsFYV6lHRz4TTKBRWLMx5I5W07jDAgTyOvAGqP3ezatPXF5qxhqXg4f9tFML/YfGLI3613iijvjnRQEC7P56hFc60Rnfcf3333yHkFfwpoGfQpwWEtswmkt+UHcArUV+qcJzRBwvt7hReMH/ad12kXSWQCZYsTo5MWIt9wwMenEXjNqNETtITDc0QU+HVAJELeVkMmJ1Rkur+1c806ukaQ7n3eTXhi7W6YKhO9RjZODTaoGsMcaH72GeBM=';const _IH='6c4d7ad88ab15b7c7174791458cf84dd4f9410a28ee007bdc5e0392c866610a1';let _src;

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
