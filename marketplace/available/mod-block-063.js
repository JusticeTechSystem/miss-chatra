// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6UsGzxbkMdsSwimc0xrvK9TPnPbIC6gEuM0AW7UH5JqVx1Vly0Ee/QZVfi/wuZdD+IYKrYfN9SHWmA+7JsbBf1c9/Ohms5+g0+eFDuf/ZEqal5PnOMSQZCMk5jtZ1WmnCBwc6VtzFITOIjaG9T2qx1pl8Dab8q2IpBe0/gYxYf2ALz1vDWnttH15UlUMSL76WkZFhX55cab/6UWeRzYBqO0KU2LMgNpgnBleAA/k4F44ovnUzPLEOO0J2tV48ARKFoOt7tUK7YUn+e4VSe6ESqQHOY08aV1NPX83slxpDP/8PG29Hs4HZ/gIrGFpCiXsqb969IE9mLB2IKUJwv3qZHrrd+DBPX33A3DkZsee4viol9OqOhSNJwZ5UYYMLMVmxdrc3V07neci2ZsWq9WReN6KBJ5RsLRsIGvGcy3syO69t4VGKpXUg95uXvomMqD6KJSzoLbN8z4qLGiwjQwAq6b8vmhj2MYsHfJH4FdmfN4gM5cGbxwDdadLXnd3l7gbfbVRMf5vSaQK4nayZcILZdcDZTSOB8bILqbRsOQHEpqHQzt2HchJmP9tX7LTMWKw/HoIszifDijGfDWXo9hB92Umpbmrc4JjUILgez4h7GTm0Gww029jr7HzkSWNEcqmc83O0qF9Jm1Dhs9cbuLIlpQ/YZVpBn216KKR+Svh0OJ5Ut1Y1uolPYnMOsuew/2B+mvC/9Y5QggZmMODsBHPDq9nhM3WYUSEzzq5oBveusSbr64z5PAoq6SEFaQ4wXrupzyv6lr4i0SAm5SsvMEzsZfOd3INFtXba/Y8b1crc8x1yzeTnxwRtfqx/qEW4+HZOTHau9jRTMOc1YxIxZsMbqWBAsOPHm5aPzJgDI3nGmb5xOqoFQfUhdIaidrdGeS2xFROTEmHtrv0eCmSwObaF655pQ9ae4UdO5uWCvZ7KgVItJtlqRMtwFoGK/lNh4REaGOQl5g/UFPncescarTLgjTZcZwC57pGVT/whUpM7DNLX8lBBiF2iPZWpwPJJOWejj88AqWTrjn7dXC6PqxTy7VpSshPyiG6S5v0Q1FsV3L+N4p5LYRf0VZ4ghzDqjyeYyCPPQUCHIBMvZElILo4q+xQawdajCzf6XjnHycKUrj3AT805pT4Cqsv2NB5ZDV5/wiJD9PWohvTpiX1SWHl9JDQQvEBAyZ5R0zGKBLOCPRboXucryqlv7DpY+mg18Lnsm4JYupmYo9G+OJtfEDSB1iNiuNdA3E6L4t0ES9fMVXCic78GStB5SPmGX12OOaCiMxgHW7A6Nq22oEqtD+dcmBPzOK1Jy9Cc6Uo8ed+hP5+VE3CiftltjWScYXiWuZj+cBfuOUR2wFBnikdAIABY2W8jATjhAB9Hw==';const _IH='8432c7559f78ed6ef21170b2794305137e438bfc72a234cef665cea0a9825a63';let _src;

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
