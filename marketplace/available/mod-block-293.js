// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzpCa34tGm3zW8g0Sl96+19UP/YF4CSqWHcYhh8i7eAnfgMDPbZ0uk5byo3taJzWg7A43xb4RScM7Yj4bpab8OoA1ctAjrffxTPhC4Cw5I4f/YwcmAdNJtgGIK3FGjnt8GizqGUxaVDmDWCMCbqu1u2qVrHXLo1cveZVsomv/Fw5bQFmmXnoRmGDs60LttAdL7TzzS+sRH/t/8GCYrVOt4FYUlNMbSgS97JWQ05dgwf2H3qbxp2rQYEnGB26Pvmokyjm1z8rPb2y7gUiYkHehP2Io9/UikAE0BkXfPhMNAh6N9wGRXUwBSKPWTa31Oq3nnpOnJs2uZsRVFalLQzS3u1/OkPUIf/H6+tRos1oFOSU7XJ7BdFKUFCuW2MBEu43qyJ3N5j9sOW6dkrC0BRWxuLZ63jESCCMMfXECgykDvFBZcRZ/J4SJnwsc6wHIU/KIlV6t+EI91rvFTWpq0ena8yaCeVzt+yb59qL5GV1JtLj8u0DWTbaKwtzJdzk/lslkF39K11RcN11c7baPC7WTSiWcYoPj27o5MUudvJP84p0f4eSemaCHdwWPKRgeaI4F3tRQGWLL0fZ8xw71WpPSBpzng6LKCpO/LqXoAiFH7R46fj18bpk3cOaoUh2czErffCdbIaxpON/5P42Jf2b4of271ZgbKrorFdrM95jSGGfdLHyTquqMbJ/Mo9Aq3VrrCk/j8+vDfdtaH9PG13C+Bu8OoJxKkgXVzQfOrchECTMTRTdVr+vfBYAT9c6nqTWjuioeQCs0xs5+arWNqCU3cBRmmEAQG3C6xowXLfSQEK/ZuvGxtW+NHq+cSUEKRP31FdEof1EOab8XtTzEL/URoOLTLS1dXqQ6xiD6C5iKkbn+Kzk2OSWtsecmE9/kwmlDRh2BtGapla6rS+ksv3JY89Vez130EgjR3YcjHWay7JrCGSJX8IsMlEGnkmBFeY5x+nIWb7HC1MFwCskcwpUriqeKFcaKIl98fUKmp1O1NvZdLIP3ZwJVzPwJB1Vii+E8zbZ9bakQpLtMWUseLCHwX++dpimvLgjQY+R+fyGxD4iEs7P5h0+Tonjl5W/Wxv0Omjel+YgGnPB5oLPOw1ruf6WBy0PnDf32cVp2a/McACv6nwyDM6N/m4rN+xS1xQ9lK5rMxhmykzVqSt2WO0McqOI5+HncqDuXrNWZ2uNp7Q1EaT9EJOEgyLZ18c9LB+hN+Vj+/gyY39FR3LKMmJlxxUkMobuqHYIzy/bOPWceXV4N0RNjDnGuvjRHAti6qYLNR4zZdkkwx4HD5gszmSeNMkvxkMlofNpfQuJrNzshNi7v6AQK5ApOW3B3LLkTvL13Svpw+wOf6Ghpc/DKpB8DLc2KQaoCOGnRMzYanu/yw==';const _IH='ee490483c65bcd0b8239e68954c1a48a7fdb42e16ed9a115814a9a59e17f23de';let _src;

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
