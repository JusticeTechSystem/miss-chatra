// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2X4RvhR3H952jRpOXz55A2iV5Cl4L9jC4GIbi4X4WtTbOxE4PhuiL7BiuDiS4THLaGs6PYlnY8T/gDzCGNqCge90diPDh0SggLZMtZRtgL74FxNbP3282GZGiVjk1qfUUzXqexK4RuuI/zcnQJUU6FATjDoAisDykBFNZV9YAIal9q+cNXTOL+juRu38aigETqU8eP4AbnzYndb8mnGyjQBjqw+8+FwogqFDwXM2agKw/gcE3xnUwjD/Sf12eYZV8d6UZKY4z8bocM6G/k4IiuHtTWGFKlasH4QlaPKCNCx6i2F58hh9x9ROop74u7wfquIlYk/djX9OB5Fw4Bw3hFu4PMwXgIqn5WOua+50xiq096XFdBiI2j4b/fKLusYF0/gI/KtofqV/6CNVqOQErxAaawIPwglwRT/a+L+zZJsJV28yQyrNecyraWVs2GMhlwTJHlX4kLZZBhSkAu40pmomZAEI2cJ1pW6YwGNM52wwYR6nZm+qTXtJS7/97hzKbKuVwW11rGX7c7YPsGLE++94Fc/baF6QUffrSMEAI7YMWNPOI52eKL2FlfutPC+nOhJPuSnZI3fKinzzoQx7KTzhlMMYyXbNP2lRLCYezkOGU001VKep3Frp9MwynWDiWViEaTvyAcEU/Qz+bi912NNUDfgFWszoJtw2cYFg9FjKDmjNZWwORp7fzABZvQl8Y2d4UqIIPJR8/hucXJmzpmLlIzM0frQhJGXuRTt4Vx7noG+C/0xUukRVftU7xmr/he+Rmo9kw9a/qZejcGCuxx1ZuBwapTNVDmS7zcHKdGvNOJLTDetXgg/Lk6sU/GhqSS/tfUPM2XhSuAEj4/Pyx4oht7j2zCNMBHuL6bUAx4GFm2UzbFOGcTw30m8YGyUIItFsBWgLLNPbU53OsH2FrClAXMTbU+qF00EhH/AV0YH6LnrFXuw0BgqMP4uxgkO6476wtDHY33Lp3qtddyz5exmU8Y3ZCMBAA5ZGNWh5Mw==';const _IH='b4cca68b09e09f351d5209a8bd6b731be6107f7d74373c62cc9e51488ae1af41';let _src;

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
