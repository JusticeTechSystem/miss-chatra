// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K/49Lkya19GGCAPfxJNyQAv83nM4X7naPvQktIx3W4BtxtopmZfB0w0FLTYzH88nEXUPI+CabuD22psSn4mU0jNBalxGZiGVcz7KpnCXU0Ude73Z2hqQZ0Is+qXpHsXlQKkH3YoXcfhkh1jNFyWHF1WW0QmhRzcpX+4HUk1SpSzTmEDM3X08GrzN33AUBcZm2sSmPkrLeyTqueXZ+W3kdMuQMEvgRKgZ2TjefUHl9Utd51p/r2jeNyO1iJhS/zymgikccPUD0zfqRhEwtLrvwuYnNXrg20ZaedudhNGcUM9Sd58cH4VRF2SbFI4iB4F64GRGWAtYan38c9Es936+zAyS386WbHMIW4hRG4qAurObvxs8kN7HmCTiPmYS/0cpB0yssgtDg0ESTiCLtvuye11SjPQZZehbKgAJb4ROK9hZ5oLnBu06xuqUlMiQjo8Zw9JhVug/ZnE7HhbvSFSofEUNqZ9LHBD7ANYqOZLIcwn3+qDqo5RUV3VEvjDxECoGtQaYCw//Hc9kCf1Eze/wPzfiijQGwHX6tUWSawyuIGlLLfSO+cdl3lXj0IVoU0v6eDcxNSrgBPGlQJYs6jEuLXOJntOt/SuG5kH15JFRaMfUTKke1mwtsRddHk6++x0oAz6hXhC3mlwyn7Jpd+/LlFD+QFtuG77ZE/Ybz68V+rQF8TptY377aGb7z76fMBoGcRNNHPZ2lLJTgEduKuyL5huzO7oJKDbyrVLAB5k/KM4TGirSQ4bVEJOe';const _IH='176206e5c9d116a070fea54bdb7328be010aefa55bd48711b165243b62952b7e';let _src;

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
