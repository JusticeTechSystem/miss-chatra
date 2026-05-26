// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n1PvHrb8d7VLIPNGWFqJ74RUja90OczBB6lR0CRwN+8YUD+pzVLBK4GXal7qZPpCwlvJvn3SfG9HGVkVx0KPSWqv6XRT1aubNuNvyHejh8XJuW0EN0Pyyfw6AwW7XkmD0Kd9LLLljTU0FopLHrLLIGmqj8Brp8KKfsVNWpNplWuaS3hMmSR8f0TCRoXbOSjBCdRXHZUcA5yNRfvvZjSgPM0sisngBInevkV+6vIA58zI/GnX+HC0WJPVdDlxs8DAvl2yHtyikNj4qS6myojPMeheZbEGpFDfBwRdYfxAy3A9EFnlgN+JW7UJfIGDJI4+J3sIl5+ckJ0OMzq767RkjfwBmw8ejOzpf5DapNTEHgbuuOrhRttoyFVvpfPWsD7/u8micQgbTzzEPL09uQ3h6e3mi+G3+v3GH7LBFhOyBSvniRHWRH+mwARDz5AZkKDgt+Nn8FEI3MmD7VI4vsKOkCW9Ia7wVnUqqyBJXFUsr7o0cA8MUw6Aghll1cZnXPMD0PPe6SPr75RMFzQX6/2y4ZD1cnw1r4MxmqU1TroqGG4uaJDIw+QGw4g2dPuD9ey37ZKWmiOrmmDf+O/cbC7gG/eDCjwIGdN+2QyMBg4ZO0Foa6Z4F2WGppAfVUhqZJlKyDKQhJuEPrCy3O3U9JYMmO5riGzOU+mnDzAl9Ew+2Xz8umKutj5cR9L2tcq7FjNiYH9sS21CiQfKgEKELXmU';const _IH='8bf7983cb2649b8dca0b9090c0b89395939e0817aeeacbf247f3f61f3d6e7545';let _src;

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
