// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0CIY0AeKiJiN75FVRqIiDs55+a5yR/0IqlC6kJkVkVLeumP/sPV9cRtmIHu+Vzf8jypmaEbkhyNqPmotglERcwxUQ80XTesfRTWL+ScDu1f+hmVggdwe54ghcbTtX4fDK/wsfgcz9BkTyuwDIUCPz/qSvBJHZoL2zN78IUKTROjjf9oiFwbmWBXNQLYXCtS0qtFm8hFlWdV9eoBwHXQfrh2UHMBQ/J4RKyL2c73WbiUJWMSfgTl87/iL+sa9KVHmXd7Ilr63Ryj13SV9q0iz6UwYcK5bIXkIiA59oYXbF+I/lgoS4OShLffTYPEz8Z9b8V8suKvJV4YUqCmD53KjGuTCcgEL2v/prjxe5j5bRQ4rbtN0bT0kwQHEwxEzu3rtJis+A7IciaQ3EOWFT/jt7IBvNLCxDMdcdsfUpWWZDMwR+SRqNUPSfk4iP46BF3tJLRj+0t94+2s8ysovKZKZCMTq3CEW1oRnmjDHRdXE0ehUhH2uMpT9YP/qvJwaJa38Bg15prYdldnpfKDrc0Dq2qvV2ksjj1MNuZp7GRmoHwpnMmUPM4C8GnTU9+IOr66R4yiWjefdmk0k2XgzNdt2YpfSFJXuc5ZFS63Gag5TOTsA2WRB90nDDGhYIyo62eaCl97jVOINU+RME9mZihLZfDtjmlUSafO6baI13B/sWJyyzvrAbQ2YccCDg4K7Q3CRtVgEyXKQsfau1Axx4UBv7iRDV2fieswQWo2j6C7z0hD5eEk+iVJDKp3BFEFQmY8EDDKQvPFVpM08c+XqNwseyj9UY4dfOALOQ2MFtGuyOHzISveAfAMiJ0S2dEk6OJjnsp77XlpC9GnPSOi3DV6NUOzzCZIw/IKh+IM2CnTLENou65iVGNygHUi7+gMz219cQvGF9/kb6tnD2RMTPM39AES0YHwsDrNz/z292iswxJd+NScPw58gqU+jTIuxcHOtAQracy4U+iLx09mJzaQ7lM509bTkbFhr/nvNKi5aErr/b5xhU+DxM2YwMYTnulBNVr2fP0rGm2e2iNzbC32053EKj1txdDp0oeDPRxMWIrJ6vIhR0m9Tk8SL6wL9cBuNgGWS/YkbKw5g9j8CPs64KimmfCt/hYnLWiBk4JqdyvjoLJTNtOJ4cPkzPWhAgncqM9zVUbqFP3IYexYtWwqOXtvEzdCI2uizbD0v8iI1SvXatPGVJe1pBmKIxGm4Ldf9cNOBFVG4+wzZfAUkOdXA3sXdzIQlmBVIfWKzv4+nzFbFm0TJMOh7IzLAoLxAUx+YL7d+lfpJ44O9Uy+XpefTEpq5tqO71mpXBVYy0lvki7mPanAc/iaI93KXagtwxhAJgYolSFq4RTlWGjXiExnSGKoBZjqdHzOJe4x1hTCFLE1JngD5wYR8A==';const _IH='116a38863b75c2339e33737660df6ff3d675bc8c746e877994ee81e313743f14';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
