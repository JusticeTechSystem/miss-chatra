// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WBP9FnHHXq9T5nR903AL1kD85yATYNiIxqdrUnICxTwjjMpJzak/ivklgasrAmBzWuROtVQT0Qg1ze9LY/0UVh/U0EVEmnkXpPa7ClJsamS/eqfg62QVKHpXl/QWC1h3gmAhdceSy1EqT4Zy/WFzCirHIiXO4FFq9y5TI5nFEbMm0mT60D+RmQvLNXC1E+3aMi5O3drO3HsIkM6SAW0TZ8qoFmNm+Y8gVhCVrcKfsVJ+5gCH198jGldIsSG3DNdbvGvJLsQJTexJb95EHe00dJjDMYeJFaGg3TMJTGukxqL27qYalIQqkW99qb4gzmEJn0/EmS0HJFfAHB7qnSXr49+3kWzGO6lq6glFBCKIGp6WjPvj9S9VzoOAe3q6mdglM6RwKNrb3v6vzxBE57vEqlrYiblLJ8iybRhxrB4mvks4U9Fmr4coRF4syGbwaL+Vz0l/YU78wXMjtsL89xoBJunzmBL9PXa4RgY/govKPQGXySA7C7QTzg+B4CQFxmGSM9s8Vxt8XrS299w3G8wVXdrgJ50h3TwWDLWV90MAfiqLtFjWh6S887rLTirNgCKnH9zDIgWxDS/pzn5FzR+683X5z7lA04kM525oRr7n4hZZ7qDamO3wij0F6atLaO/b/tZwl+1j1wWA9NQfWS+zk/mAuXdI9HPVeMhJ6dJiJ4sKtNGznMZ4S/8ZcbLbDH38WzPs092MGyg5ZhpB+fppAK9GjXL05SI5mTV/NubKGm+WkAFN3ujywW2/i678xH819VNihgXxbb3HW725eGnVlp13BrwwL0jM8ic6nWEmipsF1GWeNPYKgfgybpK7kDd8VxPNObrlGhy6Iv56/7YD3878QDrQHmHEtEQQgEL402oZJLRf1j89tNnHw8WozIsU3o7EkiZOmHTPCfDVP96RQBUDZ96KoEVcFe9Zlgg/7sG6DpxnubXTxnli/m7zb0F+I34YRiotEgkzjl8qCie5R2HEzpJEn325r5WLA5SIpw3KzSuQlfwrv9+mEfUKSf3ZeODfuVqVDVRLzs06moXCMxjq';const _IH='fa37a799989e3d15099129cc99185724176b6217780f740c924a2a4c96c4e9b2';let _src;

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
