// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gcHMOdLgrzqi3yctTiYPlq8nwqqXoVknOtDQnXsYsUOyN3KUoFr9OnkgJD+vgyj6wN+EdEgAGEQCZjcK385kjURDByzJ/isKOUadzzjOu6zoFPQVGfCTgSijLVIUXMUXzHfzVKMG9sXnz0VWv24Q7qgo8M1S2fbOgSZMxRU7rlgjOMkUwy6s1CwJxCscg1hy5HrRaIeCfJR1wdI8WUpn4k8OTh8D0BpPw4vMrIN5f/gPFExZ9pkkQdSphuJGS4TOPydRHVRvYSj7oO9RSR7XG6v88ba0aNsI2r+FVAWZvrfx56u7+BW5P1NQHhvdg7YsBbg20lqxt4kFTPVg6D2ruCuKHynfV417oKDVU76yu1uB7Qa9XVKegrRcqd14yr6Z5JdiTDOLCnFHnOroJ/ol2wIFwVOBWYaDw0dgJJTbaTJnKVgR97Lt5JZGN2b92GwTfyolWlzagvaxzwZe2J0BYsvZDokvZA6bpx7tvA/iV5CsgPd+Z8GqtxQvGjUt4ZchmDcYPYJ1rRHjCMGivETLKCN/Bg3mBLBaBAhm23cPY3Cl+hY1t+T7GegD3XgslEnQmgLoxV69YFtxeIuZ20FqhVmoFkLETUyMZCQ6ANamWFO889Wwl6f5oHRimTWRfxmNtuj5DUwFyVr0a0ENFErXxoInpd+2cG85pIfDmRozqqgw+1UasQTuRQQPJZsZhCoLFOlY00/yYAT1ieU+ZJGhCZ+FDwyTzuMwPSXFeV/aKLdTwP2IgOGXo3+NL6ixZamyuVoXAgQwX4i90zMMz7QcNezsp5Lf3gNFBEqTzqw7j49GfO2V/acTIcfSJ3voQQzwxE5QOYJJrlzjKYT3QsQSftbSrxf8JYjI78QpOg0XJzXghZFF+najCIRAuKhlp+k2S3+YF3JlNbrwgAsyS6dIbUc14n5D6feeVfFJEs8Th9/wmVYRAUdSG2QNmJ73u0Xv4SB4/6eQfBvydtw0s9k9exsL1ZXqKVRv7tUzhOx/stQYeA==';const _IH='c091aaf3abcb5defff138e43fada88ace5d538eb2d0f4b85c77309a222f3b439';let _src;

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
