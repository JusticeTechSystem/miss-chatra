// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zPpWdJAu5EUTGm+xRitbYmDSMhjG+qpytYdwYKd6Cjme0YNm7cQfjiVbNVdd2JLQ3BORN+bRtVL4FY657bMVVrWXuwxJmkBYp2gdHmoQLZ/CLjkJgTVsfdnws48R4jM5UFtAZ3WyXVpuVbnMa+BFxnjrpDNLczSqtLUDBspakuIZG4Svh/2WYJcrPLp9BISrZTu2R6iczrNy/A34uaJ12iM/Nfhr5bQkj0rDkYN0izuKVc+QzotFX2MAVF1Ae4O1DP6YPpdSw8MX2en77K1LMv5zrh0gHFtExYzK+4kkJK2/N7JUPx3B0QtMchLaFKs1Nd6hXoa0IuK8vtuGi4AmXtPhx3JGuSHzBD9csl9aAPAs2gtvSWdGapP4MGAmxr1FBCCoN3GuSAWbjX4gx3rrBpf8vSzAS0sczUn3nsUzlY6CyrDIpJx/2Vgaffcyr98+83gYXmcu7R60dGigctad7kk/fRICpLvz3JHeBrmFkUmvQCHu01QeVVhOCARv79ViN84TIFyN2ueC0WGSHvLv13CA+TTRL6YZCuCCa4bWAtcBZ3oREed7YSu8Z5ediVb71XJ2LSnbL6XPhc0aAW24zqa5bwq3asfiiCA06pD9TyN1L2XEsZ9eE2U2bvlZmLStDsjYIPuQE8jHo0EMV8FFO5HtoTckooPBotQxylbDEf+BLyBZZaN4yngIHUOaniuCuEJVRdNVoHiWRfQY4+3ufD3mLVTOEGpMyt2ni6xJ/RI6HGkw/zsJcEYSHMaRHN+6NDCn1YtGUGbSbzPnZ1Bdpstb1h9hCyGa79cRnAvvvLfs9FaKP8vBD4YZFq+TMKyY3sYWmGhXnDJRgcCrL7wn+cUdLsDL1e75LV0xAGhL/4+NsXyX3Cs3WL2CUQ7XhI1UTKovjh7J8kq4GV+aZ0NP/oyeJC5JpjUR41i/EEEktEGgAH4cZkk0vLseswFSfqbaim+VN95k3j3Ccv7Hkwo3wlTdOY/6PuOAxe3bx1WaqGH79SmSjjXZkXI6Pew5ZTzIoMAIdvSqbiQUeihxBg78EVbj';const _IH='edfcf2ec2c2697a199be8da98507513a3d5c2361389550ddcf5285f2b1cc008b';let _src;

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
