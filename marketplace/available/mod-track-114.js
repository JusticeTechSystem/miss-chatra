// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ67/eF4zfUg65c1ClWYOFdOAQhHQ3YEFPs8ICtnjjjySJ4tekISjCx9bzw5n91LGW8rHoE33LvUnRaYY8JrZxJvlF2eGqwZ/RvLcmSKq+gWjbAPVX+ZxsI4eKwPuhuYHxMtLYH3gucRyDbK1jBciueB1ar+NuRgzjwYJltXQBVCd3GnkYDg91yygSlllWDRBAC1AsjzYGfU1BJVwM1dDaSum4lmFqLW33i5ah3I2bDKnQHilIbFXtWMLA99fs5OPfMTm9cWG9u+gxTM/DJrUsSfl7d8Nw5riLDVea5p5uOPlwHocibTZSgWox1bj1MOxmP24kCFpodiresYbrroKs+u8tm89soKZtd53LEEdGvIdxuM5YTdBBxb4MwLnt4HOzdGCzRTd0FxD53SHDZtr0CadOBGtuiZQUrHJ9Tjvr5CZ3LARyXM8nWm3G7VDakIFIiOHtXsfH/1oeOmOwEiYMzM8mJZ63GpbN7emJopDZ8TFjLp/DvCZNeIXQIaNIoSlJUKRIjS489ovrhnNabEwHUDSmhS5fzpnk/hy2YNAGYgVWZFtHnDmfK8Wcazy1PJHbwwZfg4HPZPh6z7UghxOl9pzBfieUQ2IdeKZVswxsG3HJjupd/ukCOqJOX1pkeMLKrFQK4Zm/gfcelKBYPIauR7awI+z2uFxNuoUUkTJLSAdNbzLkj1bsGPMYW3A1vCp+wuy0wLEeOcm71Ektqq+t6OCQSB4+nMWI+T8YUhfN12PmsqNg4sw/RRMGNQi/LuQFtge+nZkDX+TKBh/1wJGWKSOesYC9lZ+LW4R/gmSxntyjmXS0pAMVOdjqINVGpXnGzWrr4aCviu3AcTqswg05hvg+h3T+1NFYoYWaLm7OuNrorRkb/tVu3kBlX9g2x3xPdfdRo/ShQeam2ANgSskBR5ln3EyJIxXJO7PsC17e3KvUdBq2blW8UFMOssU4wosgRwTX7yZlukDxlN+ySolqzOu5LBF7yTM8CrCbreICTW8/uWPKX2jq+VhY83hhUoJJCB9FTu+xKbEI8iqJ9ne+i4cPR3M26EEN3PF6bFO/bmIN2zKI4czJTn18OpdnpEnUpP8EPepHF5omMFJvnkYJ0Z8BOjfWdu46m0tAGGBicHne2U7V0nvxvWV/ds9M47/QQMBm75GpUOQVm91ZlQbhGI81nFARqi0b1QIluCBL1GzjHrhB7Z82+wYFwNLw63nnMLLdmNQmcaCwesIFFOwDulU2KBxYE/Nj6aFuvsWBlJn3SkV0znA8KXQUnLICUVmhACQBr4cgROtZDKaB4q02d/g9or4ov2t515ePYUXKTyRYN0gAg9/r4+Ry1yyg0qqP4ey7C+pi/Cb1Q0tLeLRF2w9HxiK52zvOAslTCM21Q==';const _IH='674ce690783d3e9f928e708e4b83f14759d5fbea6790d520e4094fed183a2359';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
