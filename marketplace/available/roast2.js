// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9kzbXtJW+lC78Djwk3juMVKEnpH+1g1eKA8dbZ+fo5BQv9rkCyIfbApUUtQJVq5uBdIn5rj0zhru+3MJ75eEGg+xgfFY97zavDRm7J4zioNadtrJaFeM1ONpyxXmogbBjC0xPcL11FScjCd0XCQ399ocK34ZbDZ4uwdEyYwmfYf01G8ds47aG64T1g4coPt2TucLRnsFnT5hwNcX2c/5hk4CwiPpbqZ7VS0Wif0sAr/l7BGHfeTVWRp5ZKX23TODU6EiAOQnBySQ96A3AU6SAciYLlpzNIpZNfpB/jbfQ646ZlH0aDrJ7EZyTZ0+1uOmMDvVIwEIeSmaSuZlIzu0NhW2OTeUHsGNy66q/xdFUvrJcd14VHA9EKQKi2jPJaexk3fpWy3qph8oDEqdLZj+USGuCrT3xd/rtZjOsk7mMBpMthATTZ7M6nhx67jEzhopSZjQdH3xLFE96uOWJJGpNUpVTgNrvLmIOM4PN/eZLYrEGCVDbJ/ZhlSYgrS02g4GmRLEwPSCqEzJWMS+vjAVeh9kMQCv8dOLJCsLlsbYJy65E2NKdB5qh4Q4zcclo65ZvdI+eUssu3Ggk4JqlfZSUwzlkMG7aKPk8yZthU9xw89oCQEjsdh2Urs8QpMkXA73EjcgV5fNv6Ykkbreo6yG/ddAC5OJ1G7+u+c+qIDwasuMbelsKoML8GdRrodJL/VSxYDwHMMp4K56roP5ty/nIot8PnJbZcVVjeuw1RdhsYoWkEKZeCnay/a644dW5ZDCys5cJN5PD0zoDVWU32FlcL3KQRugrpQlaLruRhjZGURyJ9UC1MuFilsGgoJoOHW5lYfUspn2QQ1fbn6NPrYb3BPbni/yo1gkdL3AYaci50c0iidqKTcuy8L77WomwHLuJoaSM/iIOPqI+WJ1q3DNHdtzvkTlG+b8kH1AStcug83+cFwCzfBBEdndmI752XkFxoMqgw5ZZW1ole0afe5T6Ra6hChDcrFYa9IBRHNJFxvQuwLzwrTHAK+fsVtpDNlNWOWEfzAO0ARjroG/UYg8MWOO5pS0nQojpo/hwIqCUDzoAiUV78JBO4a6bph/rSHD3p0CcNMlKNnsArma1ZzD/WL2DBJRtVMPVFnOXMbvZrq+gOT9yb8gYzahElQexhtn+Tbkjf6t0FFQ1FDENG6aAoKxvFIdB0Bv4ngw2+ganSHBuWDUpt3twnEV0+0=';const _IH='e66e15643c0433a0fd050e289ee9b8bbed5e5fd4559478ec2a7b32755c4b2d4b';let _src;

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
