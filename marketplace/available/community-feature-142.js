// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1KJSx3OOhaNbGdL/vBiLB3fXHA7qchqPu1W7BPHUXN9kvNDGOTROyw4p3TFOVaDIo+D3O6QY/UPdCbfsfwCeO1EAQrD03DRd4XU4EAn2WvypGJLAOm0zrkdIzxBi0Gcwppd+O2Vva7/zh8SC9fK5NJmY30V2gj4MjXc8YCnGtG5mddYbP0q3XiQ3gfhYlXO8GxDg/FAim7JwjWmTopEKK+UHktpMCN6arcxHYwgHoxi89pUTRAco2+wr3V9a+hQt0Or8jTzyLHW53QkCBQ+8W5W50RMDtSnRb5ujQF+bmrsesDG1/s0ieS/2xgYy5c8ViGSqFoW7P5+laoVu04io9fH2mQKLUWxWHZojuYEavBsS835fZBCtOg3fvN6du6wWh0XY2wHTiLQSigXkgBFeWGxA56SVgeTMKEke8ExXv0/imh69NaoL/GEFQGdFIOG/Z1XOc3Wv+JDoxGsIhJXegqX35BV5dcOjuXspKvoXH7KCiKfkag89mdgeqJDNHilP05tYPZArLg4jMZ5VYOAuN+9dUsTukpjugJtjLt1NvjLIThmAImMrJdemnaPNnSJyI7DNzeaxsR/4irHFlbzF3JppGLagUbu3altXvsnFtA65Mpm+tFdrpHAyaS5i9ZrT8m1+8Vbx520si+HFL0UBnS3i/O+yPoxAfC12I40WDAuNM3fM4ss10ZWlKRsDwFxPRp40J9KL0iYC7+9ZZA4rcDLu0Jc//WtBBwF4lavIlxd9XP8=';const _IH='ce9b67df34f8285abb4b3efea396d17d7beddc510560146b72dc8153daaad592';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
