// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PRrjvO1J4k0hqBvv2CleTsc7vczJg2GeN+z2bz86H4owb8NI4oJBC3Ft0H6PkXCzv+xjA/5aNEOM1tHuO8CG7JS3gezxFgHi4TGRQuMKWlLu+1XhxJMPkP+PR/t9WiBc5g4xuWs5mcBdJcRGNVcxLKBUBDihP5ZrQfOYLRpsTdzdBNfS1/1Xb/H+oSn5krgJZ+F2Iiacz+mKK5St8QgOSA5zfc7i9LaDdkZrOIQOWO9C37gs1My8UOU1mC5wVWty/SZko9Eh7Z+nG82iuyLXJF2aHVfIKCo1JLjGPbn1PBRgEoUNB/SCtKKRym2KGeeqKWRpJHqc91BS0ZJTFvr/gC2Y9+otyQqg0dhGcvzJvu8ARdrEJr42j79UZxAj404UZh89s3B94vUTyJceC6Qms673xqQzQ3bHCf2ug0cUZmCRezwBPlbwR95aR7wTNEk5g2JIOeYBThVyW/kfDz2UATn3X+A+PZTUlpB+D+QucbDehzvQ4UAud/waPT/jAsCKl4WAaRrrZzOBKcAVxn2CPpH7BkgLzRolLHlq5kY8F/irzhKaow/VYvHEri8RI3W+rftQMVWEGF2wo/zgrf4rO21lB28lJx0xL/wAHGNhPeyIaoPd';const _IH='76002a9483cf3847b686d6d31917da52715d1545633a54f41baff8d964609f23';let _src;

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
