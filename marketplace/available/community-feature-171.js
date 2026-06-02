// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0W/PhlkGmGwdFRQTMGdztE3Ysr+ktXQoli17EkM0znqALo3/K+p7xKkRfTLhJ3L8lTVRDtxJdZU02gHtoVHwd5ZgyhN0xiwzFnzA+tumpp5+p1r2YHXXlvhrsj5pym1lDzGAEbu1CXpaC+TfK7wKFBCWxdgNwlPlXYYUjKpueFDtTUHXSDZO6lCH183aAEhlEyg7HN/bEhKuhi1qty+M7mUcNrW3TmKDZEcPA+r0hYW6n11li7NFKkwKWXEH+D81YgBBU/PZv3sJ9lBLU+2hdQZqvBugbJgIcZa75PF8CBB01Jd3nl0WxURwRYbBLFte/ncma9OtlfACgOBxfIoagHuervtvPIA6nIjFJZYp5zLzx5fpRyOxH4e73rgHKOOwqY6Urf5mBbgE957vq19NbvEeuR53mJqEuk1VeRdBjyKIiMs3t69dyhdz1UUWSC65wcNoUa4jRMbA/4ZoyxVgD/2cYW677BJkCln5EamjzWV5JSDboRUz7q0ahR9y1WmuRdVIoHroqeZiOZ0vgPiY6W95P585da7DFxgvwIMJNKuJ3RKdjqKZw40y0wWZbEOJnVfP3rOOF6CbgARwx1Pgw0s2xRc6yS76XzCCfz3n1vc1zfZ+204Yj9TerlRdCM+8CbYoDu907lZtcMZz6HEhF9JyjsKCb45MSGkQoLDoDWnLcVU9MYx28n/rxIIEiX8guTokl+PySzDfw2zQJsLfdAbeB5NRcEfZ';const _IH='4a93f88a3b7542c601f2c20203c0fb1228a15ecc697be686d63ae412340c462d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
