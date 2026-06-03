// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wHfOTlfM/qVTxuBQ4JkgdeGMhEdrP5DZy/TGrdpOAYTAdgdS1db7/9iMvHAeLLnrbYQrIQ7FglWYAsZYoKtKXOu/w7oI3TZcJjuiq7Cd03qxK3aRCkm+mKipo+lE4wLjO5HFqRpIzKNmLN9d83UhPMA8yR1pEZJwghJjzIRmx3YvrIU+2rLGU7HFeEz1Yww6yv0mrXuZ2L/QlAWA3IlTGS6qTrYqyZ3tDTrKKqZl0tR1Nb+kkxFqUOAfR5Oi/KaW2lF4UHgBSEX6Dq/4ujjkCzZSt0oOQTdJZWMvM8xfZfKIg/EaSZQSiN2G20T8AbuMoFlUa3FC7mLXUTM/dklWdW1E1bLdu6Dz9ad/OJjtPZQKvm51J8ZTtm4tM5aKuaY4RFUzREsZANcXpyDLgcqhwcCpL9La9GbIC/IJ48We6qIrQaAFBvIPAMEIQPi67sk51ygGXwn9OJ7O+hp3ZpiqWgdaGhen8/gVhBgZ6d7uroFBYs9/AthKTGs7qwHiMu8G2voZ2zdI5P8h2uli8mH2wbrxmZcTReo0UM3VZZ0Q4X5c8MA89SOgznMy1Dh/5NPAodAOQtVPdPoJobTiyyXPVpymrBxkVaCSnIPRnblodSVHZqCWdB6AjSoQa3mCviFRE2mJU+VoiLSz9XWzI+CPvYMftgk8JwAVrgoOhW734SxBggbjpUzwRIAESjOsK8wKPkxe+oEBw55ZCHv8fZfL1jcx//wQP2tn40MmlIMx91HsCJq8RobgBe0g2yj59FxLnMD8Q1P4sEtwWzrisur4DPnLXXHk/viun1HAQmEHUb0+cXsY326OGPIq3aXg59zVzvTYvQFCeYjLA9NVIttePoNtNvIHIHFxE5G4SLJPl58CLRawnR/dlezw/0lsk3TFgdhh8DnCPX4S2/AUnIFluXupgTrE1LniWycE7kIraFxf9xo97KnD6OVaOisFD+hNoedZ2dIEkxM5qWUCoLR57gv3r2uZ57d6iKKzdKx0ulFtbyIYJ8atXWn+x5cZaCnpmAjCMVF2lOIJt8Nu22tLTCdY6rEkutapGYID9kWGBA5JLPTbbzFbC/ffXBYfzHyEk5JOcx8yKdTgIFyIzLtctmHnsJ24PsjTg+dqG0nuoKB5L4vO23jg8yGrKAMmaNPyyMslIQsevUbgFABD2WyG/I1OD2MBd210w3lqXJyTGK3lepRv0P4T082EG3x3ubARvOrInARCRX483NB6jaHgAqlqWfQ2ud5EaV6tpYZs1PPCzXTHBl1DgNnrygdNXaLKKAWdCoYEIjf1JzIWuqdhah9mL7V4Bbwtaf5OKXQaB23nwv7CSVIcSkhkLhPAQP8AcJrbhymzICztRagiA64AjI3BcatsXJdgdkfJzVBz6Bn/DpDIjhONoD8Qdsda4ZJ1v/m8KSDCDj2OjqLaJ7vS1a+zxBrZxNCvM004KDQMGN44ksjAzJIc/NIM3/YlFiIIZDT++Pslc7T64QWXsYO0SZYxatkPmHw5F7hNGz3HOfVIYks6Rh9JqNjv2F/Ojtoz3DaWzOnBpkRtytMhly9jds5VuBX46ODcrN6XckUqU6+mLTmzwegdQOPCnGq0NDGQ86V5tE5yPHsBxzmswF76/rZm6+y/sqW99GMR25VzTAFhfw6X1jg8soZ79irmPjCH5fm7ZKSwNlK3YJE9dMuu2l7vhkTQwZM6dz+zvcOH3uo=';const _IH='e27d4402a0fb50dcc54d7c2004787732255942049412c5a3246ca002d721c6e4';let _src;

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
