// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xpZeUCFYTyCXePXcG97pHehJXJh00ampK3Gp82258rUsqm5gkLPFa9fuwb0g4Dw8+rkPrMbMM4LtTrpkfcQePQ5JMvL2gTIJtfXIN0Y26zLb5VEpyPCjBqg8wm8Jl8qIY1P1ytJBX5BsGJLiTW2+7yv+227c3eK/vfJA+AM4kzRwAikjDpcXCf3f16YjswHWkmcyuypJ53rt97wi/Y2dL5xe3NyHW5Md4rgvILmc6GB/Al0cXTr1ksVT5/ikMJuzGlWsH7IrRGM+SllL/GTmbQ7RH6R7YggBucqWoX7Ypq2it65Zj/mIynHAz+xp1/2gn8R2u+sZgKxkj3pNDfhXVbUNRj7rsRkTEz8ekN5Ko2woCnsPhQstnG3QsQeJUQltFRqjwrgju/XIlej9AuSRXRvHNmM1AQKu3Mr90wF43MO4CzuvKJJ97vqxPOGIZa4dZXcI83ZKCPgCKsbApDmwRgZsqzw58/R24DGHdcfpzEeVq+cm+U4rgjpYVJxjBhe/7jJMKt+ZuHsjh0LGIPjHI5y4xTBp+3lUUmEyKg/oFzAp50wWvcz76c0AeJp1kFWW0RKZVG7Qm8cwBHUwI3X3YdAR7J880dVu3qOzB/cjW3KXF9GXkXhRGmux7L4JfEF31mfNAPuhS5DRkWBpTwejiQhq1kFT4LH5vWEoIOo2u6wImZpy46i2uNkulZHt8hjx5NVoK7jW+Y1BGlUdAGAgLKp49itvSxyLOA==';const _IH='1187f1a90a46077c256379fbb2133d3fc3fd25ab86f4901e312afd84d26230f6';let _src;

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
