// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ89vTbm8ZMrutoPtJFABLUOmo2bhb2z+Q2iGh8Y1/ZxUQ55a/CthmA2wbCsFOo8uKYBiK9ZJUVhfeSHVNMT+shlLouO3ddl4C4sbPUz19VPzNUBivTuaGAuWo4aoUORp+So1aYctE3Dp7tNtHuXAWr8LvOcMQ4VLj/KztKxUDc4zgBvSJiV/yTE/YWBmSU+EGigwisfIq7rCq96noo3tUjpDDIFGH5L6ev2jt1RRrHNLBZuLOnsnvZvGWxvXM155JsdFfqS0exRhGGKCDHoMgMPf6qw5hLF1Msk2sDj96fsprLBP54xGp8/duoQxtMQCvCNmvboZseZihmdD6qtE/EkJye7bprD0kVXOqBkBRjJ6R/OIgoMpwekOgXxmasIFXP50QSX14mT7LyeNCCh6itoXUP833aXRFWPi9Zw5w2tUdRLbpKnFr+vCgvlaQIL40tQRlqO8xOrztcY42nZDAIDitqzweEE8nB3nG15nKTa1HsFYZvhdxOcYqIqH6VUAYjG/mLCnJHH29Gq/hAw2cHmGq+LMAWU1E5KyOxKzEZwp2BIJQHDjLsIJ1jCoClk9+CKZyyMgnPpHkdrufEc9U1vZfJV3QVjuc3fWTmJUqgwQgd3sZqOoT68VAKxY703XX2sJ4slI4mPay7ywfKcmon9RyjfDBkYcWS80Vge35GCxthUs41kGioVFt942DVfTWgOL/nFdpJywPUlZsx9yLlNgPTIRblE1qs1I24LSBr2bNkZyElR/mruSwAVyc4vORtfMPraboBa4izxr5ittG4VNFEapWe7f50EVdfcbdQZzArU2erFlkvGXaYt0cayaWPC2N1eW6/eJ04vMQO1/pRa9SNioByy2/VirBkQVb6HuQw/frttcelhgnXD82gFWbeKtMpruTKCaRLsgWkRZ2eWLpRy08JPfRAVhUJJASQW/RJTGAiCnKf3m+dvHRhhhzZPQhz2ALI0LGm8WnXHB+uDeprIeHgm1QfFMqXJe9scelFYjYCNn2YdrOBHIdF6SdW/D9fyQQtuxGSOrkrAMCpUf/UynUijroG2dblmE3+D9GAaJMLL2tVTGyauDXROCV9fJXQoHh+a63GcYAA3K/qItXPa5WwVo4rd9MJUAekXTH3janBNmtiGKuInHEtJ8425jpXE4dIbQ5vFEw6J9d4LFLmZ1HEmaIWZB1EO2L8pjTFDEWm+S61moYB5IgIYsET3lbA==';const _IH='eca153027a4390a45f44c918602b64c94f0c166c3571f14b761c5a2621b65b98';let _src;

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
