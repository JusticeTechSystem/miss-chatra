// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VBfiAtQzYvLoAitmX+xqyITi3GBA5DBmwAyPuL0kBUxyiJJRHHudpfQc+iAp2k5gTsVLcYTp2wZCNvzh4Z/bj76IEFUm0yg6nP4lHrOg3eAFLqQMN9FsP8UJRSEZKAVlSUscFt4EEYnK3QEMV0KImppssNgEnzRc4Zu9/Eg4gDoL7QtkqL0oyVAL4AoMtMjeWvCU3x6W8cZ53ypPTc/f/R98jzzK+tNHxq5vtrvvjrR9KSoOcbiD0pBYdtJHZixePVkSAe5p1xoMSnZ98MtSLK4OPhsgIQpqc5OrfV7vTwLKg78V8GNBTuHbT4e8UrxemG1yGzXzljSkcCh1EVRv3aqyeVkOKu+EWXqvn/nzN1ZymxPrCqfnmfMTgkPWry9/aPJos9SDvK96pmS0iujnM3hVH2pyQbkSCtcLk3KZjPnCt00t/Z9Vmgbn+ltypBNjqiX92KeuVoTN7LQIiafgMzJmnaAqfVJ7BnYSaZyMJt/RzsWRxEERvL+WSTiL0LDCwvMVqgKSNZ4Dz+1wEkU6QMkt6sTJ3xvOWe2TBa2wze/oFMG4qr1RglXaViTTwh8zdUZfShr1Gd0dVW5Fz+f4SP1pDY5spCx5pWNlmzP5PBAcK+lnSLFptsH27X4qFUyg+m3ueP43V0wI0sNhzVrzj98HK8UaIjan54Apj1Ixq8p6vrIZiD+yLTJ15U4S5aH0+P0OQ79sK1+r58U3/2Rl6ZhevtoTdHyoPM7Cbvc3TdoE2FirgrYQ6c2MU4wh/wXgnKQjN3rnBglAdG2O9Pny0tgldzEDsvweXfmLPQpFofQ7scqLrFWlRwSdslUSprzOG9uIozTLWtm03CqErbH1b5wbIJdEe40cA3lzHBgOkVm0Z1lyjdZXbUD5S93V5JWgW9u+duk52XRV+0W6lHa10diCYHcJiAZMHI97V8BbOSa0gsFyBqjQ7xpZY89oxno8Cdppn9nPA9WiyLS3caMDTjDcGyyMU4fg1S55QJq8OjVN6cAHvq7s8NenbXarIo9Ym71u2vV6JGiil4uot5YAic2LbSb5JGpFr4BGLuP71RlmdH7xhWVUZ9pMFGpL7dRNCQ4a1WCxmPze2D8VbID8U0whwXlEig7lmtnXRFS576bb8jyaGpKsbxF8NJ0swSbgEyT5c8lOmQHBzV41vjoRKsGKBjP1Sd4nIHWqkCCnIOVrIEmXpt2WgOlQPrTYEah/BjB2bz1a7J2SlShU5PTZxr0Ep0DhsIRwOJQ/Q+jnuR2EWmxAiz5caJqsCstYK+TF17tUctGQvcAsYJZvNXGsKMLPcgVGIqHPlyL5vLxnj8dvSOUWzBHrefL6He5wUpKD4Bfxglgp0avOGA4EJsu6M3Ag2OnB4Uwmn5sgEArnjuYoH+XfeuyhGQ==';const _IH='83ae336b6454d853efff7c489fd2cdaa23de11fb5d49406fcc3627c305681259';let _src;

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
