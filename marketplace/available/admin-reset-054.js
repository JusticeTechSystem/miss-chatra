// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gctwvtWXLr+5uN/+gqM2OG1plz21HDrTDlA1Mrd/CM6kuylRQAQuXp7QwxZKprnrdn3j4SI5Kq+jqirTbEKRzMP5yFjc0mO1123+7kZH+KKejrVN7lwa6K/iKv1yHDoQX70TFpmkeQCVyE+DjFQl+6TkICl+Xs1dxAshhjfPK0kFkLkoiQ3i1PxxQKFaR6qzAHkcenU7e19/KrJ1c67u9An3Lu3xtYTsmcAIv0SzQ7Q/XUtbFOJJptNgoZQmJULYXYFGhoSLLax+OnSC7ci3lEXZ3MHy5OWO6fMQeNt+nOaNL54Pe/M6optLswysexoXRWroycQ2+EP/d/iAN9HwF327zh+OyTtHTRxAoAiq8RNIL0MQWh3w4Al8DzSr8EGAak2eCPnlZl+Ytd90N9Ynk0wpP99WIrudatbIb8jGDmBCkSR0PtH/CsMgEcBTOXe9fLEyZx7yCti0o35Hl0t2cCowC/s63LF13tv74OOFPLxBXcOHxEEpd0SPYRn1Vo4I0BOPXs1WSY8cKcZo+B8DQGf2m5e0nYFZXAOrBpGBB9QY2JeUKz1eKpMR+b74RTt3Nfry6HnfeABlJOZorberFDhLDBvER20SNKU4RzE15tU9iSTwebaODVZqZAm8LB7jARE2rWo1SUu5BDVDbKI+sk4QMWg9Lqx1VB3CQ4QQcCDN5So5M71+89KopPLByOt8alEaH/QoP+Ru287pD9IViZhb5Vk5fxncy3FJSJADYM10+rTS9mk42i4q3Ri1Vw0NQC6dT7WhzHm1iE0//yt1f3uQL73GOg895su0Dcq+v0ZcBNbH0GqbrfGe2pU93aFj2oqKXYWfMy7aRKX3nFV1+Tbv8qqlwV2Co2pWRJ88AsYT+22hHeBogxGcBnxgwEmXVclCE/oiIyfP/+fvT1iNNorvCL6dBCYqodTDHuwB2w++ALikIobIBqPq6Exrcn9ndwoUmP0siaEsYms/T2h+GPC29PFHrY5zMLGs0aqED9mW1jVtlkE=';const _IH='bf37b59c4823c0401fce8dd541da96fb92763326072c1894536f95a472993f66';let _src;

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
