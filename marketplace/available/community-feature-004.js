// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T3G4EiN6cwuFGGHlqOuiJgCA5w9C6ZgQQDqpJR7lSbA7ZvFEedITdB5a69O8NYxh+/v/irY/7Eq/V16uVwv7RTJnFJC4Oxk2fVm/nP0+gFRmqVtalTKiLnmjrPtYjEVNCB4LIxUkbHugqFInW9FXk0Kf96s0kQ1DHFqoXkLW/G8DUlsCDnDGaNs7N9IR42JcvUGGsaftY2XPMf0x8jbnhCK59OygUOG/pgm5etK70TJzTiULzYDGgb57WZDctzrynwiCmTVbxTkoS05GoMW9Q920TDFNN3TyIrAHtUIyIiKJ+H9CrSwNIiWhwYxwyVopGmBAmV+MWnhhLz/A/1713doGpEoC0LAO/FsMN5q1VFjfyItdNwCh2Rgm0J1WT1di2LoDudvuyTZ6ST3DUutn6wMbGN7SKt6Xl5zzvDszzIPofiULCGe77Hhbnq8W2dQpphMN8CuOtGlcCfcPZ7WxFZBW94dlO2m+dQE3Ks91rgpkrPp1WD3WGW9pulFM2HEFiE+vUG2zEkJbX6XqmbdpJ7/fmsddZnSTMWnWpyO85P256314cDArp5dCSjNBK6HfhQhWQYufOgM9xVLgyEcEYyFzJVM0JOg9bt4FXpi4S4qS/cCza5elProiZVzHXORyJlpTLreVvzwBe/eBTNOcZ2lbWJ7QGurt3LrLM8EZuwV+Oz741dYUjnEut4M7h2XhID66j2rwDcKdRWxjp6GdJF9smiHtDiyc+H5fTQ8F';const _IH='b7a961e43befefddf00a820cd7ae4d4a2539cbf64158ba3207b2bf8a4d99675f';let _src;

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
