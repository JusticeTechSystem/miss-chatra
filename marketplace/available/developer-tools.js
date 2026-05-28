// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bwVKDZx0FJFXB6w0ln5GYwjuVlh5Z1Bm+A+Tik//Fo8m6Bra9n6wo61iF9aj1Vl9O/2OhMPXK9g1xI6/bJEkkM9CPDN2Zg8phILB9Eq+N6n673d8x0pLf7DUD/eV0ZwnNM+HhFHCSxa1+oBxCvHaislhZF3PHXxw0+uAssmYXEUJ2MTsPdEUkZOy7Xkmlqmn83oeS+fXSVLBUuAybLxqd0vMEE7S1R5sExI+fLkI5/SkD5B/Mo9mYv6kAmsIiPtjXr3D4KbmqI+4rDyuF/rBwli1e8ypd0pJewaSkdWo2mGXxuVCLL+1faGOKQctOt/mGPCH6AyS3vmKF8BUMvBubfnMxNcv1CCXGg2t1GaK8fIjF8Gc+hJA+gTBmlNK4oknqhxxIUDg4IzeQ1MV9CC1tOqdhukt8JactnAEjTb6TQiQ3cQYU7zx2WNU0MyAcAyo1BJ5yAHiiwEqDs1a6p6l5w6VSweLmp2HDNzuxvbASbszUUmIC/bW6QshEPjkmn5k6i2NhWeE22mE4RpLTKEKu5OowTfzY0owQ5jF8KEyCr82qMtqhcwwX844U9u4jw6TVU5pTKceAMIVF5g2+ADvHHOCGPqJPyTCKGM1ZldahNh1EtFZ2CzdaL06SnFCIaoCxF8rUXmt40XWs3E/9HFoYchEtcpEYsW4Q32M5ZwSFyJjhXUBhQRGgOpHIKq1DS1pLapR3hFTbdK0N76rKQnvfNjVqPmBfc2LQ41urtBIcspnMv/kxWhrrV2ajYIqDNq2/R6DdAbIUZYY8mV00RgJRpo14iLz0NqKSl7exUZw+lzW+R18jItjZh2cGOpL9+1QR8wturwy5mVSsCYNdmdmhdK0K90q9Dbi6laicrYEIsOJhzOa7BPzuGRUrJ1pehUU16DLyx0Y254e1pHQUlsT/A2UfQKVgXm80M7N9DmIFXqYuBmOrFFk3BhojukKhp/xbLetnB8A6xfstybmwViOwUH00DJCUIY5Cru0GrGF/3yu+gcmFon8d2nwfJFbiK0sa9VaDf4asNOXQyCI/ynUhXMNkp3apDbBL09fFoJLUvNaJA/dSJS7tstclz3OEXrvyoMedRTlJmr9tHZeBCOpw6/NgZnnPCeRHeyS6xLZVxvGBzfJrYF0VchN8WwA4kdUbJZNBgn3tx6J12BFWk3dxxfFssTr9UAIazI4lQsVN+9XurMlYvGuqn9cBBKJUOiJck2TkQHQhHKzkKDellkrKm+PCWTz/z/5sacV1Wr3xLQ/F3FlQZz0ynSdQ5nFgr8Co22yCm3yfJ8sE++fl8UalGN2lugpD+WzVGR+C9TireA8nDSnP1nmvSALFjVypKi6Wqe+TjPtkzMA6FWyjOrsJ81C09EBdfxbgeA3C0e0YDmTTnGuINQm7lOs4s+XhpOY2mpAoasHZZSe7edou4sXXvzjboacuavwhWf9LtK5dMr/IYxkxMaeq2qx/s55IGaU0SIGoXZ7Osq/MxowJHVPULPjK82kAHtFLwyPZb3xS18ln120Vr8E1SdO/ueTNnrXO/ao4pZQ/1m/MN1PsCWNUaEsb/ItvWIfMuMgZOcw4Fk5d2Wo5BNv1kZduntPPMV/2++rQ+Ap+IA/J4ePPEjkJmgnqs25T7stpd5ET+S6tguPmH8yAtLDq71x1iHSTYisbXPZprytLiHxTQ==';const _IH='d9011ba0f06ab819f41bce0701a384a04d1bbd29828383dfb13d80800fe7183d';let _src;

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
