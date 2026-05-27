// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z/PHf+Kow29Jr/P6flXeE67xlk/RgijZ5aulUugaD3woGyj46cLzlvmX44fAwszuLTTRzRgsOqdlWAxOnkvOZHY8NZWOPfd+HfS9aIOTYe5reR7C/qVDHAN4B/C8ujbm6/vzP5mbQU1okcBbehy8jDbTjyBLuN7JHP7doeAKO3csZZnGT2RzO+aNR0GGUNngnE4DBkfbs/jJc0wgrUB+nAVK26k5AbkrwvHSV7H38BJSe9bQQIKYnq9tCfwTd+DXAoyNGc+KGAR6RFBQ3L2k4t0J96nHfH+oSDiPn3YWkwOheznmphgdRvgPmXUlUtbQZkkL+AC9oO5P3iB2m53V+3kFTbfIJqbPivHGyPcHbSHpsKWHiDh7A82zN8dN/OGH8jvLY108jatgISlY3I2OUOiTNh4m31cb2IAtPJKNj+8RgdPLZGDeHBg5EMtYvA/6jt+kw2AXk+HFlRitR1qLXXZrrMqPf+NLMbBA9gfG70V+/d6AFLZr3j81vE9uM+lLHbLzEl5ITHs5NCJGGQXUzFZwZyzhb8osbarm+NaPWQwuf99MLZMpbydsjnR77K6GNAiCPZIrhskuW8hp9hCQyonCR3fEGuf+bxaRTmaQyKlfB3ilDMOUWEbyYzQrCA9in592GkHVd6CAsS3Bp79nTOaJBJo6RZAZOqelX7mOrmmOFCoxnR08B5MiPiIb4cSes1w86nadwD+rkyn6K66pKWPAcJRjFZ9bD9cV++g5NQ5njYEbBnaG7qnh+XDN6dUcrC/wg21QA2+evlTwkJbUbvmFbHCbg007kFKeNAZncq61y81JUpgFxkzhSy0CXZQWaExpWKFPYeaz3DIKeAl8HexaLhgjvbIAgjutfLvpGatkrONHWDhQfwR9jp14u2qEaMprBU7jDPRiSz9ugKBufMr9ODiwDiC1r/E7X1ryX8YBMlZOUSc0Kmdak70HKhQfmygm5z7W/IfpoX0rCQVAOVGfGRVK8zdlc+ViwnirOVU5zFzzHehOjIbxcSPtTO3zsaiQ2Q==';const _IH='7de09e108950158c56f37ea4521083d1667e2b2882a150c71517b6e410654fa8';let _src;

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
