// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwTwMuOMw4AJmH75NSBGXYc2JlcMTEO3m30sqsQZmQuJhRpyWhEUMww4mH0VwsWTr85zVhDUCyceMnE5z7cMvo3Huh7dnbCJGqOoqldHNy3m4aS8eOL+J6M+NSaWPuwHWjqymMSTAyaEkOcXFzfxI887Cy7xQ8uuBDXEpracckFV0L0pky6XuWB9sJJWpGHPO9s59XXNgDYooI8qL21L8BGhseJhYvzioZRIceiq9irTkGmfAD2edNOMKg8cdOQAHoYmE7Q7qpdDK3T3J6dz3WhzlHlW31dynwg3ZqlIAwP/fQ8rVBD2b36Y44knVAo/7tEeKf8kt7lvMo4ndd1BPQAdqDMGduxz9d+NQ6qUYqJNE8RnqjT/2qcPJy21XQmo5CS6i7BOG3zIr45x/cnK1NIpI12dSn+Fl+F/5C2Axz4f9Y+bMsAY6hdqPJhgvyRdB8TxUvZG5tmciQt/8KYgPQu5Aa463KRs2kIYEBEmgbhAZ2o9HJD3Qr1D1yqpEKhems+xZnj4E4nPaLozSRE1/6/vEbSwgQuaS/6TNGwF241MDJv0Od481JVpUSva/qZVnKSey7oItctmUBQxqvOhQD0zNzuFqUaIdKAfEpUtg4rUgUa/LVYLmOKFt8pELhcBr8Z4ggJdZC5tQuMgshVxclVA4nHeb3ynuSA7meT0uXy8cFeM6CULQXVtAAfgeIKbyEI49n/v/gG6M2+tNhxiCJW8PJwbCfV1c1rG7YWhoOp6SV9y4ueK3JXgLCeKsaT03y2wlh5Qv6k2dwRlEf0AlFdBWnbF3dy9R4kZo2Waj6PMnbVGARIpqVlSHNy7enJ+p14aYBFuvRdymefMS2qO96Pjdm/CvGVBZN+ZesHJWaW1cAEUpKyippCsKLxCxpeH4ED2102EcWXPUI0LVLiZpxQJtHOJg4MZCoYWfTg/wj6omvqJ07y3yv1zlu5clR5fpzfgblUl1Nf+7NS8jI8B1yjbXiy3jWGltOeHcAsGhxyCrgc9x7eS3NGJkpY2Z5OhT1WGSOBRmAL7w8GvrwYFZqYmYFzn2I62cZV4nBsF2aEPEsPLoyj/W6BlSHCBiDvo4a9ceny9WwTjBi4KVveTPO8FpFRNsrVcjVtRiPxLBRjIbXWqtAWDxTWGyeiXGIUucGW+sXRvbdIT4L3G2hSrwkxCdAACvExLkgCJfL/OX6+bFMYUWm8FBMGfx67cdwmiAFiqsQ==';const _IH='a280fae0dc670e6cf6d9a36c46b9d75ebaf514444ba160c5de8d9ad6c3252e5d';let _src;

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
