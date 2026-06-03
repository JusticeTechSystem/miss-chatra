// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rgbrda65z7YRhcUBZKmgWnTuFRzvjC9f8ZSN8J7qlKdoZdI8RiCbfitvdllGwTkoHbjCHgep6ckBXv6kiimxZdY71t23QsAS07zJhEHWODd7GMbRGOQaSruUowdaJUKUHonExeEVG9qtpJzhTBd0o2ofVbjEeQfr63Oq8L0dJX7rWJz5f6RP8dTq+w92D1SEufPVp9v2v2YpeIy2+atp0tbn3L2OadubglyCl+PXq/FxSv41lzmFrUftHp2ECXzw+vjTQW/Xlw7cRTeBvic5sxNu4iggEyxJDQldX09PMO+Ig0MVjm/QMt+GV/CYHloGIJxJSZsM3O4/NZTGnHKz/CZf33EMzPl7enQAYSfFhmdTIV3diczNRqJMzzz0u4NEZIgvWNDwAZPhLYI31dJKysuIIJ9mWVXWrPPRqCAE0z5zYNPC+GMaQYgcUXMbzoDMFYPRMGfI9d0r9xBwWixJOZmMPhJqo0xlBWuWcdQ7HZrsNzaJ4AATPmxcRyjTrr308Jmc1ZNyWFcWjncAQ4MB5Xpf1eiEOw8jRMaJXURDaHh2G//Hryv9/QlY/CHhZH35LITHBWnjFpE1H9Y97okzq2JCLrZ2XmOKHIYN7+Xu32X1GVvNLVNFhYlY8dS525h612wkbKdtNltU8JodsAz9uBediZAAgZqWaueKB/bittLGJt6yizLCsHs/UV2/uT8yuQDcxlShMNfI0VnCyNLC26kGkhWbNBh9GO2mAA0yAcCJJZqcSJvQ04LBkuaKKJ41bxVh7vjleKYrGkk/zyQ18lXN9e06Ns8MLF5ZNEmUo6YAzni5HGDHC3idktsk9Fplb1mH70GrbHCdYd4zrrBvG73DXYuNoJ8JAsPxeFrqrLaewBthJzOU10LRx42nd9l5mgdWkVenAP0mH9ACKqqXxAqEEdo+kKbleQ54zwjnY1vfVsoAiMAJYIh7Hq1/6GLxt8h7veIkXf8sbaYncFB3s0+LNZnVwcksvBTPyYt3sRg08lYD9s7dOHcjJLjl1nqVoKkpdWeJsaELjyQ0Jql9OJwX';const _IH='00cac9c295b810fd9f8a7fb5f5373569c381acdaceeff47799a852c6936d4672';let _src;

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
