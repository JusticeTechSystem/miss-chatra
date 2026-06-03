// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gq67AJLA8MTtWElMzc46D5Vyz/i2ucgAYn9X4mGl/kMW0YWZ4L41vnhmpbPJEpcfAd+C2WmPW8dk2pBxoevBWzKpbrUpuRKrEtmNZ6j/6zmXCdM6CMXXSbPmAwSWkmbY90s07UV7B76T5r4Tloyrq35MavmK3sKvluu/WLgRnv22me+486OubgapLQeOxmyg3bqAjSpCnwEhqjh9VXrGfABc+WDcNk+bGCExtnwbPPphT/ME1RB0BVTJ4LGX+4YI0Y/yYLBALAbED0tVQaBZj6GJFRSqhtCA4uVZWo2cuXOV/8QNRt9yK6J3LjsjZ5c5FVPSQhLWxt1ftEXRhxWHsC+Vw5Du7zxphF72S9x97svL4RnwygdyyAKvUdewNYKt/OII2E7JQqOkM1IoKctbVN8VlzIMYqyHDZJIcIJIHNH2flj74FmOZDIZLSTocTcc1QtAVYjGdiw3zusx4C+QE+gVE9XyQWcxUsm6O8ptqeNYoEZMkXiFwxIIE0RmPLHmszlOMDEMn9yhMC8B037cdhG5c/vrX+oOT0QiJNXeZippBiXKZiRhMoafINs+CyIvixFsfIcNNDpw9Y5u534oBBCQc8HD5lFr4n81ozEM2IMVOPMFrOo8+oCh/OYtbNvVKOh0nu37Vt1PzSYXJMkgUnrOlgtTgRnHsPCW+9xoj371RckGGTXRI/iT6ZBZTgV+p0puFTh8OcOmq36LJM+IAiwUyzQOWQBHJbsNlhglU86jwwCFhGw=';const _IH='659cf5f37ae2d454faf84d9ebcfc7c9eb5c9dcfa9781687cf2580b69d4c30583';let _src;

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
