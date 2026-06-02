// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='foi22FkosGzsXQXhnPgwfqo8HJWAumc80efGJehaupyJB+jm+gNheP9gJ3Pw9p6s/8oY0kDjhTVu5YIOhQsDEZuF7Xq5xtevDd4O9LUnHXW7z0k7a7Wpi3Tonpy3zuOO+YhP7q+PCoMHcKfGkrDKptD1oNs/qBjLCQREKd4jG5zI2YLedd07l6TANqQE0UZ7huxnLEf9Ca3KHmTUEUu+Bba/MItuIMqiD6LK1QOd1hzqpmQJB2Q69Sog3LuEB3tWrz2zDImM1WIfkDJOxd0umJvBTmgyaoTTpTPFwY1skr6B9cLVJL2hjN0G86ICXxrgBRz3cGh0SzOb/4eBsRHmI7YEkN4YCpsqnHSPyOuP796qjJoAs1IeUIEXfrqi6lQo7OD/MkF9ZDwmx9BRz6AQ52uLsPP9zfXyYbtMQkOlpFz1kpqnsXgjiOk1C/Ii3pt/kasqMoHKKWZ13nhbrtqKov1R8G7oCI7GXi1PUj3rkHNhsc7nRsFAHCkFMNzQqf34H3TTnDPODdmGVfrIwhu2ONbLoH0v7MmHIRLhB3xxSCLQj4OpBpPD0bxBAhWRYkg/z2obV9FXhSux7/fQL8UTPqAvRcdrH+XfCRiVp+22eqvwC2x5QXKmZqAspKnDazT2WHDXuGHl5DxwUmWiV7VRkU9BW5qnIL3WhNBWsb06o7s+vgdA6kaLheyTf/KnkZg8L8FX+bHCpnFxrdbHUnaMRUlime2HdC5mR1QkwXzoATEOP2FbgCE4M/kItFZFvZrqZ2LNMHa1L3eaGSrpljv5zp9Zj7wcLoNxjZbEcmn8eQhxrKvMWUpTcyhnSqrmNK9F9iKjDzZfh8uGKBcjYWgPKllMzvjX0aTt0cwrs9Enr1VuuS3NCCfpwnGKoeIi3JLz48jDK4gN+Ur4wOJvZRSevASwxW8gTgNs4mgV325hybeKLroEE/vxBlgSeIXzpMD528TCXLEasz5TRCOchP0oFhnmKl4VBGXRkUcEI3M6AfcU/LxPGpqKieVSLKqfuI5fvtZg8MVfQ5X3g4CcZMItQgDqZLOUMDUKxXHQ5ajsPQ5XMx/XjuUbbUmn9ZJt4J3rKin0Beh6oGPTuGmR9zsFav+kDnWPq//uk0TQfZRrB4ZpUUGAbrFgO1Sxvd1MD15zgi7j7eJN8UNjP8WBjpoS4mHQtku8xP8VGMS0tzfyymxGc7I58PaazRRHpdoFzsEzQaRfrf4gz2p22Pl50WRmXDg0cTX/hIufSjXNy3p+XSaDQ+fwLO/bNB+M0q05G3TYfgwAQdN+YCnVrwuvg9XXEFdiX0B9LncGVHetDMYL0O4/av1UYMAmyGZDgNkzodRRdOom4EalCYCb/8qVwuzMhPjhOmtK7LUToChP7kNk25EC2QcGO/meOZDzhl3obkDn3NhXMV87UgSnQD4FZGYc86WQ46EwFITzBGGqVsrrrQJpYcKv/7wJJhd2j5LkQE7g1oYEqJ7tAiOrCvGAFTIQ1D5CgfgocjGfH8/CbidxbIiXpSFul1vwUWTHC9TmPdchRAZaZp9jod9ibSSvXWnLIdBIzYzrY7PXyVv97U9gtnMy3jENMewX+TT2CK8cv+PsEvUaYewpmjP1VSVpyFjVtD/jmb5h/Cl53KUn2qNrypZVwcbFLV+efAXik7FAbivnAVjp2Chp9N9C2dCi47rDTIQjho/uFdILq9rRLlrqYfGYc7x06xUp1aCmHIlQf14RSbaAFvQvKfA4g3571UI6z5haZQ4njaLYherHwqua10KBYbtXpm50KxPu3Uy5orXY056xv4bNiwncazafkip+tVkdJJ46XQ3E84KTYNIbW9MI';const _IH='08f80886e4b3c998077b13ba38d321c84ca8fc17218f8404a9c40d7cb3c0f120';let _src;

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
