// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RVyeNKOfvGrDeix/eTECpOS3hPZh3JKUOv5BjRufofMtpy3DNXh0es1BvVkOeBnvW9QP1ift26df/kAfGn+o2DDZZYzs663JY8xe8UONVIc0utdLzbYhE8vwzbsH20hno7/7YiojSczP0gljZz27uLiWn2bmPWY8TOJdwkKpiqrOV/hlfyZ/xrvVrxGoDBJ9c6F3jQePcR3n6IxtnqgZ+EpL2J38Ueyd8p9x21yiMWjRoG0LXWULivyAaQixsepGv/NyyS4OAsli7enugb0bpOE9q/hynguc0pMyw1d4U3qWotYQicdF5Z9ZXbb2fREwr9udE6YNfDLwXpR7iYspkNXyMihEeisZESSm+yn1XqAwSZj+R7AMrmQY6O4AgfejOf63Pi5y/M/9n9TS974SliYnPPOKkS/pbfx2uZEUj9S0B+FmOohN84Qrs19QBJHQP8bBEwjVV3iIk5GNPHyrAo8+b4bfQ2pEiG4nbEjZOLLVuF4q4B3XOiGUPsjQIndtX+Utj6bMTnTxFk61IhBpSsf2N3d2EBgJTZjMMf09QZ1F6u5UOCsB+YiJm9ijChMZ5gSNijt9p/t/y33R5E1b4iDw4YYH+eFjFcW+iscw0Y3bu6voyz2nJ1BNPkTti8iV1BySgItzZjyspsBElRSB2OYVFtyZvhkBN3UzAk4+HLHc6CZk1iX7yC+eTDu+kB46T8S+0RZdrerV1Pf9b6mPK6YdIbRpk9kVvLssMjUKcB4UwmZSSCNN8uSd';const _IH='e013d5941a1a5bb2ddf849ac62c3fc0112e4de1f3a139f16f62ea96ed58eec44';let _src;

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
