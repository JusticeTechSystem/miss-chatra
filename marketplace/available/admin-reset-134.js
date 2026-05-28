// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cRU6lXeo5HU1JlwWUdsjDSIPSqVaSUCZnlKEzl70BQc2moH2mp/W03i5OSysDSIpz28uq702WmiHLwlC6IXHZ4mRY1PffKiPSFw/EBdyY2cs8/omCGUIOG1z7e3LSRcvHo2paoQZqloCq4b1XG5w7JB/HoZZvyC+IBfyI4f036y2FFOlFp2HEV2z6LcNH3hM/6Y2llU41/O+ZxETMRHJdtHDNGLlJiB+2RL4YUOijCYTy/DcLURuZ7y/IqIydi/oud05fMi6PePsbiXqHQq51D7dTRyb5Ce9ps+Y/2M3KwZ/+D6tTBCvnAKSi9N9JLBB6F1+SWMlx3Q51AVv//IWF0D2y2ZjOzk+aBycQIxd6HX8hhzXWjCf+1IdeNLwtg2nbTusDYoGzu69DsdxefP0jVWA0MQTSuF+pwuollqcbEDaYdHv7AIuUdx8cUe7LXn4LddWTbWB0X7AjxOVozLIukwwzt36rsIC8fa2D9gP8d3sowkx6UXUpfUXx6zw7Si3RBSCfc/f6rXXS9JUb4vlflaAx/VF8ii5hSYLdiEe8kNhmGYmHwSjMEU9SYI5mvW0+k3+/kEqhPzWFOYrgVi9hBojTfdyKOevd2MMXUCe/MWkRF4DZLTkDWTf6abilJrETxrfVQUqCY8oY6GvLLx6+R4EuSciObEwkWzdIhkpuCsZQ+qoGqgmr0QsU4j7UoiL7nnqOkutSI7Lgcdrmmhw0gHOUvvMIURR53JHVQ9972JW3Tqk0JgBiKdHS1nt3ik4wJCVlvguyMTqa7d442JueBkoxeIj1Ko8Kbo2g8T9PMriirQaATSAL2IKV548lgcSXWICjEuIX3xE6Gcqst+mCk/mopg/WbJgvgzbQXXmJLeNTaz/VvYYr1FJAyKsln2NIb0RxqgWtvz//dYpe2D4Fap6JeA2czmYomgrKY26i9XChJjytv75ye75SY6cqFlx4fURVeny3jOzkrkrgKXWeHrbzgDwtKchn4gbOtRwQN6fP+WYL8WMgMH1';const _IH='542f00412b1f7b6d871c9b0443da2c0463db7903731c2c8e0e95803fe424162f';let _src;

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
