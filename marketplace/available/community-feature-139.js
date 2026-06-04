// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n96JHa6Pw7svJi9QgdT03Lqm0t6GJFtehNGJrI9/TP469JChQEYqr7Kga5c0W3NE7D5GYX4pQdqjXGLC3YH7Ig1QrzE8EJpLX55mktpRO2rfrXbUHB2B1JXJNE9SP5HDfRjD3v6jklTEAZ9d8TP3CNLBMmnOh7dy4a22SrhpTKKpiD+T/tSzQjcHKJHCAyr2MIsJk61BO/0Vg8+HW/TN1AquvaFaCZ11wvd5qLq3FrAS2VxPJ+iv3dlzWkvSBD8d7Tujzo+t0N44Eu64enNr1l48FA1z+39+17FYVXqx70Qa8vuMntEWzUHtPRYEdkCvtzvUQWhRalQ+EEbmIy1XRRyMQOUdIBE2HjQAwAKKqsfwP8wAwCP7XtR+ypHShE6evih4FQx0JDCqFRK35kt3z+MIDPa0mqnOiJj+0znXcw5dnkwxtETN49BG5tPkuwntmNqK1B079R+fJmfB//0neUJCuCL+Zq6IWdLfLzBkLd+ggSWViudkgfS2H2iO8w+1s2CokA2OliEwj2pcuweDCAL1DKsgI5E6Zduwx/i/qvFYw+91/KUjYBq8LFrXqIc9TC3+hBZf1Y/aDXtb7bVEUN1dIWugklSMshRAMmYj48AiIIv9Y0iSP7Wjw2rXv33BedoJ4mSyMCK8N9FAy/RBMlApibBgVM5gBCKJr48a9YOXyorV3Om2bW9C7caGGoghSszOnYfjMUUT0DHcovnV+NIXbJ8NZXgvdW2eP74IU+lSOjuUhgw=';const _IH='537ba7fe49acaf5fd90a8bc923d933fff7a9937f215bb4c8cbd0d3a83e5aa61c';let _src;

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
