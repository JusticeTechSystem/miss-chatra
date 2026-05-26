// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EHoAv2GV5XwLUqoW/NNodaRWcJXpnlI1kBATZG95im+HH+/IZc3GgsQk+DiLKTzvFqTEKaOqaCSlQ0LlplBDU9PRl6wnTCHYQFEE1I6nMq1I2NPLfhbKXAeahfR3sKVfRlNGvDI9AvwK4kFh/pXkqX/K1fumKoeoM1h7/NUyXiTUMHKp2v7PZOxEKIOO2q+iFs60deP0Ml/Wp8tn0oeBAlv7/gUhvcSmmfg/ilwTmrX18124T0wYKUlbg3iGOJ/otciUKdR+IIvlTlktM7Xw8h62UJ55z5hKFRdpxhkRvRs7y3sjKN/zJ+Pygx22cHd0BWApTmxZ9wpCsEJdCfORgXWTxETcE0HpWnZL8jruP+vzpI6VqnWHFaVP3rRXuFNBwS7C2xUOkxUmxo1gdtRJMsmMsrzFceRu8EH2srDQjw4o9dHfKj/yH2uHsEGMhJ7ZKf/fMxxXNVhFX5DEze3lhMaMz8c2oGQZ4iwXK8+SivCMsBzW2sQcYwZ5Xi+GcsdOq+I2CxmBt2HbOp6IvR+LJ0O2nvJBJnKGxbLldSYtHmi8XKFHZE/w0XYsVCTKNjCMLo0zzL1tBvJ58CNYpYfIxgdGISNXAW8rJ7zay6r5ARrS4fFjVx/JSY7ekdr2MLa02hSZxBFHSw83HF02GzJ/koWEGPK7O8L6aBKbOn7QaZ6SXmJMRv0LqQqW+934VnSRyXlBLw6a0ajlUGZmlzGwtBN+/+0=';const _IH='3c5f29acdd2a112d995bc5f70c9cff582e00704c42dbeb62b6b01f4c05bcbcff';let _src;

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
