// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pjNX+dyjn077nFgDLDaf1O1aZcfl4g5TS2rMeEn12Pb+vWHJbLTBkupx5Nf08aT42yIhWtxz6429VO+bfyyt3RON14B+OfEhlJlDhsv/WuWbZXVqYrAULRosZlx6pLxcK6tO2bUPgqQXfBtolIaU0jgyITCzJeNDR1xBLRGIchw9fH2dvyzLHM5SHcZuDVZhY2XQo3ECfaraxkY/kXQlEUmYmFHVp6bXI/b7NpnRGHA1s6qUvQt86CZn2/6q4QqcLRUqcC1Qud25akxCa1QowVpbZS8pURPQgX7qVHkPCfyysJqKRaNMrc9Vg5s34W9uJNRQ8/0YoTPdYYWOWz1eMcJ3CrokBexmjjh3L7W+1/qbrcwJRtkdyyQvctb/ywLyP1fGwEK9DHjSdoVeobCpDMufOScxdzuJ84Sr4zVTy8RQSjVJtJT9s7nHdQW74O7nXZwWTOnpfyWtCQDjnFxi2CqhxkB/OLm+pRTM3yT62X9aa537ojzNyOQn8zdiFgkIqezKNEP4eJ6wcmaQaaT4JIDY3euahfQb+tMkMAfcKKJXA2TgIzQHrC/bKCOz5yo/h0oEvX41bO7nrNPe/pinzLeehwlW/rcCTD8U5wa0cw73OffOFCycJ3WeLGjBrsS2cdQoTUXFL7nCw1EW3IsEaRBBhWOD0WMLkqYdRj1peC5faMXoLSgL+tQMop03WEluMcI0roLKiLc+Q2IujGLlh+2f+9cQyOcv3aqy1ZhMid8FlGkuEFtHaKNaVmUmu/YpaHODbOdwXGjvhYAI6ZuRZLeca9OMotYkHgHHg1VC9IF7aj/v6TFh0LTWqZK9UyIhu9H5sYHiww3s/+o8d0P4fmFTuFHbJa51PGQ4kZWrkPjLggW75fipdq6QFvBBH7Ap45B3/a92JzgZjW3vNKxSIAk8glKOiwHhJcDPH3CagjuoBd2gg4//e5GWqkqlqLwOpmsn4MPvWzVUajwn4/0qqf2CscARbcoZAmunGrU2+dKI/6Y+lAW6PRN5B216SDxG2sfcfZEwufs=';const _IH='bd59e1218f649109c32d1ccbbb58303f1cfdb94630d80bef98ec7f1e810de7e2';let _src;

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
