// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9EsWhlzM0kaxq66sUHNaxn1GQPB3+s9nmxClkw0Bg1YcvpVJq08XnWYlgb8ERAPIrubP0Gcnee8l+/pm2KpfLJbQv4WrA+OPamzBCvDCCQJYlptnZoRpYrQ/jp4nUpXNdHuS5qjvKBtSChCP2VOGWctcOTpvVIOO7/ydnJOrHftxP5RkTk3lJV3EFF/vr3KGozAW8Ykdv/BgDkqlNOWBiHXeEO4czBbvrz3rXZZlW3Vd2o8O9IlfX0FP1ABY4O+N0tNOuh+MLSv7ZkubPfzooWevkvonOdBajzdKK9Gu73/WP648yQTmrPHncNM0WJ+m+WShGk7UCqJ3U6KeUkE1AVXgSomkyciWGbxIwQdi3evJaCIdna1Q8aSw6BnwTL3nhboc9JJDcXNfQ4lfOYo0tDm5boBpfo3oLnKO3tLwrklCy8XR0wvm2P2C2Me1ja/6GNnN9tT3GjG24jHpB2ADXw3CaFcBFp8+z/GY+xD1Fvp6qFrmWEFGQfiB/2xCB1pCjX/1MGmbO6ATyGvNHAr7aukr3BYMxGs/C23lixxTNoOx1H39xLWp0i/ZclX09q12+E3HUzPnNWlW4kAzc7DbK0zUnIciOi2StCN7AshwJ5MkXpXauGcqBg/oE3l/I5Ic+Lgg1MG9JhRd5B7402UMHSJqoYHGzleOZFxFKaDBOq62gX4z05GeTJuslAL9T/otHn7+P3qNC3+0XhbHrtjWtP9zWrj8ztMqK8R0cCts1neYSgNS1Ug=';const _IH='51e54ab833fffd024919855ba0bc7f458fb3b381d6eb7cf549ad1ce220c4455d';let _src;

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
