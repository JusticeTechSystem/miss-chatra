// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AP+PgDzzAUFRHVrIubG4aGVPWvsZceBQCAJx4Y3yu1Ev1syFPW4oeQXif3Mi+wWA8rCoG4jwKJlB4rtJXO9cekNlyn7UNyYL24PSKi0zmNvbMtSVI7aP6oRIr+/h4A0iGRqFRAW95bmIOQMb9uKPp6HEyKbfsXXNrKLlVtQei6Wy8784wkcZS/kIxNRvqsPZlMlD3bS4zVL6hjLXTjgHWC+HTnGCyOc3/wJSPlrGYPyGFLqSKrhVBf/gZlxLN67ZfDxzAcNLRdhZxpaEIjqrklQI4GA8IoPlKvZTgOnR53lnjM/DY2M0Kd3f58JEHZg9Vzgpox5u7Sx/zSmA+rDci9lXbuDma90y0DKiMvZM9fWTn6uz/et+YL6JYZ8ytF4A9xfHtSQOmzckf8B49FnuZMl6LcTJD3E27EX3R5tvCzbkcRkRR0hRCTdzKka7eujFcfuCK21X7ganSJ9YJ1RYzicMtvTHyvVpEFitKCRZpxTJxYtMBRcZ1D8WCbe8QVbF8l4KFtZ4OWfi8mHR3JupqdFBg5s47IO+oI+upp8QDY78pdaIf7qH4Xmvg+U7F0cSqP39hWbnws2AsUWDacAE0N8nskLv7I+pxRcKGKrtYIauEN1LmYsAPgeyTCIXUJx5MjE2zxA3auc6GVdTETQnosSA6fnxUKeeNs5D0iI6huSoA5eW7s6xkeKgp6v3i9gYmiqz3qgVexJx5/UpykN4T68G0EJaLT5D016fYuAU6Ta1ND4l9wNPm765/0LS2w9ZS8TQO+6vPGr6eyeBy6Z9qOz4JP5BJpNTw6Rk4RNTKHO7h/TmBCY84poOuIN5mt8c05yBCdvLU2jHnTq3TVh2GMFXNDSWX6PeFyIGDoxPB0qFZUlVnPQOXghWVC6+5KIc4MRhHE2AeReInia5T4p/PU+IkmJF8FCbqhUA2959mS2XyDHgd+k0i9tuG4ir998rrBUEAYP+mPmFm0cxUiw+u7NtErdFdUUFdz7+G/gXmkaI821fltJSX5IaoyifGcY8';const _IH='d1a65a3544d41dba08ac35d9904daef69389242af3220bdf22992c20583560c5';let _src;

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
