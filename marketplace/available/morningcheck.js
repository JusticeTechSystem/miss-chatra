// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LQatyngbkbL+KjTWyZo2QWVZZNJONOPY8AYwBh4RmfNdHGfFpXVRX8sq/GG2/baB8rvX/zR+9DuuvTSkWpkEJSDDBrqfxCq9gbGFRbB2gJsKXWaGjXtc5Zv2Ytalg7PVyPUrGN8+VNf6BrioyQL0hunmzwqz5P5iQ0O7LIiHUfYp0ogmytTHtCcpcdrtgMKTy8TitFEiAhqiGyrfUSq/1ap89yrVStG6zViUQNlVRixZjKHkQNJ+LX/0KaDvL/T5n50f6Leg8p1sHOm51IM2FHOR0qD/lCgwBq0kiKHh2k2lAJjNXpTUyCYmSpivpNRKJq7h55s3fO08co0AmliVnHWW4KxSO6z/3YbQWXnjzsGyxC1cT9w9NjfZYusojK+vU608EIKQc9KnEVWmWAviS5M+EK2L17XCOATUE3dkdsIRsJHyPofqFGGMjIuy/rNvElyRTXrtqz0ty81WbJ0dp8V1dI/kH8nSSoj9S+VtBRwLWPFkSu7MrHa9GPofqKgVGtyABX5j6u9URPPyxTiX5pZWg4/n9kJ17N8ZLyovfqnWDitw41QaoY/l7/zbeodZ0oJ44ujO1xGdl5dg6S7ONsh0D+fEoN8zZbI3xQMCA/k/jMn8/Lvsy3D5QrLCM8Cz6ihf6fjR0wPYeSU88ISxOQiR3clSQ/6NacJ1oVT/i/jsuVMvG4RQPhe+pz7uvZOfvP845D+4F5S1WHmA1elMR2Vx5aVKzD0cqNX+GIUvRiM97e0EnB7/oMQgPZX7IoUYzGCA5k/rRn3lpv1JFaCTBTCpXoGSae04+HV5u2M6AnvQupHoG+smEVtlTC/n0RdCWGcZ7UU4iGJ2tmB0GmzYbgeqAYGC9A4QyHGQHpYYl9Ov5nTf7aSBmIWGqaym1L+JZAlLyGAeRQVKnjzfjqXYCeFM+yCUnp8pcNG6siqLDookt1Iq0VmtapBnKYlfpd3p4JsYoM2QzfV3L9tKVH1J2EUV2p51EBEL9ZQEg/y4EcbXD/WXYXr58nuXz9jmGPiv0MJzkveCz6kucnlo1hHvysBd36qC5SMXTYm0oZJ9QyLn0WOuEfuorxp29fpzcfc1cK2uTBNjUYwau2cFl1UYDcR6vPrzjCWWyK54X3u+UIbxMKzeoqYwHdSF6rSH+kB01UV895cisP5oCkiK8ZRf9f7EumYV9sPMVzHmab0+Da1gtOXUgQuSJ4owDxzpnVrWz2OYRiHHFYtJ';const _IH='7bd9a12248a2770f0fdebce7bfbdfff3a61230bb8f215fc607f20e56719ee5b0';let _src;

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
