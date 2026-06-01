// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6Ozo0S9OqSWRuey2npoBecCbhK3CBTM97e1YDxbcfBZIeXgchWT6MpyL64p0OGHE5AKZREZQmlMIP7z6+rMo/AgDO1zZRTp6xmHFFj41Y2L/CRVIfAFayBcdGDm3GJuTNwWKGE+vseVt62orcdrwQNO2BQiRks+a2v7aN+p5TBqb9Wizo7GdEkD+PG9nR8Q4gZ6QDG2agGwLu6OPQAbimjMEWLbr/iAAVXlS5QHt8o4uRMFemfb4UYj4FMdVd7FcUQQn10SA9YjrID6ijdTOTVroDc1ESy/HSdeaUWfD2sIGzzGD9QesQZ/gYLsAO0cPS9uX277vUJdgiobUmHl9Nq2LnSwGCwV+NqJ1sChoaiNTEB0Rrh5oXd19LzVVk3lOHaQk9ASL/QdEfU0EGZtEvTxMiiJbhNO4u78hEY5yOkTwdKiIsgX6fgurNJ8m0MXVLSH37SeJccNmx3hfD0tuKfMIE263fafenKgLqrz6wjerckvS2hLVdY43gv8kZ6HJB000+gVgJxatPBS0fKWYzY5+BuclhxanFga8LDx1wFTUrAqCvIcP/U9NgCcTGf6Echzv4jna5K1YzOwnWGl1xCelegqUJ6I2PVA4Biuaw5y2WQbnImiHNtZv3jJ1P+VLa9YaKAm7sDHdM6dPsrrx9Sl2lZBGCBaIMZM0tzorqlmi4dHxJV2wBj5lVhQ/3vhesgNieaip4014iknbIZVmr3hmZ7dBMWt84LQMl31yN5t+iaTX5U8seRAk/2NODlRX7Z2AwKFbRwzCY/u9HpC5YJBoc1gqf9RlzoNzCg81k9R8cI1VGglOpW1cAv/lPYPpT5RkeoH4WaHe7Cwf0BNQuduH9VA4UBoal0PKCFIHh53TkMhGVK/WH/GP0skGKzd8k2AIe0uM2C1sljunJNe2tejLVTJGmdVunSVsvRROXOUWJ7GHjqT6vqR7pVl3c3GyvEeRaZtJKy8y3VWZerkSqH3jKmah2B5eE4MgucPiGhf9SbgWvy1XNlbjWSWHv1A9EiIO+2Q3UDZwmfeORchFidSV8taAOnzTkZIZnNrL/pwJHzlUbxYv9gSCZtYzFcO4n/x/HFUrdanaN1W5j2mZDeDW78oS/ogW5t+IgJ+++uCwPKGJGxj5c9EDLA5to7wzrSzgS7LEAHesTRwozXLeDamyxrMdvSsxlteI0Q73VILws8jQs1KGBMg0R0hRiQqL5vJ74gahWiV/yf0jZbQeb+DVFaOGBJjEDVRg7ahbfrvstQoDrRvSopKiJND7hiSBHEUw0KwxurUjyWTkLaOgCT1v8e0SMfjQZtWzp/84zLreWX8SHq+6V/oce+PZbe8FtsOVMNZ+1MM7hjbkO5Iv/VvOqYn+vTMWjE=';const _IH='792a7aeb25d24c1fd6d648545c80818cd76094162ae384d50dda5ab992f7089d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
