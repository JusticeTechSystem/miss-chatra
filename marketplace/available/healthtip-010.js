// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vDW8+MwLoN8WdcNDTeD1QEBb453kAOMXkh56UNpT3ix7IosviBICKNlRLDW+raSccPdaKUiZDy7Gsvh03St68nvK8oF2q+pleYseK4cZgFcQhSr6jiIl8Qt6nwmW7g0x/djXlwzYnIHH6lHXDKJwed9TBG0lMHI0XReqBg//6CmXkaP1Wfxb7VpCQKTmgQDOnNWvMNcGuCzb6ucfGARwkARuTce6IwyIm70cEHIH+6EBHMZZ5L2xwPPCaForn9HmgA7c5MLkMkPVRFYDhaVIjU08Nm5UJNxWYSkS9TS1qheNE22Z+ANK8S5F9wb3NO8izL+bg50OinGoHFIJVeEz5FJz6J0WnMiRW5nAHYTqGC7/T3QZvbX6gvRTJS3YMJRCL6i/9fky11gWSoVOSCU6OItbIAN9iugZPC0y3odzx9hyzlluuPzwup2YHrpHqD6npa2UsK3TeSXrjPUm397f19JkFXu+IL5Kdyb5i5HC0TyVxV4UoqbnNzTD7991W9FJF+sMGetRSyQPAqT+mcE6nwz2OsiJPh7AexM8hBUqIWI09yMAcMQo7WX3/17ejO0bQsQACmRACCLkrRu8lY5QEyCdnBJDp5CV3k0q0q5JNqRmqq+aH2JYSMHqGUwa5pudfLi3smTIxtyDhbp4ePaMZ24H/0vycArYamBerUZtN1MYc03HT/JkqBV5iFgoyHnKJ+Xfk9yYN4NTbvhAWxlYlVyoYgGHEkmho3DEZY2HHKyuQIY9zdFDsdSx59GiKOKW8QAMRZyqFLUpBqveja5/BJ8jj16pLkmaaJxQjIZU++Lhz+ncwp7Sowxe2ABVhBN+eejwrSOC8SnQrYbhKnyDOErG9GQZoxZ3GtZa6DJUPyEYOAu1fjHfLffZkj/cTAgAgSH61DZbHKJSfhYqDNupCWhYo5Ue17VbubGPLQnWQUZtZ1ccze0CthUFGw==';const _IH='dc50fc18edae9c156300423061799f6cc296fee612551b9522de70435c8972e0';let _src;

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
