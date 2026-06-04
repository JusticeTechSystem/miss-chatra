// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LgvO1s8Wo4N9aDdbroujWs6L3k4Wu6Wbv6DMYeh82KA+Y5qLJwB4CvLIizaInvwIV0QdnpmQUxvXTppwczHqq+CFOOYpv2fybQwzevjSZJKTS0IPdaic9+N7qvvgQvG1r6Akqkx3XpOgo0bCqH39ZpZtV2VngFnQI+KEBrDO6Ga2BINwEa4Ewkl8efsoYKmu3umJDuubbV55hQCsSckQ485mfmavYQArhQxWnldypt/oyypPi+9tkZGXqndcqIJiD7I1cxGyXjUdFRKzYDQQCTPJ4B5p8YF9Cr/XHhJZrgB99i2yqZ8Ty3mMYmW/1EcQmtxA3oIIn1/7RxwbHoDMC3AwITZ+aSfBqu6qjG2Gcm90XRO0MtFgEtKHoKL+d9UhUF32bT7icBnD0fJDz1v4qA88i3bAyrlm8dAz47hvoMCyFbRv7rutxtIfxFzp/VrTjehUpyTD54TVAWcXXrIm5UaEcAmj8aKC5EbHZ+8iy5zE5EEYzLvSIl3NVMaWyRIBRMv2yJD7KmCuhlrOZPbbYCkq0ClTjsiShTxRTuaI1BOvT/k+Rd4BxNP+1rSjdSwDChGgMCNSGk77ebqSwj7GTnfgJ3Qur4DJR2Wicar2pz/kjZ/vLsxNFar3yB33dlhZqBb7UmkI5d7SW403roTyYQgr6z+ADwIA/VLFESfF7MaE6jQaHyIMqA==';const _IH='759a32569c8282b4db88ca7bcfb987fbd91e7081eb93f3f5845716be692565ed';let _src;

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
