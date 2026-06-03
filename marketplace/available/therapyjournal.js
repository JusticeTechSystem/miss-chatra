// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7K/AKsp/bqJXjEV6HjoGNJ5zSdP8Z2gi/C8YDkevCZVjEWeNwZlrDkaDXYCxsyWQ7rQED+sM0jq2PkzSBwor8QRGwdOCm85DibaLrSyYi4BOYf1tEXYHYyDSvH32sZ4Q/02NFkXjil0Qd59kVeIozLwfvDo72H3Sv6SlQLK+8Vua7Ugij8xiIipqW6mlfzPC25NkKWxHz1xcTj02i2GafS9OiEUGJsXZzB0rYZTBRTLq7roT1oANz7xsnkMNvKHsjLjhBkUUkbudMbX6M3HAF6CwlFp6tE4GdtvcIBBVExA5oXBaplIEyy2+Q/3vZsR5tfboZWk9ru4lsTBVxm7rDq1mPPoPxHVIfHT4g2SEDi9sFhlDEgtJGGe0l7x27U+iHssXvQq9iRs/hrc1ux3PyVa8AXYB86CqpJgSbVlBCx9OOjTXvSR/XRUiHjY6ubW1mkymk6be1zsKikn4Ev9mj0c0dJUpqrUY8Nq+yzyiMK2Hm2Auyp9wQmsqzNqvUbfrNr4jbxylG6TNUnX4RxcXlgG9wRnHwHAuCzE+V5UfRKYw96DtBIBYjVGgMQ3NavXeZ9XmmjTA7ednJcwynum4YZLZvEaikOJHP/7peBgBX6UBD1ugSuurR+vs1SRc2+fbQa0OutwjpLZlWKgckx2sFZMBJxuWnSRiyTfR/4JBIC8a0zWAlNWs7v8lwXgLFlKACm1X7rig1w2DQgzqJBP5lFxz9xG9/fKN/1+DaKcbrLWnzNwQXOhQy1A3TQcIcoc/TVdYIaNZKDfd84R9SorBs28yHernTHzqeDidroMZKeFb3VZNC7Lro+abiFrPue/5Dhi47VdHoACXG8o8dHH8xDXyWM4Cv+mpouuG1eWTX/wGBBLv3RVs+Tb7BY2M5KxeXcRJ2fz7MRpH/ePR2im1ug0u7cGCxIyFrkwegJrXWyYtJOdY00bfcTUdCZqxwmAdUl/X0x6uUipf5aOlFonMMRv9C3wJcrYgGMRI9WfjoTMKzszoHvun5PgM7MjBM3F9CTbOlBI7ENZNPyA/LArmL1FFoicQHqyc8GT/8ZGpFJNm3+vcHD4izsiJNfpLPp64M+l+Bbksx2oMcAaUMWQYbWc2cUCrpt+Dur1An4aSe7FRSuN+mcObDyidJYCpR39RKZhwyhIwC9huDb+5o1v+jTr5fCUW9zYYhyYHTEwtGTrrc+sYaLCrP2NlHETs3aqnqk8F3a2OMz+lglVHBnn9DYc=';const _IH='f759d788d759209afca21e89617d0340e44deaa552606e740c61eefda497e2f2';let _src;

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
