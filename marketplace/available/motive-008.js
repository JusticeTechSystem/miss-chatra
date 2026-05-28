// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wVlXvgInkV+FfiQ16HhP4kFOSee4MB8bgXj0lG3A8mFLQFmFvrC3cK+E6ZPgqFqVtMn1kA9G4AnbpTCxGcdkMGdEPvkXwGQI4dMAnXIE118xa2vZIKLBpzOpHjWZLhDLFmr0yZZLNbGgamBqb11xkgpXlRIQpdcHvxaUSQln+1P880YYiAPSiZAk7+r8d1gxtQad+H2bzGe3IN+QDR7Ut2/QQKEQk+COq4fEiwp9xbkjtMW04zt989rWrlb/UmvbHxR2UEhVYbhKKFxkCH8jfj7Ti2HD7d0FNAd8j4szF9/9pVCGxI0s4HM7OjtlximA0dW9CpmiWBgR8M/d78eU7kYGEzNpcX1l4JEjieUBRN60BG07FcAz1NkpaPvi0E7jDz/KDRq4Upkc7ZW9eKpgerkv84DttkhA1Pj8JvF6XsivUA2650lAJ9xZdFlWYKjT8YTDGitDtyO4YZitTHVMXuqoya6+Y4vxcDVV8/G+0fg8Nr5NnnQJ0I+SZO6qId4OCu8v6o0lBvinrzKy2ExRnrMyCQ7FEZJg4GbKm6AhyN60/vu/pkMQIIsGkrVIixUEkW6teG8v4M00wbgxYsNRg4ylOiGE0KTyFddgXCGoTP8/ax5OupEbJCLsTlq2Qy7SJYgrH6ZeejZOWSgoQRGFljhlcd0LdT8OJNOK4YIRrey6N+RGzyk782u8++YGHz5H1e7a8rj/MLwjCdvrOO1VPvwErLaqRZwJPvae9ecQZYs0Y1u+M7cZdDuplRBtvALXuFPfNl6yBFD+ljRLH2VMkl+POUyRhE5Zq/I1p3Pl3FuMmea86hb2k/j4yrhB4uBTA+BZk6xRgV4zqpbgA8d8MtC7AlG1gZcou7A9Nn0YWLIMuSPq8KaFVuXZf/KABkr9T0FMvdDJlrVx0lBox+GwS6/gnfGJkCogJrN0GaiGTU1/IDCbn69pqQvVZPsrayI21sCggHaGN0F8LUZ4ZH50ax7kYaKQ8tgfTUj2rBCC0ToWqbRBRmZsO+OfuGDtXVdkgXoe8gf5ifM4ddXG1so=';const _IH='785835395135b71408d291b85f499a54ab58f939080d52958928660905f46913';let _src;

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
