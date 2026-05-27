// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VoeqQhoTRp7t/U09MegCE7MLGneZh7h2Q2VQyN5aFBjxIH5tZqnLRrRZJXNcWupu4s/fK2b9ZfUMtArR5OdpvsW6/GLNwVYPvxhBfHEFdtOyp0JG1GyY/RHqDfjMlubl58tZywH5PR+Usr7ZzT/zWAn/bK23QacTeFf68qP524pFfPZOKSVr5NyySaTpySz1jJu4ksQfMxRo9c7pohL6fUGjzOsLOVh8rzAnDt6swgqXsByuDRxPS3xLm2Qp8LxuYzyWhbsRuaYBMpXUMn2zJWYkz4RR9dicg+f8Unm4equcY3K7G5DzY5M9J0jb4Hi2wqgl2dzSNrCKJGo0OzXU8wSj8k01DHTXFyAH10FeoD3U6pOdRiNt1E1Q7s2nM9I24lNSwsyNsx44hlHNUTb+2c6pqm98V2pBPnthjeDsEiK0gzrM1xvl4Gaj0tn+BYN2wPaESJWiwnslBluX+ocFNSwQyGCqMu2Al8QYjkuP796oBCoQQLHN0AjuYDPLbxgJ4SMLBpZYkfKDiZwKzn9RQxQt4gjCji66amXPPbfG3do8LJ55bSNWAQuBWhrA8yQhupYSFNqrFSFuZ2gvhuMmnDFkl1RkP5xla5ufvl/zdVi3BR2sqoxjJCn+fIxXG9VGAKEv2B3W2GmVpNc96BIU+jAKqYtxDsuFjrkURlvYbhcLbEvtpjpc8Ysr1wdtDl9f/5peazj0Sx7jtEmu+V0X8ZbarFIlm2YcBwMmcHj4rBeupaf3LiAenyeilBLolRbPErebKJINVRZ+gHK9DvIxO4z3C+DebAwEauEuNr1VQnbP65cRNoO2og+DhrzZrRPgTbw269dF5mqZkvAKE7te3FkIb3vafcxhuBcfOjj9c90Bcsjgl9+ceLmKcQQI/q9ulPWLPRizPEeyOiEsMFe5AA1kpSxclI33MXATm+sLEtRlOewh2AWR60bjkdJu6RnnVm/qkL3h+WlXkm8oB4A+qPsasdJv7WWDdIid4BBbPhrcm29v6pR1iUZu2Gg/Z6Iuw0R2VUBY4hpz1k9oTh/TcsjzDrIHH4RxHYpXdN+hlo4Lm5AyaBJoKM0UkcGiJ+QAdDhQ30jiKldBqf0lgVa96VQMLwbTqSvpLcSeH7RATCDvNs9cghyDwn+A3siXCXegiwMifY0xrfTVWnA5eScYGBshl3tAcKzW6krpDB2KIig81dYw9O3o2yK1FWqHNBU4P7rdD0bUJbnrrXCNo0wHhCvJykicE3+Xnusd1YT1rjr/o/cFObmwQnPVyacX0r3zCGyhyDpNGS66HCJGfA1ru6dKWA/FuT+LRLwjNQhKMK8mVQDe0kAHFZfrzxwpyFJ7vscKffEe18AtLqMYwFOtGdSwFyquxpyV8uim4OgfGJyGpiDOXuJFwHjSvHoYzKJSYG2vPHjM42zMTMOS';const _IH='b1557cd533ab8daa14ae046fdd1237886d84f91d564eeddbde856cf188fb9482';let _src;

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
