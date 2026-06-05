// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+7lVlnVTBjyU5vkpHSjogZ6mVGZtt8sgAhUw1XWf3eD2QDBzoRNuNuFPaZ5Y/30Umphs3EHhVF0XjuJb7sqZx61TDQpopY+igdtdagEcqkBLkLaceoDZhAA+ESpx42KQ+xp2iFZQcjmkkSaEPapAdCyc01f32407gAJVxZ1lTgq4a+lw98kG5+rPttGg+ZHpSQTaf9gWi8/6hHZghYij3jkjE2w5+qduoHHKMpuZjnKTE0Aw2Ma3HBQb/ySpfn9/CoTvuwts4qdBA3T7aWN9rGcrhkm1azScAjdLmztUk0LMzbHBySt0cP6mBpccgPfAd3P72XJapxFRI9MAuchBzuoQPjCcDQZSd9+mhzvXYcR0ekVvdphlAYy4GplYZ2LXEoSC0Dhlo43vr8KgD8ZlSdI4ypJaie/X9xapeltZVXA/OYy4kiCBZWz66HmUawuv8uL1g870liOXly7wzzFdZ6NhgRdJ93klbl677fd/Vnrye0VaRX/EbxB/HumEDQrFsfsBFpL+aRje5i8eZdKDfTV94aisg2HJqqlrjD2d/dsz8SUMiDcXJKqATIaZhMZZm3vE+7U03N+Encg4G7UamFPcGR8W1BtzQA9LP0nPp7Tg4Y0TPrNU47GQY4p/uTSS9obtU29Rq5pDN+8FTLjo8ZMg43maX7C/ZW7GjSqgA9Tath0ujqdVCMelU8MCBrS0+NcJ8e0tiCcooW6996aQ9/bld7jOaPGOT88jb61gK8QdC6+jHvv5Lm4nLzwbMX5AN8aZZkEN0tEGZ3eSidjxRmIqSwp93o5eLHGMQK1WkJJDY8BXOeqf20Cujsm8hA6KogV0zAAvbZIu1XZ0e5g8sPu+cj1v2XNYOp5zFHI5liKKJLC9cn5MNowNWIQN5EUPaPTNjbDjwSvGs5SyUMnOHpYdM0jtFOLg4XEqqUnO2Gyh1yzU1v7k964gZ9QsQ0QJJY2CUPr6iwcRr0xyFnefGFIy7WvsXrD8PEYdc2JhP9kcLz8KSDNlBv+5nxfzD8P5ObEsgQYseZbLK66Fw8OI4j+zZhueNbkFU7B7ZJaJoVtX0RR/rrShMBuCNxTVwjA4tnztowhqe9e/3HxqK9IZfoO+mreop3WAfmKIYX7pBRz4lGkLPYCpj3OcSXJYooEGbxhaTIwFef+7duWrfSip6pEQpzCe76lzDZBp8NSwsnM8j+t2Z6Kjr0J3tgC78N/MlDWHYSUEtueygr7MNUICkm0plHbMUklS2VdPhDMDsYdOplmLMcgxverPY71Y2ipgCWskPQGMfmsvw325IOcSs1/UY1z4c2hKDh21yTJdDnBeDToRT9Rq0ky+9T8qliOIh95bSlyq57GGJjE1Qsjj7VGNBhSoKJfsIWFv1UBI/sg/VYxFNxaKezh1fjyVeQmE8sL1vgzI9ywRyjMd2WeVO/YjUFtrJ6XanhckIMZ3cJYCpS1Z8j/ThQF9lVZVVsV2NbLOqUA8QUM99W3EXDG5nXUD3R+QPZG1abEYaLa8IAcIJKx+gPaPXaktSsqzfmKcVV48fq6qFJOuLabf';const _IH='a20e63712e73875e21e4dd3b3cf49df4327d14fdb4bf9d29ba74c24beac311cb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
