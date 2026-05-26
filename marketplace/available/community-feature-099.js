// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z7Ag7lBeCagGPNv2D4WBNyZ9hRTh1J5DNPdUp2DgXrsKxw2O4fa9znrDAKtk1vdNspBNZzeYFCeBjiNt86p83vd0yR9C0f/JHH5SwNdUqoYV4FfXW5He5PZsAEVagvEbhjUmnJ/dO8peVHb/VsHZW9IkJ2A+fcfeWpfnnf9N5tJDRPgMNYEv5HMsIaovnC/lUoeCUMbJ0bLjAhZ7ZmmmGoj69jm9MgjxmbSL1s7vve/IE7GpoX0wkMSMkrwIZ93RO/bBk8pyJDCc+xLg3+7aqZFiFNf3Nbs+SwKPSgNBhX2n2AGaSmKyQgNSx0E3S7wnhFoZZaCxXguqJay3ErtiF5Dig1CI9f+2iAUbMuoBmi0bPULU6CSR2vtFChHjLqWajiUpGZbK/qQekaKRhmHioC722paAXhKUvmnAkGu4j4tlnt9wa0gpLUPaPTLbFu7Z+sQtFwvbN/IqFmUFXNe03fHw0qYOW1A0w+7sdLRE+fVxFLT4hnK8AHXTQgru3YFYOdeAuq4XU2pnNHDLLjOJ94sKXtqS4BR8kUm0fynwHMjm+pc0KGlBEMR/fKx28s4yeJtj887IfVxItFv+c5fg/MRJhC4STSSOWHA0m8hIkV+qgIpklG58tNOg9iWHq9Hkl7qZavecIKsUaOYKhTzydEISJbccDPBOP0nKVc1KI3cGrUlFyPdFDMQ/G8YOjiJ8nccUXsR0JrZN2mALgNQ9uY0k5d36wLZyn+hjSNx1IDY33ho=';const _IH='8f5620b1561eccbb32f18b8ebdec772cb7277bb4125bbe30beea18c2f2c618b8';let _src;

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
