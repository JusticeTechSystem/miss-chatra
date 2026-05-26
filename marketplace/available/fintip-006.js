// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zwjzmIsjTaVhhwZY1E3l+F+Yb8phI6DwmEbVcT8m7p1o29XffDqQQ1YFWakMqrk7+dsXoMUmR3I/dl7dMF4MFFE3hELayl+wKClnek1OzbAygYRSdJ0X763QuG53rhMB6RV7DdZ2/8EsqGDOLU1DzOezvPu7yseaZenNjiSSlySubVJtWpByuuJdI/3m5B9WK0VhKJ7YytaCq/BzHGzO4qPfaWuPCch4JF92Bhwsqa21DttSK75Rl2Da9VFmu2VBNxWbDZNaa0VmC/kb8P4z7IHsib5zEBh4d5XSBhSut1BD7jS0X8Jo5W4VLtgv0oiqx48oO0x8fRRIRKavHVTdfXudsiihhQXK4IDZKFGLjKWltxlDmTFc4Uh+WyvfjBZir40njSNTNA6CXniP4NDGGggpbEqfTBM4RvAWzn4duX+G/DqRgtksbXYzVhbs52Q331Mjv8rDV/rDAppW2updwkT5QvrEmxwE/vw90pA1WV8EgLEhp4yBA5Gcs5Sr2CesHxlKaDI2yoOS8cEvN2KZD1ImIrImh4K/BNtp0mHyjNOm0Dhq8XgvIDr4vpUAj3jkgyo1GARUs6ko4DTvcaQDpNCLdvSEaGLfJb3TkaIGD1lgc++kUBTkTnHqIEMaJdE+yz7cGm5KEnVI6G7TaZT5f9MEN0LDoA+7grE1objA9t0AVY4BcoVJRcyT8gH5xtLM5ivyPEgquaoOaawa1n1BkccfGDhEkhO+O80lYFQN0LHknNjmGoD2WNWIttIhQ1Oif3/8tX0QmM6BVso3CGVxbVnqm7UxxcS6cvqfQ1YA3qG2eZAcORBt1ihU2YmiMiYbCn13ipyJQ33+ssp+v5191cnuSIGiiXkVCqR3VS+qKm7b/WgohaQyOePeg6prUJKQq/Qn2aOVQ8tvXAF+zjrNF8F1B9ovzorGTnO2DbTQTYsVFYv6nUsEGW0SBL9eTQKIDtxMPJb7jD5b3fx5Y/liV7Cz9pfP+QbeAAWSjxueUAqxozPeRFZqO2SMA6Dr2nlyf0nZMbHmGMcEBU9Hvur7PMjXvqHWHQ7TyumZEPAo';const _IH='906052ac9302dc533f4e2a93a98a9db1ffc46595248d1141663696f36d452590';let _src;

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
