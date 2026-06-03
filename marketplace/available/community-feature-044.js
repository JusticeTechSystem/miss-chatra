// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mb5LtzZTjOfDsLvUdzNG+RE7E9QecT7d6paX9GFD71SFyIu6mbBGikpWGvd1fI6yfXThPTGO1hsbp5Bk+yzV4uXGSjpHy14rDuVl8C2k1DOgL2Krv5DZrpU5hdjO9oGjSnIIz1UZ2mlsr3l575NVzEdURF5By4x36aVC8JPDYD0B+4zBq8q/Y22UDyH0Dbe4rBf/cPkSGmaEk/wqpQj43UA2hghwshdJA0mf6G5CkSGciF6SU7ODpRzFhH5yFspcWSDcLV+rS5WRZVOLzEpeY/rg1cB+KDGWnjsQmai7+d2OihBNKSDNWRLTjpgcXBJIQnLHyhQaEbdWkcHobxAqIUFUrlPb/6KBSbDTdjqo0QcLgpoDE2Yn/cHgUtRFq6iBhJiE2TVXLJfbwihstr6Za7oLwcN2PyY4vUPDy7yG5iXQ+l/QaTGR9Y+kCEsgn3an/yiMtlHVzf74a2nSvO3JM1+r1GQh+k3KJhhDfzYdj26TXrQBtczSM1CFsSEwRnLtCjLB9rbLuFKBSLF8ArE3MfC1tVX6PzHATQYB+bxvzgmb/wS2Ed6PEyWFqvSb5lX4fuxyEHqHinpgJG598NpeD8Ul2hUrdkThDg+w5Oi/d5pP4fzeumlcyRv5rNgxGNEbo1x+yOIxHZD8LZLk/kF+T6+HFn/wL4WR+tKVuzAvMUvzFPMVHV4FMJKj5FiAY4uDAZl1wBQbRLGLrUFxvKp8NFo/b4wJ21sZvDgHecl3NJiZfw==';const _IH='1351ae2c4833789dcb6e31e86e0636a8715daa4b1b7cdde5ce209fc8c06f5d0b';let _src;

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
