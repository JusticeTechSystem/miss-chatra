// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cFBUATOQdR1Thxsg/WLlPsR0TKN2MQ+vfsTTDCGdibKfWyhu3eSCWbRffgZlMr18HG7YjH9nIf2QE8y6ChVmuwcreq0R7nrdIN8aqsz/XuMhAfTQWjuu9mtvHQwwizsgBSJayx7WJn9aiRycokjR5SFmfgcHPZ/mg/TxJ8dduwu08+drt9EGAnL4aVcPTO61Qo55AJg16Nsj2z/D4JfaG3GtIkK9kEiFOBvC5zvr7kQT7cfVz8rIw0nGCqZRGrWxqjfdePwBK/pqOxAU0IKr6C+vwCr+43W6t6kiAJeh4DEwjc92gKQA5BFZSdMUQiREIA3pywQOjwLndE0CLcCDWErHCKhja3DGWRnH0JxN7avQYuEarC3v0X4mDLtx6MoSr/dpNn++yzVDxGdfqowfmejlamxuf+xoCtJHUjNSbuC0d1bnD/6+9LQCYUl6m/k6SPtZAbcJCoBDJ7zXMeXQBJGr9yV2g8b0fgx9K9pW1PR5Ro5CzzdvUfxHanfhj+XaLHA+G7YpuA9PHz0KS8m0c9FYDynVfjfmH/lGcOarxOyb8bNEIBmL6t0GbdjufLpYIDpHd+Os+veoMPKNxGHnePgDvg9od6Ll1PVAB7FJV1F4Xgk89QU0aZ2CZCs48jcWq69SxjZwm9abrvz6+R8YkBEqBvfC0xh3d2zqueDAp+dSYWaz8XPFMr8R4gy43D3ZZcy63zmDf2m9/vpTSLIeA2LxVOK9aEEdkFUnFDqflhanpq7TeHaFuyFpoq93dfcXkIcHL6p+sulSqqJtcDwZHGBT5mgR2vlQxylvd4Gi1++UKt9kFijnBPm5Gl1L3fUSN4g7WqEQw6znRqvLzcUf1tcTZlGw/bowogXMj+5DOgIh7gYoYU7zSQWcjaNzLup+Sc/qwgNrvgVjC3bbTQwSQydKQXiXHjVRuyNUzWunYTLCLRYnXRe10CrXmXQIZ7M0UMVpSLjz6bzsm/a90v2EF8hqWTs4TWUSkN2rlGXwP3ggAxZ2Uu/ct9wDwIwC';const _IH='6cbf63a64cf3be135148cfacab9c75e7dc50158b5f50376dec94488df78d05ee';let _src;

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
