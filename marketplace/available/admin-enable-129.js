// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+lrqw2zufpdZaEwpBQpS0k4x5GOvSyrGa+eP+OEyigAH3+A4NBv52fAMWitTkqKIL8oYzmEg5YM0+SfX2D+QVaE40p2s6i0B8Exo3hg3LTdfn1HGhJNCHMBy6C2/4NROmtVkvAz4COGY5QGUT8JTj5RJ44aTQ8XFEEVmRD8Fjf3Vl9rHWyygRrFAoRNjSmWaDpPq1EBmVLMt89yLRWN2z+rFdky/f5UcTEz7772JgwX0tNisbEY4KKTjOY77ybMlJ1Ke5Mr62gXu2DDJcUDcX35hg4nHfwWb8oQt6/vnNYfY49BijNAc1LQ/uHg9jBQNlMES7F8mWmmzQeWBqxmkKNVeE9eDRBUvJwUsgFwFuycaJZuYJ6b8PMqlzw+fih2Q01eq8/TrUwxNWTfPQk8aWpj2nVPxFKPXKk10F/PEsjzgl3sl6EMozV2YtUuM5BUxxbXbbbGSKNdBqJbNHWOWpjwfpJmdsT17JfwXjM1DJz79qhdII+TJbLY8ahU6/HOFETesBpLEZCLOpPw7YsoQ/jwDgFLIcbyvZ2UWrq3O/iZWueHfK9q4cVAEjz0o314Dice5m2IiDMQbYmsQSW/FOpibyO/KAd6IMIAWb8ZinzX91lLdanOB+YyDJd8kiavAZlT/Ra13qS8QN4vw/FdHomsdeT178Y7D4/Br5iT148Vpoparf/JwqJSWWTK1nic/MY74aYUf44RljAReqkDaXmqZrzxlEcMilt6rYD4cKieMAbTat7JUwvvJTTAksMh898kNdi6EwBbuGQL3qD+hHWDydoRC00yARKAuG6XExcl6l37H+HfdCCj2+AchAZigwvU6bEp3IzWfhzuRdyVE6I0Hs8z8+DVVHcVC0vFVgXrnsHWjKfR2465YhfYOaaXOLiZ9h2zlyX8Apj7JGsR71yBE0/k4Mbe7eOvOvjYsbOxZOqkqDwlRQP7KCfTP2ryKzfVs51KjiYcWrYQvHh2MqOdyajMoINpg6taoJ9iljE8b3J0M6iMhA+xY2C1lUU6RJQ=';const _IH='1d1850193451333590b98dbde8f6516a7be37bcd97f4924184d483c897f92881';let _src;

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
