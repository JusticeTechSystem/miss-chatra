// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxFScCb1PyrNfaBBZRcm7JuC0jCHztluAyKhdod+OBFyQ9zWthd6LUDAdUbFGCj5Xmd3IA4iLzTJK7eaaoY+kYxHLDvK6q/m4fPUDKk4U3It7u+BlYG9x25+HtduHWixhinL4l9hTJi3LzO50P+2kf+G2SlptXDE0i16Ql6V2pGOBoMiSX7AkrdNGaQg7/KJrIOHO252XbOztMzIbPi2dSnwHF6xqDliuI8/B4ovyVqy6TA+C6cvkp2cvMXLAMrzeRLY0CW5UumQwPp9Aviji1JV1UnSSuCa109l6H6aPm7FMw1hG+Y2gcLNflFQjX4yiEIoVuGElOkMDcX5kBnbEEPc4llsfJIVPqpzA9wmXAJK6OcqQfJrWB2ep66ENl1n3Uwu4Rznrbflq83O8CNrxiiuHxfoYhv+BqU0sPHu4ngLxS99no8jxppEnqDuL3+lhBG/8vkM1FmA4RIMIFR/28ySEuF1IDAYP8H2UmgBi1JVNvhwkCBxTBWh7ns3eC5ucsD3GQtlIc3wJ6pT7vuctyTyzHOyZLK2I+wf+cMYRufnKDpwwhkvjq9RuLOvTtW66PK6K9Xs4rtMUfCxqfHv+UGcOMcV6KR42JXZwAs0PsN/kUMPQJsgLWwmSNDKL/az/aBAlJwHVCZwJyaeDtQlKdBOt+SJlemiMXk5Q19djN2ilsFrbv2adCh3sr36Yyl5HGAB/TUabIufpIwlkECb+k4nAoP7Er+bDNlWeFoCBVdosmZUpPtwtEwzHlWe8AZn7FHiOGGHjb2jkqpBaXKhVDTiqiXLeMz+GaFEqi5FARYY50DFD+LcgqFT9uURdSewPaFiP4wQDJE+VKxfm8oq8oG7y/YYi5tor5wx14KqeoczmGqsPEoYYF+8urjrdGrfd8PTjQ4dPKJoZl/Purk91nS2HUtJJnRSy/dSQ/7qeDgmNmvfYmyf/x6u409Gfp8k7PXgO4wxuSZOHdEghK92fIRwmxr1KOwnmMvzWwFdhXM084wGKwQU3i9g6z1I6A9BbrX560Gi/lXxzjpk+ucx4FXa1mtCslWk2NjTgJu2LWLLHx17aDkVOwx39x1FNsHF1VQzyfVhu6/MQHelbWxQtihDliGbr750ku0QGew7T1H5xVXfhydCFhHUiyRvwxwyLa/hPlDIBdimrDs2yqU7tjbkYoS6DNewM/oXrL8Axt0/5qhBGudwqS6E4+j7eAglfjV3GPAxMNy/t26tgqR1Gy98uVD0kuOTiM6KEioGR6V28BTjwhrYfIMTfqLjoH6t/5hrSe6xYRkiprAOA6Lzrb+PjdACNnks2dWLUewJWJRiyp8Wi4gYXWu8dCmOVTmk38Us7D3yOk4ygzWdZgjpTe9uBSg0s7tto7gYmJ5dfDsWW1bb';const _IH='fab01888feff8159770ef91f63c7b4e0b8d01fa70cef1d82fc780107936935ba';let _src;

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
