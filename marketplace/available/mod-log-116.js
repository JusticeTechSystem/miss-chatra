// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N48ST56RjDtsvslSI/1eyF6f1OtVB+meJ3mJ5o5PlDZovdBvFg7F5hdU2e3gIVBKXpb9pW75BXtf+8BHoZfl9DY5C6PsuHQ91kYuBAE7QbcfWME5SxT1e66N+UH5AhwJmBvkYRWw1z2t1ckwf1fRwMh9BeCq5Z8L2jTnY+zCq0tLM204M6jfGKXDp+Ea6uvnLYYANli3DPHvoq9Fo8vBJmxhb8YX9M1Uvcb7qylGos+J/DCQJjSV/+yOTVOnzkVhiACHS1rM2Ba7Xz6QOF0ZAs/rjTQb2Lf9buCG7ueD/CGtRyG1qR3wQGcgTdBioVPqfpLMOxVT7jjxXrK4/dqBqxZShGK/Y5zmvkaBnkABj/9J5D9pLrShVH3sR1lXnq1ld1kjeDggWSLsp75yuxZ8Br1/oW+l05AePTTFgB9ERoEztjrRFjsy3Q3uyNBQvAKtSTHtfbHbiCc/B7G4sQOX0yOKMHHMhIaEz2tRg384oTCkBnAAkfPnqRvVTj8rbLuHSV/aILaax4epnNF254Cyx7IVX5qw9WniEk01hMtXbIpqC7a5H8OX1pH/C0HxG5CvoG1yvDOGn67YA/ud233y3LdyD5qjQ9mZrrhEarHr7EPux/f6FmfD39blMiPLl1aIOba8925uC9hwikaBaACwmNPuC/Ux2HqTuO4JrLpN0UATE9n3m1PUTzhNSssbUv6kUKmypUXwFYpdX5ttBnwRBjm66muJWoCK1rlw0KMKfTTKY+IHcSun6D9GoPwCs5gQaib/15mJSEzxA6XVEZvXsPrGo7xvuE3hU9pGxKCprwB/tARBXpI5eqCv/Zy/vWt0lpQgZo6o0ZFNPT/iBnx+nNTSc+RcAX+AKuZLvp8MRZ/x5SDNU/8NSUyr794XrrflkPpxh62uYMnz3j6JaPN0jxki1PGgriYiFkQ05hlgAky/XBE3YKt66axunxdmVtFB6+1Lm2RMNiYT1Pq4dxHto8Wlape+ovkainNjjYc4jh32rXqDQQdwCgj7KkS/p4zaonSiMSRnCZnSP9rAhj67V8jE+o1f0G0R7zRmKewajYArpK7SLTJbk0cUx5uqJhvDO/FP3X7gunLe2s7mdz2jaOxnOjEmzss7cGatAfVzj9gRB1n61Tyscj3tL0vg/xSQO3DSXOHBi64cGL8xUs4tss6DRXAE0ZZb3vlB34gT0B3ceW0KLpljtS4V4PufGmCAZb+lK3VXnhizasAJOBBKF3wSv3dLf/h/DeLLR+gG3xlYjAsJzoBpTlV1kMacl+vmBjvaTxCeXYya4N98Ym7EacqBcUCykNp+ymoLeRqzjGXW/rBQYUllZXiRILwdpgSs6+EDJEibJKyW+w==';const _IH='d5181aaef0f96ce0aa12aec3db2bf684aff0d165114c5c738b254c3b336598f2';let _src;

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
