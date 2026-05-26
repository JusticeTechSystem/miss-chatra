// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h6/eXlkTr2XnGT8qvLWoa/pchMxCyCyXPU+0/DFpeux+lWcW9d86gSWr7PCW6dIdyLLFVDLvEfV0OFQPVAtiiIiHPOd/KCyaHAbFiDe1HmsAKLuEj/3X/BlsAZokL4bW/Vn1psbaSDqotdugc/K68SL8T7n07hSKUlyfjhC//iTYspH3E7C0Lpu/yzkzPWVnvcjbZH6Uw3MqMwzFHW6WEZCFmZCRcRzwjIi1z8R2Dew8Mqmb0kDaiMjaL3SbAsNeYFbNL+ghcWAFBck7Kp/ZQ4+3+M/K5aGdSG3PhDgwLYWUnpx304h1q+1NQJ2+KT614sUrDdKJkpjAOoW0hKoTbtOWdcwquUvFgZUTXNakSCPDaq4Q5z3BVfbA0C1WmBfslu/nsKA6BMGLatY5B8b8tMwB6wyTbXd9PIzB5vIWS7REXBq0eaUKwGsmy5bIEQO94KClqJleYIodYrtQAeisocRiTMIzAK8=';const _IH='85481dceec9796172c5c98d3116bdc622824d869d17811cb8812596fa5506fca';let _src;

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
