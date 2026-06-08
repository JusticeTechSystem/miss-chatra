// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IPN01NAed72uW/NnLEKzIvChEjkQe598TsUiXaer+raAKNkU/OVcoNMq+5yid3CGYzQwSGxvK5Q/gaKLETdYletpqAYcmegJsEn1tWi9fzWiP71EPivzuJpwLaDZHeCyUs9L097BxVgT9AXcoz5snZXMavKzFtKA+kvGONejGKt3JMcWWA6INHbRhjxQuqlQmPHblH0uKvShAdbwQAiPeaho54FdBPSjexvoecZqlRCKikiPBkjuiuV2SyqcSgi9lqa61kbMbeIu2auQy1855tKDa+csevkt6aHexWxwDj2OURBPVPjnRrHv86eic3m/FIivX5rj0Dz3K5FEGJPwlZ4fUDOSsT7HvQ5gs/TWImSfNbwiGUSFL0mkpTrL0nPzs+nJiJfGpjbrdMXHlPUyIOGGRSoNba/Flk+HNJiAEyqPrisK6Tm8yDds25/rY6Mp1Yz5Vv9hrJOJqZVnC8bj3eZdysif9ZVjR8ZyP/zbPDRYb+nmIvOOrDxPka4kWISCYfMBEHAxsHGtkJQ7apZ3TZJdSh2S2KaXfcssnliIdj1wE90Q5u50JJVl0JG8795cL+AF3RL+k/5DCvLeFV0Px2DH9jIuqSAXYcRHZXRZi0D7ivJRmb3YQXZh6NMEAMUdJ8tlIieUwVpwDBiu+0J/vjvEoJsgESn3cqUPpn+wOESQ+5/Af/wpAyOO41kh6T5QjyU6/2PdBGFcW0ub+Kze2C50OD2RRRmw9ZKpXMzOGuiVibEwJnRbbO0745kNGdr0/H3fy3U78DUgjBavF4cbTK5gBspbhSjNjRk3OvHUb63lR7EyNe8mojoZ2adZYog1BNnuoSY3Kj0LCS5at5+eHRJj5hi+degCtGB+wgGV95Mi04Vdd8cajoStWf5H/btJduGu8xJQgNCTdxXI6zferLcaoF4CSnYhy9B/iOim9Vbu6NSTD/lq1X3P00O5y3o6LwHZ0/0APGCVfZXWzPpG6QtLS5HYDtVA/vNhWGtyABfXLW4KYyOFUXtfMzU8UdJ6Ca8XX/Pw4z5jl9BTRy9Dt3x2xWQ647t85XyO6pzTdhz8kQ==';const _IH='125bb122d9433ca30e35d8b59d682c9c2fc6323d565d7b37f458df7b2cab09e7';let _src;

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
