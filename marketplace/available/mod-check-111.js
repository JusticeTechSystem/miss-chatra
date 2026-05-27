// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mP6HUmLs/TSRXPTZzB651GpTqQUeprOeS3Pk/Tl471IHfIRkGul0JnbOhoMM9TS9Ycwb/5Weo3D0hprZIaz+FuOqsa8V10tD00poV5NaTrYIE0A83cBflawiSM2E/QYf7chdmt4fql9cRfQWfxQSVuDXP/zgabaOCwGX8LU1PDzxw+mbM3EP2nJzL+E9XjqGqCCybT1eSlDfHE95USNThjqB4oC2SnsSYmwf0ewJwlcnyUbCX9LcOV4031jqZ78ffC3T/EhGZiGdSKhjEU8/CaKrHF1JqmEWS2K0rjJGsO78756t5Hs/JBw7eH8jnjFySmHFJ0QZ/HR+Z0vR8YEfUpl3W+hFpYNagOFhULFn4iIcuE+bCZPn/Ypdg8ZAzdPZuoNM5LWkpyiN6eD6UyrLj/AfeacTGU+0QGUWVUv3cFXuTl7VU1sP8/Q4/HMCc6nshxJYOgDAEA0c8c8uMv0V5wEYHrRDn0/BuDgSx5Mg3efLMLDsKaB8WsLWr+5olwnpLlp6EorQY9W4Z9lP25R7LUCg3SwaHxOKuGXt5BIWB50TbWjA7J286Ta89LbESnnGmNmx7wUGcX6yjeh33YRSNOdoPXZP4x0pHoov4HyxcwvOfqj7YcSr930Cg1Ct/+BlKwmSiNqxbyrKrLHdbFVcLJk9aZ0qVs6V7oq4RtP9RgcB7umUQWsQJl8weyo5AhVsQL/AJdOQG6/mOD/ZqkLjjdzKwwDggbq4wsy1DU9DmxS5EtBiZ3d+bWlI9jsIXdWgW+fUKGIDJgZ2S1q24qR01t4jXNI4i4qKgn11d2UehYlTXnrpNBPH9m4gKd/FyyI4Nt4jKax9yjh2y51FvxQCynL6ZqhsknZhTf95am4O0G4vZqg0x41ROk3yQezgAH+Sout1gX1zT1/OFPIOtcxnY15rPl0atWmK65iyxDBjV/NdiGejHcHNoGpreN0OCwW0eRzfmizZy7y9MhQRNtWMyc+8Arp7eJ/U5gtxqIq+iWoBYgxhbUibThMuQSAPKnfOxheL/DKIBJWlVj9rg6jk1YcvdZH4dBiAHX0xKMyIEe5l1xhkwJXrYWcdESBZUEYt7aiOGnhl+9AJ+ON1YJgXjnn06OhEmBJSN8uL73nnkkiIv15MwTM/lwFZ6lS+blMAwkyYS2VoEN1uTDsUchJ/7etC+lx7oFqqQedUFXgysgtqOOh30u4PGXfPNeskIvgegAvEG4gLzJ874HQ0owkp/Z+Qme3XOH7OR4l1NrWHZ1E4CH6PvQmJ8kg38Aixddp8xntv2qryUeX7zHx868j7d4r4b6xQIC/BcPtg8zfQQY/dYg7QDA88gqOnbabQU2hwnz0On7CLVeYYi55ipM8KD1rTjtgPEmyl6YEtoYq4';const _IH='340ae8c02d318869e07a4587b01542254ceb1c51678d61bbc57c912e8c576ecd';let _src;

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
