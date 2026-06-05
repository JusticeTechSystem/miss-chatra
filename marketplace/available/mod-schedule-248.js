// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ToJU9UYf5xlgKIIroIsZGjYN1J1LfYbSMP4HNq9cRdDi2y+o9e4A17IZvAOabP4MoR/oUxEVVEaiy4u2ah+/bBb36bwXAsdORKZnKrIpZwXilGoOXR/ISXsFK6jEJ0DWOf6CH7uecSZq5DYDx7SXcfD7bPoZzFMdFbNXgVaKtK4pydkKQ+ydhoha3ErGcwS++Yfg27sq5i6XtfDl9tfURRIlvRDtlYzoZxg6HCh4h1l+a5Hf4tkO0XS+RE0A8yQnTkfXUIDlBBtEObt8aDVjpMgtVFR3TAj+rjZlCPRgqNSk7rWBlhfn3Q3WqFpwgnBdjrTwfFVm8IYfnECBMc1bIovqE+BK+NAUT58hbgMBZtVC8fVIqAil8RPtve8A/fVLkWQzSOXLT6dyr6hVrfJOB7rplwnh4oX4+oSKEauO/LC8ej5f4CsbOJC2wIac7qmK64/aPY2z/617FXMEWCJYQMWZlxLk0us5oZSQjRsFLd8pHc2eXnAJOvgd66JeFBhdnE4RirQQDK/ZH7r4EXAX/8A/WhYGc5Z2vd0MGF8UK3ivRxwFdcDNeBVVI3nUKQUil3UjleX3Q1izy1sHJcQXWKV1wAkzxxL5qf8sHnt5Th7aVP/FpWmQWCSXlikjhDyfOae3qzh7vN9hXPjf1dVJ+O7okU/wNcfpJs6sxhSmxXReX6C7lqinbOcLpq/+J37BitrcKt2FSuYHHNgnTGJ0PGVdW7+wRoZkhEmadMsKW9+Eu0S0Kc0sQfsI2OL5v4atlIdcJPTCgYwTg5eZ7hesDxrrE3RE1HClvdgZrBPqDA0lNpj1xa1u9W5ey/3s/JI30gFPv0wCupmOaOVIpJIxjMouQUG0hjTbjTRupLQ2pLmhsyD//CldxPVuo1ndj9KOylCzg2V7MHngfF2OHjlx5oj3f7HJl/37FG2JDrA5ABBgnt2mTFZtAh9iV6caDQWt/YtE59RABIcSlbeZlC1ohHij0k+e3uPBYQBf2Gl7QPMbJppmPFlgbfb/IOrX/gO4sZEcW0WcGi3KmhKylqNxssc4FtajNcHmVQG5nsNVGYINrkVy6ixjdDrJgUmwrb7LfSxikmVCAhtdM7VdxjweWwffk4/KIhE/OgZmwHMpGfQ+XeeZVKYB57lqynfezWM+rs/ZIIc78axqWAz6EF6J0GSV+L9gG+lvGZHWjqNcporYAYyBSbZFGHxSVDR+CqKuvBGwpJrsyTOm43DIWhCf7fUBDxzukeSLcNnL/ONCnYwnVHHYKEitZntZKdXAWsCXDNpbF+U8k4691DvgxzrX2eGVa84C8CK8yynBVvDRqxVxSLR3w9F6Ra34ZP8KAlDynDZXaY1OAASloDJVlRgQslg5KQVEgn8qGdWqGiiq632lnI2197k7oeQqD3yKtL41M2sj1ETI5tkYYcQ5';const _IH='30674617a0033fc8f23622cbb8ac17e9dd123448507a340b472f38dcbbb2652e';let _src;

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
