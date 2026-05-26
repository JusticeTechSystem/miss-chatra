// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gYEIaYyJNzuDyTSHvXtIK80yrKUuapTDU9WKcmBOQf1nRdyAfbGKnfVsKqBZKr9IhQavSM+PIbMyLCK7zDBixEjXB69ZCB6i1pLai+42cwRi5Ga2mp7iIuRQgjESD/JCb+xzL//OSDSlh11MZgHKhA+5vggf+MTeVxxWo45bs0//90Izlb9cw2P8cyMmyGb0yC0LZ6+xijHs/Eu4pRkTREvUnZtEcRGljsRW7zHlDujR2YIFH6/awYiW4kXvF9KlaaRH4/t4jxvncaSgqv+whM9nFQJkD8xID7HnsAyZUPtQzXU4QIuaO1wbzGmixRsAFKUlVqik76Bg6TUGWYun1Mtk7U09eL61w38A816Yj4OUpsa04e/XR1fhjmLPB+Iv9KUUkKolgox+oahOT7niXC0lg0SbRCozSird0ZEB2PQCwQKtl/E/cgIKOPxVPd9G3kgnX+pLH2USOXy5F/+kP3qhxPdS9+35wpX0bJzr6ofyw3lJ8hMauDrxvzpyt7RjOyKU6QCEfqcy4Z2TJfHdNYN1yqlCHQWroSsXiLqlcDCkz+9MXE5A+cJzUf4px5QP0ahGgvR4IXXdqnD242430ckeXqKPmJcf6QqKwmjfm6En+GT0R5qmCJOLG68FDU+SH+3I6aFjL19m1m0NYLANa8sbhzl0X6qqCRrXSqjHE9i5dKpAlAfv8eWgS4JGfIA0WZHLYwaMgHwnxhtQeIzGUVRuKLkxEBQjcRUpJjpfSHbLfg==';const _IH='15d0819b4eccd1343deee45b35bbcfc1bb2af94ae8e92ddb064c696a1b32cbf3';let _src;

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
